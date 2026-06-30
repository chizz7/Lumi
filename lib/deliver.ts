// lib/deliver.ts
// Shared story-delivery pipeline used by both the parent-triggered route
// (/api/story/next) and the automatic cron (/api/cron/deliver).
// Idempotent per (profile, level): re-running never double-delivers.

import { adminClient }                          from '@/lib/supabase'
import { assembleStory, getLevelCount }         from '@/content'
import { getOrRenderAudio, audioCacheKey, type VoiceId } from '@/lib/tts'
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
  | { delivered: false; reason: 'completed' | 'already_delivered' | 'not_approved' }

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

  const ageBand = profile.age_band as AgeBand | undefined
  const { audioText, script, level, ageTag } = assembleStory(
    profile.subject_slug, levelOrdinal, profile.skin_slug, profile.name, ageBand,
  )

  const cacheKey = audioCacheKey(profile.subject_slug, levelOrdinal, profile.skin_slug, profile.voice_id, 'en', false, ageTag, profile.name)
  let audioUrl = ''
  try {
    audioUrl = await getOrRenderAudio(audioText, profile.voice_id as VoiceId, cacheKey)
  } catch (err) {
    console.error('[deliver] TTS failed (non-fatal):', err)
  }

  try {
    await sendStoryEmail({ to: email, childName: profile.name, levelTitle: level.title, audioUrl, script })
  } catch (err) {
    console.error('[deliver] email failed (non-fatal):', err)
  }

  await adminClient.from('story_instances').insert({
    profile_id:    profile.id,
    subject_slug:  profile.subject_slug,
    level_ordinal: levelOrdinal,
    skin_slug:     profile.skin_slug,
    voice_id:      profile.voice_id,
    audio_key:     cacheKey,
    script_text:   script,
  })

  await adminClient.from('child_profiles')
    .update({ current_level: levelOrdinal + 1 })
    .eq('id', profile.id)

  track('story_delivered', { level: levelOrdinal, subject: profile.subject_slug }, accountId)
  return { delivered: true, levelTitle: level.title, audioUrl }
}
