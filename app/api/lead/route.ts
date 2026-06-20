// app/api/lead/route.ts
// POST /api/lead — capture a parent's email at the builder preview step, in
// exchange for unlocking their child's story audio. Unlike /api/waitlist this
// sends NO confirmation email (they're mid-funnel and about to hear the story);
// it just records the lead so an abandoned-funnel recovery email can be sent
// later if they don't subscribe. Stored in `waitlist` with a distinct source.

import { NextRequest, NextResponse } from 'next/server'
import { adminClient }               from '@/lib/supabase'
import { track }                     from '@/lib/analytics'

export async function POST(req: NextRequest) {
  let body: { email?: string; lang?: string; source?: string }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  const email  = (body.email ?? '').trim().toLowerCase()
  const lang   = (body.lang   ?? 'en').slice(0, 10)
  const source = (body.source ?? 'builder-preview').slice(0, 50)

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 422 })
  }

  // Upsert — never overwrite an earlier (e.g. waitlist) signup, just record it.
  const { error } = await adminClient
    .from('waitlist')
    .upsert({ email, lang, source }, { onConflict: 'email', ignoreDuplicates: true })

  if (error) {
    console.error('[lead] insert error:', error.message)
    // Non-blocking for the user: the story still unlocks client-side.
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  track('preview_email_captured', { lang, source })
  return NextResponse.json({ ok: true })
}
