// app/api/draft/route.ts
// POST /api/draft — saves the builder state to a signed cookie.
// No auth, no DB. Just a cookie.
//
// Validation matters here even though it's "just a cookie": these values ride
// the signed draft into Stripe metadata and land in the paid-signup webhook.
// An unknown subject/skin/voice there makes assembleStory throw AFTER the
// customer has paid — the webhook 5xxes and Stripe retries a signup that can
// never complete. Reject bad values before anyone pays.

import { NextRequest, NextResponse } from 'next/server'
import { setDraft, type Draft } from '@/lib/draft'
import { normaliseRefCode }     from '@/lib/referral'
import { getAllSubjectSlugs, getAllSkins } from '@/content'
import { VOICES_BY_LANG }       from '@/lib/voices'

const AGE_BANDS = new Set(['3-4', '5-6', '7-8', '9-11'])
const VOICE_IDS = new Set(Object.values(VOICES_BY_LANG).flat().map(v => v.id))

export async function POST(req: NextRequest) {
  let body: Draft
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.skinSlug || !body.voiceId || !body.subjectSlug) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 })
  }
  if (!getAllSubjectSlugs().includes(body.subjectSlug)) {
    return NextResponse.json({ error: 'Unknown subject' }, { status: 422 })
  }
  if (!getAllSkins(body.subjectSlug).some(s => s.slug === body.skinSlug)) {
    return NextResponse.json({ error: 'Unknown world' }, { status: 422 })
  }
  if (!VOICE_IDS.has(body.voiceId)) {
    return NextResponse.json({ error: 'Unknown voice' }, { status: 422 })
  }

  // Referral attribution: prefer an explicit ref in the body, else fall back to
  // the lumi_ref cookie dropped by <RefCapture> when the visitor first landed
  // with ?ref=…. Either way it's normalised before it enters the signed draft.
  const ref = normaliseRefCode(body.ref ?? req.cookies.get('lumi_ref')?.value)

  const draft: Draft = {
    // Braces are stripped defensively in fillTemplate too, but never let them in.
    childName:    (body.childName ?? '').replace(/[{}]/g, '').trim().slice(0, 50),
    ageBand:      AGE_BANDS.has(body.ageBand ?? '') ? body.ageBand : '5-6',
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
