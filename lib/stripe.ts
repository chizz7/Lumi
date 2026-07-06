// lib/stripe.ts
// Single Stripe client instance + helpers.
// Never import Stripe directly anywhere else — always import from here.

import Stripe from 'stripe'

// One month of Story Club ($9.99) in minor units. The single source of truth for
// every "one free month" credit (story reports, referral rewards). Mirrors
// STRIPE_PRICE_ID — keep in sync.
export const MONTH_CREDIT_CENTS = 999

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
  typescript:  true,
  // Vercel runs serverless — tell Stripe so it can optimise connection pooling
  appInfo: {
    name:    'Lumi',
    version: '1.0.0',
    url:     process.env.NEXT_PUBLIC_APP_URL,
  },
})

// Verify a webhook signature and return the parsed event.
// Throws if the signature is invalid.
export function constructWebhookEvent(
  body: string,
  signature: string
): Stripe.Event {
  return stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  )
}

// Create a Checkout Session for Story Club.
// Draft state is embedded in metadata so the webhook can reconstruct it
// without a server-side session store.
// Embedded Checkout: returns a client_secret the browser mounts in-page, so the
// parent never leaves the funnel. Stripe redirects to return_url only AFTER the
// payment succeeds (the /welcome confirmation).
export async function createCheckoutSession(opts: {
  draftJson:  string   // JSON.stringify(draft)
  returnUrl:  string   // hit after a successful payment; include {CHECKOUT_SESSION_ID}
}): Promise<string> {  // returns the session client_secret
  // Guard the most common misconfiguration: a Product ID (prod_…) or an empty
  // value where a Price ID (price_…) is required. Stripe's own error for this is
  // opaque ("No such price"), so fail with an actionable message instead.
  const priceId = process.env.STRIPE_PRICE_ID
  if (!priceId || !priceId.startsWith('price_')) {
    throw new Error(
      `STRIPE_PRICE_ID is ${priceId ? `"${priceId}"` : 'not set'} — it must be a Price ID (starts with "price_"), not a Product ID (prod_…). Fix it in your environment variables.`
    )
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode:              'embedded',
    mode:                 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      trial_period_days: 1,                     // first story free
      metadata: { draft: opts.draftJson },
    },
    metadata:    { draft: opts.draftJson },     // also on the session for webhook
    return_url:  opts.returnUrl,
    // Ask Stripe to collect email so it's available in the webhook
    billing_address_collection: 'auto',
  })

  if (!session.client_secret) throw new Error('Stripe did not return a client secret')
  return session.client_secret
}

// Hosted Checkout variant for links that originate OUTSIDE the app (e.g. the
// "Start Story Club" button in the preview email). Embedded checkout must mount
// client-side, which an emailed link can't do — so this returns a full Stripe
// URL the parent opens directly. Same subscription, trial, and draft-in-metadata
// as the embedded flow, so the webhook handles both identically.
export async function createHostedCheckoutSession(opts: {
  draftJson:  string
  successUrl: string   // include {CHECKOUT_SESSION_ID}
  cancelUrl:  string
}): Promise<string> {  // returns the hosted checkout URL
  const priceId = process.env.STRIPE_PRICE_ID
  if (!priceId || !priceId.startsWith('price_')) {
    throw new Error(
      `STRIPE_PRICE_ID is ${priceId ? `"${priceId}"` : 'not set'} — it must be a Price ID (starts with "price_"), not a Product ID (prod_…). Fix it in your environment variables.`
    )
  }

  const session = await stripe.checkout.sessions.create({
    mode:                 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      trial_period_days: 1,                     // first story free
      metadata: { draft: opts.draftJson },
    },
    metadata:    { draft: opts.draftJson },
    success_url: opts.successUrl,
    cancel_url:  opts.cancelUrl,
    billing_address_collection: 'auto',
  })

  if (!session.url) throw new Error('Stripe did not return a checkout URL')
  return session.url
}

// The currency we fall back to when a customer has no settlement currency
// yet (e.g. credited before their first invoice). Matches our default price.
const DEFAULT_CREDIT_CURRENCY = 'cad'

// Issue a credit to a customer's balance (used when a story is reported or a
// referral reward is earned). Stripe requires the balance-transaction currency
// to MATCH the customer's settlement currency, so we read it off the customer
// and only fall back to the default when it isn't set yet. This keeps credits
// working regardless of which currency the subscription was billed in.
export async function issueCredit(
  stripeCustomerId: string,
  amountCents = MONTH_CREDIT_CENTS,   // one month's subscription
  reason = 'Story credit'
): Promise<void> {
  const customer = await stripe.customers.retrieve(stripeCustomerId)

  // A deleted customer has no `currency`; guard the union before reading it.
  const currency =
    ('deleted' in customer ? null : customer.currency) || DEFAULT_CREDIT_CURRENCY

  await stripe.customers.createBalanceTransaction(stripeCustomerId, {
    amount:      -amountCents,   // negative = credit
    currency,
    description: reason,
  })
}

// Create a one-time Billing Portal link so a customer can update their card.
// Used in the payment_failed email — replaces the old hardcoded test URL.
// Falls back to the account page if the portal isn't configured yet.
export async function createBillingPortalUrl(
  stripeCustomerId: string
): Promise<string> {
  const returnUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? ''}/account`
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer:   stripeCustomerId,
      return_url: returnUrl,
    })
    return session.url
  } catch (err) {
    console.error('[stripe] billing portal error (non-fatal):', err)
    return returnUrl
  }
}

// Cancel a customer's subscription(s) immediately. Catches trialing subs too
// (a trial that hasn't converted is not 'active' yet), so it works for cancelling
// during the free trial as well as for account deletion.
export async function cancelSubscription(
  stripeCustomerId: string
): Promise<void> {
  const subs = await stripe.subscriptions.list({
    customer: stripeCustomerId,
    status:   'all',
    limit:    10,
  })
  const cancellable = subs.data.filter(
    s => s.status === 'active' || s.status === 'trialing' || s.status === 'past_due'
  )
  for (const sub of cancellable) {
    await stripe.subscriptions.cancel(sub.id)
  }
}
