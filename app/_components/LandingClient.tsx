'use client'
// app/_components/LandingClient.tsx
// The full landing page. Client component because of:
//   - Story sampler (audio + word animation)
//   - Voice switcher
//   - Builder overlay
//   - FAQ accordions
//   - Language banner dismiss
//   - Waitlist form submission

import { useState, useRef } from 'react'
import { loadStripe }                    from '@stripe/stripe-js'
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import type { VoiceConfig }              from '@/lib/voices'

// Embedded Checkout keeps payment inside the funnel. Created once at module load.
const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = STRIPE_PK ? loadStripe(STRIPE_PK) : null
import { getAllLevels }                  from '@/content'
import { interestForWorld }              from '@/content/interests'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Props {
  lang:           string
  strings:        Record<string, string>
  voices:         VoiceConfig[]
  showLangBanner: boolean
  langName:       string
  cancelled:      boolean
  authError:      boolean
}

// ─── Builder state ────────────────────────────────────────────────────────────

// Worlds the child can be the hero of. `loves` frames the choice as an interest
// ("what does your child love?"); each maps to a cosmetic world that exists for
// every subject.
const SKINS = [
  { slug:'sea',    emoji:'🐬', name:'Under the Sea',  loves:'animals & the ocean', desc:'a dolphin & Pip the crab' },
  { slug:'space',  emoji:'🚀', name:'Space Station',  loves:'space & robots',      desc:'a robot & Circuit the cat' },
  { slug:'forest', emoji:'🦊', name:'Whisper Forest', loves:'woodland animals',    desc:'a fox & Old Owl' },
  { slug:'castle', emoji:'🐉', name:'Cloud Castle',   loves:'dragons & castles',   desc:'a dragon & Mira the bunny' },
  { slug:'dino',   emoji:'🦕', name:'Fern Valley',    loves:'dinosaurs',           desc:'a dino & Rex the raptor' },
  { slug:'jungle', emoji:'🐯', name:'Deep Jungle',    loves:'jungle animals',      desc:'a tiger cub & Echo the parrot' },
]
const SUBJECT_NAMES: Record<string, string> = {
  money: 'Money', focus: 'Focus', resilience: 'Resilience',
  kindness: 'Kindness', problem: 'Problem Solving', confidence: 'Confidence',
}
// value = canonical hyphen form stored in the DB; label = prettier en-dash for display
const AGE_BANDS = [
  { value: '3-4', label: '3–4' },
  { value: '5-6', label: '5–6' },
  { value: '7-8', label: '7–8' },
]

// ─── Main component ───────────────────────────────────────────────────────────

