// app/api/account/portal/route.ts
// POST /api/account/portal — returns a Stripe Billing Portal URL for the
// authenticated parent. The portal handles cancel, payment-method updates,
// and invoice history natively, so we don't build those screens ourselves.

import { NextRequest, NextResponse }        from 'next/server'
import { requireUser, requireStripeCustomer } from '@/lib/supabase'
import { createBillingPortalUrl }           from '@/lib/stripe'

export async function POST(req: NextRequest) {
  const gate = await requireUser()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })

  const customer = await requireStripeCustomer(gate.supabase, gate.user.id)
  if (!customer.ok) return NextResponse.json({ error: customer.error }, { status: customer.status })

  const url = await createBillingPortalUrl(customer.customerId)
  return NextResponse.json({ url })
}
