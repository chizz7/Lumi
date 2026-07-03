'use client'
// app/(app)/account/page.tsx
import { useState, useEffect } from 'react'
import { getVoicesForLang } from '@/lib/voices'
import { getLevelCount } from '@/content'
import { SUBJECT_META, WORLD_META, AGE_BANDS } from '@/content/meta'
import ReferralCard from '@/app/_components/ReferralCard'
import AppNav from '@/app/_components/AppNav'

interface Child { id: string; name: string; age_band: string; skin_slug: string; subject_slug: string; voice_id: string; current_level: number }
interface AccountData {
  account: { email: string; plan: string; created_at: string }
  profiles: Child[]
}

const VOICES   = getVoicesForLang('en')
const WORLDS   = WORLD_META
const SUBJECTS = SUBJECT_META

export default function AccountPage() {
  const [data,        setData]        = useState<AccountData | null>(null)
  const [loadError,   setLoadError]   = useState<string | null>(null)
  const [confirmText, setConfirmText] = useState('')
  const [deleting,    setDeleting]    = useState(false)
  const [deleteError, setDeleteError] = useState<string | null>(null)
  const [portalBusy,  setPortalBusy]  = useState(false)
  const [cancelBusy,  setCancelBusy]  = useState(false)

  // Add/edit child modal state
  const [editing, setEditing] = useState(false)
  const [mode, setMode] = useState<'edit' | 'add'>('edit')
  const [savingEdit, setSavingEdit] = useState(false)
  const [form, setForm] = useState({ childId:'', name:'', ageBand:'5-6', skinSlug:'sea', subjectSlug:'money', voiceId:'af_heart' })

  const loadAccount = async () => {
    setLoadError(null)
    try {
      const res  = await fetch('/api/account')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const body = await res.json()
      // account can be null for a moment right after signup — treat as not-ready
      if (!body?.account?.email) throw new Error('Account not ready')
      setData(body)
    } catch {
      setLoadError("We couldn't load your account just now.")
    }
  }
  useEffect(() => { loadAccount() }, [])

  const openEdit = (c: Child) => {
    setMode('edit')
    setForm({ childId:c.id, name:c.name, ageBand:c.age_band, skinSlug:c.skin_slug, subjectSlug:c.subject_slug, voiceId:c.voice_id })
    setEditing(true)
  }

  const openAdd = () => {
    setMode('add')
    setForm({ childId:'', name:'', ageBand:'5-6', skinSlug:'sea', subjectSlug:'money', voiceId: VOICES[0]?.id ?? 'af_heart' })
    setEditing(true)
  }

  const saveEdit = async () => {
    setSavingEdit(true)
    try {
      const res  = await fetch('/api/account', {
        method: mode === 'add' ? 'POST' : 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mode === 'add'
          ? { name:form.name, ageBand:form.ageBand, skinSlug:form.skinSlug, subjectSlug:form.subjectSlug, voiceId:form.voiceId }
          : { childId:form.childId, name:form.name, ageBand:form.ageBand, skinSlug:form.skinSlug, voiceId:form.voiceId }),
      })
      const body = await res.json()
      if (body.ok && body.profile) {
        setData(d => {
          if (!d) return d
          const profiles = mode === 'add'
            ? [...d.profiles, body.profile]
            : d.profiles.map(p => p.id === body.profile.id ? body.profile : p)
          return { ...d, profiles }
        })
        setEditing(false)
      } else {
        alert(body.error ?? 'Could not save changes.')
      }
    } catch {
      alert('Could not save changes.')
    } finally {
      setSavingEdit(false)
    }
  }

  const openPortal = async () => {
    setPortalBusy(true)
    try {
      const res  = await fetch('/api/account/portal', { method: 'POST' })
      const body = await res.json()
      if (body.url) window.location.href = body.url
      else { alert(body.error ?? 'Could not open the subscription portal.'); setPortalBusy(false) }
    } catch {
      alert('Could not open the subscription portal.'); setPortalBusy(false)
    }
  }

  const cancelSub = async () => {
    if (!confirm('Cancel your Story Club subscription? This ends it immediately (including any free trial).')) return
    setCancelBusy(true)
    try {
      const res  = await fetch('/api/account/cancel', { method: 'POST' })
      const body = await res.json()
      if (res.ok && body.ok) {
        // Reflect the cancellation immediately, then re-fetch the source of truth.
        setData(d => d ? { ...d, account: { ...d.account, plan: 'cancelled' } } : d)
        await loadAccount()
        alert('Subscription cancelled.')
      } else {
        alert(body.error ?? 'Could not cancel the subscription.')
      }
    } catch {
      alert('Could not cancel the subscription.')
    } finally {
      setCancelBusy(false)
    }
  }

  const exportData = async () => {
    const res  = await fetch('/api/account/export')
    const blob = await res.blob()
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href = url; a.download = 'lumi-data-export.json'; a.click()
    URL.revokeObjectURL(url)
  }

  const handleDelete = async () => {
    if (confirmText !== 'DELETE') return
    setDeleting(true)
    setDeleteError(null)
    try {
      const res = await fetch('/api/account', { method: 'DELETE', headers: { 'x-confirm-delete': 'DELETE' } })
      if (!res.ok) {
        let msg = "We couldn't delete your account. Please try again."
        try {
          const body = await res.json()
          if (body?.error) msg = body.error
        } catch { /* non-JSON error body */ }
        setDeleteError(msg)
        return
      }
      window.location.href = '/'
    } catch {
      setDeleteError("We couldn't delete your account. Please check your connection and try again.")
    } finally {
      setDeleting(false)
    }
  }

  if (!data) {
    if (loadError) return (
      <div style={{ minHeight:'100vh', display:'grid', placeItems:'center', background:'#FBF4E6', padding:'24px' }}>
        <div style={{ textAlign:'center', color:'#5d5278', maxWidth:'360px' }}>
          <div style={{ fontSize:'40px', marginBottom:'12px' }}>🌙</div>
          <p style={{ fontSize:'15px', lineHeight:1.6, marginBottom:'16px' }}>{loadError}</p>
          <button onClick={loadAccount}
            style={{ padding:'12px 24px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'12px', cursor:'pointer', fontSize:'14px' }}>
            Retry
          </button>
        </div>
      </div>
    )
    return <div style={{ minHeight:'100vh', display:'grid', placeItems:'center', background:'#FBF4E6' }}>Loading…</div>
  }

  const isActive = data.account.plan === 'club'

  return (
    <main style={{ minHeight:'100vh', background:'#FBF4E6', paddingBottom:'80px' }}>
      <header style={{ background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff', padding:'60px 24px 24px' }}>
        <div style={{ maxWidth:'520px', margin:'0 auto' }}>
          <div style={{ width:'60px', height:'60px', borderRadius:'50%', background:'rgba(244,169,60,.25)', border:'2px solid rgba(244,169,60,.4)', display:'grid', placeItems:'center', fontSize:'24px', marginBottom:'14px' }}>🌙</div>
          <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'24px' }}>Account</h1>
          <p style={{ color:'#dccffa', marginTop:'4px', fontSize:'14px' }}>{data.account.email}</p>
        </div>
      </header>

      <div style={{ maxWidth:'520px', margin:'0 auto', padding:'24px' }}>
        {/* Plan card — badge reflects the real plan from the API */}
        <div style={{ background:'linear-gradient(135deg,#241a52,#3a2470)', borderRadius:'16px', padding:'16px 18px', marginBottom:'22px', display:'flex', alignItems:'center', justifyContent:'space-between', color:'#fff' }}>
          <div>
            <div style={{ fontFamily:'var(--font-fraunces)', fontSize:'17px' }}>Story Club</div>
            <div style={{ fontSize:'12.5px', color:'#cfc3ea', marginTop:'2px' }}>
              {isActive ? 'New story every other day · All voices' : 'Your subscription has ended — stories in your library stay yours'}
            </div>
          </div>
          {isActive ? (
            <span style={{ background:'#F4A93C', color:'#3a230a', fontSize:'11px', fontWeight:800, padding:'4px 12px', borderRadius:'99px' }}>Active</span>
          ) : (
            <span style={{ background:'rgba(255,255,255,.15)', border:'1px solid rgba(255,255,255,.25)', color:'#dccffa', fontSize:'11px', fontWeight:800, padding:'4px 12px', borderRadius:'99px' }}>Cancelled / Free</span>
          )}
        </div>

        {isActive && (
          <>
            {/* Manage subscription — opens the Stripe billing portal (cancel, update
                card, view invoices) so we don't rebuild those screens ourselves. */}
            <button onClick={openPortal} disabled={portalBusy}
              style={{ width:'100%', padding:'13px 14px', background:'#fff', border:'1px solid #ece0c8', borderRadius:'12px', fontWeight:700, cursor: portalBusy ? 'wait' : 'pointer', fontSize:'14px', marginBottom:'22px', textAlign:'left', color:'#211a3a', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span>💳 Manage subscription</span>
              <span style={{ color:'#9d92c0', fontSize:'13px' }}>{portalBusy ? 'Opening…' : 'Cancel · update card · invoices →'}</span>
            </button>

            {/* Direct cancel — ends the subscription (incl. trial) immediately. */}
            <button onClick={cancelSub} disabled={cancelBusy}
              style={{ width:'100%', padding:'12px 14px', background:'#fff', border:'1px solid #f1c9c2', borderRadius:'12px', fontWeight:700, cursor: cancelBusy ? 'wait' : 'pointer', fontSize:'14px', marginBottom:'22px', textAlign:'left', color:'#c0392b', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span>✕ Cancel subscription</span>
              <span style={{ color:'#d99', fontSize:'13px' }}>{cancelBusy ? 'Cancelling…' : 'Ends now, incl. trial →'}</span>
            </button>
          </>
        )}

        {/* Refer friends — a free month for every paid referral */}
        <ReferralCard />

        {/* Children — one subscription covers all of them */}
        <section aria-labelledby="children-heading" style={{ marginBottom:'22px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'12px' }}>
            <h2 id="children-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'16px' }}>Children</h2>
            <span style={{ fontSize:'12px', color:'#5d5278' }}>One subscription, all your kids</span>
          </div>

          {data.profiles.map(p => (
            <div key={p.id} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'16px', padding:'18px', marginBottom:'12px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px' }}>
                <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'15px' }}>{p.name || 'Child'}</h3>
                <button onClick={() => openEdit(p)} style={{ fontSize:'13px', fontWeight:700, color:'#E0852A', background:'none', border:'none', cursor:'pointer' }}>Edit</button>
              </div>
              {([
                ['Age band', AGE_BANDS.find(b => b.value === p.age_band)?.label ?? p.age_band],
                ['World', WORLDS.find(w => w.slug === p.skin_slug)?.name ?? p.skin_slug],
                ['Voice', VOICES.find(v => v.id === p.voice_id)?.name ?? p.voice_id],
                ['Subject', SUBJECTS.find(s => s.slug === p.subject_slug)?.name ?? p.subject_slug],
                ['Current level', String(Math.min(p.current_level, getLevelCount(p.subject_slug) || p.current_level))],
              ] as [string,string][]).map(([k,v]) => (
                <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'1px solid #f4e9d4', fontSize:'13.5px' }}>
                  <span style={{ color:'#5d5278' }}>{k}</span>
                  <span style={{ fontWeight:700, textTransform:'capitalize' }}>{v}</span>
                </div>
              ))}
            </div>
          ))}

          {data.profiles.length < 6 && (
            <button onClick={openAdd}
              style={{ width:'100%', padding:'14px', background:'#fff', border:'1.5px dashed #cdbf9f', borderRadius:'14px', fontWeight:700, cursor:'pointer', fontSize:'14px', color:'#211a3a' }}>
              ＋ Add a child
            </button>
          )}
        </section>

        {/* Privacy & data */}
        <section aria-labelledby="privacy-heading" style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'16px', padding:'18px', marginBottom:'22px' }}>
          <h2 id="privacy-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'16px', marginBottom:'14px' }}>Privacy &amp; data</h2>
          <button onClick={exportData}
            style={{ display:'block', width:'100%', padding:'13px 14px', background:'#F4E9D4', border:'none', borderRadius:'12px', fontWeight:700, cursor:'pointer', fontSize:'14px', marginBottom:'12px', textAlign:'left' }}>
            📤 Export my data (JSON)
          </button>

          <div style={{ background:'rgba(235,138,138,.08)', border:'1.5px solid rgba(235,138,138,.3)', borderRadius:'14px', padding:'16px' }}>
            <h3 style={{ fontWeight:800, color:'#EB8A8A', marginBottom:'8px', fontSize:'14px' }}>Delete account</h3>
            <p style={{ fontSize:'13px', color:'#5d5278', marginBottom:'12px', lineHeight:1.5 }}>
              Permanently deletes your account, all stories, and your subscription. Type <strong>DELETE</strong> to confirm.
            </p>
            <input value={confirmText} onChange={e => setConfirmText(e.target.value)} placeholder="DELETE"
              aria-label="Type DELETE to confirm account deletion"
              style={{ width:'100%', padding:'12px', border:'1.5px solid #e0d2b7', borderRadius:'11px', fontSize:'14px', marginBottom:'10px', fontFamily:'inherit' }} />
            <button onClick={handleDelete} disabled={confirmText !== 'DELETE' || deleting}
              aria-disabled={confirmText !== 'DELETE' || deleting}
              style={{ width:'100%', padding:'12px', background:'rgba(235,138,138,.15)', color:'#EB8A8A', border:'1.5px solid rgba(235,138,138,.3)', borderRadius:'12px', fontWeight:700, cursor: confirmText==='DELETE'&&!deleting ? 'pointer' : 'not-allowed', opacity: confirmText==='DELETE'&&!deleting ? 1 : .5, fontSize:'14px' }}>
              {deleting ? 'Deleting…' : 'Delete everything permanently'}
            </button>
            {deleteError && (
              <p role="alert" style={{ marginTop:'10px', fontSize:'13px', color:'#c0392b', lineHeight:1.5 }}>{deleteError}</p>
            )}
          </div>
        </section>

        <p style={{ textAlign:'center', fontSize:'13px', color:'#5d5278' }}>
          <a href="/library" style={{ color:'#5d5278' }}>← Back to library</a>
        </p>
      </div>

      {/* Edit profile modal */}
      {editing && (
        <div role="dialog" aria-modal="true" aria-label="Edit child profile"
          onClick={e => { if (e.target === e.currentTarget) setEditing(false) }}
          style={{ position:'fixed', inset:0, zIndex:300, background:'rgba(12,8,32,.7)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}>
          <div style={{ background:'#FBF4E6', borderRadius:'22px', width:'100%', maxWidth:'440px', maxHeight:'90vh', overflowY:'auto', padding:'22px' }}>
            <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'19px', marginBottom:'4px' }}>{mode === 'add' ? 'Add a child' : 'Edit profile'}</h2>
            <p style={{ fontSize:'13px', color:'#5d5278', marginBottom:'18px' }}>{mode === 'add' ? 'They get their own story stream — same subscription, no extra cost.' : "Changes apply to future stories. Stories already in your library don't change."}</p>

            <label style={{ fontSize:'13px', fontWeight:700, display:'block', marginBottom:'7px' }}>Child's first name (or nickname)</label>
            <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. Maya — or a nickname"
              style={{ width:'100%', padding:'13px', border:'1.5px solid #e0d2b7', borderRadius:'12px', fontSize:'16px', fontFamily:'inherit', background:'#fff', marginBottom:'16px' }} />

            {mode === 'add' && (
              <>
                <label style={{ fontSize:'13px', fontWeight:700, display:'block', marginBottom:'7px' }}>Subject</label>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'16px' }}>
                  {SUBJECTS.map(s => (
                    <button key={s.slug} onClick={() => setForm(f => ({ ...f, subjectSlug: s.slug }))} aria-pressed={form.subjectSlug===s.slug}
                      style={{ display:'flex', gap:'8px', alignItems:'center', border:`2px solid ${form.subjectSlug===s.slug?'#F4A93C':'#e0d2b7'}`, background: form.subjectSlug===s.slug?'#fff7ea':'#fff', borderRadius:'13px', padding:'11px', cursor:'pointer', fontSize:'12.5px', fontWeight:700, color:'#211a3a' }}>
                      <span style={{ fontSize:'18px' }}>{s.emoji}</span> {s.name}
                    </button>
                  ))}
                </div>
              </>
            )}

            <label style={{ fontSize:'13px', fontWeight:700, display:'block', marginBottom:'7px' }}>Age band</label>
            <div style={{ display:'flex', gap:'8px', marginBottom:'16px' }}>
              {AGE_BANDS.map(b => (
                <button key={b.value} onClick={() => setForm(f => ({ ...f, ageBand: b.value }))}
                  style={{ padding:'9px 15px', border:`1.5px solid ${form.ageBand===b.value?'#211a3a':'#e0d2b7'}`, background: form.ageBand===b.value?'#211a3a':'#fff', color: form.ageBand===b.value?'#fff':'#211a3a', borderRadius:'99px', cursor:'pointer', fontSize:'13.5px', fontWeight:600 }}>
                  {b.label} yrs
                </button>
              ))}
            </div>

            <label style={{ fontSize:'13px', fontWeight:700, display:'block', marginBottom:'7px' }}>World</label>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'16px' }}>
              {WORLDS.map(w => (
                <button key={w.slug} onClick={() => setForm(f => ({ ...f, skinSlug: w.slug }))} aria-pressed={form.skinSlug===w.slug}
                  style={{ display:'flex', gap:'8px', alignItems:'center', border:`2px solid ${form.skinSlug===w.slug?'#F4A93C':'#e0d2b7'}`, background: form.skinSlug===w.slug?'#fff7ea':'#fff', borderRadius:'13px', padding:'11px', cursor:'pointer', fontSize:'13px', fontWeight:700, color:'#211a3a' }}>
                  <span style={{ fontSize:'20px' }}>{w.emoji}</span> {w.name}
                </button>
              ))}
            </div>

            <label style={{ fontSize:'13px', fontWeight:700, display:'block', marginBottom:'7px' }}>Voice</label>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'20px' }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setForm(f => ({ ...f, voiceId: v.id }))} aria-pressed={form.voiceId===v.id}
                  style={{ textAlign:'left', border:`1.5px solid ${form.voiceId===v.id?'#F4A93C':'#e6d8bd'}`, background: form.voiceId===v.id?'#fff7ea':'#fff', borderRadius:'13px', padding:'11px', cursor:'pointer' }}>
                  <div style={{ fontWeight:800, fontSize:'14px' }}>{v.name}</div>
                  <div style={{ fontSize:'12px', color:'#5d5278' }}>{v.tone}</div>
                </button>
              ))}
            </div>

            <button onClick={saveEdit} disabled={savingEdit || !form.name.trim()}
              style={{ width:'100%', padding:'14px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'14px', cursor: savingEdit||!form.name.trim() ? 'not-allowed' : 'pointer', fontSize:'15px', opacity: savingEdit||!form.name.trim() ? .6 : 1 }}>
              {savingEdit ? 'Saving…' : mode === 'add' ? 'Add child' : 'Save changes'}
            </button>
            <button onClick={() => setEditing(false)} style={{ width:'100%', padding:'11px', background:'none', color:'#5d5278', fontWeight:600, border:'none', cursor:'pointer', fontSize:'14px', marginTop:'4px' }}>Cancel</button>
          </div>
        </div>
      )}

      <AppNav active="account" />
    </main>
  )
}
