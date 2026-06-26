// app/api/waitlist/route.ts
// POST /api/waitlist — capture email for waitlist or language availability notice.
// Used in: landing page hero, language-not-available banner, pricing section.

import { NextRequest, NextResponse } from 'next/server'
import { adminClient }               from '@/lib/supabase'
import { track }                     from '@/lib/analytics'
import { getResend, EMAIL_FROM }     from '@/lib/email'

export async function POST(req: NextRequest) {
  let body: { email?: string; lang?: string; source?: string }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  const email  = (body.email ?? '').trim().toLowerCase()
  const lang   = (body.lang   ?? 'en').slice(0, 10)
  const source = (body.source ?? 'landing').slice(0, 50)

  // Basic email format check
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 422 })
  }

  // Upsert — silently succeed if already on the list
  const { error } = await adminClient
    .from('waitlist')
    .upsert({ email, lang, source }, { onConflict: 'email', ignoreDuplicates: true })

  if (error) {
    console.error('[waitlist] insert error:', error.message)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  // Send confirmation email
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
