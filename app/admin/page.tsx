'use client'
// app/admin/page.tsx
// Overview — the daily driver. Pulls the one urgent number from each module so
// an admin can triage in ten seconds, then deep-link into the detail pages.

import { useEffect, useState } from 'react'
import { AdminShell, AdminLoading, AdminForbidden, adminFetch, timeAgo } from './AdminShell'

interface Lifecycle { counts: Record<string, number> }
interface Events {
  health: { webhooks24h: number; deliveries24h: number; referralsCredited: number; referralsPending: number; lastCronAt: string | null; cronStale: boolean }
}

export default function AdminOverview() {
  const [life, setLife] = useState<Lifecycle | null>(null)
  const [evt, setEvt]   = useState<Events | null>(null)
  const [forbidden, setForbidden] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    Promise.all([
      adminFetch<Lifecycle>('/api/admin/lifecycle'),
      adminFetch<Events>('/api/admin/events'),
    ]).then(([l, e]) => {
      if (l === 'forbidden' || e === 'forbidden') { setForbidden(true); return }
      if (l) setLife(l)
      if (e) setEvt(e)
    }).finally(() => setReady(true))
  }, [])

  if (forbidden) return <AdminForbidden />
  if (!ready) return <AdminLoading />

  const c = life?.counts ?? {}
  const h = evt?.health
  const stuck = (c.stuck_signup ?? 0) + (c.overdue ?? 0)
  const attention: string[] = []
  if (c.stuck_signup) attention.push(`${c.stuck_signup} stuck signup${c.stuck_signup === 1 ? '' : 's'}`)
  if (c.overdue)      attention.push(`${c.overdue} overdue deliver${c.overdue === 1 ? 'y' : 'ies'}`)
  if (h?.cronStale)   attention.push('cron looks stale')
  if (h?.referralsPending) attention.push(`${h.referralsPending} referral${h.referralsPending === 1 ? '' : 's'} pending`)

  return (
    <AdminShell active="/admin">
      <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'24px', marginBottom:'14px' }}>Overview</h1>

      {/* Needs-attention banner */}
      <div style={{
        background: stuck || h?.cronStale ? '#fdeaea' : '#e7f6ee',
        border: `1px solid ${stuck || h?.cronStale ? '#f3c6c6' : '#bfe6cf'}`,
        borderRadius:'14px', padding:'16px 18px', marginBottom:'24px',
      }}>
        <div style={{ fontWeight:800, fontSize:'14px', color: stuck || h?.cronStale ? '#c0392b' : '#1c7a4a' }}>
          {attention.length ? '⚠ Needs attention' : '✓ All healthy'}
        </div>
        <p style={{ fontSize:'13px', color:'#5d5278', marginTop:'4px' }}>
          {attention.length ? attention.join(' · ') : 'No stuck signups, deliveries on schedule, cron fresh.'}
        </p>
        {stuck > 0 && <a href="/admin/lifecycle" style={{ display:'inline-block', marginTop:'8px', fontSize:'13px', fontWeight:700, color:'#E0852A' }}>Review users →</a>}
      </div>

      {/* Lifecycle stage counts */}
      <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'15px', marginBottom:'8px' }}>Lifecycle</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))', gap:'10px', marginBottom:'24px' }}>
        <Stat label="Total" value={c.total ?? 0} />
        <Stat label="Active" value={c.active ?? 0} fg="#1c7a4a" />
        <Stat label="Overdue" value={c.overdue ?? 0} fg={c.overdue ? '#b5650f' : undefined} />
        <Stat label="Stuck signup" value={c.stuck_signup ?? 0} fg={c.stuck_signup ? '#c0392b' : undefined} />
        <Stat label="Completed" value={c.completed ?? 0} />
        <Stat label="Lapsed" value={c.lapsed ?? 0} />
      </div>

      {/* Ops health */}
      <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'15px', marginBottom:'8px' }}>System health</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))', gap:'10px', marginBottom:'10px' }}>
        <Stat label="Webhooks 24h" value={h?.webhooks24h ?? 0} />
        <Stat label="Deliveries 24h" value={h?.deliveries24h ?? 0} />
        <Stat label="Last cron" value={timeAgo(h?.lastCronAt)} fg={h?.cronStale ? '#c0392b' : '#1c7a4a'} small />
        <Stat label="Free months given" value={h?.referralsCredited ?? 0} />
      </div>
      <a href="/admin/events" style={{ fontSize:'13px', fontWeight:700, color:'#E0852A' }}>See all events →</a>
    </AdminShell>
  )
}

function Stat({ label, value, fg, small }: { label: string; value: string | number; fg?: string; small?: boolean }) {
  return (
    <div style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'13px', padding:'14px 16px' }}>
      <div style={{ fontSize:'11.5px', color:'#5d5278', fontWeight:700, textTransform:'uppercase', letterSpacing:'.04em' }}>{label}</div>
      <div style={{ fontSize: small ? '15px' : '22px', fontWeight:800, color: fg ?? '#211a3a', marginTop:'4px' }}>{value}</div>
    </div>
  )
}
