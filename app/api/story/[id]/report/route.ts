// app/api/story/[id]/report/route.ts
// POST /api/story/:id/report
// Called from the story player's report sheet.
// Issues an account credit automatically — no support ticket needed.

import { NextRequest, NextResponse } from 'next/server'
import { requireUser, adminClient }  from '@/lib/supabase'
import { track }                     from '@/lib/analytics'

const REASONS = [
  'content_inappropriate',
  'wrong_length',
  'audio_quality',
  'wrong_interests',
  'other',
] as const

type Reason = typeof REASONS[number]

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const gate = await requireUser()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { user, supabase } = gate

  const { id: storyId } = await params

  let body: { reason?: Reason; notes?: string }
  try { body = await req.json() } catch { body = {} }

  const reason = body.reason ?? 'other'
  if (!REASONS.includes(reason as Reason)) {
    return NextResponse.json({ error: 'Invalid reason' }, { status: 422 })
  }

  // Verify this story belongs to this user. The RLS SELECT policy on
  // story_instances scopes this to the user's own stories, so a foreign id
  // simply returns nothing. Also read credited_at for the one-credit guard.
  const { data: story } = await supabase
    .from('story_instances')
    .select('id, profile_id, subject_slug, level_ordinal, reported_at')
    .eq('id', storyId)
    .single()

  if (!story) {
    return NextResponse.json({ error: 'Story not found' }, { status: 404 })
  }

  // Record the report for the content-review queue (audit trail). We do NOT
  // auto-issue an account credit: a self-service "report → instant $9.99 credit"
  // with no review lets any subscriber report each delivered story once and ride
  // the subscription for free indefinitely. Reports land in the admin review
  // console (reported_at / report_reason), where a genuine complaint can be
  // credited manually. `reported_at` is only stamped once so a re-report doesn't
  // reopen a resolved one.
  if (!story.reported_at) {
    await adminClient
      .from('story_instances')
      .update({ reported_at: new Date().toISOString(), report_reason: reason })
      .eq('id', story.id)
  }

  console.log(`[report] story=${storyId} reason=${reason} user=${user.id}`)

  track('story_reported', {
    storyId,
    reason,
    subjectSlug: story.subject_slug,
    levelOrdinal: story.level_ordinal,
  }, user.id)

  return NextResponse.json({
    ok: true,
    creditIssued: false,
    message: 'Thanks for letting us know — our team will review this story.',
  })
}
