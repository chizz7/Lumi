// app/api/cron/deliver/route.ts
// GET /api/cron/deliver — automatic story delivery.
// Runs daily (Vercel Cron). Delivers the next level to every Story Club profile
// whose cadence window has elapsed. The cadence gate + idempotent
// deliverNextStory make this safe to run as often as we like.
//
// Auth: Vercel Cron sends `Authorization: Bearer ${CRON_SECRET}`. FAILS CLOSED —
// if CRON_SECRET is unset the endpoint refuses to run rather than running
// unauthenticated (an open endpoint here means anyone can trigger mass
// delivery: TTS spend, email sends, DB writes).

import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual }           from 'crypto'
import { adminClient }               from '@/lib/supabase'
import { deliverNextStory, type DeliverableProfile } from '@/lib/deliver'
import { canRequestStory }           from '@/lib/cadence'

export const dynamic = 'force-dynamic'

// Cap work per invocation so a single run can't exceed the function timeout.
// With a daily schedule and cache-first audio this is comfortably enough.
const MAX_PER_RUN = 100

// Constant-time comparison; safe on unequal lengths.
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a), bb = Buffer.from(b)
  return ab.length === bb.length && timingSafeEqual(ab, bb)
}

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret) {
    console.error('[cron/deliver] CRON_SECRET is not set — refusing to run unauthenticated')
    return NextResponse.json({ error: 'Not configured' }, { status: 503 })
  }
  if (!safeEqual(req.headers.get('authorization') ?? '', `Bearer ${secret}`)) {
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

  // Last delivery per profile in ONE query (first seen per profile = latest,
  // since rows are sorted newest-first) instead of one query per profile.
  const profileIds = (accounts ?? []).flatMap(a =>
    ((a.child_profiles ?? []) as DeliverableProfile[]).map(p => p.id))
  const lastDeliveredByProfile = new Map<string, string>()
  if (profileIds.length > 0) {
    const { data: instances } = await adminClient
      .from('story_instances')
      .select('profile_id, delivered_at')
      .in('profile_id', profileIds)
      .order('delivered_at', { ascending: false })
    for (const inst of instances ?? []) {
      if (!lastDeliveredByProfile.has(inst.profile_id)) {
        lastDeliveredByProfile.set(inst.profile_id, inst.delivered_at)
      }
    }
  }

  let delivered = 0, skipped = 0, scanned = 0

  for (const account of accounts ?? []) {
    const profiles = (account.child_profiles ?? []) as DeliverableProfile[]
    for (const profile of profiles) {
      if (delivered >= MAX_PER_RUN) break
      scanned++

      // Is this profile due? (last delivery + interval <= now)
      if (!canRequestStory(lastDeliveredByProfile.get(profile.id))) { skipped++; continue }

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
