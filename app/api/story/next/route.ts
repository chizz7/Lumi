// app/api/story/next/route.ts
// POST /api/story/next — assemble and deliver the next level for this profile.
// Same logic as the webhook handler, just triggered by the parent, not Stripe.

import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient, BUCKETS } from '@/lib/supabase'
import { assembleStory, getLevelCount }        from '@/content'
import { getOrRenderAudio, audioCacheKey, type VoiceId } from '@/lib/tts'
import { sendStoryEmail }                      from '@/lib/email'
import { canRequestStory, nextStoryAvailableAt, STORY_INTERVAL_DAYS } from '@/lib/cadence'

export async function POST(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Check plan
  const { data: account } = await supabase
    .from('accounts')
    .select('plan, email')
    .eq('id', user.id)
    .single()

  if (account?.plan !== 'club') {
    return NextResponse.json({ error: `Upgrade to Story Club to unlock a new story every ${STORY_INTERVAL_DAYS} days.`, upgrade: true }, { status: 403 })
  }

  // Load profile
  const { data: profile } = await supabase
    .from('child_profiles')
    .select('id, name, subject_slug, skin_slug, voice_id, current_level')
    .eq('account_id', user.id)
    .single()

  if (!profile) return NextResponse.json({ error: 'No profile found' }, { status: 400 })

  // Cadence gate: one story every STORY_INTERVAL_DAYS. Also prevents duplicate
  // deliveries from rapid double-taps (there's no queue/idempotency otherwise).
  const { data: lastStory } = await supabase
    .from('story_instances')
    .select('delivered_at')
    .eq('profile_id', profile.id)
    .order('delivered_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (!canRequestStory(lastStory?.delivered_at)) {
    const nextAt = nextStoryAvailableAt(lastStory?.delivered_at)
    return NextResponse.json({
      error: `Your next story unlocks on ${nextAt?.toLocaleDateString()}. One new story arrives every ${STORY_INTERVAL_DAYS} days.`,
      nextAvailableAt: nextAt?.toISOString() ?? null,
      throttled: true,
    }, { status: 429 })
  }

  const totalLevels = getLevelCount(profile.subject_slug)
  if (profile.current_level > totalLevels) {
    return NextResponse.json({ error: 'You\'ve completed all available levels! More coming soon.' }, { status: 400 })
  }

  const levelOrdinal = profile.current_level

  // Assemble
  const { audioText, script, level } = assembleStory(
    profile.subject_slug, levelOrdinal, profile.skin_slug, profile.name
  )

  // Render audio
  const cacheKey = audioCacheKey(profile.subject_slug, levelOrdinal, profile.skin_slug, profile.voice_id)
  let audioUrl = ''
  try {
    audioUrl = await getOrRenderAudio(audioText, profile.voice_id as VoiceId, cacheKey)
  } catch (err) {
    console.error('[story/next] TTS failed:', err)
  }

  // Email
  try {
    await sendStoryEmail({ to: account.email, childName: profile.name, levelTitle: level.title, audioUrl, script })
  } catch (err) {
    console.error('[story/next] email failed:', err)
  }

  // Write instance
  await adminClient.from('story_instances').insert({
    profile_id: profile.id, subject_slug: profile.subject_slug,
    level_ordinal: levelOrdinal, skin_slug: profile.skin_slug,
    voice_id: profile.voice_id, audio_key: cacheKey, script_text: script,
  })

  // Advance level
  await adminClient.from('child_profiles')
    .update({ current_level: levelOrdinal + 1 })
    .eq('id', profile.id)

  return NextResponse.json({ ok: true, levelTitle: level.title, audioUrl })
}
