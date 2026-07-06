// app/api/checkout/from-preview/route.ts
// GET /api/checkout/from-preview?token=… — the purchase link in the preview
// email. It rebuilds the parent's draft from the signed preview token, opens a
// Stripe-hosted Checkout session, and redirects straight there. Used from email
// (and the /p preview page CTA), where the in-app EMBEDDED checkout can't mount
// and there's no draft cookie — so we carry the draft in the token instead.
//
// GET (not POST) because it's a link an email client opens. Worst case of a
// prefetch/bot hit is a throwaway Stripe session with no charge.

import { NextRequest, NextResponse }        from 'next/server'
import { verifyPreviewToken }               from '@/lib/preview-link'
import { createHostedCheckoutSession }      from '@/lib/stripe'

export async function GET(req: NextRequest) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL
  const home   = appUrl && /^https?:\/\//.test(appUrl) ? appUrl : req.nextUrl.origin

  const token = req.nextUrl.searchParams.get('token') ?? ''
  const p = verifyPreviewToken(token)
  if (!p) {
    // Bad/expired link → send them to the builder to start fresh.
    return NextResponse.redirect(`${home}/?checkout=expired`)
  }

  if (!appUrl || !/^https?:\/\//.test(appUrl)) {
    console.error('[checkout/from-preview] NEXT_PUBLIC_APP_URL missing/invalid:', appUrl)
    return NextResponse.redirect(`${home}/?checkout=error`)
  }

  // Reconstruct the same draft shape the webhook expects. No `ref` here — the
  // email path carries no referral code, which is fine (referrals come from the
  // in-app ?ref flow only).
  const draftJson = JSON.stringify({
    childName:   p.childName,
    ageBand:     p.ageBand,
    skinSlug:    p.skinSlug,
    subjectSlug: p.subjectSlug,
    voiceId:     p.voiceId,
  })

  try {
    const url = await createHostedCheckoutSession({
      draftJson,
      successUrl: `${appUrl}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl:  `${appUrl}/p/${token}`,   // back to their preview if they bail
    })
    return NextResponse.redirect(url)
  } catch (err) {
    console.error('[checkout/from-preview] session create failed:', err)
    return NextResponse.redirect(`${home}/?checkout=error`)
  }
}
