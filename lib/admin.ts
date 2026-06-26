// lib/admin.ts
// Admin access = the logged-in user's email is in the ADMIN_EMAILS allowlist
// (comma-separated). Reuses the normal magic-link auth; no separate admin login.

import { serverClient } from '@/lib/supabase'
import type { User }    from '@supabase/supabase-js'

export function adminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map(e => e.trim().toLowerCase())
    .filter(Boolean)
}

export function isAdmin(email?: string | null): boolean {
  if (!email) return false
  return adminEmails().includes(email.toLowerCase())
}

// Shared gate for /api/admin/** routes. Returns the user when allowed, or an
// {error,status} to hand straight back to the client (401 / 403).
type AdminGate =
  | { ok: true;  status: 200; error: null;        user: User }
  | { ok: false; status: 401 | 403; error: string; user: null }

export async function requireAdmin(): Promise<AdminGate> {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user)               return { ok: false, status: 401, error: 'Unauthorized', user: null }
  if (!isAdmin(user.email)) return { ok: false, status: 403, error: 'Forbidden',    user: null }
  return { ok: true, status: 200, error: null, user }
}
