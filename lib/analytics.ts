// lib/analytics.ts
// Server-side event tracking. Works with PostHog, Segment, or a simple
// Supabase table. Swap the implementation — the call sites don't change.
//
// Client-side tracking lives in app/_components/Analytics.tsx (page views).

const POSTHOG_KEY = process.env.POSTHOG_KEY
const POSTHOG_URL = process.env.POSTHOG_HOST ?? 'https://app.posthog.com'

export type AnalyticsEvent =
  | 'sample_played'
  | 'builder_started'
  | 'builder_step_completed'
  | 'preview_played'
  | 'checkout_started'
  | 'subscription_started'  // after Stripe confirms
  | 'story_delivered'
  | 'story_played'
  | 'next_story_requested'
  | 'story_reported'
  | 'subscription_cancelled'  // Stripe subscription deleted
  | 'payment_failed'          // Stripe invoice.payment_failed
  | 'subscription_renewed'    // Stripe invoice.payment_succeeded (renewal)
  | 'waitlist_joined'
  | 'account_deleted'

export async function track(
  event:  AnalyticsEvent,
  props?: Record<string, string | number | boolean | null>,
  userId?: string,
): Promise<void> {
  if (!POSTHOG_KEY) {
    // Development: just log
    console.log(`[analytics] ${event}`, props ?? {})
    return
  }

  // PostHog capture (fire and forget — don't await in hot paths)
  fetch(`${POSTHOG_URL}/capture/`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key:          POSTHOG_KEY,
      event,
      distinct_id:      userId ?? 'anonymous',
      properties:       { ...props, $lib: 'lumi-server' },
      timestamp:        new Date().toISOString(),
    }),
  }).catch(err => console.error('[analytics] track failed:', err))
}
