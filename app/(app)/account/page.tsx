'use client'
// app/(app)/account/page.tsx
import { useState, useEffect } from 'react'

interface AccountData {
  account: { email: string; plan: string; created_at: string }
  profile: { name: string; age_band: string; skin_slug: string; subject_slug: string; voice_id: string; current_level: number } | null
}

export default function AccountPage() {
  const [data,        setData]        = useState<AccountData | null>(null)
  const [confirmText, setConfirmText] = useState('')
  const [deleting,    setDeleting]    = useState(false)

  useEffect(() => { fetch('/api/account').then(r => r.json()).then(setData) }, [])

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
    await fetch('/api/account', { method: 'DELETE', headers: { 'x-confirm-delete': 'DELETE' } })
    window.location.href = '/'
  }

  if (!data) return <div style={{ minHeight:'100vh', display:'grid', placeItems:'center', background:'#FBF4E6' }}>Loading…</div>

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
        {/* Plan card */}
        <div style={{ background:'linear-gradient(135deg,#241a52,#3a2470)', borderRadius:'16px', padding:'16px 18px', marginBottom:'22px', display:'flex', alignItems:'center', justifyContent:'space-between', color:'#fff' }}>
          <div>
            <div style={{ fontFamily:'var(--font-fraunces)', fontSize:'17px' }}>Story Club</div>
            <div style={{ fontSize:'12.5px', color:'#cfc3ea', marginTop:'2px' }}>New story every 3 days · All voices</div>
          </div>
          <span style={{ background:'#F4A93C', color:'#3a230a', fontSize:'11px', fontWeight:800, padding:'4px 12px', borderRadius:'99px' }}>Active</span>
        </div>

        {/* Profile */}
        {data.profile && (
          <section aria-labelledby="profile-heading" style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'16px', padding:'18px', marginBottom:'22px' }}>
            <h2 id="profile-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'16px', marginBottom:'12px' }}>Child profile</h2>
            {([['Name', data.profile.name || '—'],['Age band', data.profile.age_band],['World', data.profile.skin_slug],['Subject', data.profile.subject_slug],['Current level', String(data.profile.current_level)]] as [string,string][]).map(([k,v]) => (
              <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f4e9d4', fontSize:'14px' }}>
                <span style={{ color:'#5d5278' }}>{k}</span>
                <span style={{ fontWeight:700, textTransform:'capitalize' }}>{v}</span>
              </div>
            ))}
          </section>
        )}

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
          </div>
        </section>

        <p style={{ textAlign:'center', fontSize:'13px', color:'#5d5278' }}>
          <a href="/library" style={{ color:'#5d5278' }}>← Back to library</a>
        </p>
      </div>

      <nav style={{ position:'fixed', bottom:0, left:0, right:0, background:'#FBF4E6', borderTop:'1px solid #ece0c8', display:'flex', justifyContent:'space-around', padding:'8px 0 12px' }} aria-label="App navigation">
        <a href="/library" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'3px', fontSize:'11px', fontWeight:700, color:'#5d5278', textDecoration:'none' }}><span style={{ fontSize:'22px' }}>📚</span>Library</a>
        <a href="/account" aria-current="page" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'3px', fontSize:'11px', fontWeight:700, color:'#E0852A', textDecoration:'none' }}><span style={{ fontSize:'22px' }}>👤</span>Account</a>
      </nav>
    </main>
  )
}
