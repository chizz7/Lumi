// lib/deliver.ts
// Shared story-delivery pipeline used by both the parent-triggered route
// (/api/story/next) and the automatic cron (/api/cron/deliver).
// Idempotent per (profile, level): re-running never double-delivers.

import { adminClient }                          from '@/lib/supabase'
import { assembleStory, getLevelCount }         from '@/content'
import { getOrRenderAudio, audioCacheKey }      from '@/lib/tts'
import { sendStoryEmail }                       from '@/lib/email'
import { track }                                from '@/lib/analytics'
import type { AgeBand }                         from '@/content/types'

export interface DeliverableProfile {
  id:            string
  name:          string
  subject_slug:  string
  skin_slug:     string
  voice_id:      string
  current_level: number
  age_band?:     string
}

export type DeliverResult =
  | { delivered: true;  levelTitle: string; audioUrl: string }
  | { delivered: false; reason: 'completed' | 'already_delivered' | 'not_approved' | 'assembly_failed' }

// Assemble → render audio (cache-first) → email → record → advance level.
// `accountId` is used only for analytics attribution.
export async function deliverNextStory(
  profile: DeliverableProfile,
  email: string,
  accountId?: string,
): Promise<DeliverResult> {
  const totalLevels = getLevelCount(profile.subject_slug)
  if (profile.current_level > totalLevels) {
    return { delivered: false, reason: 'completed' }
  }

  const levelOrdinal = profile.current_level

  // Content review gate (opt-in): only deliver levels marked 'approved' in the
  // review console. Off by default so existing behaviour is unchanged.
  if (process.env.ENFORCE_CONTENT_APPROVAL === 'true') {
    const { data: approval } = await adminClient
      .from('content_approvals')
      .select('status')
      .eq('subject_slug', profile.subject_slug)
      .eq('level_ordinal', levelOrdinal)
      .maybeSingle()
    if (approval?.status !== 'approved') {
      console.warn(`[deliver] blocked: ${profile.subject_slug} L${levelOrdinal} not approved`)
      return { delivered: false, reason: 'not_approved' }
    }
  }

  // Idempotency: never deliver the same level twice (guards against a manual
  // request and the cron racing, since there's no queue).
  const { data: dup } = await adminClient
    .from('story_instances')
    .select('id')
    .eq('profile_id', profile.id)
    .eq('level_ordinal', levelOrdinal)
    .maybeSingle()
  if (dup) return { delivered: false, reason: 'already_delivered' }

  // Assembly errors (unknown slug in older rows, content regression) must not
  // THROW out of here: in the Stripe webhook a throw becomes a 5xx and Stripe
  // retries a paid signup that can never complete. Fail as a result instead.
  const ageBand = profile.age_band as AgeBand | undefined
  let audioText: string, script: string, level: ReturnType<typeof assembleStory>['level'], ageTag: string
  try {
    ;({ audioText, script, level, ageTag } = assembleStory(
      profile.subject_slug, levelOrdinal, profile.skin_slug, profile.name, ageBand,
    ))
  } catch (err) {
    console.error(`[deliver] assembly failed for profile ${profile.id} (${profile.subject_slug} L${levelOrdinal}):`, err)
    return { delivered: false, reason: 'assembly_failed' }
  }

  const cacheKey = audioCacheKey(profile.subject_slug, levelOrdinal, profile.skin_slug, profile.voice_id, 'en', false, ageTag, profile.name)
  let audioUrl = ''
  try {
    audioUrl = await getOrRenderAudio(audioText, profile.voice_id, cacheKey)
  } catch (err) {
    console.error('[deliver] TTS failed (non-fatal):', err)
  }

  try {
    await sendStoryEmail({ to: email, childName: profile.name, levelTitle: level.title, audioUrl, script })
  } catch (err) {
    console.error('[deliver] email failed (non-fatal):', err)
  }

  const { error: insErr } = await adminClient.from('story_instances').insert({
    profile_id:    profile.id,
    subject_slug:  profile.subject_slug,
    level_ordinal: levelOrdinal,
    skin_slug:     profile.skin_slug,
    voice_id:      profile.voice_id,
    audio_key:     cacheKey,
    script_text:   script,
  })
  if (insErr) {
    // 23505 = unique violation on (profile_id, level_ordinal): a concurrent
    // deliverer won the race after our read-check. It records + bumps; we stop.
    if (insErr.code === '23505') return { delivered: false, reason: 'already_delivered' }
    // Any other insert failure: the email already went out, so log loudly but
    // still bump the level below — re-running would re-email the same story.
    console.error('[deliver] story_instances insert failed:', insErr.message)
  }

  await adminClient.from('child_profiles')
    .update({ current_level: levelOrdinal + 1 })
    .eq('id', profile.id)

  track('story_delivered', { level: levelOrdinal, subject: profile.subject_slug }, accountId)
  return { delivered: true, levelTitle: level.title, audioUrl }
}
