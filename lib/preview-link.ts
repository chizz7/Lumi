// lib/preview-link.ts
// A signed, URL-safe token that encodes everything needed to rebuild a Level-1
// preview (world, subject, voice, age, child name) — used for the durable
// /p/<token> preview page we email at the lead-capture step. Pre-purchase there
// is no story_instances row to key on (that only exists after payment), so we
// carry the preview params in the link itself, HMAC-signed so they can't be
// tampered into rendering something else.
//
// Worst case of a forged token: someone previews a different free Level-1 story.
// No user data is exposed, so a short HMAC (same posture as lib/draft.ts) is
// plenty. Signed with DRAFT_SECRET, the secret we already require at runtime.

import { createHmac } from 'crypto'

const SECRET = process.env.DRAFT_SECRET!

export interface PreviewLinkPayload {
  childName:   string
  ageBand:     string
  skinSlug:    string
  subjectSlug: string
  voiceId:     string
}

function b64url(buf: Buffer): string {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
function unb64url(s: string): Buffer {
  return Buffer.from(s.replace(/-/g, '+').replace(/_/g, '/'), 'base64')
}
function sign(data: string): string {
  return b64url(createHmac('sha256', SECRET).update(data).digest()).slice(0, 22)
}

export function signPreviewToken(p: PreviewLinkPayload): string {
  // Compact keys keep the URL short; the payload is tiny either way.
  const data = JSON.stringify({ n: p.childName, a: p.ageBand, k: p.skinSlug, s: p.subjectSlug, v: p.voiceId })
  const body = b64url(Buffer.from(data))
  return `${body}.${sign(body)}`
}

export function verifyPreviewToken(token: string): PreviewLinkPayload | null {
  try {
    const [body, sig] = token.split('.')
    if (!body || !sig || sign(body) !== sig) return null
    const o = JSON.parse(unb64url(body).toString()) as Record<string, string>
    if (!o.s || !o.k || !o.v || !o.a) return null
    return { childName: o.n ?? '', ageBand: o.a, skinSlug: o.k, subjectSlug: o.s, voiceId: o.v }
  } catch {
    return null
  }
}

// Build the absolute /p/<token> URL for an email link.
export function previewLink(p: PreviewLinkPayload, appUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''): string {
  return `${appUrl}/p/${signPreviewToken(p)}`
}
