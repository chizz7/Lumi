'use client'
// app/(app)/library/page.tsx
import { useState, useEffect } from 'react'

interface Story   { id: string; levelOrdinal: number; levelTitle: string; concept: string; skinSlug: string; voiceId: string; deliveredAt: string; audioUrl: string | null }
interface Profile { name: string; currentLevel: number; totalLevels: number; subjectSlug: string }
interface LibData  { stories: Story[]; profile: Profile | null; nextLevel: number | null }

export default function LibraryPage() {
  const [data,       setData]       = useState<LibData | null>(null)
  const [loading,    setLoading]    = useState(true)
  const [requesting, setRequesting] = useState(false)

  const load = () => fetch('/api/library').then(r => r.json()).then(setData).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const requestNext = async () => {
    setRequesting(true)
    const res  = await fetch('/api/story/next', { method: 'POST' })
    const body = await res.json()
    if (body.ok) load()
    else alert(body.error ?? 'Something went wrong')
    setRequesting(false)
  }

  const SKIN_EMOJI: Record<string,string> = { sea:'🐬', space:'🤖', forest:'🦊', castle:'🐉' }

  if (loading) return (
    <div style={{ minHeight:'100vh', display:'grid', placeItems:'center', background:'#FBF4E6', color:'#5d5278', fontSize:'16px' }}>
      Loading your library…
    </div>
  )

  const { profile, stories = [], nextLevel } = data ?? {}

  return (
    <main style={{ minHeight:'100vh', background:'#FBF4E6', paddingBottom:'80px' }}>
      {/* Header */}
      <header style={{ background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff', padding:'60px 24px 24px' }}>
        <div style={{ maxWidth:'720px', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px' }}>
          <div>
            <p style={{ fontSize:'12px', letterSpacing:'1.5px', textTransform:'uppercase', color:'#FFD27A', fontWeight:800, marginBottom:'4px' }}>Good evening 🌙</p>
            <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'26px' }}>
              {profile?.name ? `${profile.name}'s Library` : 'Your Library'}
            </h1>
            {profile && (
              <p style={{ color:'#dccffa', marginTop:'4px', fontSize:'14px' }}>
                Level {profile.currentLevel} of {profile.totalLevels} · {profile.subjectSlug} path
              </p>
            )}
          </div>
          <a href="/account" aria-label="Account settings"
            style={{ width:'40px', height:'40px', borderRadius:'50%', background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', display:'grid', placeItems:'center', textDecoration:'none', color:'#fff', fontSize:'18px' }}>
            👤
          </a>
        </div>
      </header>

      <div style={{ maxWidth:'720px', margin:'0 auto', padding:'24px' }}>
        {/* Next story CTA */}
        {nextLevel && (
          <div style={{ background:'linear-gradient(135deg,#241a52,#3a2470)', borderRadius:'18px', padding:'18px', marginBottom:'18px', display:'flex', alignItems:'center', gap:'14px', color:'#fff', flexWrap:'wrap' }}>
            <span style={{ fontSize:'28px' }}>📖</span>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'16px', marginBottom:'4px' }}>Level {nextLevel} ready next</div>
              <div style={{ fontSize:'13px', color:'#cfc3ea' }}>Continue the learning path</div>
            </div>
            <button onClick={requestNext} disabled={requesting} aria-label={`Request level ${nextLevel}`}
              style={{ padding:'11px 18px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'12px', cursor: requesting ? 'not-allowed' : 'pointer', fontSize:'14px', opacity: requesting ? .7 : 1, flexShrink:0 }}>
              {requesting ? '…' : 'Get next story →'}
            </button>
          </div>
        )}

        {/* Story list */}
        {stories.length === 0 ? (
          <div style={{ textAlign:'center', padding:'60px 24px', color:'#5d5278' }}>
            <div style={{ fontSize:'48px', marginBottom:'16px' }}>🌙</div>
            <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', marginBottom:'8px' }}>Your first story is on its way</h2>
            <p style={{ fontSize:'15px', lineHeight:1.6 }}>Check your email — it'll arrive shortly.</p>
          </div>
        ) : stories.map(s => (
          <article key={s.id} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'18px', marginBottom:'13px', overflow:'hidden', boxShadow:'0 10px 30px -14px rgba(8,4,28,.35)' }}>
            <div style={{ height:'110px', background:'linear-gradient(160deg,#3a6fa8,#1e3d72)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'52px' }} aria-hidden="true">
              {SKIN_EMOJI[s.skinSlug] ?? '🌙'}
            </div>
            <div style={{ padding:'14px 16px' }}>
              <div style={{ display:'flex', gap:'7px', marginBottom:'8px', flexWrap:'wrap' }}>
                <span style={{ fontSize:'11px', background:'rgba(244,169,60,.18)', color:'#E0852A', padding:'4px 9px', borderRadius:'99px', fontWeight:700 }}>Level {s.levelOrdinal}</span>
                <span style={{ fontSize:'11px', background:'#F4E9D4', color:'#5d5278', padding:'4px 9px', borderRadius:'99px', fontWeight:700 }}>{s.concept}</span>
              </div>
              <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'17px', marginBottom:'4px' }}>{s.levelTitle}</h2>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'12px' }}>
                <time dateTime={s.deliveredAt} style={{ fontSize:'12px', color:'#5d5278' }}>
                  {new Date(s.deliveredAt).toLocaleDateString()}
                </time>
                {s.audioUrl ? (
                  <a href={s.audioUrl} target="_blank" rel="noreferrer" aria-label={`Play ${s.levelTitle}`}
                    style={{ width:'42px', height:'42px', borderRadius:'50%', background:'linear-gradient(135deg,#FFD27A,#E0852A)', display:'grid', placeItems:'center', color:'#3a230a', textDecoration:'none', fontSize:'16px', flexShrink:0 }}>
                    ▶
                  </a>
                ) : (
                  <span style={{ fontSize:'13px', color:'#5d5278' }}>⏳ Preparing…</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom nav */}
      <nav style={{ position:'fixed', bottom:0, left:0, right:0, background:'#FBF4E6', borderTop:'1px solid #ece0c8', display:'flex', justifyContent:'space-around', padding:'8px 0 12px' }} aria-label="App navigation">
        <a href="/library" aria-current="page" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'3px', fontSize:'11px', fontWeight:700, color:'#E0852A', textDecoration:'none' }}><span style={{ fontSize:'22px' }} aria-hidden="true">📚</span>Library</a>
        <a href="/account" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'3px', fontSize:'11px', fontWeight:700, color:'#5d5278', textDecoration:'none' }}><span style={{ fontSize:'22px' }} aria-hidden="true">👤</span>Account</a>
      </nav>
    </main>
  )
}
