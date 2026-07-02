// app/api/lead/route.ts
// POST /api/lead — capture a parent's email at the builder preview step, in
// exchange for unlocking their child's story audio. Unlike /api/waitlist this
// sends NO confirmation email (they're mid-funnel and about to hear the story);
// it just records the lead so an abandoned-funnel recovery email can be sent
// later if they don't subscribe. Stored in `waitlist` with a distinct source.

import { NextRequest, NextResponse }       from 'next/server'
import { parseSignupBody, upsertWaitlistRow } from '@/lib/signup'
import { track }                           from '@/lib/analytics'

export async function POST(req: NextRequest) {
  const parsed = await parseSignupBody(req, 'builder-preview')
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: parsed.status })

  const { email, lang, source } = parsed
  const { error } = await upsertWaitlistRow({ email, lang, source })

  if (error) {
    console.error('[lead] insert error:', error)
    // Non-blocking for the user: the story still unlocks client-side.
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  track('preview_email_captured', { lang, source })
  return NextResponse.json({ ok: true })
}
