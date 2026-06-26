// app/api/draft/route.ts
// POST /api/draft — saves the builder state to a signed cookie.
// No auth, no DB. Just a cookie.

import { NextRequest, NextResponse } from 'next/server'
import { setDraft, type Draft } from '@/lib/draft'
import { normaliseRefCode }     from '@/lib/referral'

export async function POST(req: NextRequest) {
  let body: Draft
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Basic presence check — no complex validation for MVP
  if (!body.skinSlug || !body.voiceId || !body.subjectSlug) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 })
  }

  // Referral attribution: prefer an explicit ref in the body, else fall back to
  // the lumi_ref cookie dropped by <RefCapture> when the visitor first landed
  // with ?ref=…. Either way it's normalised before it enters the signed draft.
  const ref = normaliseRefCode(body.ref ?? req.cookies.get('lumi_ref')?.value)

  const draft: Draft = {
    childName:    (body.childName ?? '').trim().slice(0, 50),
    ageBand:      body.ageBand   || '5-6',
    skinSlug:     body.skinSlug,
    subjectSlug:  body.subjectSlug,
    voiceId:      body.voiceId,
    interestSlug: body.interestSlug,
    ...(ref ? { ref } : {}),
  }

  const res = NextResponse.json({ ok: true })
  setDraft(res, draft)
  return res
}
