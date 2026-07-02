// lib/referral.ts
// Referral program primitives. The reward: one free month ($9.99 credit to the
// referrer's Stripe balance) for every NEW user who subscribes with their code.
// Crediting itself lives in the Stripe webhook (the only place a "paid referral"
// is confirmed); this file owns code generation + shared constants.

import { randomBytes }  from 'crypto'
import { adminClient }  from '@/lib/supabase'
import { MONTH_CREDIT_CENTS } from '@/lib/stripe'

// One month of Story Club — the referral reward.
export const REFERRAL_REWARD_CENTS = MONTH_CREDIT_CENTS

// Unambiguous alphabet (no 0/O/1/I/L) so codes are easy to read aloud / type.
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'

// 8-char code → ~30^8 space; collisions are astronomically unlikely, and the
// caller still treats accounts.referral_code's UNIQUE constraint as the source
// of truth (retry on the rare conflict).
function generateReferralCode(length = 8): string {
  const bytes = randomBytes(length)
  let out = ''
  for (let i = 0; i < length; i++) out += ALPHABET[bytes[i] % ALPHABET.length]
  return out
}

// The shareable link a parent hands to a friend.
export function referralLink(code: string, appUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''): string {
  return `${appUrl.replace(/\/$/, '')}/?ref=${encodeURIComponent(code)}`
}

// Normalise an inbound ?ref= value: trim, uppercase, strip anything not in the
// alphabet. Returns null if nothing usable remains.
export function normaliseRefCode(raw: string | null | undefined): string | null {
  if (!raw) return null
  const cleaned = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 16)
  return cleaned || null
}

// Idempotently assign a referral code to an account. Never clobbers an existing
// code (so previously-shared links keep working), and retries on the (vanishing)
// chance of a UNIQUE collision. Uses the service-role client — call from trusted
// server code only. Returns the account's code, or null if it couldn't be set.
export async function ensureReferralCode(accountId: string): Promise<string | null> {
  const { data: current } = await adminClient
    .from('accounts').select('referral_code').eq('id', accountId).maybeSingle()
  if (current?.referral_code) return current.referral_code

  for (let attempt = 0; attempt < 5; attempt++) {
    const code = generateReferralCode()
    const { data: updated, error } = await adminClient
      .from('accounts')
      .update({ referral_code: code })
      .eq('id', accountId)
      .is('referral_code', null)         // only claim if still unset
      .select('referral_code')
      .maybeSingle()

    if (!error && updated?.referral_code) return updated.referral_code
    if (!error && !updated) {
      // A concurrent run set it (our WHERE matched 0 rows) — read theirs.
      const { data: row } = await adminClient
        .from('accounts').select('referral_code').eq('id', accountId).maybeSingle()
      return row?.referral_code ?? null
    }
    // error → almost certainly a referral_code UNIQUE collision; loop and retry.
  }
  return null
}
