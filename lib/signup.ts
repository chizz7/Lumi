// lib/signup.ts
// Shared email-capture plumbing for /api/waitlist and /api/lead: both parse the
// same body shape, normalise the same way, and upsert into the `waitlist` table.
// Only the waitlist route sends a confirmation email (gated on a NEW insert).

import type { NextRequest } from 'next/server'
import { adminClient }      from '@/lib/supabase'

export type SignupRow = { email: string; lang: string; source: string }

type ParseResult =
  | ({ ok: true } & SignupRow)
  | { ok: false; status: 400 | 422; error: string }

export async function parseSignupBody(req: NextRequest, defaultSource: string): Promise<ParseResult> {
  let body: { email?: string; lang?: string; source?: string }
  try { body = await req.json() } catch { return { ok: false, status: 400, error: 'Invalid JSON' } }

  // Coerce defensively: a non-string email/lang/source (e.g. {"email":123})
  // would throw an unhandled TypeError on .trim()/.slice() → 500 on a public
  // unauthenticated endpoint. Treat any non-string as absent.
  const email  = (typeof body.email  === 'string' ? body.email  : '').trim().toLowerCase()
  const lang   = (typeof body.lang   === 'string' ? body.lang   : 'en').slice(0, 10)
  const source = (typeof body.source === 'string' ? body.source : defaultSource).slice(0, 50)

  // Basic email format check
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, status: 422, error: 'Please enter a valid email address.' }
  }
  return { ok: true, email, lang, source }
}

// Upsert — never overwrites an earlier signup (ignoreDuplicates). `.select()`
// returns the inserted row only when a NEW row was created. Used by /api/lead,
// which sends no email, so it only needs the row to exist.
export async function upsertWaitlistRow(row: SignupRow): Promise<{ error: string | null; inserted: boolean }> {
  const { data, error } = await adminClient
    .from('waitlist')
    .upsert(row, { onConflict: 'email', ignoreDuplicates: true })
    .select('email')

  return { error: error?.message ?? null, inserted: (data?.length ?? 0) > 0 }
}

// Sources that are mid-funnel LEAD captures (no confirmation email was sent).
const LEAD_SOURCES = new Set(['builder-preview'])

// For the waitlist route: record the join and decide whether to send the
// confirmation email. Sends iff this address hasn't already been confirmed on
// the waitlist — i.e. it's brand new, OR it existed only as a mid-funnel lead.
// (The old ignoreDuplicates path suppressed the confirmation forever whenever a
// lead capture had touched the same email first, because the table is shared.)
export async function joinWaitlist(row: SignupRow): Promise<{ error: string | null; sendEmail: boolean }> {
  const { data: existing } = await adminClient
    .from('waitlist').select('source').eq('email', row.email).maybeSingle()
  const alreadyConfirmed = !!existing?.source && !LEAD_SOURCES.has(existing.source)

  // Upsert WITHOUT ignoreDuplicates so a prior lead row is promoted to this
  // waitlist source (and re-confirmations flip alreadyConfirmed=true next time).
  const { error } = await adminClient
    .from('waitlist').upsert(row, { onConflict: 'email' })

  return { error: error?.message ?? null, sendEmail: !error && !alreadyConfirmed }
}
