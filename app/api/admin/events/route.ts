// app/api/admin/events/route.ts
// GET /api/admin/events — unified system-event view: Stripe webhooks we finished,
// cron delivery runs, story deliveries and referral rewards, plus a health strip.
// This is how an admin notices the failures that are never pushed as events
// (a stuck webhook, a cron that didn't run, deliveries dropping to zero).

import { NextResponse } from 'next/server'
import { adminClient }  from '@/lib/supabase'
import { requireAdmin } from '@/lib/admin'

export const dynamic = 'force-dynamic'

export async function GET() {
  const gate = await requireAdmin()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })

  const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

  const [
    { data: webhooks },
    { data: cronRuns },
    { data: deliveries },
    { data: referrals },
    { count: webhooks24h },
    { count: deliveries24h },
    { count: referralsCredited },
    { count: referralsPending },
  ] = await Promise.all([
    adminClient.from('processed_webhook_events').select('event_id, type, processed_at').order('processed_at', { ascending: false }).limit(50),
    adminClient.from('cron_runs').select('job, scanned, delivered, skipped, ran_at').order('ran_at', { ascending: false }).limit(20),
    adminClient.from('story_instances').select('id, subject_slug, level_ordinal, delivered_at').order('delivered_at', { ascending: false }).limit(50),
    adminClient.from('referrals').select('status, reward_cents, created_at, credited_at').order('created_at', { ascending: false }).limit(50),
    adminClient.from('processed_webhook_events').select('event_id', { count: 'exact', head: true }).gte('processed_at', since24h),
    adminClient.from('story_instances').select('id', { count: 'exact', head: true }).gte('delivered_at', since24h),
    adminClient.from('referrals').select('id', { count: 'exact', head: true }).eq('status', 'credited'),
    adminClient.from('referrals').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
  ])

  const lastCron = cronRuns?.[0] ?? null
  const lastCronAgeMs = lastCron ? Date.now() - new Date(lastCron.ran_at).getTime() : null

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    health: {
      webhooks24h:       webhooks24h ?? 0,
      deliveries24h:     deliveries24h ?? 0,
      referralsCredited: referralsCredited ?? 0,
      referralsPending:  referralsPending ?? 0,
      lastCronAt:        lastCron?.ran_at ?? null,
      // Cron is meant to run daily — flag if the last run is over ~26h old.
      cronStale:         lastCronAgeMs === null || lastCronAgeMs > 26 * 60 * 60 * 1000,
    },
    webhooks:   webhooks ?? [],
    cronRuns:   cronRuns ?? [],
    deliveries: deliveries ?? [],
    referrals:  referrals ?? [],
  })
}
