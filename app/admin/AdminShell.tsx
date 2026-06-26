'use client'
// app/admin/AdminShell.tsx
// Shared chrome for the admin console: page frame + tab nav + the standard
// loading / not-authorised states (every admin API returns 401/403 the same way).

import type { ReactNode } from 'react'

const TABS = [
  { href: '/admin',           label: 'Overview' },
  { href: '/admin/lifecycle', label: 'Users' },
  { href: '/admin/events',    label: 'Events' },
  { href: '/admin/review',    label: 'Story review' },
]

export function AdminShell({ active, children }: { active?: string; children: ReactNode }) {
  return (
    <main style={{ minHeight:'100vh', background:'#FBF4E6', padding:'32px 20px 80px' }}>
      <div style={{ maxWidth:'860px', margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'18px' }}>
          <span style={{ fontSize:'22px' }}>🌙</span>
          <span style={{ fontFamily:'var(--font-fraunces)', fontSize:'18px', fontWeight:700 }}>Lumi admin</span>
        </div>
        <nav style={{ display:'flex', gap:'6px', marginBottom:'24px', flexWrap:'wrap' }} aria-label="Admin sections">
          {TABS.map(t => (
            <a key={t.href} href={t.href} aria-current={active === t.href ? 'page' : undefined}
              style={{
                padding:'8px 14px', borderRadius:'99px', fontSize:'13.5px', fontWeight:700, textDecoration:'none',
                background: active === t.href ? '#241a52' : '#fff',
                color:      active === t.href ? '#fff' : '#5d5278',
                border:'1px solid #ece0c8',
              }}>{t.label}</a>
          ))}
        </nav>
        {children}
      </div>
    </main>
  )
}

export function AdminLoading() {
  return <AdminShell><p style={{ color:'#5d5278' }}>Loading…</p></AdminShell>
}

export function AdminForbidden() {
  return (
    <AdminShell>
      <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', marginBottom:'8px' }}>Not authorised</h1>
      <p style={{ color:'#5d5278', fontSize:'14px' }}>Your account isn&apos;t on the admin allowlist. Add your email to the <code>ADMIN_EMAILS</code> environment variable.</p>
    </AdminShell>
  )
}

// Shared fetch helper: resolves to 'forbidden' on 401/403, null on other errors.
export async function adminFetch<T>(url: string): Promise<T | 'forbidden' | null> {
  try {
    const res = await fetch(url)
    if (res.status === 401 || res.status === 403) return 'forbidden'
    if (!res.ok) return null
    return await res.json() as T
  } catch { return null }
}
