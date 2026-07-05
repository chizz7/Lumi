// app/api/webhooks/stripe/route.ts
// Handles the full Stripe subscription lifecycle — not just the happy path.
//
// Events handled:
//   checkout.session.completed      → create account + deliver first story
//   customer.subscription.deleted   → downgrade plan to 'free'
//   invoice.payment_failed          → email the parent, keep plan active for now
//   invoice.payment_succeeded       → (optional) log renewal

import { NextRequest, NextResponse }  from 'next/server'
import { constructWebhookEvent, createBillingPortalUrl, issueCredit } from '@/lib/stripe'
import { adminClient }                from '@/lib/supabase'
import { deliverNextStory }           from '@/lib/deliver'
import { track }                      from '@/lib/analytics'
import { ensureReferralCode, normaliseRefCode, REFERRAL_REWARD_CENTS } from '@/lib/referral'
import type { Draft }                 from '@/lib/draft'
import type Stripe                    from 'stripe'
import { getResend, EMAIL_FROM }      from '@/lib/email'

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
        await getResend().emails.send({
          from:    EMAIL_FROM,
          to:      account.email,
          subject: 'Action needed — your Lumi payment didn\'t go through',
          html: `<p>Hi there — we couldn't charge your card for your Lumi Story Club subscription.</p>
                 <p>Please <a href="${portalUrl}">update your payment method</a> to keep your stories coming.</p>`,
        })
        track('payment_failed', { customerId }, undefined)
      }
      break
    }

    // ── 4. Payment succeeded — a real charge cleared ─────────────────────────
    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice
      if (invoice.billing_reason === 'subscription_cycle') {
        track('subscription_renewed', { customerId: invoice.customer as string }, undefined)
      }
      // Only a NON-zero charge counts as a real payment (the trial-start invoice
      // is $0). This is the moment a pending referral becomes a paid referral.
      if ((invoice.amount_paid ?? 0) > 0) {
        const customerId = invoice.customer as string
        const { data: account } = await adminClient
          .from('accounts').select('id').eq('stripe_customer_id', customerId).maybeSingle()
        // Non-fatal: a referral-credit hiccup must not 5xx a real payment event.
        // The row stays 'pending' and settles on the next cycle or from admin.
        if (account) {
          try { await creditReferralOnPayment(account.id) }
          catch (err) { console.error('[webhook] referral credit failed (non-fatal):', (err as Error).message) }
        }
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
    // Resubscribe after a prior cancellation: the account row still exists with
    // plan='free' (set by customer.subscription.deleted) and, if Stripe minted a
    // fresh customer for this checkout, a now-dead stripe_customer_id. Re-assert
    // the paid state and point at the current customer, or the paying user gets
    // no cron deliveries and their billing portal targets the dead customer.
    const { error: reactErr } = await adminClient.from('accounts')
      .update({ plan: 'club', stripe_customer_id: session.customer as string })
      .eq('id', userId)
    if (reactErr) throw new Error(`account reactivation failed: ${reactErr.message}`)
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
  //    Select exactly the DeliverableProfile columns deliverNextStory needs.
  const PROFILE_COLS = 'id, name, subject_slug, skin_slug, voice_id, current_level, age_band'
  const { data: existingProfiles } = await adminClient
    .from('child_profiles').select(PROFILE_COLS)
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
      .select(PROFILE_COLS).single()
    if (profErr || !inserted) throw new Error(`profile insert failed: ${profErr?.message ?? 'unknown'}`)
    profile = inserted
  }

  // 3. Give this new account its own referral code (idempotent).
  await ensureReferralCode(userId)

  // 4. Deliver the first story via the shared, idempotent pipeline (safe to
  //    re-run — it no-ops if this level was already delivered).
  await deliverNextStory(profile, email, userId)

  track('subscription_started', { subjectSlug: draft.subjectSlug, skinSlug: draft.skinSlug }, userId)

  // 5. RECORD the referral (if any) as pending — but do NOT credit yet. Checkout
  //    completes at the START of the 1-day free trial, before any payment, so
  //    crediting here would pay the referrer for signups that cancel in-trial and
  //    never pay (farmable with throwaway emails). The credit is issued later, on
  //    the first real invoice (see creditReferralOnPayment). Best-effort: a
  //    referral hiccup must never fail/retry a completed paid signup.
  if (draft.ref) {
    try {
      await recordPendingReferral(draft.ref, userId, email)
    } catch (err) {
      console.error('[webhook] referral recording failed (non-fatal):', (err as Error).message)
    }
  }

  console.log(`[webhook] level 1 ensured for ${email}`)
}

