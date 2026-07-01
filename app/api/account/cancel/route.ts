// app/api/account/cancel/route.ts
// POST /api/account/cancel — cancels the authenticated parent's subscription
// (including a trial). Immediate cancellation, so a test account can be reset and
// re-purchased right away.

import { NextRequest, NextResponse } from 'next/server'
import { serverClient }              from '@/lib/supabase'
import { cancelSubscription }        from '@/lib/stripe'

export async function POST(_req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: account } = await supabase
    .from('accounts')
    .select('stripe_customer_id')
    .eq('id', user.id)
    .single()

  if (!account?.stripe_customer_id) {
    return NextResponse.json({ error: 'No subscription found for this account.' }, { status: 400 })
  }

  try {
    await cancelSubscription(account.stripe_customer_id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[account/cancel] failed:', message)
    return NextResponse.json({ error: `Could not cancel: ${message}` }, { status: 500 })
  }
}
