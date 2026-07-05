// app/api/story/next/route.ts
// POST /api/story/next — parent-triggered delivery of the next level.
// Delivery itself lives in lib/deliver.ts (shared with the cron); this route
// only handles auth, the plan check, and the cadence gate.

import { NextRequest, NextResponse } from 'next/server'
import { requireUser }               from '@/lib/supabase'
import { deliverNextStory }          from '@/lib/deliver'
import { canRequestStory, nextStoryAvailableAt, STORY_INTERVAL_DAYS } from '@/lib/cadence'

export async function POST(req: NextRequest) {
  const gate = await requireUser()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { user, supabase } = gate

  // Check plan
  const { data: account } = await supabase
    .from('accounts')
    .select('plan, email')
    .eq('id', user.id)
    .single()

  if (account?.plan !== 'club') {
    return NextResponse.json({ error: `Upgrade to Story Club to unlock a new story every ${STORY_INTERVAL_DAYS} days.`, upgrade: true }, { status: 403 })
  }

  // Which child? Body may name one; otherwise default to the oldest profile.
  let childId: string | undefined
  try { childId = (await req.json())?.childId } catch { /* no body — use default */ }

  const sel = supabase
    .from('child_profiles')
    .select('id, name, subject_slug, skin_slug, voice_id, current_level, age_band')
    .eq('account_id', user.id)
  const { data: profile } = childId
    ? await sel.eq('id', childId).single()
    : await sel.order('created_at', { ascending: true }).limit(1).maybeSingle()

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
    if (result.reason === 'not_approved') {
      return NextResponse.json({ error: 'This story is still being reviewed and will be ready soon.' }, { status: 409 })
    }
    if (result.reason === 'assembly_failed') {
      return NextResponse.json({ error: 'We hit a snag building this story. We\'re on it — please try again later.' }, { status: 500 })
    }
    if (result.reason === 'render_failed') {
      // Transient — nothing was recorded, so a retry (or the cron) will pick it
      // up. 503 signals "try again", not a permanent error.
      return NextResponse.json({ error: 'The narration is taking a moment to prepare — please try again shortly.' }, { status: 503 })
    }
    // already_delivered — treat as success so the UI just refreshes.
    return NextResponse.json({ ok: true, alreadyDelivered: true })
  }

  return NextResponse.json({ ok: true, levelTitle: result.levelTitle, audioUrl: result.audioUrl })
}
