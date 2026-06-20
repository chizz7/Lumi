// lib/admin.ts
// Admin access = the logged-in user's email is in the ADMIN_EMAILS allowlist
// (comma-separated). Reuses the normal magic-link auth; no separate admin login.

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
