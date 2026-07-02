// app/api/library/route.ts
// GET /api/library — returns the authenticated parent's story list.

import { NextRequest, NextResponse } from 'next/server'
import { requireUser, adminClient, BUCKETS } from '@/lib/supabase'
import { getLevel, getLevelCount }             from '@/content'
import { canRequestStory, nextStoryAvailableAt } from '@/lib/cadence'

export async function GET(req: NextRequest) {
  const gate = await requireUser()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { user, supabase } = gate

  // All of the parent's children (one subscription covers the family).
  const { data: profiles } = await supabase
    .from('child_profiles')
    .select('id, name, subject_slug, current_level, skin_slug, voice_id')
    .eq('account_id', user.id)
    .order('created_at', { ascending: true })

  if (!profiles || profiles.length === 0) return NextResponse.json({ children: [] })

  // Delivered stories for ALL children in one query (ordered newest-first, so
  // per-profile groups keep the same newest-first order the UI expects).
  const { data: instances } = await supabase
    .from('story_instances')
    .select('id, profile_id, level_ordinal, subject_slug, skin_slug, voice_id, audio_key, script_text, delivered_at')
    .in('profile_id', profiles.map(p => p.id))
    .order('delivered_at', { ascending: false })

  const instancesByProfile = new Map<string, NonNullable<typeof instances>>()
  for (const inst of instances ?? []) {
    const arr = instancesByProfile.get(inst.profile_id) ?? []
    arr.push(inst)
    instancesByProfile.set(inst.profile_id, arr)
  }

  // One batch signed-URL call for every audio file instead of one per story.
  const audioKeys = [...new Set((instances ?? []).map(i => i.audio_key).filter(Boolean))] as string[]
  const signedUrlByKey = new Map<string, string>()
  if (audioKeys.length > 0) {
    const { data: signed } = await adminClient.storage
      .from(BUCKETS.AUDIO)
      .createSignedUrls(audioKeys, 60 * 60 * 4)
    for (const s of signed ?? []) {
      if (s.path && s.signedUrl) signedUrlByKey.set(s.path, s.signedUrl)
    }
  }

  const children = profiles.map(profile => {
    const profileInstances = instancesByProfile.get(profile.id) ?? []

    const stories = profileInstances.map(inst => {
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
        audioUrl:     inst.audio_key ? (signedUrlByKey.get(inst.audio_key) ?? null) : null,
      }
    })

    const totalLevels = getLevelCount(profile.subject_slug)
    const nextLevel   = profile.current_level <= totalLevels ? profile.current_level : null

    // Cadence: most recent delivery drives when the next story unlocks.
    const lastDeliveredAt = profileInstances[0]?.delivered_at ?? null
    const nextAvailableAt = nextStoryAvailableAt(lastDeliveredAt)?.toISOString() ?? null
    const canRequestNext  = canRequestStory(lastDeliveredAt)

    return {
      id:            profile.id,
      name:          profile.name,
      currentLevel:  profile.current_level,
      totalLevels,
      subjectSlug:   profile.subject_slug,
      nextLevel,
      nextAvailableAt,
      canRequestNext,
      stories,
    }
  })

  return NextResponse.json({ children })
}
