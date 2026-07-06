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

// Sent at the builder preview step (lead capture): the parent heard the preview
// in the browser, and this gives them a durable link to replay it any time plus
// a nudge to subscribe — so we can still convert them if they didn't buy on the
// spot. `previewUrl` is the /p/<token> page, which re-signs its audio on open.
export async function sendPreviewEmail(opts: {
  to:          string
  childName:   string
  levelTitle:  string
  previewUrl:  string
  checkoutUrl: string   // one-tap Stripe checkout for the "Start Story Club" CTA
  excerpt:     string
}) {
  const { to, childName, levelTitle, previewUrl, checkoutUrl, excerpt } = opts
  const name = childName || 'your child'
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''

  await getResend().emails.send({
    from:    EMAIL_FROM,
    to,
    subject: `🌙 Hear ${name}'s story again — ${levelTitle}`,
    html: `
<!DOCTYPE html>
<html>
<body style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#FBF4E6;color:#211a3a">
  <h1 style="font-size:26px;color:#3a2470;margin-bottom:8px">${name}'s free preview 🌙</h1>
  <p style="font-size:16px;color:#5d5278;margin-bottom:24px">${levelTitle}</p>
  <p style="margin-bottom:24px">Here's the story you started building — tap play to hear it again whenever you're ready for bedtime.</p>
  <a href="${previewUrl}" style="display:inline-block;background:#F4A93C;color:#3a230a;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:bold;font-size:16px;margin-bottom:24px">▶ Play the preview</a>
  ${excerpt ? `<hr style="border:none;border-top:1px solid #e4d8c0;margin:28px 0">
  <p style="font-size:13px;color:#9d8fad;margin-bottom:4px">A taste of the story:</p>
  <p style="font-size:14px;line-height:1.7;font-style:italic;color:#5d5278;white-space:pre-line">${excerpt}</p>` : ''}
  <hr style="border:none;border-top:1px solid #e4d8c0;margin:28px 0">
  <p style="font-size:15px;margin-bottom:16px"><strong>Keep the adventure going.</strong> Story Club sends a new levelled bedtime story every other night — building real skills, one calm evening at a time. First story free — cancel anytime.</p>
  <a href="${checkoutUrl}" style="display:inline-block;background:#3a2470;color:#fff;padding:13px 26px;border-radius:12px;text-decoration:none;font-weight:bold;font-size:15px">Start Story Club →</a>
  <p style="font-size:12px;color:#b9adda;margin-top:32px">
    You started a story at mylumi.xyz. <a href="${appUrl}/unsubscribe?email=${encodeURIComponent(to)}" style="color:#b9adda">Unsubscribe</a>
  </p>
</body>
</html>`,
    text: `${name}'s free preview — ${levelTitle}\n\nPlay it again: ${previewUrl}\n\n${excerpt ? excerpt + '\n\n' : ''}Keep the adventure going — Story Club sends a new levelled bedtime story every other night. First story free, cancel anytime.\n\nStart Story Club: ${checkoutUrl}`,
  })
}