export default function LandingClient({ lang, strings, voices, showLangBanner, langName, cancelled, authError }: Props) {
  const t = (key: string, vars?: Record<string,string>) => {
    let s = strings[key] ?? key
    if (vars) Object.entries(vars).forEach(([k,v]) => { s = s.replace(`{{${k}}}`, v) })
    return s
  }

  // ── State ──────────────────────────────────────────────────────────────────
  const [overlayOpen, setOverlayOpen]     = useState(false)
  const [builderStep, setBuilderStep]     = useState(1)
  const [childName,   setChildName]       = useState('')
  const [ageBand,     setAgeBand]         = useState('5-6')
  const [skinSlug,    setSkinSlug]        = useState('sea')
  const [subjectSlug, setSubjectSlug]     = useState('money')
  const [voiceId,     setVoiceId]         = useState(voices[0]?.id ?? 'af_heart')
  const [activePath,  setActivePath]      = useState<string>('money')
  const [activeVoice, setActiveVoice]     = useState(0)
  const [langBanner,  setLangBanner]      = useState(showLangBanner)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistDone,  setWaitlistDone]  = useState(false)
  const [waitlistLoading, setWaitlistLoading] = useState(false)
  const [faqOpen,     setFaqOpen]         = useState<number | null>(null)

  // ── Audio sampler (hero + voice switcher) ───────────────────────────────────
  const sampleAudioRef = useRef<HTMLAudioElement>(null)
  const [sampleLoading, setSampleLoading] = useState<number | null>(null)

  // Play the pre-rendered Level-1 sample for a given voice index. Cache-first, ≈$0.
  const playSample = async (voiceIdx: number) => {
    setActiveVoice(voiceIdx)
    const v = voices[voiceIdx]
    if (!v) return
    setSampleLoading(voiceIdx)
    try {
      const res  = await fetch(`/api/preview/sample?skin=${skinSlug}&voice=${encodeURIComponent(v.id)}`)
      const data = await res.json()
      if (res.ok && data.audioUrl && sampleAudioRef.current) {
        sampleAudioRef.current.src = data.audioUrl
        await sampleAudioRef.current.play().catch(() => {})
      }
    } catch { /* non-fatal — sample just won't play */ }
    finally { setSampleLoading(null) }
  }

  // ── Builder preview (personalised, before paywall) ──────────────────────────
  const previewAudioRef = useRef<HTMLAudioElement>(null)
  const [preview, setPreview] = useState<
    { loading: boolean; script?: string; audioUrl?: string | null; error?: string } | null
  >(null)
  // Email gate on the preview: capturing the parent's email both (a) unlocks the
  // audio and (b) gives us a lead for abandoned-funnel recovery. Submitting it is
  // also the user gesture that lets the audio .play() on mobile (iOS blocks
  // autoplay without one), so one tap solves both.
  const [leadEmail, setLeadEmail]     = useState('')
  const [leadDone,  setLeadDone]      = useState(false)
  const [leadError, setLeadError]     = useState(false)
  // Embedded Stripe checkout (mounts in-modal; null until "Start Story Club").
  const [checkoutSecret,  setCheckoutSecret]  = useState<string | null>(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const unlockStory = () => {
    const email = leadEmail.trim().toLowerCase()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setLeadError(true); return }
    setLeadError(false)
    setLeadDone(true)
    // Play inside the gesture so mobile browsers allow it.
    previewAudioRef.current?.play().catch(() => {})
    // Capture the lead (non-blocking — the story unlocks regardless).
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, lang, source: 'builder-preview' }),
    }).catch(() => {})
  }

  // Draft fields, with optional overrides so live preview switching never reads
  // stale state (setState is async; we pass the new value through directly).
  type DraftFields = { childName: string; ageBand: string; skinSlug: string; subjectSlug: string; voiceId: string }
  const saveDraft = (overrides: Partial<DraftFields> = {}) => {
    const merged = { childName, ageBand, skinSlug, subjectSlug, voiceId, ...overrides }
    return fetch('/api/draft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...merged, interestSlug: interestForWorld(merged.skinSlug)?.slug }),
    })
  }

  const generatePreview = async (overrides: Partial<DraftFields> = {}) => {
    setPreview({ loading: true })
    try {
      await saveDraft(overrides)
      const res  = await fetch('/api/preview')
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'preview failed')
      setPreview({ loading: false, script: data.script, audioUrl: data.audioUrl })
    } catch {
      setPreview({ loading: false, error: "We couldn't build the preview just now. Please try again." })
    }
  }

  // Render the preview script with the child's name highlighted — makes the
  // slot-fill personalization visible ("this is built around your child").
  const renderScript = (text: string) => {
    if (!childName) return text
    const parts = text.split(childName)
    return parts.map((p, i) => (
      <span key={i}>
        {p}
        {i < parts.length - 1 && (
          <mark style={{ background:'rgba(244,169,60,.28)', borderBottom:'2px solid #F4A93C', borderRadius:'4px', padding:'0 3px', color:'#211a3a', fontStyle:'normal', fontWeight:700 }}>{childName}</mark>
        )}
      </span>
    ))
  }

  // ── Waitlist submit ────────────────────────────────────────────────────────
  const submitWaitlist = async (source: string) => {
    if (!waitlistEmail || waitlistLoading) return
    setWaitlistLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail, lang, source }),
      })
      setWaitlistDone(true)
    } finally {
      setWaitlistLoading(false)
    }
  }

  // ── Builder submit ─────────────────────────────────────────────────────────
  const openBuilder = () => { setOverlayOpen(true); setBuilderStep(1); setPreview(null); setLeadDone(false); setLeadEmail(''); setLeadError(false); setCheckoutSecret(null) }
  // Fetch a client_secret and mount Embedded Checkout in the modal — no redirect.
  const startCheckout = async () => {
    if (checkoutLoading) return
    setCheckoutLoading(true)
    try {
      await saveDraft()
      const res  = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.clientSecret) setCheckoutSecret(data.clientSecret)
    } finally {
      setCheckoutLoading(false)
    }
  }

  // ── FAQ items ──────────────────────────────────────────────────────────────
  const faqs = [1,2,3,4,5].map(n => ({
    q: t(`faq.${n}.q`),
    a: t(`faq.${n}.a`),
  }))

  const paths = [
    {
      id:'money', emoji:'💰', name:'Money & Saving', available:true,
      why:'Children who understand value, exchange, and saving before age 8 develop habits that compound for life. This path starts with the simplest question — why do coins look different? — and builds to the hardest: wants vs. needs.',
    },
    {
      id:'focus', emoji:'🎯', name:'Focus & Goals', available:true,
      why:'Executive function — the ability to plan, focus, and follow through — is a stronger predictor of outcomes than IQ. The window to build it is early childhood.',
    },
    {
      id:'resilience', emoji:'💪', name:'Resilience', available:true,
      why:'Children who understand that effort changes ability outperform those who believe in fixed talent. Level 1 normalises struggle; without that, Level 4 lands empty.',
    },
    {
      id:'kindness', emoji:'❤️', name:'Kindness & Empathy', available:true,
      why:'Empathy is a skill, not a trait — built through repeated, low-stakes practice. Bedtime stories are one of the best contexts for it.',
    },
    {
      id:'problem', emoji:'🧠', name:'Problem Solving', available:true,
      why:'Problem solving is a disposition, not a subject. These stories build the habit of pausing before reacting and trying systematically.',
    },
    {
      id:'confidence', emoji:'🌱', name:'Confidence', available:true,
      why:"Confidence is the quiet belief that you're capable of trying. Level 1 normalises incompleteness — removing the shame that stops children from attempting hard things.",
    },
  ]

  const [expandedLevel, setExpandedLevel] = useState<number | null>(null)
  const ap = paths.find(p => p.id === activePath) ?? paths[0]!
  // Levels for the active path — real content (content/<subject>/levels.ts).
  const activeLevels = getAllLevels(ap.id)

  return (
    <div style={{ fontFamily: "var(--font-figtree, 'Figtree', sans-serif)", color: '#211a3a', background: '#FBF4E6' }}>

      {/* ── Toast notifications ── */}
      {cancelled && (
        <div style={{ background:'#fff7ea', borderBottom:'1px solid #f1ddb6', padding:'12px 24px', textAlign:'center', fontSize:'14px', color:'#8a6a1f' }}>
          No worries — your personalization is still saved. <button onClick={openBuilder} style={{ fontWeight:700, textDecoration:'underline', background:'none', border:'none', cursor:'pointer', color:'#E0852A' }}>Come back anytime →</button>
        </div>
      )}
      {authError && (
        <div style={{ background:'#fff0f0', borderBottom:'1px solid var(--rose)', padding:'12px 24px', textAlign:'center', fontSize:'14px', color:'#c0392b' }}>
          Login link expired — please try again.
        </div>
      )}

      {/* ── Language availability banner ── */}
      {langBanner && (
        <div style={{ background:'linear-gradient(90deg,#241a52,#3a2470)', padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px' }}>
          <span style={{ color:'#e9e0f7', fontSize:'14px' }}>
            {t('waitlist.title')} — {t('waitlist.sub', { lang: langName })}
          </span>
          <div style={{ display:'flex', gap:'8px', alignItems:'center', flexWrap:'wrap' }}>
            {waitlistDone ? (
              <span style={{ color:'#FFD27A', fontWeight:700, fontSize:'13px' }}>✓ {t('waitlist.success')}</span>
            ) : (
              <>
                <input
                  type="email" placeholder={t('waitlist.placeholder')} value={waitlistEmail}
                  onChange={e => setWaitlistEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && submitWaitlist('language-banner')}
                  style={{ padding:'9px 14px', borderRadius:'10px', border:'1px solid rgba(255,255,255,.25)', background:'rgba(255,255,255,.1)', color:'#fff', fontSize:'14px', outline:'none', minWidth:'200px' }}
                />
                <button onClick={() => submitWaitlist('language-banner')} disabled={waitlistLoading}
                  style={{ padding:'9px 16px', borderRadius:'10px', background:'#F4A93C', color:'#3a230a', fontWeight:700, border:'none', cursor:'pointer', fontSize:'14px' }}>
                  {waitlistLoading ? '…' : t('waitlist.cta')}
                </button>
              </>
            )}
            <button onClick={() => setLangBanner(false)} style={{ background:'none', border:'none', color:'rgba(255,255,255,.5)', cursor:'pointer', fontSize:'18px', padding:'4px' }} aria-label="Dismiss">×</button>
          </div>
        </div>
      )}

      {/* ─────────────── HEADER ─────────────── */}
      <header id="top" style={{ position:'sticky', top:0, zIndex:100, background:'rgba(22,18,58,.9)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(255,255,255,.1)' }}>
        <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', height:'68px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px' }}>
          <a href="/" aria-label="Lumi home" style={{ display:'flex', alignItems:'center', gap:'8px', fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'20px', color:'#fff', textDecoration:'none' }}>
            <span style={{ fontSize:'22px' }}>🌙</span> Lumi
          </a>
          <nav aria-label="Main navigation" style={{ display:'flex', gap:'24px', alignItems:'center' }}>
            {['how','curriculum','voices','pricing'].map(k => (
              <a key={k} href={`#${k}`} style={{ color:'#e9e0f7', fontSize:'14.5px', fontWeight:600, textDecoration:'none', opacity:.9 }}>{t(`nav.${k}`)}</a>
            ))}
          </nav>
          <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
            <a href="/login" style={{ color:'#e9e0f7', fontSize:'14.5px', fontWeight:600, textDecoration:'none' }}>{t('nav.login')}</a>
            <button onClick={openBuilder} style={{ padding:'11px 20px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'13px', cursor:'pointer', fontSize:'14px', boxShadow:'0 10px 22px -8px rgba(244,169,60,.7)' }}>
              {t('nav.cta')}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">

        {/* ─────────────── HERO ─────────────── */}
        <section aria-labelledby="hero-heading" style={{ position:'relative', background:'linear-gradient(180deg,#1a1342,#2c1f5e 60%,#34246e)', color:'#fff', padding:'120px 0 90px', overflow:'hidden' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', alignItems:'center' }}>
            {/* Copy */}
            <div>
              <p style={{ fontSize:'12px', letterSpacing:'2.5px', textTransform:'uppercase', color:'#FFD27A', fontWeight:700, marginBottom:'14px' }}>{t('hero.eyebrow')}</p>
              <h1 id="hero-heading" style={{ fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'clamp(32px,4vw,50px)', lineHeight:1.08, marginBottom:'18px' }}>
                Bedtime stories that <em style={{ fontStyle:'italic', color:'#FFD27A' }}>{t('hero.title.em')}</em> — in a voice they'll love.
              </h1>
              <p style={{ fontSize:'18px', lineHeight:1.55, color:'#e3d8f5', marginBottom:'28px', maxWidth:'46ch' }}>{t('hero.sub')}</p>
              <div style={{ display:'flex', gap:'13px', flexWrap:'wrap', marginBottom:'22px' }}>
                <button onClick={openBuilder} style={{ padding:'15px 24px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor:'pointer', fontSize:'15px', boxShadow:'0 12px 26px -10px rgba(244,169,60,.75)' }}>
                  {t('hero.cta.primary')}
                </button>
                <button onClick={() => playSample(activeVoice)} style={{ padding:'15px 24px', background:'rgba(255,255,255,.12)', color:'#fff', fontWeight:700, border:'1px solid rgba(255,255,255,.28)', borderRadius:'15px', cursor:'pointer', fontSize:'15px' }}>
                  {sampleLoading === activeVoice ? '♪ Loading…' : `▶ ${t('hero.cta.secondary')}`}
                </button>
                {/* Hidden element that plays the cache-first sample MP3 */}
                <audio ref={sampleAudioRef} preload="none" />
              </div>
              <div style={{ display:'flex', gap:'18px', flexWrap:'wrap', fontSize:'13.5px', color:'#cfc3ea' }}>
                <span>⭐ {t('hero.trust.rating')}</span>
                <span>{t('hero.trust.families')}</span>
                <span>{t('hero.trust.card')}</span>
              </div>
            </div>
            {/* Story sampler card */}
            <div style={{ background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.16)', borderRadius:'24px', padding:'20px', backdropFilter:'blur(6px)' }}>
              <div style={{ height:'160px', background:'linear-gradient(160deg,#2d5f96,#1e3d72)', borderRadius:'16px', marginBottom:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'48px' }}>
                🐬
              </div>
              <div style={{ fontSize:'11px', letterSpacing:'1.5px', textTransform:'uppercase', color:'#FFD27A', fontWeight:800, marginBottom:'6px' }}>
                💰 Level 4 · Saving · {voices[activeVoice]?.name ?? 'Willow'}
              </div>
              <div style={{ fontFamily:'var(--font-fraunces)', fontSize:'18px', color:'#fff', marginBottom:'6px' }}>
                Maya & the Tide-Pool Coins
              </div>
              <div style={{ fontSize:'14px', lineHeight:1.7, color:'rgba(255,255,255,.75)', fontFamily:'var(--font-fraunces)', fontStyle:'italic', marginBottom:'14px', borderTop:'1px solid rgba(255,255,255,.1)', paddingTop:'12px' }}>
                "Deep in the warm shallows, a small dolphin named <span style={{ color:'#FFD27A', fontWeight:700 }}>Maya</span> found three shiny coins resting in the sand…"
              </div>
              {/* Voice switcher */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px' }}>
                {voices.map((v, i) => (
                  <button key={v.id} onClick={() => playSample(i)} aria-pressed={i === activeVoice}
                    style={{ padding:'10px 12px', borderRadius:'12px', border:`1.5px solid ${i === activeVoice ? '#F4A93C' : '#e6d8bd'}`, background: i === activeVoice ? '#fff7ea' : '#fff', cursor:'pointer', textAlign:'left', display:'flex', gap:'8px', alignItems:'center' }}>
                    <span style={{ width:'10px', height:'10px', borderRadius:'50%', background: i === activeVoice ? '#F4A93C' : '#ccc', flexShrink:0 }} />
                    <div>
                      <div style={{ fontWeight:800, fontSize:'13px' }}>{sampleLoading === i ? '♪ …' : v.name}</div>
                      <div style={{ fontSize:'11px', color:'#5d5278' }}>{v.tone}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── PROOF BAR ─────────────── */}
        <div style={{ background:'#16123a', color:'#cfc3ea', padding:'22px 0' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'24px', flexWrap:'wrap' }}>
            <span style={{ fontSize:'12px', letterSpacing:'1.5px', textTransform:'uppercase', color:'#8a7fb0', fontWeight:700 }}>{t('proof.label')}</span>
            <div style={{ display:'flex', gap:'28px', flexWrap:'wrap', opacity:.75 }}>
              {['Parents Weekly','KidLit','The Nestful','Montessori Today','FamTech'].map(name => (
                <span key={name} style={{ fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'16px' }}>{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────── HOW IT WORKS ─────────────── */}
        <section id="how" aria-labelledby="how-heading" style={{ padding:'80px 0', background:'#FBF4E6' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#E0852A', fontWeight:800 }}>{t('how.kicker')}</p>
            <h2 id="how-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'12px' }}>{t('how.title')}</h2>
            <p style={{ fontSize:'16.5px', color:'#5d5278', marginBottom:'50px', maxWidth:'640px', margin:'0 auto 50px' }}>{t('how.sub')}</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'22px' }}>
              {[1,2,3].map(n => (
                <div key={n} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'20px', padding:'26px', boxShadow:'0 10px 30px -14px rgba(8,4,28,.35)' }}>
                  <div style={{ width:'54px', height:'54px', background:'#fff7ea', borderRadius:'15px', display:'grid', placeItems:'center', fontSize:'26px', marginBottom:'16px' }}>
                    {['👶','▶️','📬'][n-1]}
                  </div>
                  <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'20px', marginBottom:'8px' }}>{n}. {t(`how.step${n}.title`)}</h3>
                  <p style={{ fontSize:'14.5px', color:'#5d5278', lineHeight:1.5 }}>{t(`how.step${n}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── CURRICULUM ─────────────── */}
        <section id="curriculum" aria-labelledby="curriculum-heading" style={{ padding:'80px 0', background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:'36px' }}>
              <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#FFD27A', fontWeight:800 }}>{t('curriculum.kicker')}</p>
              <h2 id="curriculum-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'12px' }}>{t('curriculum.title')}</h2>
              <p style={{ fontSize:'16px', color:'#d9cdec', maxWidth:'640px', margin:'0 auto' }}>
                {t('curriculum.sub', { count: t('curriculum.bedtimes') })}
              </p>
            </div>
            {/* Path tabs */}
            <div style={{ display:'flex', gap:'10px', overflowX:'auto', paddingBottom:'4px', marginBottom:'32px', scrollbarWidth:'none' }}>
              {paths.map(p => (
                <button key={p.id} onClick={() => setActivePath(p.id)}
                  style={{ flexShrink:0, display:'flex', alignItems:'center', gap:'8px', padding:'10px 18px', borderRadius:'13px', border:`1.5px solid ${activePath===p.id?'#FFD27A':'rgba(255,255,255,.14)'}`, background: activePath===p.id?'rgba(255,210,122,.15)':'rgba(255,255,255,.06)', color: activePath===p.id?'#fff':'rgba(255,255,255,.6)', fontWeight:700, fontSize:'14px', cursor:'pointer', whiteSpace:'nowrap' }}>
                  <span>{p.emoji}</span> {p.name}
                  {!p.available && <span style={{ fontSize:'10px', background:'rgba(255,255,255,.15)', padding:'2px 7px', borderRadius:'99px', color:'rgba(255,255,255,.5)', marginLeft:'2px' }}>Soon</span>}
                </button>
              ))}
            </div>
            {/* Active path detail */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'40px', alignItems:'start' }}>
              {/* Level-by-level breakdown */}
              <div>
                <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'18px', marginBottom:'18px', color:'rgba(255,255,255,.7)', fontWeight:500 }}>
                  {ap.emoji} {ap.name} — {activeLevels.length} levels
                </h3>
                {ap.available ? (
                  <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                    {activeLevels.map((lv, i) => (
                      <div key={lv.ordinal}>
                        <button
                          onClick={() => setExpandedLevel(expandedLevel === lv.ordinal ? null : lv.ordinal)}
                          style={{ width:'100%', display:'flex', alignItems:'center', gap:'12px', background: expandedLevel===lv.ordinal?'rgba(255,210,122,.15)':'rgba(255,255,255,.06)', border:`1.5px solid ${expandedLevel===lv.ordinal?'rgba(255,210,122,.4)':'rgba(255,255,255,.12)'}`, borderRadius:'14px', padding:'12px 14px', cursor:'pointer', transition:'.2s' }}>
                          <span style={{ width:'30px', height:'30px', minWidth:'30px', borderRadius:'9px', background: i<4?'#F4A93C':'rgba(255,255,255,.15)', color: i<4?'#3a230a':'rgba(255,255,255,.5)', display:'grid', placeItems:'center', fontFamily:'var(--font-fraunces)', fontWeight:700, fontSize:'14px' }}>{lv.ordinal}</span>
                          <div style={{ flex:1, textAlign:'left' }}>
                            <div style={{ fontWeight:700, fontSize:'14px', color:'#fff' }}>{lv.title}</div>
                            <div style={{ fontSize:'12px', color:'#FFD27A', marginTop:'2px' }}>Teaches: {lv.concept}</div>
                          </div>
                          <span style={{ color:'rgba(255,255,255,.4)', fontSize:'16px' }}>{expandedLevel===lv.ordinal?'−':'+'}</span>
                        </button>
                        {expandedLevel===lv.ordinal && (
                          <div style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.08)', borderRadius:'0 0 12px 12px', padding:'14px 16px', marginTop:'-4px' }}>
                            <p style={{ fontSize:'13.5px', color:'rgba(255,255,255,.75)', lineHeight:1.65, marginBottom:'10px' }}>{lv.summary}</p>
                            <div style={{ display:'flex', gap:'6px', alignItems:'flex-start', background:'rgba(244,169,60,.12)', border:'1px dashed rgba(244,169,60,.3)', borderRadius:'9px', padding:'9px 12px' }}>
                              <span style={{ fontSize:'13px' }}>💡</span>
                              <p style={{ fontSize:'12px', color:'#F8CBA0', lineHeight:1.5, margin:0, fontStyle:'italic' }}>{lv.teachingNote}</p>
                            </div>
                            {lv.callback && (
                              <div style={{ display:'inline-flex', gap:'5px', alignItems:'center', background:'rgba(255,255,255,.08)', borderRadius:'99px', padding:'5px 11px', marginTop:'10px', fontSize:'11.5px', color:'rgba(255,255,255,.5)' }}>
                                🔁 Revisits: {lv.callback}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                    <div style={{ marginTop:'8px' }}>
                      <a href="/curriculum" style={{ display:'inline-flex', gap:'6px', alignItems:'center', fontSize:'13px', color:'#FFD27A', textDecoration:'none', fontWeight:700 }}>
                        See full curriculum detail →
                      </a>
                    </div>
                  </div>
                ) : (
                  <div style={{ background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', borderRadius:'16px', padding:'22px', textAlign:'center', color:'rgba(255,255,255,.5)', fontSize:'14px' }}>
                    <div style={{ fontSize:'28px', marginBottom:'10px' }}>✍️</div>
                    Being written and expert-reviewed.<br />
                    <button onClick={openBuilder} style={{ background:'none', border:'none', color:'#FFD27A', fontWeight:700, cursor:'pointer', marginTop:'8px', fontSize:'13px' }}>
                      Join waitlist for early access →
                    </button>
                  </div>
                )}
              </div>

              {/* Why this path */}
              <div>
                <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', marginBottom:'14px' }}>Why bedtime is the moment</h3>
                <p style={{ fontSize:'15px', color:'#d9cdec', lineHeight:1.65, marginBottom:'14px' }}>
                  {ap.why}
                </p>
                <p style={{ fontSize:'15px', color:'#d9cdec', lineHeight:1.65, marginBottom:'22px' }}>
                  Each level teaches one concept, then a later level quietly calls it back — not as revision, but woven naturally into a new adventure. Spaced repetition without flashcards.
                </p>
                <a href="/curriculum" style={{ display:'inline-block', padding:'12px 20px', background:'rgba(255,255,255,.1)', color:'#fff', borderRadius:'12px', textDecoration:'none', fontWeight:700, fontSize:'14px', border:'1px solid rgba(255,255,255,.2)' }}>
                  Full curriculum detail →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── VOICES ─────────────── */}
        <section id="voices" aria-labelledby="voices-heading" style={{ padding:'80px 0', background:'#FBF4E6' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#E0852A', fontWeight:800 }}>{t('voices.kicker')}</p>
            <h2 id="voices-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'10px' }}>{t('voices.title')}</h2>
            <p style={{ fontSize:'16px', color:'#5d5278', marginBottom:'28px', maxWidth:'560px', margin:'0 auto 28px' }}>{t('voices.sub')}</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'12px', maxWidth:'520px', margin:'0 auto 14px' }}>
              {voices.map((v, i) => (
                <button key={v.id} onClick={() => playSample(i)} aria-pressed={i===activeVoice}
                  style={{ display:'flex', gap:'11px', alignItems:'center', background: i===activeVoice?'#fff7ea':'#fff', border:`1.5px solid ${i===activeVoice?'#F4A93C':'#e6d8bd'}`, borderRadius:'15px', padding:'14px', cursor:'pointer', boxShadow: i===activeVoice?'0 8px 18px -10px rgba(244,169,60,.7)':'none' }}>
                  <span style={{ width:'40px', height:'40px', borderRadius:'50%', background: i===activeVoice?'#F4A93C':'#e7dac0', flexShrink:0, display:'grid', placeItems:'center', fontSize:'16px' }}>{sampleLoading===i ? '♪' : '▶'}</span>
                  <div style={{ textAlign:'left' }}>
                    <div style={{ fontWeight:800, fontSize:'15px' }}>{v.name}</div>
                    <div style={{ fontSize:'13px', color:'#5d5278' }}>{v.tone}</div>
                  </div>
                </button>
              ))}
            </div>
            <p style={{ fontSize:'13.5px', color:'#5d5278', margin:'14px auto' }}>{t('voices.now')} <strong>{voices[activeVoice]?.name}</strong></p>
            {/* Your own voice teaser */}
            <div style={{ maxWidth:'520px', margin:'20px auto 0', background:'#fff', border:'1.5px dashed #EB8A8A', borderRadius:'17px', padding:'20px', textAlign:'center' }}>
              <span style={{ display:'inline-block', fontSize:'10.5px', letterSpacing:'1px', textTransform:'uppercase', fontWeight:800, color:'#fff', background:'#EB8A8A', padding:'3px 10px', borderRadius:'99px', marginBottom:'9px' }}>{t('voices.own.badge')}</span>
              <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'19px', marginBottom:'8px' }}>{t('voices.own.title')}</h3>
              <p style={{ fontSize:'14px', color:'#5d5278', marginBottom:'14px', lineHeight:1.5 }}>{t('voices.own.sub')}</p>
              <button onClick={openBuilder} style={{ padding:'12px 22px', background:'#F4E9D4', color:'#211a3a', fontWeight:700, border:'none', borderRadius:'13px', cursor:'pointer' }}>
                {t('voices.own.cta')}
              </button>
            </div>
          </div>
        </section>

        {/* ─────────────── PERSONALIZED SAMPLE ─────────────── */}
        <section aria-labelledby="sample-heading" style={{ padding:'80px 0', background:'#F4E9D4' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', alignItems:'center' }}>
            <div>
              <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#E0852A', fontWeight:800 }}>{t('sample.kicker')}</p>
              <h2 id="sample-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'14px' }}>{t('sample.title')}</h2>
              <p style={{ fontSize:'16px', color:'#5d5278', lineHeight:1.6, marginBottom:'24px' }}>{t('sample.sub')}</p>
              <button onClick={openBuilder} style={{ padding:'15px 24px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor:'pointer', fontSize:'15px' }}>
                {t('sample.cta')}
              </button>
            </div>
            <div>
              <blockquote style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'18px', padding:'26px', fontSize:'18px', lineHeight:1.7, fontFamily:'var(--font-fraunces)', boxShadow:'0 10px 30px -14px rgba(8,4,28,.35)', margin:0 }}>
                "Deep in the warm shallows, a small dolphin named <span style={{ background:'rgba(244,169,60,.24)', borderBottom:'2px solid #F4A93C', padding:'0 5px', borderRadius:'5px', fontWeight:700 }}>[your child]</span> found three shiny coins in the sand…"
              </blockquote>
              <span style={{ display:'inline-flex', gap:'7px', alignItems:'center', fontSize:'13px', color:'#8a6a1f', background:'#fff7ea', border:'1px solid #f1ddb6', borderRadius:'99px', padding:'7px 14px', marginTop:'14px' }}>
                🎯 {t('sample.teaches')}
              </span>
            </div>
          </div>
        </section>

        {/* ─────────────── TESTIMONIALS ─────────────── */}
        <section aria-labelledby="testimonials-heading" style={{ padding:'80px 0', background:'#FBF4E6' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#E0852A', fontWeight:800 }}>{t('testimonials.kicker')}</p>
            <h2 id="testimonials-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'40px' }}>{t('testimonials.title')}</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'22px' }}>
              {[
                { quote:"My 5-year-old now talks about 'saving for the big thing.' From a bedtime story. I'm not sure school did that.", author:'Dana R.', role:'mom of two' },
                { quote:"Same five minutes I was spending anyway — now it's actually teaching her something. And she begs for 'the next level.'", author:'Marcus T.', role:'dad' },
                { quote:"The voices are lovely and the stories are genuinely calming. It's the only screen-free thing my son asks for at night.", author:'Priya N.', role:'mom' },
              ].map((t2, i) => (
                <div key={i} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'20px', padding:'24px', boxShadow:'0 10px 30px -14px rgba(8,4,28,.35)' }}>
                  <div style={{ color:'#F4A93C', letterSpacing:'2px', fontSize:'15px', marginBottom:'12px' }}>★★★★★</div>
                  <p style={{ fontSize:'15px', lineHeight:1.6, color:'#211a3a', marginBottom:'16px' }}>"{t2.quote}"</p>
                  <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                    <div style={{ width:'40px', height:'40px', borderRadius:'50%', background: ['#F8CBA0','#B8E6F6','#C9BBF0'][i], display:'grid', placeItems:'center', fontSize:'18px' }}>👤</div>
                    <div><div style={{ fontWeight:700, fontSize:'14px' }}>{t2.author}</div><div style={{ fontSize:'12.5px', color:'#5d5278' }}>{t2.role}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── PRICING ─────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading" style={{ padding:'80px 0', background:'#F4E9D4' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#E0852A', fontWeight:800 }}>{t('pricing.kicker')}</p>
            <h2 id="pricing-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'40px' }}>{t('pricing.title')}</h2>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', maxWidth:'760px', margin:'0 auto 22px' }}>
              {/* Free */}
              <div style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'20px', padding:'32px', textAlign:'center' }}>
                <div style={{ fontSize:'14px', color:'#5d5278', fontWeight:700, marginBottom:'8px' }}>{t('pricing.free.label')}</div>
                <div style={{ fontFamily:'var(--font-fraunces)', fontSize:'46px', marginBottom:'8px' }}>{t('pricing.free.amount')}</div>
                <div style={{ fontSize:'13px', color:'#5d5278', marginBottom:'24px' }}>{t('pricing.free.sub')}</div>
                <button onClick={openBuilder} style={{ width:'100%', padding:'14px', background:'transparent', border:'1.5px solid #d9c9a8', borderRadius:'14px', fontWeight:700, cursor:'pointer', fontSize:'14px' }}>Start free</button>
              </div>
              {/* Club */}
              <div style={{ background:'#fff', border:'2px solid #F4A93C', borderRadius:'20px', padding:'32px', textAlign:'center', position:'relative' }}>
                <div style={{ position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)', background:'#F4A93C', color:'#3a230a', fontSize:'11.5px', fontWeight:800, padding:'4px 14px', borderRadius:'99px' }}>{t('pricing.club.tag')}</div>
                <div style={{ fontSize:'14px', color:'#5d5278', fontWeight:700, marginBottom:'8px' }}>{t('pricing.club.label')}</div>
                <div style={{ fontFamily:'var(--font-fraunces)', fontSize:'46px', marginBottom:'4px' }}>{t('pricing.club.amount')}<span style={{ fontSize:'18px' }}>{t('pricing.club.period')}</span></div>
                <ul style={{ listStyle:'none', textAlign:'left', margin:'18px 0', fontSize:'14.5px', display:'flex', flexDirection:'column', gap:'10px' }}>
                  {[1,2,3,4].map(n => (
                    <li key={n} style={{ display:'flex', gap:'9px' }}>
                      <span style={{ color:'#E0852A', fontWeight:700 }}>✓</span>
                      {t(`pricing.club.f${n}`)}
                    </li>
                  ))}
                </ul>
                <button onClick={openBuilder} style={{ width:'100%', padding:'15px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'14px', cursor:'pointer', fontSize:'15px' }}>
                  {t('pricing.club.cta')}
                </button>
              </div>
            </div>
            <p style={{ fontSize:'14px', color:'#5d5278', lineHeight:1.6 }}>{t('pricing.guarantee')}<br/>{t('pricing.value')}</p>
          </div>
        </section>

        {/* ─────────────── TRUST ─────────────── */}
        <section aria-labelledby="trust-heading" style={{ padding:'80px 0', background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#FFD27A', fontWeight:800 }}>{t('trust.kicker')}</p>
            <h2 id="trust-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'40px' }}>{t('trust.title')}</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'22px' }}>
              {[1,2,3].map(n => (
                <div key={n} style={{ background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.14)', borderRadius:'20px', padding:'26px' }}>
                  <div style={{ fontSize:'36px', marginBottom:'14px' }}>{['🛡️','🔒','🌙'][n-1]}</div>
                  <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'18px', marginBottom:'8px' }}>{t(`trust.${n}.title`)}</h3>
                  <p style={{ fontSize:'14px', color:'#cfc3ea', lineHeight:1.5 }}>{t(`trust.${n}.sub`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <section id="faq" aria-labelledby="faq-heading" style={{ padding:'80px 0', background:'#FBF4E6' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#E0852A', fontWeight:800 }}>{t('faq.kicker')}</p>
            <h2 id="faq-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'36px' }}>{t('faq.title')}</h2>
            <div style={{ maxWidth:'760px', margin:'0 auto' }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'14px', padding:'18px 22px', marginBottom:'10px', textAlign:'left' }}>
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', background:'none', border:'none', cursor:'pointer', fontWeight:700, fontSize:'15px', color:'#211a3a' }}>
                    <span>{f.q}</span>
                    <span style={{ fontSize:'22px', color:'#E0852A', fontWeight:400, flexShrink:0 }}>{faqOpen === i ? '–' : '+'}</span>
                  </button>
                  {faqOpen === i && <p style={{ fontSize:'14.5px', color:'#5d5278', marginTop:'10px', lineHeight:1.6 }}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── FINAL CTA ─────────────── */}
        <section style={{ padding:'80px 0', background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", opacity:.06, mixBlendMode:'overlay' }} />
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', position:'relative', zIndex:5 }}>
            <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(30px,4vw,40px)', marginBottom:'12px' }}>{t('final.title')}</h2>
            <p style={{ fontSize:'17px', color:'#dccffa', marginBottom:'26px' }}>{t('final.sub')}</p>
            <button onClick={openBuilder} style={{ padding:'16px 32px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'16px', cursor:'pointer', fontSize:'16px', boxShadow:'0 14px 32px -12px rgba(244,169,60,.8)' }}>
              {t('final.cta')}
            </button>
          </div>
        </section>

      </main>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer style={{ background:'#16123a', color:'#b9adda', padding:'60px 0 30px' }}>
        <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1fr', gap:'36px', marginBottom:'40px' }}>
            <div>
              <a href="/" style={{ display:'flex', alignItems:'center', gap:'8px', fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'20px', color:'#fff', textDecoration:'none', marginBottom:'12px' }}>
                🌙 Lumi
              </a>
              <p style={{ fontSize:'14px', lineHeight:1.6, maxWidth:'30ch', color:'#9d92c0' }}>{t('footer.tagline')}</p>
            </div>
            {[
              { head:'product',  links:[['#how','How it works'],['#curriculum','Curriculum overview'],['#voices','Voices'],['#pricing','Pricing'],['/curriculum','Full curriculum detail']] },
              { head:'company',  links:[['/#how','About'],['/contact','Contact us'],['/curriculum','Curriculum']] },
              { head:'legal',    links:[['/privacy','Privacy policy'],['/terms','Terms of service'],['/privacy#coppa',"Children's privacy (COPPA)"],['/account','Delete my data']] },
            ].map(col => (
              <div key={col.head}>
                <h3 style={{ fontSize:'13px', letterSpacing:'1px', textTransform:'uppercase', color:'#fff', marginBottom:'16px', fontWeight:800 }}>{t(`footer.${col.head}`)}</h3>
                {col.links.map(([href, label]) => (
                  <a key={href} href={href} style={{ display:'block', fontSize:'14px', marginBottom:'10px', color:'#b9adda', textDecoration:'none' }}>{label}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop:'1px solid rgba(255,255,255,.1)', paddingTop:'22px', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'12px', fontSize:'13px', color:'#8a7fb0' }}>
            <span>{t('footer.copy', { year: new Date().getFullYear().toString() })}</span>
            <span>Made with ♥ for bedtime</span>
          </div>
        </div>
      </footer>

      {/* ─────────────── MOBILE STICKY CTA ─────────────── */}
      <div style={{ display:'none', position:'fixed', bottom:0, left:0, right:0, zIndex:150, background:'rgba(22,18,58,.95)', backdropFilter:'blur(10px)', padding:'12px 16px', borderTop:'1px solid rgba(255,255,255,.12)' }}
           className="mobile-cta">
        <button onClick={openBuilder} style={{ width:'100%', padding:'15px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'14px', cursor:'pointer', fontSize:'15px' }}>
          {t('hero.cta.primary')}
        </button>
      </div>

      {/* ─────────────── BUILDER OVERLAY ─────────────── */}
      {overlayOpen && (
        <div style={{ position:'fixed', inset:0, zIndex:500, background:'rgba(12,8,32,.75)', backdropFilter:'blur(4px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}
             onClick={e => { if (e.target === e.currentTarget) setOverlayOpen(false) }}>
          <div role="dialog" aria-modal="true" aria-label="Story builder" style={{ background:'#FBF4E6', borderRadius:'28px', width:'100%', maxWidth:'430px', overflow:'hidden', boxShadow:'0 24px 60px -22px rgba(8,4,28,.7)', position:'relative', maxHeight:'90vh', overflowY:'auto' }}>
            <button onClick={() => setOverlayOpen(false)} style={{ position:'absolute', top:'14px', right:'14px', zIndex:90, width:'34px', height:'34px', borderRadius:'50%', border:'none', background:'rgba(0,0,0,.18)', color:'#fff', cursor:'pointer', fontSize:'16px' }} aria-label="Close builder">✕</button>

            {/* ── Embedded Stripe Checkout — payment happens in-funnel ── */}
            {checkoutSecret && (
              <div style={{ padding:'18px' }}>
                <button onClick={() => setCheckoutSecret(null)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:'13px', color:'#5d5278', fontWeight:700, marginBottom:'10px' }}>← Back</button>
                <div style={{ background:'#fff7ea', border:'1px solid #f1ddb6', borderRadius:'12px', padding:'10px 12px', fontSize:'12.5px', color:'#8a6a1f', marginBottom:'14px' }}>
                  🌙 {childName ? `${childName}'s` : 'Your'} first story is free · then $9.99/mo · cancel anytime
                </div>
                {stripePromise ? (
                  <EmbeddedCheckoutProvider key={checkoutSecret} stripe={stripePromise} options={{ clientSecret: checkoutSecret }}>
                    <EmbeddedCheckout />
                  </EmbeddedCheckoutProvider>
                ) : (
                  <p style={{ fontSize:'13px', color:'#c0392b', textAlign:'center', padding:'20px' }}>Payment isn't configured yet (missing Stripe publishable key).</p>
                )}
              </div>
            )}

            {/* Progress (hidden on the preview + checkout screens) */}
            {!preview && (
            <div style={{ display:'flex', alignItems:'center', gap:'10px', padding:'18px 18px 12px' }}>
              <button onClick={() => builderStep > 1 ? setBuilderStep(s => s-1) : setOverlayOpen(false)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:'18px', color:'#211a3a', width:'34px', height:'34px', borderRadius:'10px' }} aria-label="Back">←</button>
              <div style={{ flex:1, height:'8px', background:'#e7dac0', borderRadius:'99px', overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${builderStep * 25}%`, background:'linear-gradient(90deg,#FFD27A,#E0852A)', borderRadius:'99px', transition:'width .45s' }} />
              </div>
              <span style={{ fontSize:'12px', color:'#5d5278', fontWeight:700 }}>{builderStep} / 4</span>
            </div>
            )}

            {!preview && (
            <div style={{ padding:'6px 22px 22px' }}>
              {/* Step indicator */}
              <div style={{ display:'flex', gap:'8px', alignItems:'center', background:'#fff7ea', border:'1px solid #f1ddb6', borderRadius:'12px', padding:'10px 12px', fontSize:'12.5px', color:'#8a6a1f', marginBottom:'16px' }}>
                {['🌙 Tonight\'s lesson: saving for a goal','✨ Same lesson — their favourite world','📚 Building level by level','🔊 The right voice makes it theirs'][builderStep-1]}
              </div>

              {/* Step 1: Name + Age */}
              {builderStep === 1 && (
                <div>
                  <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', margin:'6px 0 4px' }}>Who's this story for?</h2>
                  <p style={{ fontSize:'13.5px', color:'#5d5278', marginBottom:'18px' }}>Only used to personalise the story. No account needed yet.</p>
                  <div style={{ marginBottom:'16px' }}>
                    <label style={{ fontSize:'13px', fontWeight:700, display:'block', marginBottom:'7px' }}>Your child's first name</label>
                    <input value={childName} onChange={e => setChildName(e.target.value)} placeholder="e.g. Maya"
                      style={{ width:'100%', padding:'15px', border:'1.5px solid #e0d2b7', borderRadius:'13px', fontSize:'16px', fontFamily:'inherit', background:'#fff', outline:'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize:'13px', fontWeight:700, display:'block', marginBottom:'7px' }}>Age band</label>
                    <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                      {AGE_BANDS.map(b => (
                        <button key={b.value} onClick={() => setAgeBand(b.value)}
                          style={{ padding:'10px 16px', border:`1.5px solid ${ageBand===b.value?'#211a3a':'#e0d2b7'}`, background: ageBand===b.value?'#211a3a':'#fff', color: ageBand===b.value?'#fff':'#211a3a', borderRadius:'99px', cursor:'pointer', fontSize:'13.5px', fontWeight:600 }}>
                          {b.label} yrs
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: World (framed as the child's interest) */}
              {builderStep === 2 && (
                <div>
                  <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', margin:'6px 0 4px' }}>What does your child love?</h2>
                  <p style={{ fontSize:'13.5px', color:'#5d5278', marginBottom:'18px' }}>Same lesson, set in the world they'll adore — they become the hero.</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'11px' }}>
                    {SKINS.map(s => (
                      <button key={s.slug} onClick={() => setSkinSlug(s.slug)}
                        style={{ border:`2px solid ${skinSlug===s.slug?'#F4A93C':'#e0d2b7'}`, borderRadius:'17px', padding:'14px 10px', cursor:'pointer', textAlign:'center', background: skinSlug===s.slug?'#fff7ea':'#fff', transition:'.15s' }}>
                        <div style={{ fontSize:'34px', marginBottom:'6px' }}>{s.emoji}</div>
                        <div style={{ fontWeight:800, fontSize:'13px' }}>{s.loves}</div>
                        <div style={{ fontSize:'11px', color:'#5d5278' }}>{s.name} · {s.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Subject */}
              {builderStep === 3 && (
                <div>
                  <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', margin:'6px 0 4px' }}>What should it teach?</h2>
                  <p style={{ fontSize:'13.5px', color:'#5d5278', marginBottom:'18px' }}>One concept per story, building level by level. Pick the skill you'd like to start with.</p>
                  {[
                    { slug:'money', emoji:'🪙', name:'Money & saving', desc:'Coins, value, saving for goals', live:true },
                    { slug:'focus', emoji:'🎯', name:'Focus & goals', desc:'Attention, planning, finishing', live:true },
                    { slug:'resilience', emoji:'💪', name:'Resilience', desc:'Growth mindset, bouncing back', live:true },
                    { slug:'kindness', emoji:'❤️', name:'Kindness & empathy', desc:'Noticing, caring, sharing', live:true },
                    { slug:'problem', emoji:'🧠', name:'Problem solving', desc:'Pause, ideas, try and see', live:true },
                    { slug:'confidence', emoji:'🌱', name:'Confidence', desc:'Trying before you feel ready', live:true },
                  ].map(s => {
                    const selected = subjectSlug === s.slug
                    return (
                      <button key={s.slug} type="button"
                        onClick={() => s.live ? setSubjectSlug(s.slug) : setActivePath(s.slug)}
                        aria-pressed={selected}
                        style={{ width:'100%', textAlign:'left', display:'flex', alignItems:'center', gap:'12px', border:`2px solid ${selected ? '#F4A93C' : '#e0d2b7'}`, borderRadius:'15px', padding:'13px', cursor:'pointer', background: selected ? '#fff7ea' : '#fff', opacity: s.live ? 1 : .7, marginBottom:'10px', fontFamily:'inherit' }}>
                        <span style={{ fontSize:'24px' }}>{s.emoji}</span>
                        <div style={{ flex:1 }}><div style={{ fontWeight:700, fontSize:'14.5px' }}>{s.name}</div><div style={{ fontSize:'12px', color:'#5d5278' }}>{s.desc}</div></div>
                        {s.live
                          ? <span style={{ fontSize:'16px', color: selected ? '#E0852A' : '#cdbf9f' }}>{selected ? '✓' : '○'}</span>
                          : <span style={{ fontSize:'10px', background:'#e7dac0', color:'#5d5278', padding:'3px 9px', borderRadius:'99px', fontWeight:800 }}>Soon</span>}
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Step 4: Voice */}
              {builderStep === 4 && (
                <div>
                  <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', margin:'6px 0 4px' }}>Choose the voice.</h2>
                  <p style={{ fontSize:'13.5px', color:'#5d5278', marginBottom:'18px' }}>Tap to hear the difference. Switch anytime.</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
                    {voices.map((v, i) => (
                      <button key={v.id} onClick={() => { setVoiceId(v.id); playSample(i) }} aria-pressed={voiceId===v.id}
                        style={{ display:'flex', gap:'10px', alignItems:'center', background: voiceId===v.id?'#fff7ea':'#fff', border:`1.5px solid ${voiceId===v.id?'#F4A93C':'#e6d8bd'}`, borderRadius:'15px', padding:'12px', cursor:'pointer' }}>
                        <span style={{ width:'36px', height:'36px', borderRadius:'50%', background:'#e7dac0', flexShrink:0, display:'grid', placeItems:'center', fontSize:'15px' }}>{sampleLoading===i ? '♪' : '▶'}</span>
                        <div><div style={{ fontWeight:800, fontSize:'14px' }}>{v.name}</div><div style={{ fontSize:'12px', color:'#5d5278' }}>{v.tone}</div></div>
                      </button>
                    ))}
                  </div>
                  <div style={{ marginTop:'16px', background:'#fff', border:'1.5px dashed #EB8A8A', borderRadius:'17px', padding:'18px', textAlign:'center' }}>
                    <span style={{ display:'inline-block', fontSize:'10.5px', letterSpacing:'1px', textTransform:'uppercase', fontWeight:800, color:'#fff', background:'#EB8A8A', padding:'3px 10px', borderRadius:'99px', marginBottom:'8px' }}>After sign-up</span>
                    <h4 style={{ fontFamily:'var(--font-fraunces)', fontSize:'17px' }}>Want it in your voice?</h4>
                    <p style={{ fontSize:'13px', color:'#5d5278', margin:'6px 0 0', lineHeight:1.45 }}>Record your own narration once your account's set up.</p>
                  </div>
                </div>
              )}
            </div>
            )}

            {/* ── PREVIEW SCREEN — the personalised "moment of value" before paywall ── */}
            {preview && !checkoutSecret && (
              <div style={{ padding:'22px' }}>
                <div style={{ display:'flex', gap:'8px', alignItems:'center', background:'#fff7ea', border:'1px solid #f1ddb6', borderRadius:'12px', padding:'10px 12px', fontSize:'12.5px', color:'#8a6a1f', marginBottom:'16px' }}>
                  ✨ {childName ? `${childName}'s` : 'Your'} story — the opening
                </div>

                {preview.loading && (
                  <div style={{ textAlign:'center', padding:'30px 10px' }}>
                    <div style={{ fontSize:'30px', marginBottom:'12px' }}>🌙</div>
                    <p style={{ fontSize:'14px', color:'#5d5278' }}>Building {childName ? `${childName}'s` : 'your'} preview…</p>
                  </div>
                )}

                {preview.error && (
                  <div style={{ textAlign:'center', padding:'24px 10px' }}>
                    <p style={{ fontSize:'14px', color:'#c0392b', marginBottom:'14px' }}>{preview.error}</p>
                    <button onClick={() => generatePreview()} style={{ padding:'12px 20px', background:'#F4E9D4', color:'#211a3a', fontWeight:700, border:'none', borderRadius:'12px', cursor:'pointer' }}>Try again</button>
                  </div>
                )}

                {!preview.loading && !preview.error && (
                  <>
                    {/* Personalisation badges — make the slot-fill explicit */}
                    <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', marginBottom:'12px' }}>
                      {[
                        childName ? `👶 ${childName}` : null,
                        `${SKINS.find(s => s.slug === skinSlug)?.emoji ?? '🌍'} ${SKINS.find(s => s.slug === skinSlug)?.name ?? 'World'}`,
                        `🔊 ${voices.find(v => v.id === voiceId)?.name ?? 'Voice'}`,
                      ].filter(Boolean).map((b, i) => (
                        <span key={i} style={{ fontSize:'11.5px', fontWeight:700, background:'#fff', border:'1px solid #ece0c8', borderRadius:'99px', padding:'5px 11px', color:'#5d5278' }}>{b}</span>
                      ))}
                    </div>

                    <blockquote style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'16px', padding:'18px 20px', fontSize:'15.5px', lineHeight:1.7, fontFamily:'var(--font-fraunces)', color:'#211a3a', margin:'0 0 14px' }}>
                      {renderScript(preview.script ?? '')}
                    </blockquote>

                    {/* Audio is always mounted so .play() works inside the unlock
                        gesture; controls are revealed once the email is given. */}
                    <audio
                      ref={previewAudioRef}
                      src={preview.audioUrl ?? undefined}
                      controls={leadDone}
                      preload="auto"
                      style={{ width:'100%', display: leadDone ? 'block' : 'none' }}
                    />

                    {!leadDone && (
                      <div style={{ background:'#fff', border:'1.5px solid #ece0c8', borderRadius:'16px', padding:'16px' }}>
                        <p style={{ fontSize:'13.5px', fontWeight:700, color:'#211a3a', margin:'0 0 4px' }}>
                          🎧 Hear {childName ? `${childName}'s` : 'your'} story — and we'll save it to your library
                        </p>
                        <p style={{ fontSize:'12px', color:'#5d5278', margin:'0 0 12px' }}>
                          Enter your email and press play. Your first story is free — no card needed to listen.
                        </p>
                        <input
                          type="email" inputMode="email" autoComplete="email"
                          value={leadEmail}
                          onChange={e => { setLeadEmail(e.target.value); if (leadError) setLeadError(false) }}
                          onKeyDown={e => { if (e.key === 'Enter') unlockStory() }}
                          placeholder="you@email.com"
                          style={{ width:'100%', padding:'13px', border:`1.5px solid ${leadError ? '#c0392b' : '#e0d2b7'}`, borderRadius:'12px', fontSize:'16px', fontFamily:'inherit', background:'#fff', outline:'none', marginBottom:'10px' }}
                        />
                        {leadError && <p style={{ fontSize:'12px', color:'#c0392b', margin:'-4px 0 10px' }}>Please enter a valid email address.</p>}
                        <button onClick={unlockStory}
                          style={{ width:'100%', padding:'14px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:800, border:'none', borderRadius:'13px', cursor:'pointer', fontSize:'15px' }}>
                          ▶ Play {childName ? `${childName}'s` : 'the'} story
                        </button>
                        <p style={{ fontSize:'10.5px', color:'#9a8fb5', textAlign:'center', margin:'9px 0 0' }}>
                          No spam. We email your free story + reminders you can turn off anytime.
                        </p>
                      </div>
                    )}

                    {leadDone && !preview.audioUrl && (
                      <p style={{ fontSize:'12.5px', color:'#8a6a1f', textAlign:'center', margin:'8px 0' }}>Your narration is being prepared — we'll email it to you shortly.</p>
                    )}

                    {/* Live demo: same lesson, re-skinned + re-voiced on the fly.
                        Shown once unlocked — it's about HEARING the change. */}
                    {leadDone && (
                    <div style={{ marginTop:'16px', background:'#fff7ea', border:'1px solid #f1ddb6', borderRadius:'14px', padding:'14px' }}>
                      <p style={{ fontSize:'12px', fontWeight:800, color:'#8a6a1f', margin:'0 0 10px', letterSpacing:'.3px' }}>
                        ✨ Same lesson — switch the world or voice and hear it change
                      </p>
                      <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', marginBottom:'10px' }}>
                        {SKINS.map(sk => (
                          <button key={sk.slug} onClick={async () => { setSkinSlug(sk.slug); await generatePreview({ skinSlug: sk.slug }); previewAudioRef.current?.play().catch(() => {}) }}
                            aria-pressed={skinSlug===sk.slug}
                            style={{ fontSize:'12.5px', fontWeight:700, border:`1.5px solid ${skinSlug===sk.slug?'#F4A93C':'#e6d8bd'}`, background: skinSlug===sk.slug?'#fff':'transparent', borderRadius:'10px', padding:'7px 10px', cursor:'pointer', color:'#211a3a' }}>
                            {sk.emoji} {sk.name.replace(/^(Under the |Whisper |Cloud |Space )/,'')}
                          </button>
                        ))}
                      </div>
                      <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
                        {voices.map(v => (
                          <button key={v.id} onClick={async () => { setVoiceId(v.id); await generatePreview({ voiceId: v.id }); previewAudioRef.current?.play().catch(() => {}) }}
                            aria-pressed={voiceId===v.id}
                            style={{ fontSize:'12.5px', fontWeight:700, border:`1.5px solid ${voiceId===v.id?'#F4A93C':'#e6d8bd'}`, background: voiceId===v.id?'#fff':'transparent', borderRadius:'10px', padding:'7px 10px', cursor:'pointer', color:'#211a3a' }}>
                            🔊 {v.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    )}

                    <p style={{ fontSize:'12px', color:'#5d5278', textAlign:'center', margin:'14px 0 0' }}>
                      Level 1 of 5 · {SUBJECT_NAMES[subjectSlug] ?? 'Money'} path · {voices.find(v => v.id === voiceId)?.name ?? 'Willow'}'s voice
                    </p>
                  </>
                )}
              </div>
            )}

            {!checkoutSecret && (
            <div style={{ padding:'14px 22px 22px', borderTop:'1px solid #ece0c8' }}>
              {!preview ? (
                <button
                  onClick={() => builderStep < 4 ? setBuilderStep(s => s+1) : generatePreview()}
                  disabled={builderStep === 1 && !childName.trim()}
                  style={{ width:'100%', padding:'15px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor: builderStep===1 && !childName.trim() ? 'not-allowed' : 'pointer', fontSize:'15px', opacity: builderStep===1 && !childName.trim() ? .6 : 1 }}>
                  {builderStep < 4 ? 'Continue →' : 'Hear their story →'}
                </button>
              ) : leadDone ? (
                <>
                  {/* Curriculum + trust mini-explainer: sells the program, not one
                      story, and surfaces the COPPA / expert-written trust levers. */}
                  <div style={{ display:'flex', gap:'6px', marginBottom:'11px' }}>
                    {[['📚','Levels build on each other'],['✍️','Expert-written'],['🔒','No data on your child']].map(([icon,label]) => (
                      <div key={label} style={{ flex:1, background:'#fff', border:'1px solid #ece0c8', borderRadius:'11px', padding:'9px 6px', textAlign:'center' }}>
                        <div style={{ fontSize:'16px', lineHeight:1.2 }}>{icon}</div>
                        <div style={{ fontSize:'10px', color:'#5d5278', fontWeight:600, lineHeight:1.25, marginTop:'2px' }}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={startCheckout}
                    disabled={preview.loading || checkoutLoading}
                    style={{ width:'100%', padding:'15px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor: preview.loading ? 'wait' : 'pointer', fontSize:'15px', opacity: preview.loading ? .6 : 1 }}>
                    {checkoutLoading ? 'Starting…' : 'Start Story Club — first story free →'}
                  </button>
                  <p style={{ fontSize:'11.5px', color:'#5d5278', textAlign:'center', margin:'9px 0 0', lineHeight:1.4 }}>
                    Then <strong>$9.99/mo</strong> · a new story every 3 days · cancel anytime
                  </p>
                  <button onClick={() => setPreview(null)} style={{ width:'100%', padding:'10px', background:'none', color:'#5d5278', fontWeight:600, border:'none', cursor:'pointer', fontSize:'13px', marginTop:'4px' }}>
                    ← Change something
                  </button>
                </>
              ) : (
                <button onClick={() => setPreview(null)} style={{ width:'100%', padding:'10px', background:'none', color:'#5d5278', fontWeight:600, border:'none', cursor:'pointer', fontSize:'13px' }}>
                  ← Change something
                </button>
              )}
            </div>
            )}
          </div>
        </div>
      )}

    </div>
  )
}
