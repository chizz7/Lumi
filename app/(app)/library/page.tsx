'use client'
// app/(app)/library/page.tsx
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { WORLD_META } from '@/content/meta'
import AppNav from '@/app/_components/AppNav'

interface Story  { id: string; levelOrdinal: number; levelTitle: string; concept: string; skinSlug: string; voiceId: string; deliveredAt: string; script: string; audioUrl: string | null }
interface Child  { id: string; name: string; currentLevel: number; totalLevels: number; subjectSlug: string; nextLevel: number | null; nextAvailableAt: string | null; canRequestNext: boolean; stories: Story[] }
interface LibData { children: Child[] }

const REPORT_REASONS: { value: string; label: string }[] = [
  { value: 'content_inappropriate', label: 'Not age-appropriate' },
  { value: 'wrong_length',          label: 'Too long or too short' },
  { value: 'audio_quality',         label: 'Audio quality issue' },
  { value: 'wrong_interests',       label: "Didn't fit my child" },
  { value: 'other',                 label: 'Something else' },
]

const SKIN_EMOJI: Record<string, string> = Object.fromEntries(WORLD_META.map(w => [w.slug, w.emoji]))

export default function LibraryPage() {
  const [data,       setData]       = useState<LibData | null>(null)
  const [loading,    setLoading]    = useState(true)
  const [selectedId, setSelectedId] = useState<string | null>(null)   // which child is shown
  const [requesting, setRequesting] = useState(false)
  const [openScript, setOpenScript] = useState<string | null>(null)   // story id whose script is shown
  const [playing,    setPlaying]    = useState<string | null>(null)   // story id whose player is shown
  const [reportFor,  setReportFor]  = useState<Story | null>(null)    // story being reported
  const [reportBusy, setReportBusy] = useState(false)
  const [reportMsg,  setReportMsg]  = useState<string | null>(null)
  const [reportErr,  setReportErr]  = useState<string | null>(null)
  const [loadErr,    setLoadErr]    = useState<string | null>(null)
  const [nextNote,   setNextNote]   = useState<string | null>(null)   // inline note after requesting the next story

  const load = async () => {
    setLoadErr(null)
    try {
      const res = await fetch('/api/library')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const d: LibData = await res.json()
      setData(d)
      setSelectedId(prev => prev && d.children?.some(c => c.id === prev) ? prev : (d.children?.[0]?.id ?? null))
    } catch {
      setLoadErr("We couldn't load your library just now.")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => { load() }, [])

  const requestNext = async (childId: string) => {
    setRequesting(true)
    setNextNote(null)
    try {
      const res  = await fetch('/api/story/next', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ childId }),
      })
      const body = await res.json()
      if (res.ok && body.ok) {
        await load()   // refresh before re-enabling the button so it reflects the new gate
        setNextNote(body.levelTitle ? `✓ “${body.levelTitle}” has been added below — it's on its way to your email too.` : '✓ Your next story has been added below.')
      } else {
        alert(body.error ?? 'Something went wrong')
      }
    } catch {
      alert('Something went wrong')
    } finally {
      setRequesting(false)
    }
  }

  const submitReport = async (reason: string) => {
    if (!reportFor) return
    setReportBusy(true)
    setReportErr(null)
    try {
      const res  = await fetch(`/api/story/${reportFor.id}/report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason }),
      })
      const body = await res.json().catch(() => null)
      if (res.ok && body && body.ok !== false && !body.error) {
        setReportMsg(body.message ?? 'Thanks for letting us know.')
      } else {
        setReportErr(body?.error ?? "We couldn't send your report. Please tap a reason to try again.")
      }
    } catch {
      setReportErr("We couldn't send your report. Please check your connection and tap a reason to try again.")
    } finally {
      setReportBusy(false)
    }
  }

  const closeReport = () => { setReportFor(null); setReportMsg(null); setReportErr(null) }

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })

  if (loading) return (
    <div style={{ minHeight:'100vh', display:'grid', placeItems:'center', background:'#FBF4E6', color:'#5d5278', fontSize:'16px' }}>
      Loading your library…
    </div>
  )

  // Load failure is NOT the same as an empty library — show a retryable error.
  if (loadErr && !data) return (
    <div style={{ minHeight:'100vh', display:'grid', placeItems:'center', background:'#FBF4E6', padding:'24px' }}>
      <div style={{ textAlign:'center', color:'#5d5278', maxWidth:'360px' }}>
        <div style={{ fontSize:'40px', marginBottom:'12px' }}>🌙</div>
        <p style={{ fontSize:'15px', lineHeight:1.6, marginBottom:'16px' }}>{loadErr}</p>
        <button onClick={() => { setLoading(true); load() }}
          style={{ padding:'12px 24px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'12px', cursor:'pointer', fontSize:'14px' }}>
          Retry
        </button>
      </div>
    </div>
  )

  const children = data?.children ?? []
  const child    = children.find(c => c.id === selectedId) ?? children[0] ?? null
  const stories         = child?.stories ?? []
  const nextLevel       = child?.nextLevel ?? null
  const nextAvailableAt = child?.nextAvailableAt ?? null
  const canRequestNext  = child?.canRequestNext ?? true

  const actionBtn = {
    display:'inline-flex', alignItems:'center', gap:'5px', background:'#F4E9D4', border:'none',
    borderRadius:'10px', padding:'8px 12px', fontSize:'12.5px', fontWeight:700, color:'#211a3a',
    cursor:'pointer', fontFamily:'inherit',
  } as const

  return (
    <main style={{ minHeight:'100vh', background:'#FBF4E6', paddingBottom:'80px' }}>
      {/* Header */}
      <header style={{ background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff', padding:'60px 24px 24px' }}>
        <div style={{ maxWidth:'720px', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px' }}>
          <div>
            <p style={{ fontSize:'12px', letterSpacing:'1.5px', textTransform:'uppercase', color:'#FFD27A', fontWeight:800, marginBottom:'4px' }}>Good evening 🌙</p>
            <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'26px' }}>
              {child?.name ? `${child.name}'s Library` : 'Your Library'}
            </h1>
            {child && (
              <p style={{ color:'#dccffa', marginTop:'4px', fontSize:'14px' }}>
                Level {Math.min(child.currentLevel, child.totalLevels)} of {child.totalLevels} · {child.subjectSlug} path
              </p>
            )}
          </div>
          <Link href="/account" aria-label="Account settings"
            style={{ width:'40px', height:'40px', borderRadius:'50%', background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', display:'grid', placeItems:'center', textDecoration:'none', color:'#fff', fontSize:'18px' }}>
            👤
          </Link>
        </div>
      </header>

      <div style={{ maxWidth:'720px', margin:'0 auto', padding:'24px' }}>
        {/* Child switcher — one subscription, all your kids */}
        {children.length > 1 && (
          <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'18px' }}>
            {children.map(c => (
              <button key={c.id} onClick={() => { setSelectedId(c.id); setNextNote(null) }} aria-pressed={c.id === child?.id}
                style={{ padding:'8px 14px', borderRadius:'99px', border:`1.5px solid ${c.id===child?.id?'#F4A93C':'#e0d2b7'}`, background: c.id===child?.id?'#fff7ea':'#fff', cursor:'pointer', fontSize:'13.5px', fontWeight:700, color:'#211a3a' }}>
                {c.name || 'Child'}{c.nextLevel && c.canRequestNext ? ' ●' : ''}
              </button>
            ))}
            <Link href="/account" style={{ padding:'8px 14px', borderRadius:'99px', border:'1.5px dashed #cdbf9f', background:'transparent', fontSize:'13.5px', fontWeight:700, color:'#5d5278', textDecoration:'none' }}>＋ Add child</Link>
          </div>
        )}

        {/* Next story CTA — gated to one story every other day */}
        {nextLevel && (
          <div style={{ background:'linear-gradient(135deg,#241a52,#3a2470)', borderRadius:'18px', padding:'18px', marginBottom:'18px', display:'flex', alignItems:'center', gap:'14px', color:'#fff', flexWrap:'wrap' }}>
            <span style={{ fontSize:'28px' }}>{canRequestNext ? '📖' : '🌙'}</span>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'16px', marginBottom:'4px' }}>Level {nextLevel} ready next</div>
              <div style={{ fontSize:'13px', color:'#cfc3ea' }}>
                {canRequestNext
                  ? 'Continue the learning path'
                  : nextAvailableAt
                    ? `Arrives ${fmtDate(nextAvailableAt)}`
                    : 'A new story every other day'}
              </div>
            </div>
            {canRequestNext ? (
              <button onClick={() => child && requestNext(child.id)} disabled={requesting} aria-label={`Request level ${nextLevel}`}
                style={{ padding:'11px 18px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'12px', cursor: requesting ? 'not-allowed' : 'pointer', fontSize:'14px', opacity: requesting ? .7 : 1, flexShrink:0 }}>
                {requesting ? '…' : 'Get next story →'}
              </button>
            ) : (
              <span aria-label="Next story scheduled"
                style={{ padding:'11px 16px', background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', color:'#dccffa', fontWeight:700, borderRadius:'12px', fontSize:'13px', flexShrink:0 }}>
                🔒 Scheduled
              </span>
            )}
          </div>
        )}

        {/* Inline confirmation after requesting the next story */}
        {nextNote && (
          <p role="status" style={{ fontSize:'13.5px', color:'#3d7a4f', background:'rgba(84,182,166,.12)', border:'1px solid rgba(84,182,166,.35)', borderRadius:'12px', padding:'10px 14px', marginBottom:'18px', lineHeight:1.5 }}>
            {nextNote}
          </p>
        )}

        {/* Path complete — no next level left, but stories exist */}
        {!nextLevel && stories.length > 0 && (
          <div style={{ background:'#fff7ea', border:'1.5px solid #F4A93C', borderRadius:'18px', padding:'16px 18px', marginBottom:'18px', display:'flex', alignItems:'center', gap:'12px' }}>
            <span style={{ fontSize:'26px' }} aria-hidden="true">🎉</span>
            <div>
              <div style={{ fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'15px', color:'#211a3a' }}>Path complete!</div>
              <div style={{ fontSize:'13px', color:'#5d5278', marginTop:'2px' }}>
                {child?.name || 'Your child'} has finished every level of the {child?.subjectSlug} path. All the stories below are yours to keep.
              </div>
            </div>
          </div>
        )}

        {/* Story list */}
        {stories.length === 0 ? (
          <div style={{ textAlign:'center', padding:'60px 24px', color:'#5d5278' }}>
            <div style={{ fontSize:'48px', marginBottom:'16px' }}>🌙</div>
            <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', marginBottom:'8px' }}>Your first story is on its way</h2>
            <p style={{ fontSize:'15px', lineHeight:1.6 }}>Check your email — it'll arrive shortly. After that, a new story unlocks every other day.</p>
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
              <time dateTime={s.deliveredAt} style={{ fontSize:'12px', color:'#5d5278' }}>{new Date(s.deliveredAt).toLocaleDateString()}</time>

              {/* Inline audio player */}
              {playing === s.id && s.audioUrl && (
                <audio src={s.audioUrl} controls autoPlay style={{ width:'100%', marginTop:'12px' }} />
              )}

              {/* Readable script */}
              {openScript === s.id && (
                <div style={{ marginTop:'12px', background:'#FBF4E6', border:'1px solid #ece0c8', borderRadius:'12px', padding:'14px 16px', fontFamily:'var(--font-fraunces)', fontSize:'15px', lineHeight:1.7, color:'#211a3a', whiteSpace:'pre-line', maxHeight:'320px', overflowY:'auto' }}>
                  {s.script || 'Script not available for this story.'}
                </div>
              )}

              {/* Actions */}
              <div style={{ display:'flex', gap:'8px', marginTop:'12px', flexWrap:'wrap' }}>
                {s.audioUrl ? (
                  <button onClick={() => setPlaying(playing === s.id ? null : s.id)}
                    aria-label={playing === s.id ? `Stop ${s.levelTitle}` : `Play ${s.levelTitle}`} style={{ ...actionBtn, background:'linear-gradient(135deg,#FFD27A,#E0852A)' }}>
                    {playing === s.id ? '❚❚ Hide player' : '▶ Play'}
                  </button>
                ) : (
                  <span style={{ fontSize:'12.5px', color:'#5d5278', alignSelf:'center' }}>⏳ Audio preparing…</span>
                )}
                <button onClick={() => setOpenScript(openScript === s.id ? null : s.id)}
                  aria-expanded={openScript === s.id} style={actionBtn}>
                  {openScript === s.id ? '📖 Hide story' : '📖 Read story'}
                </button>
                <button onClick={() => { setReportFor(s); setReportMsg(null) }}
                  style={{ ...actionBtn, background:'transparent', color:'#9d92c0', marginLeft:'auto' }}>
                  Report
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Report sheet */}
      {reportFor && (
        <div role="dialog" aria-modal="true" aria-label="Report story"
          onClick={e => { if (e.target === e.currentTarget) closeReport() }}
          style={{ position:'fixed', inset:0, zIndex:300, background:'rgba(12,8,32,.7)', display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
          <div style={{ background:'#FBF4E6', borderRadius:'24px 24px 0 0', width:'100%', maxWidth:'520px', padding:'22px', boxShadow:'0 -10px 40px -10px rgba(8,4,28,.6)' }}>
            {reportMsg ? (
              <div style={{ textAlign:'center', padding:'12px 0 6px' }}>
                <div style={{ fontSize:'40px', marginBottom:'10px' }}>💛</div>
                <p style={{ fontSize:'15px', color:'#211a3a', lineHeight:1.6, marginBottom:'18px' }}>{reportMsg}</p>
                <button onClick={closeReport} style={{ width:'100%', padding:'14px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'14px', cursor:'pointer', fontSize:'15px' }}>Done</button>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'19px', marginBottom:'4px' }}>Report this story</h2>
                <p style={{ fontSize:'13.5px', color:'#5d5278', marginBottom:'16px' }}>
                  Tell us what went wrong with “{reportFor.levelTitle}”. We'll add a credit to your account automatically.
                </p>
                {reportErr && (
                  <p role="alert" style={{ fontSize:'13px', color:'#c0392b', background:'rgba(235,138,138,.1)', border:'1px solid rgba(235,138,138,.35)', borderRadius:'10px', padding:'9px 12px', marginBottom:'12px', lineHeight:1.5 }}>
                    {reportErr}
                  </p>
                )}
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {REPORT_REASONS.map(r => (
                    <button key={r.value} onClick={() => submitReport(r.value)} disabled={reportBusy}
                      style={{ textAlign:'left', padding:'14px 16px', background:'#fff', border:'1px solid #ece0c8', borderRadius:'12px', fontSize:'14px', fontWeight:600, color:'#211a3a', cursor: reportBusy ? 'wait' : 'pointer', opacity: reportBusy ? .6 : 1 }}>
                      {r.label}
                    </button>
                  ))}
                </div>
                <button onClick={closeReport} style={{ width:'100%', padding:'12px', background:'none', color:'#5d5278', fontWeight:600, border:'none', cursor:'pointer', fontSize:'14px', marginTop:'10px' }}>Cancel</button>
              </>
            )}
          </div>
        </div>
      )}

      <AppNav active="library" />
    </main>
  )
}
