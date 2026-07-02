'use client'
// app/admin/events/page.tsx
// System-event health: a green/red strip up top, then the recent webhook,
// cron, delivery and referral activity that proves things are (or aren't) firing.

import { useEffect, useState } from 'react'
import { AdminShell, AdminLoading, AdminForbidden, adminFetch, timeAgo } from '../AdminShell'

interface Health {
  webhooks24h: number; deliveries24h: number; referralsCredited: number
  referralsPending: number; lastCronAt: string | null; cronStale: boolean
}
interface Data {
  generatedAt: string; health: Health
  webhooks:   { event_id: string; type: string; processed_at: string }[]
  cronRuns:   { job: string; scanned: number; delivered: number; skipped: number; ran_at: string }[]
  deliveries: { id: string; subject_slug: string; level_ordinal: number; delivered_at: string }[]
  referrals:  { status: string; reward_cents: number; created_at: string; credited_at: string | null }[]
}

// This page's timestamps show '—' when absent (rather than 'never').
const when = (iso: string | null) => timeAgo(iso, '—')

export default function EventsPage() {
  const [data, setData] = useState<Data | null>(null)
  const [forbidden, setForbidden] = useState(false)

  useEffect(() => {
    adminFetch<Data>('/api/admin/events').then(r => {
      if (r === 'forbidden') setForbidden(true)
      else if (r) setData(r)
    })
  }, [])

  if (forbidden) return <AdminForbidden />
  if (!data) return <AdminLoading />

  const h = data.health
  return (
    <AdminShell active="/admin/events">
      <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'24px', marginBottom:'4px' }}>System events</h1>
      <p style={{ color:'#5d5278', fontSize:'13.5px', marginBottom:'18px' }}>Did everything fire? Webhooks, cron, deliveries and referral rewards.</p>

      {/* Health strip */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'10px', marginBottom:'24px' }}>
        <Tile label="Webhooks (24h)" value={h.webhooks24h} />
        <Tile label="Deliveries (24h)" value={h.deliveries24h} />
        <Tile label="Last cron run" value={when(h.lastCronAt)} tone={h.cronStale ? 'bad' : 'ok'} />
        <Tile label="Referral months" value={h.referralsCredited} sub={h.referralsPending ? `${h.referralsPending} pending` : undefined} />
      </div>

      <Section title="Stripe webhooks">
        {data.webhooks.length === 0 ? <Empty /> : data.webhooks.map(w => (
          <Line key={w.event_id} left={w.type} right={when(w.processed_at)} mono={w.event_id} />
        ))}
      </Section>

      <Section title="Cron delivery runs">
        {data.cronRuns.length === 0 ? <Empty text="No cron runs recorded yet." /> : data.cronRuns.map((c, i) => (
          <Line key={i} left={`${c.job}: delivered ${c.delivered} · skipped ${c.skipped} · scanned ${c.scanned}`} right={when(c.ran_at)} />
        ))}
      </Section>

      <Section title="Recent deliveries">
        {data.deliveries.length === 0 ? <Empty /> : data.deliveries.map(d => (
          <Line key={d.id} left={`${d.subject_slug} · L${d.level_ordinal}`} right={when(d.delivered_at)} />
        ))}
      </Section>

      <Section title="Referrals">
        {data.referrals.length === 0 ? <Empty text="No referrals yet." /> : data.referrals.map((r, i) => (
          <Line key={i} left={`${r.status === 'credited' ? '✓ credited' : r.status} · $${(r.reward_cents/100).toFixed(2)}`} right={when(r.credited_at ?? r.created_at)} />
        ))}
      </Section>
    </AdminShell>
  )
}

function Tile({ label, value, tone, sub }: { label: string; value: string | number; tone?: 'ok' | 'bad'; sub?: string }) {
  const fg = tone === 'bad' ? '#c0392b' : tone === 'ok' ? '#1c7a4a' : '#211a3a'
  const bg = tone === 'bad' ? '#fdeaea' : '#fff'
  return (
    <div style={{ background:bg, border:'1px solid #ece0c8', borderRadius:'13px', padding:'14px 16px' }}>
      <div style={{ fontSize:'11.5px', color:'#5d5278', fontWeight:700, textTransform:'uppercase', letterSpacing:'.04em' }}>{label}</div>
      <div style={{ fontSize:'22px', fontWeight:800, color:fg, marginTop:'4px' }}>{value}</div>
      {sub && <div style={{ fontSize:'11.5px', color:'#b5650f', marginTop:'2px' }}>{sub}</div>}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom:'22px' }}>
      <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'15px', marginBottom:'8px' }}>{title}</h2>
      <div style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'13px', overflow:'hidden' }}>{children}</div>
    </section>
  )
}

function Line({ left, right, mono }: { left: string; right: string; mono?: string }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'10px', padding:'10px 14px', borderBottom:'1px solid #f4e9d4', fontSize:'13px' }}>
      <div style={{ minWidth:0 }}>
        <span style={{ fontWeight:600, color:'#211a3a' }}>{left}</span>
        {mono && <span style={{ display:'block', fontSize:'11px', color:'#9d92c0', fontFamily:'monospace', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{mono}</span>}
      </div>
      <span style={{ color:'#5d5278', flexShrink:0 }}>{right}</span>
    </div>
  )
}

function Empty({ text = 'Nothing yet.' }: { text?: string }) {
  return <div style={{ padding:'14px', fontSize:'13px', color:'#9d92c0' }}>{text}</div>
}
