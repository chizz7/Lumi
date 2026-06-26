// app/api/cron/deliver/route.ts
// GET /api/cron/deliver — automatic story delivery.
// Runs daily (Vercel Cron). Delivers the next level to every Story Club profile
// whose 3-day cadence window has elapsed. The cadence gate + idempotent
// deliverNextStory make this safe to run as often as we like.
//
// Auth: Vercel Cron sends `Authorization: Bearer ${CRON_SECRET}` when CRON_SECRET
// is configured. Requests without it are rejected.

import { NextRequest, NextResponse } from 'next/server'
import { adminClient }               from '@/lib/supabase'
import { deliverNextStory, type DeliverableProfile } from '@/lib/deliver'
import { canRequestStory }           from '@/lib/cadence'

export const dynamic = 'force-dynamic'

// Cap work per invocation so a single run can't exceed the function timeout.
// With a daily schedule and cache-first audio this is comfortably enough.
const MAX_PER_RUN = 100

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (secret && req.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // All active subscribers with their child profile(s).
  const { data: accounts, error } = await adminClient
    .from('accounts')
    .select('id, email, child_profiles(id, name, subject_slug, skin_slug, voice_id, current_level, age_band)')
    .eq('plan', 'club')

  if (error) {
    console.error('[cron/deliver] query failed:', error.message)
    return NextResponse.json({ error: 'Query failed' }, { status: 500 })
  }

  let delivered = 0, skipped = 0, scanned = 0

  for (const account of accounts ?? []) {
    const profiles = (account.child_profiles ?? []) as DeliverableProfile[]
    for (const profile of profiles) {
      if (delivered >= MAX_PER_RUN) break
      scanned++

      // Is this profile due? (last delivery + 3 days <= now)
      const { data: last } = await adminClient
        .from('story_instances')
        .select('delivered_at')
        .eq('profile_id', profile.id)
        .order('delivered_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (!canRequestStory(last?.delivered_at)) { skipped++; continue }

      const result = await deliverNextStory(profile, account.email, account.id)
      if (result.delivered) delivered++
      else skipped++
    }
  }

  console.log(`[cron/deliver] scanned=${scanned} delivered=${delivered} skipped=${skipped}`)

  // Persist the run so the admin events view can show delivery health without
  // depending on Vercel log retention. Non-fatal.
  const { error: logErr } = await adminClient
    .from('cron_runs')
    .insert({ job: 'deliver', scanned, delivered, skipped })
  if (logErr) console.warn('[cron/deliver] run log insert failed (non-fatal):', logErr.message)

  return NextResponse.json({ ok: true, scanned, delivered, skipped })
}
