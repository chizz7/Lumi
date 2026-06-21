// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getDraft }                  from '@/lib/draft'
import { createCheckoutSession }     from '@/lib/stripe'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL!

export async function POST(req: NextRequest) {
  const draft = await getDraft(req)
  if (!draft) {
    return NextResponse.json(
      { error: 'No draft found. Please go through the story builder first.' },
      { status: 400 }
    )
  }
  const clientSecret = await createCheckoutSession({
    draftJson:  JSON.stringify(draft),
    returnUrl:  `${APP_URL}/welcome?session_id={CHECKOUT_SESSION_ID}`,
  })
  return NextResponse.json({ clientSecret })
}
