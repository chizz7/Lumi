// app/api/account/portal/route.ts
// POST /api/account/portal — returns a Stripe Billing Portal URL for the
// authenticated parent. The portal handles cancel, payment-method updates,
// and invoice history natively, so we don't build those screens ourselves.

import { NextRequest, NextResponse } from 'next/server'
import { serverClient }              from '@/lib/supabase'
import { createBillingPortalUrl }    from '@/lib/stripe'

export async function POST(req: NextRequest) {
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

  const url = await createBillingPortalUrl(account.stripe_customer_id)
  return NextResponse.json({ url })
}