// ─── Referral: step 1, record intent at signup (NO credit) ──────────────────
// Inserts a durable 'pending' referrals row so the reward can be issued later,
// on the referred account's first real payment. Never issues a Stripe credit —
// that would pay out during the free trial, before any money changes hands.
async function recordPendingReferral(rawCode: string, newUserId: string, newEmail: string) {
  const code = normaliseRefCode(rawCode)
  if (!code) return

  const { data: referrer } = await adminClient
    .from('accounts')
    .select('id, email')
    .eq('referral_code', code)
    .maybeSingle()

  if (!referrer) { track('referral_skipped', { reason: 'unknown_code' }, newUserId); return }

  // Block self-referral (same account or same email).
  if (referrer.id === newUserId || referrer.email?.toLowerCase() === newEmail.toLowerCase()) {
    track('referral_skipped', { reason: 'self_referral' }, newUserId)
    return
  }

  // Unique on referred_account_id → at most one referral per referred account,
  // ever. If one already exists (retry), leave it as-is.
  const { data: existing } = await adminClient
    .from('referrals').select('id').eq('referred_account_id', newUserId).maybeSingle()
  if (existing) return

  const { error } = await adminClient
    .from('referrals')
    .insert({
      referrer_account_id: referrer.id,
      referred_account_id: newUserId,
      referred_email:      newEmail,
      reward_cents:        REFERRAL_REWARD_CENTS,
      status:              'pending',
    })
  // A lost insert race just means the row already exists — fine.
  if (error && !error.message.includes('duplicate')) throw new Error(`referral insert failed: ${error.message}`)
  track('referral_recorded', {}, newUserId)
}

// ─── Referral: step 2, issue the credit on the first real payment ───────────
// Called from invoice.payment_succeeded (amount_paid > 0). Idempotent (one credit
// per referred account) and race-safe: credited_at is claimed atomically before
// the Stripe credit, and rolled back if Stripe rejects it.
async function creditReferralOnPayment(referredAccountId: string) {
  const { data: referral } = await adminClient
    .from('referrals')
    .select('id, referrer_account_id, referred_email, credited_at')
    .eq('referred_account_id', referredAccountId)
    .maybeSingle()

  if (!referral || referral.credited_at) return   // no referral, or already paid

  const { data: referrer } = await adminClient
    .from('accounts')
    .select('id, email, stripe_customer_id')
    .eq('id', referral.referrer_account_id)
    .maybeSingle()

  // The referrer needs a Stripe customer to receive a balance credit. If they
  // don't have one, leave the row 'pending' for manual settlement.
  if (!referrer?.stripe_customer_id) {
    track('referral_skipped', { reason: 'no_stripe_customer' }, referral.referrer_account_id)
    return
  }

  // Atomically claim the credit so concurrent runs / retries can't double-pay.
  const { data: claimed } = await adminClient
    .from('referrals')
    .update({ status: 'credited', credited_at: new Date().toISOString() })
    .eq('id', referral.id)
    .is('credited_at', null)
    .select('id')
    .maybeSingle()
  if (!claimed) return   // someone else already credited it

  try {
    await issueCredit(referrer.stripe_customer_id, REFERRAL_REWARD_CENTS, `Referral reward — ${referral.referred_email} subscribed`)
    track('referral_credited', { rewardCents: REFERRAL_REWARD_CENTS }, referrer.id)
    console.log(`[webhook] referral credit issued to ${referrer.email} for ${referral.referred_email}`)
  } catch (err) {
    // Roll the claim back so it can be retried on the next payment event.
    await adminClient
      .from('referrals')
      .update({ status: 'pending', credited_at: null })
      .eq('id', referral.id)
    throw err
  }
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
