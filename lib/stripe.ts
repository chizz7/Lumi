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
export async function createCheckoutSession(opts: {
  draftJson:  string   // JSON.stringify(draft)
  successUrl: string
  cancelUrl:  string
}): Promise<string> {
  const session = await stripe.checkout.sessions.create({
    mode:                 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    subscription_data: {
      trial_period_days: 1,                     // first story free
      metadata: { draft: opts.draftJson },
    },
    metadata:    { draft: opts.draftJson },     // also on the session for webhook
    success_url: opts.successUrl,
    cancel_url:  opts.cancelUrl,
    // Ask Stripe to collect email so it's available in the webhook
    billing_address_collection: 'auto',
  })

  if (!session.url) throw new Error('Stripe did not return a checkout URL')
  return session.url
}

// Issue a credit to a customer's balance (used when a story is reported)
export async function issueCredit(
  stripeCustomerId: string,
  amountCents = 990,              // $9.90 — one month's subscription
  reason = 'Story credit'
): Promise<void> {
  await stripe.customers.createBalanceTransaction(stripeCustomerId, {
    amount:      -amountCents,   // negative = credit
    currency:    'usd',
    description: reason,
  })
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
