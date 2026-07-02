// app/api/story/[id]/report/route.ts
// POST /api/story/:id/report
// Called from the story player's report sheet.
// Issues an account credit automatically — no support ticket needed.

import { NextRequest, NextResponse } from 'next/server'
import { requireUser, adminClient }  from '@/lib/supabase'
import { issueCredit, MONTH_CREDIT_CENTS } from '@/lib/stripe'
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
    .select('id, profile_id, subject_slug, level_ordinal, credited_at')
    .eq('id', storyId)
    .single()

  if (!story) {
    return NextResponse.json({ error: 'Story not found' }, { status: 404 })
  }

  // Record the report for the content-review queue (audit trail).
  await adminClient
    .from('story_instances')
    .update({ reported_at: new Date().toISOString(), report_reason: reason })
    .eq('id', story.id)

  // Issue AT MOST ONE credit per story, ever. Claim credited_at atomically
  // (only-if-null) via the service-role client so re-reporting the same story —
  // or concurrent duplicate requests — can't mint multiple $9.99 credits.
  // Roll the claim back if Stripe rejects it, so a real failure can be retried.
  let creditIssued = false
  if (!story.credited_at) {
    // Get account for Stripe customer ID (only needed when a credit is in play)
    const { data: account } = await supabase
      .from('accounts')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (account?.stripe_customer_id) {
      const { data: claimed } = await adminClient
        .from('story_instances')
        .update({ credited_at: new Date().toISOString() })
        .eq('id', story.id)
        .is('credited_at', null)
        .select('id')
        .maybeSingle()

      if (claimed) {
        try {
          await issueCredit(account.stripe_customer_id, MONTH_CREDIT_CENTS, `Story report: ${reason}`)
          creditIssued = true
        } catch (err) {
          console.error('[report] credit issue failed, rolling back claim:', err)
          await adminClient
            .from('story_instances')
            .update({ credited_at: null })
            .eq('id', story.id)
        }
      }
    }
  }

  console.log(`[report] story=${storyId} reason=${reason} user=${user.id} credit=${creditIssued}`)

  track('story_reported', {
    storyId,
    reason,
    subjectSlug: story.subject_slug,
    levelOrdinal: story.level_ordinal,
    creditIssued,
  }, user.id)

  return NextResponse.json({
    ok: true,
    creditIssued,
    message: creditIssued
      ? 'Thanks for letting us know — a credit has been added to your account.'
      : 'Thanks for letting us know — we\'ll review this story.',
  })
}
