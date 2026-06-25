// app/api/webhooks/stripe/route.ts
// Handles the full Stripe subscription lifecycle — not just the happy path.
//
// Events handled:
//   checkout.session.completed      → create account + deliver first story
//   customer.subscription.deleted   → downgrade plan to 'free'
//   invoice.payment_failed          → email the parent, keep plan active for now
//   invoice.payment_succeeded       → (optional) log renewal

import { NextRequest, NextResponse }  from 'next/server'
import { constructWebhookEvent, createBillingPortalUrl } from '@/lib/stripe'
import { adminClient }                from '@/lib/supabase'
import { deliverNextStory }           from '@/lib/deliver'
import { track }                      from '@/lib/analytics'
import type { Draft }                 from '@/lib/draft'
import type Stripe                    from 'stripe'
import { Resend }                     from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)
const FROM   = process.env.EMAIL_FROM ?? 'stories@lumi.app'

export async function POST(req: NextRequest) {
  const sig  = req.headers.get('stripe-signature') ?? ''
  const body = await req.text()

  let event: Stripe.Event
  try {
    event = constructWebhookEvent(body, sig)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Idempotency ledger: if we've already fully processed this event, ack and stop.
  // (Stripe may legitimately deliver the same event more than once.)
  const { data: alreadyProcessed } = await adminClient
    .from('processed_webhook_events')
    .select('event_id')
    .eq('event_id', event.id)
    .maybeSingle()
  if (alreadyProcessed) {
    return NextResponse.json({ received: true, idempotent: true })
  }

  try {
    switch (event.type) {

    // ── 1. New subscriber ────────────────────────────────────────────────────
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      await handleNewSubscriber(session)
      break
    }

    // ── 2. Subscription cancelled / expired ──────────────────────────────────
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const customerId = sub.customer as string
      const { data: account } = await adminClient
        .from('accounts')
        .select('id, email')
        .eq('stripe_customer_id', customerId)
        .single()
      if (account) {
        await adminClient.from('accounts').update({ plan: 'free' }).eq('id', account.id)
        track('subscription_cancelled', { customerId }, account.id)
      }
      break
    }

    // ── 3. Payment failed ────────────────────────────────────────────────────
    case 'invoice.payment_failed': {
      const invoice    = event.data.object as Stripe.Invoice
      const customerId = invoice.customer as string
      const { data: account } = await adminClient
        .from('accounts')
        .select('email')
        .eq('stripe_customer_id', customerId)
        .single()
      if (account?.email) {
        const portalUrl = await createBillingPortalUrl(customerId)
        await resend.emails.send({
          from:    FROM,
          to:      account.email,
          subject: 'Action needed — your Lumi payment didn\'t go through',
          html: `<p>Hi there — we couldn't charge your card for your Lumi Story Club subscription.</p>
                 <p>Please <a href="${portalUrl}">update your payment method</a> to keep your stories coming.</p>`,
        })
        track('payment_failed', { customerId }, undefined)
      }
      break
    }

    // ── 4. Renewal succeeded (optional logging) ───────────────────────────────
    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice
      if (invoice.billing_reason === 'subscription_cycle') {
        track('subscription_renewed', { customerId: invoice.customer as string }, undefined)
      }
      break
    }
    }
  } catch (err) {
    // Unexpected failure mid-handler. Return 5xx so Stripe RETRIES — we must never
    // silently drop a paid signup. The event is NOT recorded as processed, and
    // every handler is idempotent, so the retry resumes/completes the work.
    console.error(`[webhook] ${event.type} (${event.id}) failed:`, (err as Error).message)
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }

  // Mark processed only after the handler succeeded.
  const { error: ledgerErr } = await adminClient
    .from('processed_webhook_events')
    .insert({ event_id: event.id, type: event.type })
  if (ledgerErr) console.warn('[webhook] ledger insert failed (non-fatal):', ledgerErr.message)

  return NextResponse.json({ received: true })
}

// ─── New subscriber handler ────────────────────────────────────────────────────

// Idempotent + resumable: each step checks for / reuses what a prior (possibly
// failed) attempt created, so a Stripe retry COMPLETES a half-done signup rather
// than being blocked. Any unexpected failure throws → caller returns 5xx → retry.
async function handleNewSubscriber(session: Stripe.Checkout.Session) {
  const email    = session.customer_email ?? session.customer_details?.email
  const draftStr = session.metadata?.draft

  if (!email || !draftStr) {
    // Unrecoverable bad input — retrying won't help. Ack so Stripe stops.
    console.error('[webhook] missing email or draft', session.id)
    return
  }

  const draft = JSON.parse(draftStr) as Draft

  // 1. Find-or-create the auth user + account.
  let userId: string
  const { data: existingAccount } = await adminClient
    .from('accounts').select('id').eq('email', email).maybeSingle()

  if (existingAccount) {
    userId = existingAccount.id
  } else {
    const { data: authData, error: authErr } = await adminClient.auth.admin.createUser({
      email,
      email_confirm: true,
    })
    if (authData?.user) {
      userId = authData.user.id
    } else {
      // The user may have been created on a prior partial attempt (account
      // insert then failed). Recover the id instead of looping on a 5xx.
      const recoveredId = await findAuthUserIdByEmail(email)
      if (!recoveredId) throw new Error(`auth user creation failed: ${authErr?.message ?? 'unknown'}`)
      userId = recoveredId
    }
    const { error: accErr } = await adminClient.from('accounts').upsert({
      id:                 userId,
      email,
      stripe_customer_id: session.customer as string,
      plan:               'club',
    }, { onConflict: 'id' })
    if (accErr) throw new Error(`account upsert failed: ${accErr.message}`)
  }

  // 2. Ensure the child profile exists (first profile for this account).
  const { data: existingProfiles } = await adminClient
    .from('child_profiles').select('*')
    .eq('account_id', userId)
    .order('created_at', { ascending: true })
    .limit(1)
  let profile = existingProfiles?.[0]

  if (!profile) {
    const { data: inserted, error: profErr } = await adminClient
      .from('child_profiles')
      .insert({
        account_id:    userId,
        name:          draft.childName,
        age_band:      draft.ageBand,
        skin_slug:     draft.skinSlug,
        subject_slug:  draft.subjectSlug,
        voice_id:      draft.voiceId,
        interest_slug: draft.interestSlug ?? null,
        current_level: 1,
      })
      .select().single()
    if (profErr || !inserted) throw new Error(`profile insert failed: ${profErr?.message ?? 'unknown'}`)
    profile = inserted
  }

  // 3. Deliver the first story via the shared, idempotent pipeline (safe to
  //    re-run — it no-ops if this level was already delivered).
  await deliverNextStory(profile, email, userId)

  track('subscription_started', { subjectSlug: draft.subjectSlug, skinSlug: draft.skinSlug }, userId)
  console.log(`[webhook] level 1 ensured for ${email}`)
}

// supabase-js admin has no get-by-email; page through (bounded) to recover a
// user created on a prior partial webhook attempt. Fine at pre-launch scale.
async function findAuthUserIdByEmail(email: string): Promise<string | null> {
  const target = email.toLowerCase()
  for (let page = 1; page <= 10; page++) {
    const { data, error } = await adminClient.auth.admin.listUsers({ page, perPage: 1000 })
    if (error || !data?.users?.length) break
    const match = data.users.find(u => u.email?.toLowerCase() === target)
    if (match) return match.id
    if (data.users.length < 1000) break
  }
  return null
}
