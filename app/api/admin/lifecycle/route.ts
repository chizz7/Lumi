// app/api/admin/lifecycle/route.ts
// GET /api/admin/lifecycle — one row per account with a derived lifecycle stage,
// so an admin can spot anyone who's stuck (esp. a half-failed paid signup).
// Admin only. Reads via the service-role client (crosses every account's RLS).

import { NextResponse }       from 'next/server'
import { adminClient }        from '@/lib/supabase'
import { requireAdmin }       from '@/lib/admin'
import { getLevelCount }      from '@/content'
import { nextStoryAvailableAt } from '@/lib/cadence'

export const dynamic = 'force-dynamic'

// An account with 0 stories older than this almost certainly had its signup
// webhook fail before first delivery — the case migration 005 guards against.
const STUCK_SIGNUP_MS = 10 * 60 * 1000
// How far past the cadence window counts as "overdue" (cron should have
// delivered by now).
const OVERDUE_GRACE_MS = 24 * 60 * 60 * 1000

type Stage = 'stuck_signup' | 'signed_up' | 'active' | 'overdue' | 'completed' | 'lapsed'

// Attention-first ordering for the dashboard.
const STAGE_RANK: Record<Stage, number> = {
  stuck_signup: 0, overdue: 1, signed_up: 2, active: 3, completed: 4, lapsed: 5,
}

export async function GET() {
  const gate = await requireAdmin()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })

  const now = Date.now()

  const [{ data: accounts }, { data: profiles }, { data: stories }] = await Promise.all([
    adminClient.from('accounts').select('id, email, plan, created_at, referral_code'),
    adminClient.from('child_profiles').select('id, account_id, name, subject_slug, current_level'),
    adminClient.from('story_instances').select('profile_id, delivered_at').order('delivered_at', { ascending: false }),
  ])

  // Last delivery + count per profile.
  const lastByProfile  = new Map<string, string>()
  const countByProfile = new Map<string, number>()
  for (const s of stories ?? []) {
    if (!lastByProfile.has(s.profile_id)) lastByProfile.set(s.profile_id, s.delivered_at) // first seen = latest (sorted desc)
    countByProfile.set(s.profile_id, (countByProfile.get(s.profile_id) ?? 0) + 1)
  }

  const profilesByAccount = new Map<string, typeof profiles>()
  for (const p of profiles ?? []) {
    const arr = profilesByAccount.get(p.account_id) ?? []
    arr.push(p)
    profilesByAccount.set(p.account_id, arr)
  }

  const rows = (accounts ?? []).map(account => {
    const kids = profilesByAccount.get(account.id) ?? []
    let totalStories = 0
    let lastDeliveredAt: string | null = null
    let anyOverdue = false
    let allCompleted = kids.length > 0

    const children = kids.map(c => {
      const count = countByProfile.get(c.id) ?? 0
      const last  = lastByProfile.get(c.id) ?? null
      totalStories += count
      if (last && (!lastDeliveredAt || last > lastDeliveredAt)) lastDeliveredAt = last

      let levelCount = 0
      try { levelCount = getLevelCount(c.subject_slug) } catch { /* unknown subject */ }
      const completed = levelCount > 0 && c.current_level > levelCount
      if (!completed) allCompleted = false

      if (!completed) {
        const next = nextStoryAvailableAt(last)
        if (next && now > next.getTime() + OVERDUE_GRACE_MS) anyOverdue = true
      }
      return { name: c.name, subject: c.subject_slug, currentLevel: c.current_level, levelCount, lastDeliveredAt: last }
    })

    let stage: Stage
    if (account.plan !== 'club')        stage = 'lapsed'
    else if (totalStories === 0)        stage = (now - new Date(account.created_at).getTime() > STUCK_SIGNUP_MS) ? 'stuck_signup' : 'signed_up'
    else if (allCompleted)              stage = 'completed'
    else if (anyOverdue)                stage = 'overdue'
    else                                stage = 'active'

    return {
      id: account.id, email: account.email, plan: account.plan,
      createdAt: account.created_at, referralCode: account.referral_code,
      childCount: kids.length, totalStories, lastDeliveredAt, stage, children,
    }
  })

  rows.sort((a, b) =>
    STAGE_RANK[a.stage] - STAGE_RANK[b.stage] ||
    (a.createdAt < b.createdAt ? 1 : -1))

  const counts: Record<string, number> = { total: rows.length }
  for (const r of rows) counts[r.stage] = (counts[r.stage] ?? 0) + 1

  return NextResponse.json({ generatedAt: new Date().toISOString(), counts, accounts: rows })
}
