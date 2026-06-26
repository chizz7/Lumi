// app/api/referrals/route.ts
// GET /api/referrals — the signed-in parent's referral code, link and tally.
//
// Reads through the service-role client (referrals has RLS-on / no policies) so
// we control exactly which columns leave the server: the referred friend's email
// is NEVER returned to the referrer (privacy/COPPA) — only status + dates.

import { NextResponse }                       from 'next/server'
import { serverClient, adminClient }          from '@/lib/supabase'
import { ensureReferralCode, referralLink, REFERRAL_REWARD_CENTS } from '@/lib/referral'

export async function GET() {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Every account has a code; mint one lazily for accounts that predate the
  // referral feature.
  const code = await ensureReferralCode(user.id)

  const { data: rows } = await adminClient
    .from('referrals')
    .select('status, reward_cents, created_at, credited_at')
    .eq('referrer_account_id', user.id)
    .order('created_at', { ascending: false })

  const referrals  = rows ?? []
  const credited   = referrals.filter(r => r.status === 'credited')
  const pending     = referrals.filter(r => r.status === 'pending')

  return NextResponse.json({
    code,
    link:           code ? referralLink(code) : null,
    rewardCents:    REFERRAL_REWARD_CENTS,
    creditedCount:  credited.length,         // = free months earned
    pendingCount:   pending.length,
    totalReferred:  referrals.length,
    // Masked timeline — status + date only, no friend identity.
    history: referrals.map(r => ({ status: r.status, createdAt: r.created_at, creditedAt: r.credited_at })),
  })
}
