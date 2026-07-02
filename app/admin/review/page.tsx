'use client'
// app/admin/review/page.tsx
// Story safety/expert review console. Admin-only (ADMIN_EMAILS).
// Reads the real content client-side; approval status lives in the DB.

import { useState, useEffect } from 'react'
import { getAllSubjectSlugs, getAllLevels, getAllSkins, assembleAudio } from '@/content'
import { SUBJECT_META } from '@/content/meta'
import { AdminShell, AdminLoading, AdminForbidden } from '../AdminShell'

type Status = 'pending' | 'approved' | 'rejected'
interface ApprovalRow { subject_slug: string; level_ordinal: number; status: Status; reviewer_email: string | null; updated_at: string }

const SUBJECT_NAMES: Record<string, string> = Object.fromEntries(
  SUBJECT_META.map(s => [s.slug, `${s.emoji} ${s.name}`])
)
const STATUS_STYLE: Record<Status, { bg: string; fg: string; label: string }> = {
  approved: { bg:'#e7f6ee', fg:'#1c7a4a', label:'✓ Approved' },
  rejected: { bg:'#fdeaea', fg:'#c0392b', label:'✗ Needs work' },
  pending:  { bg:'#fff7ea', fg:'#8a6a1f', label:'• Pending' },
}

export default function ReviewPage() {
  const subjects = getAllSubjectSlugs()
  const [status, setStatus] = useState<Record<string, Status>>({})
  const [loading, setLoading] = useState(true)
  const [forbidden, setForbidden] = useState(false)
  const [savingKey, setSavingKey] = useState<string | null>(null)
  const [openKey, setOpenKey] = useState<string | null>(null)

  const key = (s: string, o: number) => `${s}:${o}`

  useEffect(() => {
    // Not adminFetch: it collapses 401/403 into 'forbidden', and this page
    // additionally redirects unauthenticated (401) visitors to /login.
    fetch('/api/admin/approvals')
      .then(async r => {
        if (r.status === 401) { window.location.href = '/login'; return null }
        if (r.status === 403) { setForbidden(true); return null }
        return r.json()
      })
      .then(data => {
        if (!data) return
        const map: Record<string, Status> = {}
        ;(data.approvals as ApprovalRow[]).forEach(a => { map[key(a.subject_slug, a.level_ordinal)] = a.status })
        setStatus(map)
      })
      .finally(() => setLoading(false))
  }, [])

  const setApproval = async (subjectSlug: string, levelOrdinal: number, next: Status) => {
    const k = key(subjectSlug, levelOrdinal)
    setSavingKey(k)
    const prev = status[k]
    setStatus(s => ({ ...s, [k]: next }))   // optimistic
    try {
      const res = await fetch('/api/admin/approvals', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subjectSlug, levelOrdinal, status: next }),
      })
      if (!res.ok) throw new Error()
    } catch {
      setStatus(s => ({ ...s, [k]: prev }))  // revert
      alert('Could not save. Check ADMIN_EMAILS and that the migration is applied.')
    } finally {
      setSavingKey(null)
    }
  }

  if (loading) return <AdminLoading />
  if (forbidden) return <AdminForbidden />

  // Progress summary
  const allLevels = subjects.flatMap(s => getAllLevels(s).map(l => key(s, l.ordinal)))
  const approvedCount = allLevels.filter(k => status[k] === 'approved').length

  return (
    <AdminShell active="/admin/review">
      <div style={{ marginBottom:'20px' }}>
        <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'26px' }}>Story review</h1>
        <p style={{ color:'#5d5278', fontSize:'14px', marginTop:'4px' }}>
          {approvedCount} of {allLevels.length} levels approved. A level is deliverable only once approved
          (when <code>ENFORCE_CONTENT_APPROVAL=true</code>).
        </p>
      </div>

      {subjects.map(subj => {
        const levels = getAllLevels(subj)
        const skins  = getAllSkins(subj)
        const sampleSkin = skins[0]?.slug ?? 'sea'
        const approved = levels.filter(l => status[key(subj, l.ordinal)] === 'approved').length
        return (
          <section key={subj} style={{ marginBottom:'28px' }}>
            <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'18px', marginBottom:'12px' }}>
              {SUBJECT_NAMES[subj] ?? subj} <span style={{ fontSize:'13px', color:'#5d5278', fontWeight:400 }}>· {approved}/{levels.length} approved</span>
            </h2>

            {levels.map(lv => {
              const k = key(subj, lv.ordinal)
              const st = status[k] ?? 'pending'
              const ss = STATUS_STYLE[st]
              const isOpen = openKey === k
              let story = ''
              try { story = assembleAudio(subj, lv.ordinal, sampleSkin).audioText } catch { story = '(could not render)' }
              return (
                <article key={k} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'14px', padding:'16px', marginBottom:'10px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'12px', flexWrap:'wrap' }}>
                    <span style={{ width:'28px', height:'28px', borderRadius:'8px', background:'#241a52', color:'#fff', display:'grid', placeItems:'center', fontWeight:700, fontSize:'13px', flexShrink:0 }}>{lv.ordinal}</span>
                    <div style={{ flex:1, minWidth:'160px' }}>
                      <div style={{ fontWeight:700, fontSize:'15px' }}>{lv.title}</div>
                      <div style={{ fontSize:'12px', color:'#5d5278' }}>Teaches: {lv.concept} · ages {lv.ageFloor}+{lv.callback ? ` · revisits ${lv.callback}` : ''}</div>
                    </div>
                    <span style={{ background:ss.bg, color:ss.fg, fontSize:'11.5px', fontWeight:800, padding:'4px 10px', borderRadius:'99px' }}>{ss.label}</span>
                  </div>

                  <button onClick={() => setOpenKey(isOpen ? null : k)}
                    style={{ marginTop:'10px', background:'none', border:'none', color:'#E0852A', fontWeight:700, fontSize:'13px', cursor:'pointer', padding:0 }}>
                    {isOpen ? '▾ Hide story' : '▸ Read story'}
                  </button>

                  {isOpen && (
                    <div style={{ marginTop:'10px' }}>
                      <p style={{ fontSize:'13px', color:'#5d5278', marginBottom:'8px' }}><strong>Summary:</strong> {lv.summary}</p>
                      <p style={{ fontSize:'13px', color:'#5d5278', marginBottom:'10px' }}><strong>Teaching note:</strong> {lv.teachingNote}</p>
                      <div style={{ background:'#FBF4E6', border:'1px solid #ece0c8', borderRadius:'10px', padding:'14px', fontFamily:'var(--font-fraunces)', fontSize:'14px', lineHeight:1.7, whiteSpace:'pre-line', color:'#211a3a' }}>
                        {story}
                      </div>
                      <p style={{ fontSize:'11.5px', color:'#9d92c0', marginTop:'6px' }}>Shown in the “{sampleSkin}” world. Other worlds swap only the hero/setting/motif — the lesson is identical.</p>
                    </div>
                  )}

                  <div style={{ display:'flex', gap:'8px', marginTop:'12px' }}>
                    <button onClick={() => setApproval(subj, lv.ordinal, 'approved')} disabled={savingKey===k}
                      style={{ padding:'8px 14px', borderRadius:'10px', border:'1.5px solid #1c7a4a', background: st==='approved'?'#1c7a4a':'#fff', color: st==='approved'?'#fff':'#1c7a4a', fontWeight:700, fontSize:'13px', cursor:'pointer' }}>Approve</button>
                    <button onClick={() => setApproval(subj, lv.ordinal, 'rejected')} disabled={savingKey===k}
                      style={{ padding:'8px 14px', borderRadius:'10px', border:'1.5px solid #c0392b', background: st==='rejected'?'#c0392b':'#fff', color: st==='rejected'?'#fff':'#c0392b', fontWeight:700, fontSize:'13px', cursor:'pointer' }}>Needs work</button>
                    {st !== 'pending' && (
                      <button onClick={() => setApproval(subj, lv.ordinal, 'pending')} disabled={savingKey===k}
                        style={{ padding:'8px 14px', borderRadius:'10px', border:'1px solid #e0d2b7', background:'#fff', color:'#5d5278', fontWeight:600, fontSize:'13px', cursor:'pointer' }}>Reset</button>
                    )}
                  </div>
                </article>
              )
            })}
          </section>
        )
      })}
    </AdminShell>
  )
}
