// app/api/lead/route.ts
// POST /api/lead — capture a parent's email at the builder preview step, in
// exchange for unlocking their child's story audio. The parent hears the preview
// in the browser immediately; we ALSO email them a durable replay link (the
// /p/<token> page, which re-signs its audio on every open) plus a subscribe
// nudge — so an on-the-fence parent who doesn't buy on the spot can come back.
// The lead is stored in `waitlist` with a distinct source for funnel recovery.

import { NextRequest, NextResponse }         from 'next/server'
import { parseSignupBody, upsertWaitlistRow } from '@/lib/signup'
import { getDraft }                          from '@/lib/draft'
import { assembleStory, previewText }        from '@/content'
import { signPreviewToken }                  from '@/lib/preview-link'
import { sendPreviewEmail }                  from '@/lib/email'
import { track }                             from '@/lib/analytics'
import type { AgeBand }                      from '@/content/types'

export async function POST(req: NextRequest) {
  const parsed = await parseSignupBody(req, 'builder-preview')
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: parsed.status })

  const { email, lang, source } = parsed
  const { error, inserted } = await upsertWaitlistRow({ email, lang, source })

  if (error) {
    console.error('[lead] insert error:', error)
    // Non-blocking for the user: the story still unlocks client-side.
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  track('preview_email_captured', { lang, source })

  // Email the durable preview + subscribe nudge — but only on the FIRST capture
  // of this address (inserted), so re-previewing (switching voice/world and
  // re-submitting) doesn't email them on every tap. Draft carries the story
  // params; skip silently if there's no draft cookie yet.
  if (inserted) {
    const draft = await getDraft(req)
    if (draft) {
      try {
        const { level, script } = assembleStory(
          draft.subjectSlug, 1, draft.skinSlug, draft.childName, draft.ageBand as AgeBand | undefined,
        )
        const payload = {
          childName:   draft.childName,
          ageBand:     draft.ageBand,
          skinSlug:    draft.skinSlug,
          subjectSlug: draft.subjectSlug,
          voiceId:     draft.voiceId,
        }
        // One signed token drives both the replay page and the one-tap purchase
        // link, so they describe the same story.
        const token       = signPreviewToken(payload)
        const appUrl      = process.env.NEXT_PUBLIC_APP_URL ?? ''
        const previewUrl  = `${appUrl}/p/${token}`
        const checkoutUrl = `${appUrl}/api/checkout/from-preview?token=${token}`
        await sendPreviewEmail({
          to: email, childName: draft.childName, levelTitle: level.title,
          previewUrl, checkoutUrl, excerpt: previewText(script),
        })
        track('preview_email_sent', { subject: draft.subjectSlug, lang })
      } catch (err) {
        // Non-fatal: the in-browser preview already played; a failed email must
        // not break the unlock response.
        console.error('[lead] preview email failed (non-fatal):', err)
      }
    }
  }

  return NextResponse.json({ ok: true })
}
