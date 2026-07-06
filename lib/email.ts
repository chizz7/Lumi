// lib/email.ts
import { Resend } from 'resend'

// Lazily construct the Resend client. Building it at module load would crash
// at import time when RESEND_API_KEY is absent — which is exactly what happens
// during Next.js "page data collection" at build time. Construct on first send
// instead, so the key is only required at runtime when we actually email.
let _resend: Resend | null = null
export function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY
    if (!key) throw new Error('RESEND_API_KEY is not set')
    _resend = new Resend(key)
  }
  return _resend
}

export const EMAIL_FROM = process.env.EMAIL_FROM ?? 'stories@mylumi.xyz'

export async function sendStoryEmail(opts: {
  to:         string
  childName:  string
  levelTitle: string
  audioUrl:   string
  script:     string
}) {
  const { to, childName, levelTitle, audioUrl, script } = opts
  const name = childName || 'your child'

  await getResend().emails.send({
    from:    EMAIL_FROM,
    to,
    subject: `🌙 ${name}'s story is ready — ${levelTitle}`,
    html: `
<!DOCTYPE html>
<html>
<body style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#FBF4E6;color:#211a3a">
  <h1 style="font-size:26px;color:#3a2470;margin-bottom:8px">${name}'s story is ready 🌙</h1>
  <p style="font-size:16px;color:#5d5278;margin-bottom:24px">${levelTitle}</p>
  <p style="margin-bottom:28px">Tonight's bedtime adventure is waiting. Tap play whenever you're ready.</p>
  <a href="${audioUrl}" style="display:inline-block;background:#F4A93C;color:#3a230a;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:bold;font-size:16px;margin-bottom:24px">▶ Play the story</a>
  <hr style="border:none;border-top:1px solid #e4d8c0;margin:28px 0">
  <p style="font-size:13px;color:#9d8fad;margin-bottom:4px">The full story text:</p>
  <p style="font-size:14px;line-height:1.7;font-style:italic;color:#5d5278;white-space:pre-line">${script}</p>
  <hr style="border:none;border-top:1px solid #e4d8c0;margin:28px 0">
  <p style="font-size:12px;color:#b9adda">
    <a href="${process.env.NEXT_PUBLIC_APP_URL}/library" style="color:#9B86E0">View your library</a> ·
    <a href="${process.env.NEXT_PUBLIC_APP_URL}/account" style="color:#9B86E0">Account settings</a>
  </p>
</body>
</html>`,
    text: `${name}'s story is ready — ${levelTitle}\n\nPlay: ${audioUrl}\n\n${script}`,
  })
}
