// app/api/story/next/route.ts
// POST /api/story/next — parent-triggered delivery of the next level.
// Delivery itself lives in lib/deliver.ts (shared with the cron); this route
// only handles auth, the plan check, and the cadence gate.

import { NextRequest, NextResponse } from 'next/server'
import { serverClient }              from '@/lib/supabase'
import { deliverNextStory }          from '@/lib/deliver'
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

  // Cadence gate: one story every STORY_INTERVAL_DAYS.
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

  const result = await deliverNextStory(profile, account.email, user.id)
  if (!result.delivered) {
    if (result.reason === 'completed') {
      return NextResponse.json({ error: 'You\'ve completed all available levels! More coming soon.' }, { status: 400 })
    }
    // already_delivered — treat as success so the UI just refreshes.
    return NextResponse.json({ ok: true, alreadyDelivered: true })
  }

  return NextResponse.json({ ok: true, levelTitle: result.levelTitle, audioUrl: result.audioUrl })
}
