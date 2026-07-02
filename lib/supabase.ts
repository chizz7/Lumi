// lib/supabase.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { createClient }       from '@supabase/supabase-js'
import type { User }          from '@supabase/supabase-js'
import { cookies }            from 'next/headers'
import type { Database }      from '@/lib/database.types'

// Shape of the array Supabase passes to setAll (avoids implicit-any under strict)
type CookieToSet = { name: string; value: string; options?: CookieOptions }

const URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const SVC  = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Use in Server Components and Route Handlers — reads the session cookie.
// NOTE: not typed with <Database> — @supabase/ssr 0.5.x can't resolve the
// generic (every table becomes `never`); wire it after upgrading @supabase/ssr.
export async function serverClient() {
  const jar = await cookies()
  return createServerClient(URL, ANON, {
    cookies: {
      getAll: ()                  => jar.getAll(),
      setAll: (all: CookieToSet[]) => all.forEach(({ name, value, options }) => jar.set(name, value, options)),
    },
  })
}

type ServerSupabase = Awaited<ReturnType<typeof serverClient>>

// Shared auth gate for user-scoped routes (mirrors requireAdmin in lib/admin.ts).
// Returns the session user + the server client, or a ready-to-return 401.
type UserGate =
  | { ok: true;  user: User; supabase: ServerSupabase }
  | { ok: false; status: 401; error: 'Unauthorized' }

export async function requireUser(): Promise<UserGate> {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, status: 401, error: 'Unauthorized' }
  return { ok: true, user, supabase }
}

// Fetch the user's Stripe customer id, or a ready-to-return 400 for accounts
// that have no subscription yet (shared by /api/account/cancel and /portal).
type StripeCustomerGate =
  | { ok: true;  customerId: string }
  | { ok: false; status: 400; error: string }

export async function requireStripeCustomer(
  supabase: ServerSupabase,
  userId: string,
): Promise<StripeCustomerGate> {
  const { data: account } = await supabase
    .from('accounts')
    .select('stripe_customer_id')
    .eq('id', userId)
    .single()

  if (!account?.stripe_customer_id) {
    return { ok: false, status: 400, error: 'No subscription found for this account.' }
  }
  return { ok: true, customerId: account.stripe_customer_id }
}

// Use in webhook handlers and background work — bypasses RLS
export const adminClient = createClient<Database>(URL, SVC, {
  auth: { persistSession: false },
})

// Bucket names
export const BUCKETS = { AUDIO: 'audio' } as const
