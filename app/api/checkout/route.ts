// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getDraft }                  from '@/lib/draft'
import { createCheckoutSession }     from '@/lib/stripe'

export async function POST(req: NextRequest) {
  const draft = await getDraft(req)
  if (!draft) {
    return NextResponse.json(
      { error: 'No draft found. Please go through the story builder first.' },
      { status: 400 }
    )
  }

  // return_url must be an absolute URL or Stripe rejects the session. Guard a
  // missing/blank NEXT_PUBLIC_APP_URL (a flagged launch to-do) explicitly.
  const appUrl = process.env.NEXT_PUBLIC_APP_URL
  if (!appUrl || !/^https?:\/\//.test(appUrl)) {
    console.error('[checkout] NEXT_PUBLIC_APP_URL missing/invalid:', appUrl)
    return NextResponse.json(
      { error: 'Checkout is misconfigured (app URL). Please contact support.' },
      { status: 500 }
    )
  }

  try {
    const clientSecret = await createCheckoutSession({
      draftJson:  JSON.stringify(draft),
      returnUrl:  `${appUrl}/welcome?session_id={CHECKOUT_SESSION_ID}`,
    })
    return NextResponse.json({ clientSecret })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[checkout] createCheckoutSession failed:', message)
    return NextResponse.json({ error: `Checkout could not start: ${message}` }, { status: 500 })
  }
}
