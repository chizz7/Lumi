// app/api/account/cancel/route.ts
// POST /api/account/cancel — cancels the authenticated parent's subscription
// (including a trial). Immediate cancellation, so a test account can be reset and
// re-purchased right away.

import { NextRequest, NextResponse }        from 'next/server'
import { requireUser, requireStripeCustomer } from '@/lib/supabase'
import { cancelSubscription }               from '@/lib/stripe'

export async function POST(_req: NextRequest) {
  const gate = await requireUser()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })

  const customer = await requireStripeCustomer(gate.supabase, gate.user.id)
  if (!customer.ok) return NextResponse.json({ error: customer.error }, { status: customer.status })

  try {
    await cancelSubscription(customer.customerId)
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[account/cancel] failed:', message)
    return NextResponse.json({ error: `Could not cancel: ${message}` }, { status: 500 })
  }
}
