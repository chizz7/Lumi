// app/api/story/[id]/report/route.ts
// POST /api/story/:id/report
// Called from the story player's report sheet.
// Issues an account credit automatically — no support ticket needed.

import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient }  from '@/lib/supabase'
import { issueCredit }               from '@/lib/stripe'
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
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id: storyId } = await params

  let body: { reason?: Reason; notes?: string }
  try { body = await req.json() } catch { body = {} }

  const reason = body.reason ?? 'other'
  if (!REASONS.includes(reason as Reason)) {
    return NextResponse.json({ error: 'Invalid reason' }, { status: 422 })
  }

  // Verify this story belongs to this user
  const { data: story } = await supabase
    .from('story_instances')
    .select('id, profile_id, subject_slug, level_ordinal')
    .eq('id', storyId)
    .single()

  if (!story) {
    return NextResponse.json({ error: 'Story not found' }, { status: 404 })
  }

  // Get account for Stripe customer ID
  const { data: account } = await supabase
    .from('accounts')
    .select('stripe_customer_id')
    .eq('id', user.id)
    .single()

  // Issue credit if they have a Stripe customer ID
  let creditIssued = false
  if (account?.stripe_customer_id) {
    try {
      await issueCredit(account.stripe_customer_id, 999, `Story report: ${reason}`)
      creditIssued = true
    } catch (err) {
      console.error('[report] credit issue failed:', err)
      // Non-fatal — still acknowledge the report
    }
  }

  // Log the report for our review queue
  await adminClient.from('story_instances').update({
    // Add a reported_at and report_reason column to track these
    // For now log to console until we add the columns
  }).eq('id', storyId)

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
