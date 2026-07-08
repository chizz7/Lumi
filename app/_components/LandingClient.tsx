'use client'
// app/_components/LandingClient.tsx
// The full landing page. Client component because of:
//   - Story sampler (audio + word animation)
//   - Voice switcher
//   - Builder overlay
//   - FAQ accordions
//   - Language banner dismiss
//   - Waitlist form submission

import { useState, useRef, useEffect, useSyncExternalStore } from 'react'
import { loadStripe }                    from '@stripe/stripe-js'
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import type { VoiceConfig }              from '@/lib/voices'

// Embedded Checkout keeps payment inside the funnel. Created once at module load.
const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = STRIPE_PK ? loadStripe(STRIPE_PK) : null
import { getAllLevels }                  from '@/content'
import { SUBJECT_META, WORLD_META, AGE_BANDS } from '@/content/meta'
import { interestForWorld }              from '@/content/interests'
import { fbEvent }                       from '@/lib/fpixel'
import StoryStudio                       from './StoryStudio'
import { playUrl, stopCurrent, subscribe as subscribePlayer, getState as getPlayerState } from '@/lib/howlerPlayer'

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

// Shared subject/world/age metadata lives in content/meta.ts — derive the
// landing-specific shapes from it here.
const SKINS = WORLD_META

// Short path names ("Money", "Focus") for the compact preview footer.
const SUBJECT_NAMES: Record<string, string> = Object.fromEntries(
  SUBJECT_META.map(s => [s.slug, s.name.split(' & ')[0]!])
)

// The learning paths as the landing page presents them (tabs, Story Studio grid).
const paths = SUBJECT_META.map(s => ({ id: s.slug, emoji: s.emoji, name: s.name, why: s.why }))

