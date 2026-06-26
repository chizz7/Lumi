'use client'
// app/admin/lifecycle/page.tsx
// One row per account with its derived lifecycle stage. Attention-first ordering
// (stuck signups + overdue at the top) so problems surface immediately.

import { useEffect, useState } from 'react'
import { AdminShell, AdminLoading, AdminForbidden, adminFetch } from '../AdminShell'

type Stage = 'stuck_signup' | 'signed_up' | 'active' | 'overdue' | 'completed' | 'lapsed'
interface Child { name: string; subject: string; currentLevel: number; levelCount: number; lastDeliveredAt: string | null }
interface Row {
  id: string; email: string; plan: string; createdAt: string; referralCode: string | null
  childCount: number; totalStories: number; lastDeliveredAt: string | null; stage: Stage; children: Child[]
}
interface Data { generatedAt: string; counts: Record<string, number>; accounts: Row[] }

const STAGE_STYLE: Record<Stage, { bg: string; fg: string; label: string }> = {
  stuck_signup: { bg:'#fdeaea', fg:'#c0392b', label:'⚠ Stuck signup' },
  overdue:      { bg:'#fff2e0', fg:'#b5650f', label:'⏰ Overdue' },
  signed_up:    { bg:'#eef0fb', fg:'#3a3f8a', label:'• Signed up' },
  active:       { bg:'#e7f6ee', fg:'#1c7a4a', label:'✓ Active' },
  completed:    { bg:'#eef6f9', fg:'#2a6f8a', label:'★ Completed' },
  lapsed:       { bg:'#f1edf6', fg:'#6a5b86', label:'· Lapsed' },
}

const STAGE_ORDER: Stage[] = ['stuck_signup','overdue','signed_up','active','completed','lapsed']

function ago(iso: string | null): string {
  if (!iso) return 'never'
  const d = Date.now() - new Date(iso).getTime()
  const days = Math.floor(d / 86400000), hrs = Math.floor(d / 3600000)
  if (days >= 1) return `${days}d ago`
  if (hrs >= 1)  return `${hrs}h ago`
  return `${Math.max(1, Math.floor(d / 60000))}m ago`
}

export default function LifecyclePage() {
  const [data, setData] = useState<Data | null>(null)
  const [forbidden, setForbidden] = useState(false)
  const [filter, setFilter] = useState<Stage | 'all'>('all')

  useEffect(() => {
    adminFetch<Data>('/api/admin/lifecycle').then(r => {
      if (r === 'forbidden') setForbidden(true)
      else if (r) setData(r)
    })
  }, [])

  if (forbidden) return <AdminForbidden />
  if (!data) return <AdminLoading />

  const shown = filter === 'all' ? data.accounts : data.accounts.filter(a => a.stage === filter)

  return (
    <AdminShell active="/admin/lifecycle">
      <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'24px', marginBottom:'4px' }}>Users · lifecycle</h1>
      <p style={{ color:'#5d5278', fontSize:'13.5px', marginBottom:'18px' }}>{data.counts.total ?? 0} accounts. Stuck signups and overdue deliveries are pinned to the top.</p>

      <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', marginBottom:'18px' }}>
        <Chip label={`All ${data.counts.total ?? 0}`} on={filter==='all'} onClick={() => setFilter('all')} />
        {STAGE_ORDER.filter(s => (data.counts[s] ?? 0) > 0).map(s => (
          <Chip key={s} label={`${STAGE_STYLE[s].label} ${data.counts[s]}`} on={filter===s} onClick={() => setFilter(s)} />
        ))}
      </div>

      {shown.map(a => {
        const ss = STAGE_STYLE[a.stage]
        return (
          <div key={a.id} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'14px', padding:'14px 16px', marginBottom:'10px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px', flexWrap:'wrap' }}>
              <span style={{ background:ss.bg, color:ss.fg, fontSize:'11.5px', fontWeight:800, padding:'4px 10px', borderRadius:'99px', flexShrink:0 }}>{ss.label}</span>
              <div style={{ flex:1, minWidth:'180px' }}>
                <div style={{ fontWeight:700, fontSize:'14px' }}>{a.email}</div>
                <div style={{ fontSize:'12px', color:'#5d5278' }}>
                  {a.plan} · {a.childCount} {a.childCount === 1 ? 'child' : 'children'} · {a.totalStories} stories · joined {ago(a.createdAt)}
                </div>
              </div>
              <div style={{ fontSize:'12px', color:'#5d5278', textAlign:'right' }}>
                last story<br/><strong style={{ color:'#211a3a' }}>{ago(a.lastDeliveredAt)}</strong>
              </div>
            </div>
            {a.children.length > 0 && (
              <div style={{ marginTop:'10px', display:'flex', gap:'8px', flexWrap:'wrap' }}>
                {a.children.map((c, i) => (
                  <span key={i} style={{ fontSize:'11.5px', color:'#5d5278', background:'#FBF4E6', border:'1px solid #f0e6cf', borderRadius:'8px', padding:'3px 8px' }}>
                    {c.name || 'Child'} · {c.subject} · L{c.currentLevel}{c.levelCount ? `/${c.levelCount}` : ''}
                  </span>
                ))}
              </div>
            )}
          </div>
        )
      })}
      {shown.length === 0 && <p style={{ color:'#9d92c0', fontSize:'14px' }}>No accounts in this stage.</p>}
    </AdminShell>
  )
}

function Chip({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding:'6px 12px', borderRadius:'99px', fontSize:'12.5px', fontWeight:700, cursor:'pointer',
      background: on ? '#241a52' : '#fff', color: on ? '#fff' : '#5d5278', border:'1px solid #ece0c8',
    }}>{label}</button>
  )
}
