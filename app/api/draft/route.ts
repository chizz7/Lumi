// app/api/draft/route.ts
// POST /api/draft — saves the builder state to a signed cookie.
// No auth, no DB. Just a cookie.

import { NextRequest, NextResponse } from 'next/server'
import { setDraft, type Draft } from '@/lib/draft'

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

  const draft: Draft = {
    childName:   (body.childName ?? '').trim().slice(0, 50),
    ageBand:     body.ageBand   || '5-6',
    skinSlug:    body.skinSlug,
    subjectSlug: body.subjectSlug,
    voiceId:     body.voiceId,
  }

  const res = NextResponse.json({ ok: true })
  setDraft(res, draft)
  return res
}
