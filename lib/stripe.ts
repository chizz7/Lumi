// lib/stripe.ts
// Single Stripe client instance + helpers.
// Never import Stripe directly anywhere else — always import from here.

import Stripe from 'stripe'

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
  const session = await stripe.checkout.sessions.create({
    ui_mode:              'embedded',
    mode:                 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
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

// Issue a credit to a customer's balance (used when a story is reported)
export async function issueCredit(
  stripeCustomerId: string,
  amountCents = 999,              // $9.99 — one month's subscription
  reason = 'Story credit'
): Promise<void> {
  await stripe.customers.createBalanceTransaction(stripeCustomerId, {
    amount:      -amountCents,   // negative = credit
    currency:    'usd',
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

// Cancel a subscription (called from account deletion)
export async function cancelSubscription(
  stripeCustomerId: string
): Promise<void> {
  const subs = await stripe.subscriptions.list({
    customer: stripeCustomerId,
    status:   'active',
    limit:    1,
  })
  const sub = subs.data[0]
  if (sub) {
    await stripe.subscriptions.cancel(sub.id)
  }
}
