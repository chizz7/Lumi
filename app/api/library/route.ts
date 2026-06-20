// app/api/library/route.ts
// GET /api/library — returns the authenticated parent's story list.

import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient, BUCKETS } from '@/lib/supabase'
import { getLevel, getLevelCount }             from '@/content'
import { canRequestStory, nextStoryAvailableAt } from '@/lib/cadence'

export async function GET(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Get the child profile
  const { data: profile } = await supabase
    .from('child_profiles')
    .select('id, name, subject_slug, current_level, skin_slug, voice_id')
    .eq('account_id', user.id)
    .single()

  if (!profile) return NextResponse.json({ stories: [], profile: null })

  // Get delivered stories
  const { data: instances } = await supabase
    .from('story_instances')
    .select('id, level_ordinal, subject_slug, skin_slug, voice_id, audio_key, script_text, delivered_at')
    .eq('profile_id', profile.id)
    .order('delivered_at', { ascending: false })

  // Sign fresh audio URLs (4h TTL)
  const stories = await Promise.all((instances ?? []).map(async inst => {
    let audioUrl: string | null = null
    if (inst.audio_key) {
      const { data } = await adminClient.storage
        .from(BUCKETS.AUDIO)
        .createSignedUrl(inst.audio_key, 60 * 60 * 4)
      audioUrl = data?.signedUrl ?? null
    }
    const level = (() => {
      try { return getLevel(inst.subject_slug, inst.level_ordinal) } catch { return null }
    })()
    return {
      id:           inst.id,
      levelOrdinal: inst.level_ordinal,
      levelTitle:   level?.title ?? `Level ${inst.level_ordinal}`,
      concept:      level?.concept ?? '',
      skinSlug:     inst.skin_slug,
      voiceId:      inst.voice_id,
      deliveredAt:  inst.delivered_at,
      script:       inst.script_text ?? '',
      audioUrl,
    }
  }))

  const totalLevels = getLevelCount(profile.subject_slug)
  const nextLevel   = profile.current_level <= totalLevels ? profile.current_level : null

  // Cadence: most recent delivery drives when the next story unlocks.
  const lastDeliveredAt = instances?.[0]?.delivered_at ?? null
  const nextAvailableAt = nextStoryAvailableAt(lastDeliveredAt)?.toISOString() ?? null
  const canRequestNext  = canRequestStory(lastDeliveredAt)

  return NextResponse.json({
    profile: {
      name:          profile.name,
      currentLevel:  profile.current_level,
      totalLevels,
      subjectSlug:   profile.subject_slug,
    },
    nextLevel,
    nextAvailableAt,
    canRequestNext,
    stories,
  })
}
