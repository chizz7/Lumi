// lib/supabase.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { createClient }       from '@supabase/supabase-js'
import { cookies }            from 'next/headers'

// Shape of the array Supabase passes to setAll (avoids implicit-any under strict)
type CookieToSet = { name: string; value: string; options?: CookieOptions }

const URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const SVC  = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Use in Server Components and Route Handlers — reads the session cookie
export async function serverClient() {
  const jar = await cookies()
  return createServerClient(URL, ANON, {
    cookies: {
      getAll: ()                  => jar.getAll(),
      setAll: (all: CookieToSet[]) => all.forEach(({ name, value, options }) => jar.set(name, value, options)),
    },
  })
}

// Use in webhook handlers and background work — bypasses RLS
export const adminClient = createClient(URL, SVC, {
  auth: { persistSession: false },
})

// Bucket names
export const BUCKETS = { AUDIO: 'audio', SCRIPTS: 'scripts' } as const
