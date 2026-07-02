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

  const email  = (body.email ?? '').trim().toLowerCase()
  const lang   = (body.lang   ?? 'en').slice(0, 10)
  const source = (body.source ?? defaultSource).slice(0, 50)

  // Basic email format check
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, status: 422, error: 'Please enter a valid email address.' }
  }
  return { ok: true, email, lang, source }
}

// Upsert — never overwrites an earlier signup (ignoreDuplicates). `.select()`
// returns the inserted row only when a NEW row was created, so `inserted` lets
// the waitlist route gate its confirmation email (anti email-bombing).
export async function upsertWaitlistRow(row: SignupRow): Promise<{ error: string | null; inserted: boolean }> {
  const { data, error } = await adminClient
    .from('waitlist')
    .upsert(row, { onConflict: 'email', ignoreDuplicates: true })
    .select('email')

  return { error: error?.message ?? null, inserted: (data?.length ?? 0) > 0 }
}
