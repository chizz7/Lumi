// app/api/waitlist/route.ts
// POST /api/waitlist — capture email for waitlist or language availability notice.
// Used in: landing page hero, language-not-available banner, pricing section.

import { NextRequest, NextResponse }       from 'next/server'
import { parseSignupBody, upsertWaitlistRow } from '@/lib/signup'
import { track }                           from '@/lib/analytics'
import { getResend, EMAIL_FROM }           from '@/lib/email'

export async function POST(req: NextRequest) {
  const parsed = await parseSignupBody(req, 'landing')
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: parsed.status })

  const { email, lang, source } = parsed

  // Upsert — silently succeed if already on the list.
  const { error, inserted } = await upsertWaitlistRow({ email, lang, source })

  if (error) {
    console.error('[waitlist] insert error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  // Already on the list → no repeat email. Without this gate the endpoint is an
  // email-bombing primitive: anyone can spam a victim's inbox one POST at a time.
  if (!inserted) return NextResponse.json({ ok: true })

  // Send confirmation email (first signup only)
  try {
    await getResend().emails.send({
      from:    EMAIL_FROM,
      to:      email,
      subject: "You're on the Lumi waitlist 🌙",
      html: `
<body style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px;background:#FBF4E6;color:#211a3a">
  <h1 style="font-size:26px;color:#3a2470">You're on the list 🌙</h1>
  <p style="font-size:16px;line-height:1.6;margin-bottom:20px">
    We'll let you know as soon as Lumi stories are available${lang !== 'en' ? ` in your language` : ''}.
    In the meantime, you can already try our English stories free.
  </p>
  <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="display:inline-block;background:#F4A93C;color:#3a230a;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:bold">
    Try a story now →
  </a>
  <p style="font-size:12px;color:#b9adda;margin-top:32px">
    You signed up at lumi.app. <a href="${process.env.NEXT_PUBLIC_APP_URL}/unsubscribe?email=${encodeURIComponent(email)}" style="color:#b9adda">Unsubscribe</a>
  </p>
</body>`,
    })
  } catch (err) {
    console.error('[waitlist] confirmation email failed (non-fatal):', err)
  }

  track('waitlist_joined', { lang, source })
  return NextResponse.json({ ok: true })
}