// Honest, verifiable proof — no fabricated reviews/ratings (a legal risk for a
// children's product). Replace with real attributable quotes once you have them.
const PROOF = [
  { icon: '✍️', title: 'Written, then reviewed', body: 'Every story is authored and safety- and teacher-checked before any child hears it — never generated on the fly.' },
  { icon: '📚', title: 'A real curriculum', body: '35 leveled stories across 7 skills — each teaches one concept and quietly builds on the last.' },
  { icon: '🔒', title: 'COPPA-safe by design', body: 'No birthdate, photos, or location — ever. Just a first name and age band you can export or delete anytime.' },
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
  const [subjectSlug, setSubjectSlug]     = useState('kindness')
  const [voiceId,     setVoiceId]         = useState(voices[0]?.id ?? 'af_heart')
  const [activePath,  setActivePath]      = useState<string>('kindness')
  const [activeVoice, setActiveVoice]     = useState(0)
  const [langBanner,  setLangBanner]      = useState(showLangBanner)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistDone,  setWaitlistDone]  = useState(false)
  const [waitlistAlready, setWaitlistAlready] = useState(false)
  const [waitlistError, setWaitlistError] = useState<string | null>(null)
  const [waitlistLoading, setWaitlistLoading] = useState(false)
  const [faqOpen,     setFaqOpen]         = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // ── Audio sampler (hero + voice switcher) ───────────────────────────────────
  const sampleCache    = useRef<Record<string, string>>({})  // combo -> signed url
  const [sampleLoading, setSampleLoading] = useState<number | null>(null)
  const [sampleError,   setSampleError]   = useState<string | null>(null)

  const sampleKey = (skin: string, vid: string) => `${subjectSlug}|${skin}|${vid}`

  // Fetch (and cache) a sample's signed URL WITHOUT playing — used to pre-warm.
  const warmSample = async (vid: string, skin: string = skinSlug) => {
    const key = sampleKey(skin, vid)
    if (sampleCache.current[key]) return sampleCache.current[key]
    const res  = await fetch(`/api/preview/sample?subject=${encodeURIComponent(subjectSlug)}&skin=${skin}&voice=${encodeURIComponent(vid)}`)
    const data = await res.json().catch(() => ({} as { audioUrl?: string }))
    if (res.ok && data.audioUrl) { sampleCache.current[key] = data.audioUrl; return data.audioUrl }
    return null
  }

  // Play a voice sample. When the URL is already cached (the common case — we
  // pre-warm aggressively) playUrl runs synchronously in the tap handler, which
  // is REQUIRED on iOS: a play() after an await lands outside the gesture and is
  // blocked. The uncached path still warms+plays as a desktop fallback.
  const playSampleFor = (skin: string, vid: string, voiceIdx?: number) => {
    setSampleError(null)
    if (voiceIdx != null) setActiveVoice(voiceIdx)
    // Never let two audios play at once: pause the native preview player before
    // starting a Howler sample.
    previewAudioRef.current?.pause()
    const cached = sampleCache.current[sampleKey(skin, vid)]
    if (cached) {
      // Tap-to-stop: if this exact sample is already playing, stop it instead of
      // restarting — gives the samples a working pause/stop control.
      const s = getPlayerState()
      if (s.url === cached && s.playing) { stopCurrent(); return }
      playUrl(cached); return                         // synchronous → iOS-safe
    }
    if (voiceIdx != null) setSampleLoading(voiceIdx)
    warmSample(vid, skin)
      .then(url => {
        if (!url) { setSampleError('Sample is still preparing — tap again in a moment.'); return }
        playUrl(url)
      })
      .catch(() => setSampleError('Could not load the sample — please try again.'))
      .finally(() => setSampleLoading(null))
  }

  // Thin wrapper used by the hero / voices / studio voice rows.
  const playSample = (voiceIdx: number) => {
    const v = voices[voiceIdx]
    if (v) playSampleFor(skinSlug, v.id, voiceIdx)
  }

  // Live player state so sample buttons can show a pause/stop affordance and
  // highlight which voice is currently playing (index for the current world).
  const player = useSyncExternalStore(subscribePlayer, getPlayerState, getPlayerState)
  const playingVoiceIdx = player.playing
    ? voices.findIndex(v => sampleCache.current[sampleKey(skinSlug, v.id)] === player.url)
    : -1

  // Pre-warm EVERY voice sample for the current world so any voice tap hits the
  // synchronous (iOS-safe) play path. The active voice warms first.
  useEffect(() => {
    let cancelled = false
    const t = setTimeout(() => {
      if (cancelled) return
      const active = voices[activeVoice]
      if (active) warmSample(active.id).catch(() => {})
      voices.forEach((v, i) => { if (i !== activeVoice) warmSample(v.id).catch(() => {}) })
    }, 400)
    return () => { cancelled = true; clearTimeout(t) }
  }, [skinSlug, subjectSlug, activeVoice]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Builder overlay focus management (a11y: trap + Escape + restore) ─────────
  const dialogRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!overlayOpen) return
    const prev = document.activeElement as HTMLElement | null
    const focusables = () => Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])'
      ) ?? []
    ).filter(el => el.offsetParent !== null)
    // Move focus into the dialog on open.
    setTimeout(() => focusables()[0]?.focus(), 0)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOverlayOpen(false); return }
      if (e.key !== 'Tab') return
      const f = focusables()
      if (f.length === 0) return
      const first = f[0]!, last = f[f.length - 1]!
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); prev?.focus?.() }
  }, [overlayOpen])

  // ── Builder preview (personalised, before paywall) ──────────────────────────
  const [preview, setPreview] = useState<
    { loading: boolean; script?: string; audioUrl?: string | null; audioError?: string | null; error?: string } | null
  >(null)
  // Email gate on the preview: capturing the parent's email both (a) unlocks the
  // audio and (b) gives us a lead for abandoned-funnel recovery. Submitting it is
  // also the user gesture that lets the audio .play() on mobile (iOS blocks
  // autoplay without one), so one tap solves both.
  const [leadEmail, setLeadEmail]     = useState('')
  const [leadDone,  setLeadDone]      = useState(false)
  const [leadError, setLeadError]     = useState(false)

  // Once the preview is unlocked, the "switch the world or voice and hear it
  // change" demo appears. Pre-warm the current voice across ALL worlds so those
  // world-switch taps also play synchronously (in-gesture) on iOS.
  useEffect(() => {
    if (!leadDone) return
    let cancelled = false
    const t = setTimeout(() => {
      if (cancelled) return
      SKINS.forEach(sk => { if (sk.slug !== skinSlug) warmSample(voiceId, sk.slug).catch(() => {}) })
    }, 800)
    return () => { cancelled = true; clearTimeout(t) }
  }, [leadDone, voiceId, subjectSlug, skinSlug]) // eslint-disable-line react-hooks/exhaustive-deps
  // Native <audio> ref + the media error code it reports, so we can SEE why iOS
  // refuses the file (2=network/range, 3=decode, 4=src/content-type) instead of
  // guessing. Mounted before unlock so unlockStory can play() inside the gesture.
  const previewAudioRef = useRef<HTMLAudioElement>(null)
  const [audioErrCode, setAudioErrCode] = useState<number | null>(null)
  // Embedded Stripe checkout (mounts in-modal; null until "Start Story Club").
  const [checkoutSecret,  setCheckoutSecret]  = useState<string | null>(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError,   setCheckoutError]   = useState<string | null>(null)

  const unlockStory = () => {
    const email = leadEmail.trim().toLowerCase()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setLeadError(true); return }
    setLeadError(false)
    setLeadDone(true)
    setAudioErrCode(null)
    // CRITICAL (iOS): start playback synchronously inside this tap handler on the
    // already-mounted native <audio> element. iOS won't load/play audio started
    // from an effect after the state change — it must be in the gesture.
    previewAudioRef.current?.play().catch(() => {})
    // Capture the lead (non-blocking — the story unlocks regardless).
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, lang, source: 'builder-preview' }),
    }).catch(() => {})
    // Meta Pixel: preview-email captured = a Lead.
    fbEvent('Lead', { content_name: 'builder-preview' })
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

  // Monotonic token so rapid world/voice switches can't let a stale preview
  // response win: each call claims the next id and only commits its result if
  // it's still the latest in flight. (The shared draft cookie also means
  // concurrent saveDraft calls clobber each other, so ordering matters.)
  const previewGen = useRef(0)
  const generatePreview = async (overrides: Partial<DraftFields> = {}) => {
    const gen = ++previewGen.current
    setPreview({ loading: true })
    try {
      await saveDraft(overrides)
      const res  = await fetch('/api/preview')
      const data = await res.json()
      if (gen !== previewGen.current) return   // a newer request superseded us
      if (!res.ok) throw new Error(data.error || 'preview failed')
      setPreview({ loading: false, script: data.script, audioUrl: data.audioUrl, audioError: data.audioError })
    } catch {
      if (gen !== previewGen.current) return
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
    if (waitlistLoading) return
    const email = waitlistEmail.trim()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setWaitlistError('Please enter a valid email address.'); return
    }
    setWaitlistError(null)
    setWaitlistLoading(true)
    try {
      const res  = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang, source }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) { setWaitlistError(data.error || 'Something went wrong — please try again.'); return }
      setWaitlistAlready(Boolean(data.already))
      setWaitlistDone(true)
    } catch {
      setWaitlistError('Something went wrong — please try again.')
    } finally {
      setWaitlistLoading(false)
    }
  }

  // ── Builder submit ─────────────────────────────────────────────────────────
  const openBuilder = () => { setOverlayOpen(true); setBuilderStep(1); setPreview(null); setLeadDone(false); setLeadEmail(''); setLeadError(false); setCheckoutSecret(null) }
  // Fetch a client_secret and mount Embedded Checkout in the modal — no redirect.
  const startCheckout = async () => {
    if (checkoutLoading) return
    setCheckoutLoading(true); setCheckoutError(null)
    try {
      await saveDraft()
      const res  = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.clientSecret) {
        setCheckoutSecret(data.clientSecret)
        fbEvent('InitiateCheckout', { value: 9.99, currency: 'USD' })
      }
      else setCheckoutError(data.error || "We couldn't start checkout. Please try again.")
    } catch {
      setCheckoutError("We couldn't start checkout. Please try again.")
    } finally {
      setCheckoutLoading(false)
    }
  }

  // ── FAQ items ──────────────────────────────────────────────────────────────
  const faqs = [1,2,3,4,5].map(n => ({
    q: t(`faq.${n}.q`),
    a: t(`faq.${n}.a`),
  }))

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
              <span style={{ color:'#FFD27A', fontWeight:700, fontSize:'13px' }}>✓ {waitlistAlready ? "You're already on the list" : t('waitlist.success')}</span>
            ) : (
              <>
                <input
                  type="email" placeholder={t('waitlist.placeholder')} value={waitlistEmail}
                  aria-invalid={Boolean(waitlistError)}
                  onChange={e => { setWaitlistEmail(e.target.value); if (waitlistError) setWaitlistError(null) }}
                  onKeyDown={e => e.key === 'Enter' && submitWaitlist('language-banner')}
                  style={{ padding:'9px 14px', borderRadius:'10px', border:'1px solid rgba(255,255,255,.25)', background:'rgba(255,255,255,.1)', color:'#fff', fontSize:'14px', outline:'none', minWidth:'200px' }}
                />
                <button onClick={() => submitWaitlist('language-banner')} disabled={waitlistLoading}
                  style={{ padding:'9px 16px', borderRadius:'10px', background:'#F4A93C', color:'#3a230a', fontWeight:700, border:'none', cursor:'pointer', fontSize:'14px', minWidth:'86px' }}>
                  {waitlistLoading ? '…' : t('waitlist.cta')}
                </button>
                <span aria-live="polite" style={{ color:'#ffb4a8', fontSize:'12px', minHeight:'15px' }}>{waitlistError ?? '\u00A0'}</span>
              </>
            )}
            <button onClick={() => setLangBanner(false)} style={{ background:'none', border:'none', color:'rgba(255,255,255,.5)', cursor:'pointer', fontSize:'18px', padding:'4px' }} aria-label="Dismiss">×</button>
          </div>
        </div>
      )}

      {/* ─────────────── HEADER ─────────────── */}
      <header id="top" style={{ position:'sticky', top:0, zIndex:100, background:'rgba(22,18,58,.9)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(255,255,255,.1)' }}>
        <div className="mx-auto max-w-[1140px] px-6 h-[68px] flex items-center justify-between gap-4">
          <a href="/" aria-label="Lumi home" className="flex items-center gap-2 text-white no-underline" style={{ fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'20px' }}>
            <span style={{ fontSize:'22px' }}>🌙</span> Lumi
          </a>
          {/* Desktop nav — hidden on mobile */}
          <nav aria-label="Main navigation" className="hidden md:flex gap-6 items-center">
            {['how','curriculum','voices','pricing'].map(k => (
              <a key={k} href={`#${k}`} className="no-underline font-semibold opacity-90" style={{ color:'#e9e0f7', fontSize:'14.5px' }}>{t(`nav.${k}`)}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="no-underline font-semibold" style={{ color:'#e9e0f7', fontSize:'14.5px' }}>{t('nav.login')}</a>
            <button onClick={openBuilder} className="cursor-pointer font-bold border-0 rounded-[13px]" style={{ padding:'11px 20px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontSize:'14px', boxShadow:'0 10px 22px -8px rgba(244,169,60,.7)' }}>
              {t('nav.cta')}
            </button>
          </div>
          {/* Mobile hamburger — hidden on desktop */}
          <button onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu" aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center cursor-pointer border-0 rounded-[10px]"
            style={{ width:'40px', height:'40px', background:'rgba(255,255,255,.12)', color:'#fff', fontSize:'18px' }}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <nav aria-label="Mobile navigation" className="md:hidden flex flex-col px-6 pb-4" style={{ borderTop:'1px solid rgba(255,255,255,.1)' }}>
            {['how','curriculum','voices','pricing'].map(k => (
              <a key={k} href={`#${k}`} onClick={() => setMobileMenuOpen(false)} className="no-underline font-semibold py-3" style={{ color:'#e9e0f7', fontSize:'15px', borderBottom:'1px solid rgba(255,255,255,.07)' }}>{t(`nav.${k}`)}</a>
            ))}
            <a href="/login" onClick={() => setMobileMenuOpen(false)} className="no-underline font-semibold py-3" style={{ color:'#e9e0f7', fontSize:'15px' }}>{t('nav.login')}</a>
            <button onClick={() => { setMobileMenuOpen(false); openBuilder() }} className="cursor-pointer font-bold border-0 rounded-[13px] mt-2 py-3" style={{ background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontSize:'15px' }}>
              {t('nav.cta')}
            </button>
          </nav>
        )}
      </header>

      <main id="main-content">

        {/* ─────────────── HERO ─────────────── */}
        <section aria-labelledby="hero-heading" className="pt-20 pb-14 md:pt-[120px] md:pb-[90px]" style={{ position:'relative', background:'linear-gradient(180deg,#1a1342,#2c1f5e 60%,#34246e)', color:'#fff', overflow:'hidden' }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', gap:'48px', alignItems:'start' }}>
            {/* Copy */}
            <div>
              <p style={{ fontSize:'12px', letterSpacing:'2.5px', textTransform:'uppercase', color:'#FFD27A', fontWeight:700, marginBottom:'14px' }}>{t('hero.eyebrow')}</p>
              <h1 id="hero-heading" style={{ fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'clamp(32px,4vw,50px)', lineHeight:1.08, marginBottom:'18px' }}>
                Screen-free bedtime stories that quietly raise a <em style={{ fontStyle:'italic', color:'#FFD27A' }}>{t('hero.title.em')}</em>.
              </h1>
              <p style={{ fontSize:'18px', lineHeight:1.55, color:'#e3d8f5', marginBottom:'28px', maxWidth:'46ch' }}>{t('hero.sub')}</p>
              <div style={{ display:'flex', gap:'13px', flexWrap:'wrap', marginBottom:'22px' }}>
                <button onClick={openBuilder} style={{ padding:'15px 24px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor:'pointer', fontSize:'15px', boxShadow:'0 12px 26px -10px rgba(244,169,60,.75)' }}>
                  {t('hero.cta.primary')}
                </button>
                <button onClick={() => playSample(activeVoice)} style={{ padding:'15px 24px', minWidth:'178px', textAlign:'center', background:'rgba(255,255,255,.12)', color:'#fff', fontWeight:700, border:'1px solid rgba(255,255,255,.28)', borderRadius:'15px', cursor:'pointer', fontSize:'15px' }}>
                  {sampleLoading === activeVoice ? '♪ Loading…' : playingVoiceIdx === activeVoice ? '❚❚ Stop sample' : `▶ ${t('hero.cta.secondary')}`}
                </button>
              </div>
              <p aria-live="polite" style={{ fontSize:'13px', color:'#FFD27A', margin:'-12px 0 18px', minHeight:'17px' }}>{sampleError ?? '\u00A0'}</p>
              <div style={{ display:'flex', gap:'18px', flexWrap:'wrap', fontSize:'13.5px', color:'#cfc3ea' }}>
                <span>✓ {t('hero.trust.rating')}</span>
                <span>{t('hero.trust.families')}</span>
                <span>{t('hero.trust.card')}</span>
              </div>
            </div>
            {/* Story Studio — the inline builder is the hero focal point */}
            <StoryStudio
              name={childName} ageBand={ageBand} skinSlug={skinSlug} subjectSlug={subjectSlug} voiceId={voiceId}
              setName={setChildName} setAge={setAgeBand} setWorld={setSkinSlug} setSubject={setSubjectSlug} setVoiceId={setVoiceId}
              skins={SKINS} ageBands={AGE_BANDS} voices={voices} paths={paths}
              playSample={playSample} sampleLoading={sampleLoading} playingVoiceIdx={playingVoiceIdx}
              paused={overlayOpen}
              onBuild={() => { setOverlayOpen(true); setLeadDone(false); setLeadEmail(''); setLeadError(false); setCheckoutSecret(null); generatePreview() }}
            />
          </div>
        </section>

        {/* ─────────────── PROOF BAR — honest product facts (no fabricated press) ─────────────── */}
        <div style={{ background:'#16123a', color:'#cfc3ea', padding:'20px 0' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'center', gap:'12px 30px', flexWrap:'wrap' }}>
            {['7 skill paths','35 leveled stories','6 worlds','4 calm voices','100% screen-free','Expert-reviewed'].map(name => (
              <span key={name} style={{ fontFamily:'var(--font-fraunces)', fontWeight:600, fontSize:'15px', opacity:.85 }}>{name}</span>
            ))}
          </div>
        </div>

        {/* ─────────────── HOW IT WORKS ─────────────── */}
        <section id="how" aria-labelledby="how-heading" style={{ padding:'80px 0', background:'#FBF4E6' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#E0852A', fontWeight:800 }}>{t('how.kicker')}</p>
            <h2 id="how-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'12px' }}>{t('how.title')}</h2>
            <p style={{ fontSize:'16.5px', color:'#4a4063', marginBottom:'50px', maxWidth:'640px', margin:'0 auto 50px' }}>{t('how.sub')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap:'22px' }}>
              {[1,2,3].map(n => (
                <div key={n} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'20px', padding:'26px', boxShadow:'0 10px 30px -14px rgba(8,4,28,.35)' }}>
                  <div style={{ width:'54px', height:'54px', background:'#fff7ea', borderRadius:'15px', display:'grid', placeItems:'center', fontSize:'26px', marginBottom:'16px' }}>
                    {['👶','▶️','📬'][n-1]}
                  </div>
                  <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'20px', marginBottom:'8px' }}>{n}. {t(`how.step${n}.title`)}</h3>
                  <p style={{ fontSize:'14.5px', color:'#4a4063', lineHeight:1.5 }}>{t(`how.step${n}.desc`)}</p>
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
                </button>
              ))}
            </div>
            {/* Active path detail */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap:'40px', alignItems:'start' }}>
              {/* Level-by-level breakdown */}
              <div>
                <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'18px', marginBottom:'18px', color:'rgba(255,255,255,.7)', fontWeight:500 }}>
                  {ap.emoji} {ap.name} — {activeLevels.length} levels
                </h3>
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
            <p style={{ fontSize:'16px', color:'#4a4063', marginBottom:'28px', maxWidth:'560px', margin:'0 auto 28px' }}>{t('voices.sub')}</p>
            <div className="grid grid-cols-2" style={{ gap:'12px', maxWidth:'520px', margin:'0 auto 14px' }}>
              {voices.map((v, i) => (
                <button key={v.id} onClick={() => playSample(i)} aria-pressed={i===activeVoice}
                  style={{ display:'flex', gap:'11px', alignItems:'center', background: i===activeVoice?'#fff7ea':'#fff', border:`1.5px solid ${i===activeVoice?'#F4A93C':'#e6d8bd'}`, borderRadius:'15px', padding:'14px', cursor:'pointer', boxShadow: i===activeVoice?'0 8px 18px -10px rgba(244,169,60,.7)':'none' }}>
                  <span style={{ width:'40px', height:'40px', borderRadius:'50%', background: i===activeVoice?'#F4A93C':'#e7dac0', flexShrink:0, display:'grid', placeItems:'center', fontSize:'16px' }}>{sampleLoading===i ? '♪' : playingVoiceIdx===i ? '❚❚' : '▶'}</span>
                  <div style={{ textAlign:'left' }}>
                    <div style={{ fontWeight:800, fontSize:'15px' }}>{v.name}</div>
                    <div style={{ fontSize:'13px', color:'#4a4063' }}>{v.tone}</div>
                  </div>
                </button>
              ))}
            </div>
            <p style={{ fontSize:'13.5px', color:'#4a4063', margin:'14px auto' }}>{t('voices.now')} <strong>{voices[activeVoice]?.name}</strong></p>
            {/* Your own voice teaser */}
            <div style={{ maxWidth:'520px', margin:'20px auto 0', background:'#fff', border:'1.5px dashed #EB8A8A', borderRadius:'17px', padding:'20px', textAlign:'center' }}>
              <span style={{ display:'inline-block', fontSize:'10.5px', letterSpacing:'1px', textTransform:'uppercase', fontWeight:800, color:'#fff', background:'#EB8A8A', padding:'3px 10px', borderRadius:'99px', marginBottom:'9px' }}>{t('voices.own.badge')}</span>
              <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'19px', marginBottom:'8px' }}>{t('voices.own.title')}</h3>
              <p style={{ fontSize:'14px', color:'#4a4063', marginBottom:'14px', lineHeight:1.5 }}>{t('voices.own.sub')}</p>
              <button onClick={openBuilder} style={{ padding:'12px 22px', background:'#F4E9D4', color:'#211a3a', fontWeight:700, border:'none', borderRadius:'13px', cursor:'pointer' }}>
                {t('voices.own.cta')}
              </button>
            </div>
          </div>
        </section>

        {/* ─────────────── PERSONALIZED SAMPLE ─────────────── */}
        <section aria-labelledby="sample-heading" style={{ padding:'80px 0', background:'#F4E9D4' }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', gap:'48px', alignItems:'center' }}>
            <div>
              <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#E0852A', fontWeight:800 }}>{t('sample.kicker')}</p>
              <h2 id="sample-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'14px' }}>{t('sample.title')}</h2>
              <p style={{ fontSize:'16px', color:'#4a4063', lineHeight:1.6, marginBottom:'24px' }}>{t('sample.sub')}</p>
              <button onClick={openBuilder} style={{ padding:'15px 24px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor:'pointer', fontSize:'15px' }}>
                {t('sample.cta')}
              </button>
            </div>
            <div>
              <blockquote style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'18px', padding:'26px', fontSize:'18px', lineHeight:1.7, fontFamily:'var(--font-fraunces)', boxShadow:'0 10px 30px -14px rgba(8,4,28,.35)', margin:0 }}>
                "Deep in the warm shallows, a small dolphin named <span style={{ background:'rgba(244,169,60,.24)', borderBottom:'2px solid #F4A93C', padding:'0 5px', borderRadius:'5px', fontWeight:700 }}>[your child]</span> noticed a tiny crab who&apos;d lost the way home…"
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
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap:'22px' }}>
              {PROOF.map((pf, i) => (
                <div key={i} style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'20px', padding:'26px', boxShadow:'0 10px 30px -14px rgba(8,4,28,.35)', textAlign:'left' }}>
                  <div style={{ fontSize:'28px', marginBottom:'12px' }}>{pf.icon}</div>
                  <h3 style={{ fontFamily:'var(--font-fraunces)', fontSize:'18px', marginBottom:'8px' }}>{pf.title}</h3>
                  <p style={{ fontSize:'14.5px', lineHeight:1.6, color:'#4a4063' }}>{pf.body}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap:'24px', maxWidth:'760px', margin:'0 auto 22px' }}>
              {/* Free */}
              <div style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'20px', padding:'32px', textAlign:'center' }}>
                <div style={{ fontSize:'14px', color:'#4a4063', fontWeight:700, marginBottom:'8px' }}>{t('pricing.free.label')}</div>
                <div style={{ fontFamily:'var(--font-fraunces)', fontSize:'46px', marginBottom:'8px' }}>{t('pricing.free.amount')}</div>
                <div style={{ fontSize:'13px', color:'#4a4063', marginBottom:'24px' }}>{t('pricing.free.sub')}</div>
                <button onClick={openBuilder} style={{ width:'100%', padding:'14px', background:'transparent', border:'1.5px solid #d9c9a8', borderRadius:'14px', fontWeight:700, cursor:'pointer', fontSize:'14px' }}>Start free</button>
              </div>
              {/* Club */}
              <div style={{ background:'#fff', border:'2px solid #F4A93C', borderRadius:'20px', padding:'32px', textAlign:'center', position:'relative' }}>
                <div style={{ position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)', background:'#F4A93C', color:'#3a230a', fontSize:'11.5px', fontWeight:800, padding:'4px 14px', borderRadius:'99px' }}>{t('pricing.club.tag')}</div>
                <div style={{ fontSize:'14px', color:'#4a4063', fontWeight:700, marginBottom:'8px' }}>{t('pricing.club.label')}</div>
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
            <p style={{ fontSize:'14px', color:'#4a4063', lineHeight:1.6 }}>{t('pricing.guarantee')}<br/>{t('pricing.value')}</p>
          </div>
        </section>

        {/* ─────────────── TRUST ─────────────── */}
        <section aria-labelledby="trust-heading" style={{ padding:'80px 0', background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff' }}>
          <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontSize:'12.5px', letterSpacing:'1.8px', textTransform:'uppercase', color:'#FFD27A', fontWeight:800 }}>{t('trust.kicker')}</p>
            <h2 id="trust-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(26px,3vw,36px)', marginBottom:'40px' }}>{t('trust.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap:'22px' }}>
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
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}
                    style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', background:'none', border:'none', cursor:'pointer', fontWeight:700, fontSize:'15px', color:'#211a3a' }}>
                    <span>{f.q}</span>
                    <span style={{ fontSize:'22px', color:'#E0852A', fontWeight:400, flexShrink:0 }}>{faqOpen === i ? '–' : '+'}</span>
                  </button>
                  {faqOpen === i && <p style={{ fontSize:'14.5px', color:'#4a4063', marginTop:'10px', lineHeight:1.6 }}>{f.a}</p>}
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
          <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr]" style={{ gap:'36px', marginBottom:'40px' }}>
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

      {/* ─────────────── MOBILE STICKY CTA — only on mobile, hidden while the builder is open ─────────────── */}
      {!overlayOpen && (
        <div className="md:hidden" style={{ position:'fixed', bottom:0, left:0, right:0, zIndex:150, background:'rgba(22,18,58,.95)', backdropFilter:'blur(10px)', padding:'12px 16px', borderTop:'1px solid rgba(255,255,255,.12)' }}>
          <button onClick={openBuilder} style={{ width:'100%', padding:'15px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'14px', cursor:'pointer', fontSize:'15px' }}>
            {t('hero.cta.primary')}
          </button>
        </div>
      )}

      {/* ─────────────── BUILDER OVERLAY ─────────────── */}
      {overlayOpen && (
        <div style={{ position:'fixed', inset:0, zIndex:500, background:'rgba(12,8,32,.75)', backdropFilter:'blur(4px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}
             onClick={e => { if (e.target === e.currentTarget) setOverlayOpen(false) }}>
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-label="Story builder" style={{ background:'#FBF4E6', borderRadius:'28px', width:'100%', maxWidth:'430px', overflow:'hidden', boxShadow:'0 24px 60px -22px rgba(8,4,28,.7)', position:'relative', maxHeight:'90vh', overflowY:'auto' }}>
            <button onClick={() => setOverlayOpen(false)} style={{ position:'absolute', top:'12px', right:'12px', zIndex:90, width:'44px', height:'44px', borderRadius:'50%', border:'none', background:'rgba(0,0,0,.18)', color:'#fff', cursor:'pointer', fontSize:'18px' }} aria-label="Close builder">✕</button>

            {/* ── Embedded Stripe Checkout — payment happens in-funnel ── */}
            {checkoutSecret && (
              <div style={{ padding:'18px' }}>
                <button onClick={() => setCheckoutSecret(null)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:'13px', color:'#4a4063', fontWeight:700, marginBottom:'10px' }}>← Back</button>
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
              <button onClick={() => builderStep > 1 ? setBuilderStep(s => s-1) : setOverlayOpen(false)} style={{ display:'inline-flex', alignItems:'center', gap:'4px', background:'#fff', border:'1px solid #e0d2b7', cursor:'pointer', fontSize:'13px', fontWeight:700, color:'#211a3a', padding:'7px 12px', borderRadius:'10px', flexShrink:0 }} aria-label={builderStep > 1 ? 'Back to previous step' : 'Close'}>← {builderStep > 1 ? 'Back' : 'Close'}</button>
              <div style={{ flex:1, height:'8px', background:'#e7dac0', borderRadius:'99px', overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${(builderStep / 3) * 100}%`, background:'linear-gradient(90deg,#FFD27A,#E0852A)', borderRadius:'99px', transition:'width .45s' }} />
              </div>
              <span style={{ fontSize:'12px', color:'#4a4063', fontWeight:700 }}>{builderStep} / 3</span>
            </div>
            )}

            {!preview && (
            <div style={{ padding:'6px 22px 22px' }}>
              {/* Step indicator */}
              <div style={{ display:'flex', gap:'8px', alignItems:'center', background:'#fff7ea', border:'1px solid #f1ddb6', borderRadius:'12px', padding:'10px 12px', fontSize:'12.5px', color:'#8a6a1f', marginBottom:'16px' }}>
                {['🌙 Tonight\'s lesson, made for them','✨ Same lesson — their favourite world','📚 One skill per story, level by level'][builderStep-1]}
              </div>

              {/* Step 1: Name + Age */}
              {builderStep === 1 && (
                <div>
                  <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', margin:'6px 0 4px' }}>Who's this story for?</h2>
                  <p style={{ fontSize:'13.5px', color:'#4a4063', marginBottom:'18px' }}>Only used to personalise the story. No account needed yet.</p>
                  <div style={{ marginBottom:'16px' }}>
                    <label style={{ fontSize:'13px', fontWeight:700, display:'block', marginBottom:'7px' }}>Your child's first name (or nickname)</label>
                    <input value={childName} onChange={e => setChildName(e.target.value)} placeholder="e.g. Maya — or a nickname"
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
                  <p style={{ fontSize:'13.5px', color:'#4a4063', marginBottom:'18px' }}>Same lesson, set in the world they'll adore — they become the hero.</p>
                  <div className="grid grid-cols-2" style={{ gap:'11px' }}>
                    {SKINS.map(s => (
                      <button key={s.slug} onClick={() => setSkinSlug(s.slug)}
                        style={{ border:`2px solid ${skinSlug===s.slug?'#F4A93C':'#e0d2b7'}`, borderRadius:'17px', padding:'14px 10px', cursor:'pointer', textAlign:'center', background: skinSlug===s.slug?'#fff7ea':'#fff', transition:'.15s' }}>
                        <div style={{ fontSize:'34px', marginBottom:'6px' }}>{s.emoji}</div>
                        <div style={{ fontWeight:800, fontSize:'13px' }}>{s.loves}</div>
                        <div style={{ fontSize:'11px', color:'#4a4063' }}>{s.name} · {s.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Subject */}
              {builderStep === 3 && (
                <div>
                  <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', margin:'6px 0 4px' }}>What should it teach?</h2>
                  <p style={{ fontSize:'13.5px', color:'#4a4063', marginBottom:'18px' }}>One concept per story, building level by level. Pick the skill you'd like to start with.</p>
                  {SUBJECT_META.map(s => {
                    const selected = subjectSlug === s.slug
                    return (
                      <button key={s.slug} type="button"
                        onClick={() => setSubjectSlug(s.slug)}
                        aria-pressed={selected}
                        style={{ width:'100%', textAlign:'left', display:'flex', alignItems:'center', gap:'12px', border:`2px solid ${selected ? '#F4A93C' : '#e0d2b7'}`, borderRadius:'15px', padding:'13px', cursor:'pointer', background: selected ? '#fff7ea' : '#fff', marginBottom:'10px', fontFamily:'inherit' }}>
                        <span style={{ fontSize:'24px' }}>{s.emoji}</span>
                        <div style={{ flex:1 }}><div style={{ fontWeight:700, fontSize:'14.5px' }}>{s.name}</div><div style={{ fontSize:'12px', color:'#4a4063' }}>{s.shortDesc}</div></div>
                        <span style={{ fontSize:'16px', color: selected ? '#E0852A' : '#cdbf9f' }}>{selected ? '✓' : '○'}</span>
                      </button>
                    )
                  })}
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
                    <p style={{ fontSize:'14px', color:'#4a4063' }}>Building {childName ? `${childName}'s` : 'your'} preview…</p>
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
                        <span key={i} style={{ fontSize:'11.5px', fontWeight:700, background:'#fff', border:'1px solid #ece0c8', borderRadius:'99px', padding:'5px 11px', color:'#4a4063' }}>{b}</span>
                      ))}
                    </div>

                    <blockquote style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'16px', padding:'18px 20px', fontSize:'15.5px', lineHeight:1.7, fontFamily:'var(--font-fraunces)', color:'#211a3a', margin:'0 0 14px' }}>
                      {renderScript(preview.script ?? '')}
                    </blockquote>

                    {/* Native <audio>, always mounted when a URL exists (hidden
                        until unlock) so the unlock tap can play() it inside the
                        gesture. playsInline + preload=metadata are iOS-friendly.
                        onError records the media error code so we can see exactly
                        why iOS rejects the file, and a direct link lets the user
                        open the raw URL (bypassing React entirely) to isolate
                        player-vs-file. */}
                    {preview.audioUrl && (
                      <>
                        <audio
                          ref={previewAudioRef}
                          src={preview.audioUrl}
                          controls={leadDone}
                          playsInline
                          preload="metadata"
                          onPlay={() => stopCurrent()}
                          onError={() => setAudioErrCode(previewAudioRef.current?.error?.code ?? -1)}
                          style={{ width:'100%', display: leadDone ? 'block' : 'none' }}
                        />
                        {leadDone && (
                          <p style={{ fontSize:'11px', color:'#9a8fb5', textAlign:'center', margin:'8px 0 0' }}>
                            {audioErrCode !== null && (
                              <span style={{ color:'#c0392b', fontWeight:700 }}>Couldn’t play in-page (error {audioErrCode}). </span>
                            )}
                            <a href={preview.audioUrl} target="_blank" rel="noopener noreferrer" style={{ color:'#8a6a1f', textDecoration:'underline' }}>
                              Trouble hearing it? Open the audio ↗
                            </a>
                          </p>
                        )}
                      </>
                    )}

                    {!leadDone && (
                      <div style={{ background:'#fff', border:'1.5px solid #ece0c8', borderRadius:'16px', padding:'16px' }}>
                        <p style={{ fontSize:'13.5px', fontWeight:700, color:'#211a3a', margin:'0 0 4px' }}>
                          🎧 Hear {childName ? `${childName}'s` : 'your'} story — and we'll save it to your library
                        </p>
                        <p style={{ fontSize:'12px', color:'#4a4063', margin:'0 0 12px' }}>
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
                        <p aria-live="polite" style={{ fontSize:'12px', color:'#c0392b', margin:'-4px 0 10px', minHeight:'15px' }}>{leadError ? 'Please enter a valid email address.' : '\u00A0'}</p>
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
                      <div style={{ background:'#fff', border:'1.5px solid #f1ddb6', borderRadius:'16px', padding:'16px', textAlign:'center' }}>
                        <p style={{ fontSize:'13px', color:'#8a6a1f', margin:'0 0 12px', lineHeight:1.5 }}>
                          {preview.audioError ?? 'The narration didn’t finish generating just now.'} {childName ? `${childName}'s` : 'Your'} story is saved — tap retry, or we’ll email the recording shortly.
                        </p>
                        <button
                          onClick={() => generatePreview()}
                          disabled={preview.loading}
                          style={{ padding:'12px 22px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:800, border:'none', borderRadius:'13px', cursor:'pointer', fontSize:'14px' }}>
                          ↻ Retry audio
                        </button>
                      </div>
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
                          <button key={sk.slug} onClick={() => { setSkinSlug(sk.slug); playSampleFor(sk.slug, voiceId); generatePreview({ skinSlug: sk.slug }) }}
                            aria-pressed={skinSlug===sk.slug}
                            style={{ fontSize:'12.5px', fontWeight:700, border:`1.5px solid ${skinSlug===sk.slug?'#F4A93C':'#e6d8bd'}`, background: skinSlug===sk.slug?'#fff':'transparent', borderRadius:'10px', padding:'7px 10px', cursor:'pointer', color:'#211a3a' }}>
                            {sk.emoji} {sk.name.replace(/^(Under the |Whisper |Cloud |Space )/,'')}
                          </button>
                        ))}
                      </div>
                      <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
                        {voices.map(v => (
                          <button key={v.id} onClick={() => { setVoiceId(v.id); playSampleFor(skinSlug, v.id); generatePreview({ voiceId: v.id }) }}
                            aria-pressed={voiceId===v.id}
                            style={{ fontSize:'12.5px', fontWeight:700, border:`1.5px solid ${voiceId===v.id?'#F4A93C':'#e6d8bd'}`, background: voiceId===v.id?'#fff':'transparent', borderRadius:'10px', padding:'7px 10px', cursor:'pointer', color:'#211a3a' }}>
                            🔊 {v.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    )}

                    <p style={{ fontSize:'12px', color:'#4a4063', textAlign:'center', margin:'14px 0 0' }}>
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
                  onClick={() => builderStep < 3 ? setBuilderStep(s => s+1) : generatePreview()}
                  disabled={builderStep === 1 && !childName.trim()}
                  style={{ width:'100%', padding:'15px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor: builderStep===1 && !childName.trim() ? 'not-allowed' : 'pointer', fontSize:'15px', opacity: builderStep===1 && !childName.trim() ? .6 : 1 }}>
                  {builderStep < 3 ? 'Continue →' : 'Hear their story →'}
                </button>
              ) : leadDone ? (
                <>
                  {/* Risk reversal at the decision point — the real credit guarantee. */}
                  <div style={{ background:'#fff7ea', border:'1px solid #f1ddb6', borderRadius:'13px', padding:'11px 13px', marginBottom:'11px' }}>
                    <p style={{ fontSize:'12.5px', lineHeight:1.5, color:'#8a6a1f', margin:0 }}>
                      🛟 Don&apos;t love a story? Tap &ldquo;report&rdquo; and it&apos;s on us — automatic credit, no questions.
                    </p>
                  </div>
                  {/* Curriculum + trust mini-explainer: sells the program, not one
                      story, and surfaces the COPPA / expert-written trust levers. */}
                  <div style={{ display:'flex', gap:'6px', marginBottom:'11px' }}>
                    {[['📚','Levels build on each other'],['✍️','Expert-written'],['🔒','No data on your child']].map(([icon,label]) => (
                      <div key={label} style={{ flex:1, background:'#fff', border:'1px solid #ece0c8', borderRadius:'11px', padding:'9px 6px', textAlign:'center' }}>
                        <div style={{ fontSize:'16px', lineHeight:1.2 }}>{icon}</div>
                        <div style={{ fontSize:'10px', color:'#4a4063', fontWeight:600, lineHeight:1.25, marginTop:'2px' }}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={startCheckout}
                    disabled={preview.loading || checkoutLoading}
                    style={{ width:'100%', padding:'15px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor: preview.loading ? 'wait' : 'pointer', fontSize:'15px', opacity: preview.loading ? .6 : 1 }}>
                    {checkoutLoading ? 'Starting…' : 'Start Story Club — first story free →'}
                  </button>
                  <p aria-live="polite" style={{ fontSize:'12px', color:'#c0392b', textAlign:'center', margin:'8px 0 0', minHeight:'15px' }}>{checkoutError ?? '\u00A0'}</p>
                  <p style={{ fontSize:'11.5px', color:'#4a4063', textAlign:'center', margin:'9px 0 0', lineHeight:1.4 }}>
                    Then <strong>$9.99/mo</strong> · a new story every other day · cancel anytime
                  </p>
                  <p style={{ fontSize:'11px', color:'#8a6a1f', textAlign:'center', margin:'5px 0 0' }}>
                    👨‍👩‍👧‍👦 One subscription covers all your kids — add siblings anytime
                  </p>
                  <button onClick={() => setPreview(null)} style={{ width:'100%', padding:'10px', background:'none', color:'#4a4063', fontWeight:600, border:'none', cursor:'pointer', fontSize:'13px', marginTop:'4px' }}>
                    ← Change something
                  </button>
                </>
              ) : (
                <button onClick={() => setPreview(null)} style={{ width:'100%', padding:'10px', background:'none', color:'#4a4063', fontWeight:600, border:'none', cursor:'pointer', fontSize:'13px' }}>
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
