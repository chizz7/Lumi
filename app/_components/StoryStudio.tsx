'use client'
// StoryStudio — the inline hero builder. Renders a live, rotating story preview
// and a progressive-disclosure accordion (details → world → voice → skill) that
// drives the SAME draft state the modal/checkout uses. Selecting anything locks
// the auto-rotating showcase to that choice. The CTA hands off to the existing
// preview/checkout flow via onBuild().
import { useEffect, useState, type ReactNode } from 'react'

type Skin  = { slug: string; emoji: string; name: string; loves: string; desc: string }
type Path  = { id: string; emoji: string; name: string }
type Voice = { id: string; name: string; tone: string }
type Age   = { value: string; label: string }

// Client-side teaser copy for the live preview (the real authored story arrives
// after the email gate). One stem per world, one clause per skill, name-filled.
const WORLD: Record<string, { place: string; hero: string; grad: string }> = {
  sea:    { place: 'warm shallows',      hero: 'little dolphin',        grad: 'linear-gradient(150deg,#2d6f96,#1e3d72)' },
  space:  { place: 'quiet field of stars', hero: 'brave little astronaut', grad: 'linear-gradient(150deg,#3b2f6e,#181233)' },
  forest: { place: 'mossy forest',       hero: 'curious fox',           grad: 'linear-gradient(150deg,#2f7d52,#15402b)' },
  castle: { place: 'sleepy cloud castle', hero: 'young dragon',          grad: 'linear-gradient(150deg,#7a5a86,#3d2b52)' },
  dino:   { place: 'green fern valley',  hero: 'gentle dino',           grad: 'linear-gradient(150deg,#9a7b3c,#5e4520)' },
  jungle: { place: 'deep green jungle',  hero: 'small tiger cub',       grad: 'linear-gradient(150deg,#3a8f7e,#1f5e52)' },
}
const CLAUSE: Record<string, { action: string; title: string; hint: string; hear: string }> = {
  money:      { action: 'found three shiny coins in the sand',       title: 'and the Three Coins', hint: 'save & value coins',        hear: 'a treasure adventure' },
  focus:      { action: 'had one important thing to finish',          title: 'Stays on Track',      hint: 'finish what matters',       hear: 'a big mission to finish' },
  resilience: { action: 'was trying something new — and finding it hard', title: 'Tries Again',     hint: "keep going when it's hard", hear: 'a tricky new challenge' },
  kindness:   { action: 'noticed someone who quietly needed help',     title: 'Lends a Hand',        hint: 'notice & help others',      hear: 'a friend who needs help' },
  problem:    { action: 'found a puzzle no one else could crack',      title: 'Figures It Out',      hint: 'figure things out',         hear: 'a puzzle to crack' },
  confidence: { action: 'felt small before a very big moment',         title: 'Finds Their Voice',   hint: 'find their voice',          hear: 'one very big moment' },
  voice:      { action: 'had something important to say — and a wobbly voice to say it', title: 'Speaks Up', hint: 'say what matters, kindly', hear: 'a moment to be heard' },
}
const ORDER = ['kindness', 'resilience', 'focus', 'confidence', 'problem', 'money', 'voice']

type Props = {
  name: string; ageBand: string; skinSlug: string; subjectSlug: string; voiceId: string
  setName: (v: string) => void
  setAge: (v: string) => void
  setWorld: (v: string) => void
  setSubject: (v: string | ((p: string) => string)) => void
  setVoiceId: (v: string) => void
  skins: Skin[]; ageBands: Age[]; voices: Voice[]; paths: Path[]
  playSample: (i: number) => void
  sampleLoading: number | null
  playingVoiceIdx: number
  onBuild: () => void
  paused?: boolean   // stop the auto-rotate while the builder overlay is open
}

const AMBER = '#F4A93C'

// The banner scene: a child tucked in bed with a glowing storybook, dreaming of
// their chosen world (its emoji floats in the dream bubble). Drawn as flat
// silhouettes so it sits on any world gradient behind it.
function NightScene({ worldEmoji }: { worldEmoji: string }) {
  const INK = '#140e33'
  return (
    <svg viewBox="0 0 520 150" preserveAspectRatio="xMidYMax slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <radialGradient id="ss-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#FFD98A" stopOpacity=".55" />
          <stop offset="45%" stopColor="#F4A93C" stopOpacity=".16" />
          <stop offset="100%" stopColor="#F4A93C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ss-book" cx="50%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFF6E0" /><stop offset="100%" stopColor="#FFCE7A" />
        </radialGradient>
        <mask id="ss-moon"><rect width="100%" height="100%" fill="#fff" /><circle cx="452" cy="26" r="19" fill="#000" /></mask>
      </defs>
      {/* sky */}
      <circle cx="60" cy="38" r="2" fill="#fff" opacity=".75" />
      <circle cx="120" cy="58" r="1.5" fill="#fff" opacity=".5" />
      <circle cx="228" cy="30" r="2" fill="#fff" opacity=".6" />
      <circle cx="415" cy="72" r="1.8" fill="#fff" opacity=".55" />
      <circle cx="490" cy="82" r="1.5" fill="#fff" opacity=".5" />
      <circle cx="460" cy="33" r="20" fill="#FBF4E6" opacity=".95" mask="url(#ss-moon)" />
      {/* dream bubble — the world they picked */}
      <circle cx="330" cy="52" r="30" fill="rgba(255,255,255,.13)" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
      <circle cx="296" cy="86" r="7" fill="rgba(255,255,255,.13)" stroke="rgba(255,255,255,.28)" strokeWidth="1" />
      <circle cx="280" cy="99" r="4" fill="rgba(255,255,255,.12)" />
      <text x="330" y="63" textAnchor="middle" fontSize="30">{worldEmoji}</text>
      {/* warm glow from the book */}
      <ellipse cx="180" cy="112" rx="135" ry="54" fill="url(#ss-glow)" />
      {/* silhouettes */}
      <g fill={INK}>
        <rect x="30" y="118" width="322" height="44" rx="12" />
        <rect x="34" y="78" width="26" height="48" rx="8" />
        <ellipse cx="92" cy="116" rx="34" ry="12" />
        <path d="M112 150 C108 108 118 96 136 95 C152 94 162 106 160 128 L158 150 Z" />
        <circle cx="140" cy="82" r="17" />
        <path d="M126 70 q14 -12 28 -2 q-7 -3 -14 -2 q-8 1 -14 4 z" />
        <path d="M156 108 C172 112 180 118 188 124 L182 134 C174 128 162 122 154 120 Z" />
        <path d="M168 150 C200 122 260 122 300 138 C316 144 322 150 322 150 Z" />
        <g transform="translate(272 122)">
          <circle cx="0" cy="0" r="12" /><circle cx="-9" cy="-9" r="5" /><circle cx="9" cy="-9" r="5" />
          <ellipse cx="0" cy="12" rx="10" ry="9" />
        </g>
      </g>
      {/* the glowing open book */}
      <g transform="translate(196 122) rotate(-6)">
        <ellipse cx="0" cy="3" rx="36" ry="14" fill="#FFCE7A" opacity=".35" />
        <path d="M0 -13 L36 -6 L36 14 L0 9 Z" fill="url(#ss-book)" />
        <path d="M0 -13 L-36 -6 L-36 14 L0 9 Z" fill="url(#ss-book)" opacity=".95" />
        <path d="M0 -13 L0 9" stroke="#E0852A" strokeWidth="1.5" opacity=".5" />
      </g>
    </svg>
  )
}

export default function StoryStudio(p: Props) {
  const [open, setOpen]     = useState<'details' | 'world' | 'voice' | 'skill'>('details')
  const [locked, setLocked] = useState(false)

  // Auto-rotate the showcase through the skills until the user interacts — but
  // NOT while the builder overlay is open (p.paused). This card and the builder
  // share the parent's subjectSlug, so a running rotation would overwrite the
  // subject the user just picked in the builder every 4.5s.
  useEffect(() => {
    if (locked || p.paused) return
    // Hold the first impression stable for 8s before the showcase starts
    // rotating — a moving fold reads as noise in the first seconds.
    let id: ReturnType<typeof setInterval> | undefined
    const t0 = setTimeout(() => {
      id = setInterval(() => {
        p.setSubject(prev => ORDER[(ORDER.indexOf(prev) + 1) % ORDER.length]!)
      }, 4500)
    }, 8000)
    return () => { clearTimeout(t0); if (id) clearInterval(id) }
  }, [locked, p.paused]) // eslint-disable-line react-hooks/exhaustive-deps

  const lock = () => setLocked(true)
  const world  = p.skins.find(s => s.slug === p.skinSlug)   ?? p.skins[0]!
  const skill  = p.paths.find(s => s.id === p.subjectSlug)  ?? p.paths[0]!
  const wt     = WORLD[p.skinSlug]  ?? WORLD.jungle!
  const cl     = CLAUSE[p.subjectSlug] ?? CLAUSE.kindness!
  const vIdx   = Math.max(0, p.voices.findIndex(v => v.id === p.voiceId))
  const vName  = p.voices[vIdx]?.name ?? 'Sage'
  const nm     = p.name.trim() || 'your child'
  const nmTitle = p.name.trim() || 'Your child'   // title-position variant — a sentence can't open lowercase

  const card  = { background: '#fff', border: '1px solid #efe6d6', borderRadius: 16, marginBottom: 10 }
  const head  = { display: 'flex', alignItems: 'center', gap: 12, padding: '13px 15px', cursor: 'pointer' } as const
  const lab   = { fontSize: 13.5, fontWeight: 800, color: '#211a3a' } as const
  const val   = { fontSize: 12.5, color: '#4a4063', marginTop: 1 } as const
  const sec   = { fontSize: 11.5, color: '#8a7fb0', fontWeight: 700, margin: '2px 0 10px' } as const
  const instruct = { fontSize: 12.5, color: '#4a4063', lineHeight: 1.5, marginBottom: 11 } as const
  const benefit  = { fontSize: 12, color: '#8a5a12', background: '#fff7e6', border: '1px solid #f3e2bd', borderRadius: 10, padding: '8px 10px', marginTop: 11, lineHeight: 1.45 } as const
  const disc     = { fontSize: 10.5, color: '#9a8fb0', marginTop: 8, lineHeight: 1.45, display: 'flex', gap: 6 } as const
  const ricon = (a: boolean) => ({ width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0, background: a ? 'linear-gradient(135deg,#FFD27A,#F4A93C)' : '#fff7ea' })

  // accordion section wrapper
  const Section = (key: 'details' | 'world' | 'voice' | 'skill', icon: string, step: string, title: string, summary: string, body: ReactNode) => {
    const isOpen = open === key
    return (
      <div style={{ ...card, borderColor: isOpen ? '#f3c98a' : '#efe6d6', boxShadow: isOpen ? '0 16px 34px -18px rgba(224,133,42,.55)' : 'none', transition: 'box-shadow .3s,border-color .3s' }}>
        <div style={head} role="button" tabIndex={0} aria-expanded={isOpen}
          onClick={() => setOpen(key)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(key) } }}>
          <div style={ricon(isOpen)}>{icon}</div>
          <div style={{ flex: 1 }}>
            <div style={lab}><span style={{ fontSize: 10, color: '#b9a877', fontWeight: 800, marginRight: 6 }}>{step}</span>{title}</div>
            {!isOpen && <div style={val}>{summary}</div>}
          </div>
          <span style={{ color: isOpen ? '#E0852A' : '#c3b48f', fontSize: 14, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s' }}>⌄</span>
        </div>
        <div style={{ maxHeight: isOpen ? 600 : 0, opacity: isOpen ? 1 : 0, overflow: 'hidden', padding: isOpen ? '2px 15px 15px' : '0 15px', transition: 'max-height .45s cubic-bezier(.16,1,.30,1),opacity .3s,padding .45s' }}>
          {body}
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#fffdf8', borderRadius: 26, boxShadow: '0 40px 80px -30px rgba(0,0,0,.6)', overflow: 'hidden', color: '#211a3a' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px 0' }}>
        <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 16, fontWeight: 600 }}>🌙 Story Studio</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['details', 'world', 'voice', 'skill'].map((k, i) => (
            <span key={k} style={{ height: 7, width: open === k ? 22 : 7, borderRadius: 99, background: ['details', 'world', 'voice', 'skill'].indexOf(open) >= i ? AMBER : '#e3d6bb', transition: '.3s' }} />
          ))}
        </div>
      </div>
      <div style={{ padding: '8px 20px 4px', fontSize: 12.5, color: '#4a4063', lineHeight: 1.5 }}>
        Make four choices and we'll assemble a <b style={{ color: '#211a3a' }}>personalized, skill-teaching bedtime story</b> — preview it free, no account needed.
      </div>

      {/* live preview */}
      <div style={{ margin: '12px 16px 0', borderRadius: 18, overflow: 'hidden', border: '1px solid #f0e6d2', boxShadow: '0 14px 34px -16px rgba(120,80,20,.4)' }}>
        <div style={{ height: 150, background: wt.grad, position: 'relative', transition: 'background .5s cubic-bezier(.16,1,.30,1)' }}>
          <NightScene worldEmoji={world.emoji} />
          <span style={{ position: 'absolute', top: 10, left: 10, fontSize: 10.5, fontWeight: 700, color: '#fff', background: 'rgba(0,0,0,.28)', borderRadius: 99, padding: '4px 9px', maxWidth: 'calc(100% - 106px)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} aria-live="polite">
            {skill.name}{locked || p.paused ? ' · your pick' : ' · rotates through all 7'}
          </span>
          <span style={{ position: 'absolute', top: 10, right: 10, fontSize: 10, fontWeight: 700, color: '#fff', background: 'rgba(0,0,0,.28)', borderRadius: 99, padding: '4px 9px' }}>ⓘ Live preview</span>
        </div>
        <div style={{ background: '#fff', padding: '14px 17px 15px' }}>
          <div key={`${p.skinSlug}-${p.subjectSlug}-${p.voiceId}`} className="sds-fadein">
            <div style={{ fontSize: 11, letterSpacing: 1.3, textTransform: 'uppercase', color: '#E0852A', fontWeight: 800, marginBottom: 6 }}>{skill.emoji} {skill.name} · Level 1 · {vName}</div>
            <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 18, marginBottom: 7 }}>{nmTitle} {cl.title}</div>
            <div style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', fontSize: 13.5, lineHeight: 1.65, color: '#4a4063', borderTop: '1px solid #f0e7d6', paddingTop: 10 }}>
              &ldquo;In the {wt.place}, a {wt.hero} named <mark key={nm} className="sds-pop" style={{ background: 'rgba(244,169,60,.24)', color: '#9c5a12', fontStyle: 'normal', fontWeight: 700, borderRadius: 4, padding: '0 4px' }}>{nm}</mark> {cl.action}…&rdquo;
            </div>
            {/* The dual promise, made concrete: joy for them, a lesson for you. */}
            <div style={{ display: 'flex', gap: '6px 16px', flexWrap: 'wrap', marginTop: 10, fontSize: 12, color: '#4a4063' }}>
              <span>👂 <b style={{ color: '#211a3a' }}>They hear:</b> {cl.hear}</span>
              <span>🌱 <b style={{ color: '#211a3a' }}>They learn:</b> {cl.hint}</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
            <button onClick={() => p.playSample(vIdx)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, minWidth: 158, background: 'linear-gradient(135deg,#fff3dd,#ffe6bd)', border: `1.5px solid ${AMBER}`, color: '#8a4d0a', borderRadius: 11, padding: '9px 14px', fontWeight: 800, fontSize: 13, cursor: 'pointer' }}>
              {p.sampleLoading === vIdx ? '♪ Loading…' : p.playingVoiceIdx === vIdx ? '❚❚ Stop' : '▶ Play this opening'}
            </button>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              {[0, 1, 2, 3, 4].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? AMBER : '#ecdcbe' }} />)}
              <span style={{ fontSize: 10.5, color: '#a99cc0', marginLeft: 5 }}>5 levels build</span>
            </div>
          </div>
        </div>
      </div>

      {/* accordion */}
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={sec}>✦ BUILD IT — ONE CHOICE AT A TIME</div>

        {Section('details', '✍️', 'STEP 1', 'Their details', `${p.name.trim() || '—'} · age ${p.ageBands.find(a => a.value === p.ageBand)?.label ?? p.ageBand}`,
          <>
            <div style={instruct}>👉 Start with their first name — or a nickname, if you’d rather — and age; we level the language to fit.</div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              <input value={p.name} onChange={e => { p.setName(e.target.value); lock() }} placeholder="Their first name (or nickname)"
                style={{ flex: '1 1 170px', minWidth: 0, background: '#fff', border: '1.5px solid #e0d2b7', borderRadius: 11, padding: '11px 13px', fontSize: 16, color: '#211a3a', fontFamily: 'inherit' }} />
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {p.ageBands.map(a => (
                  <button key={a.value} onClick={() => { p.setAge(a.value); lock() }} aria-pressed={p.ageBand === a.value}
                    style={{ border: `1.5px solid ${p.ageBand === a.value ? AMBER : '#e0d2b7'}`, background: p.ageBand === a.value ? '#fff7ea' : '#fff', color: '#211a3a', borderRadius: 10, padding: '9px 12px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{a.label}</button>
                ))}
              </div>
            </div>
            <div style={benefit}>✨ Hearing their <b>own name</b> in the story is what makes the lesson stick.</div>
            <div style={disc}><span>ⓘ</span><span>We store only a first name (or nickname) + age band — never a birthdate, photo, or location.</span></div>
          </>)}

        {Section('world', '🌍', 'STEP 2', 'Their world', `${world.emoji} ${world.name}`,
          <>
            <div style={instruct}>👉 Pick the world they love most. The <b>same lesson</b> is written for every world — only the adventure changes.</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 9 }}>
              {p.skins.map(s => {
                const on = s.slug === p.skinSlug
                return (
                  <button key={s.slug} onClick={() => { p.setWorld(s.slug); lock() }} aria-pressed={on}
                    style={{ borderRadius: 13, overflow: 'hidden', border: `2px solid ${on ? AMBER : 'transparent'}`, boxShadow: on ? '0 0 0 3px rgba(244,169,60,.2)' : '0 4px 12px -8px rgba(0,0,0,.3)', background: '#fff', cursor: 'pointer', padding: 0 }}>
                    <div style={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 23, background: WORLD[s.slug]?.grad ?? '#ccc' }}>{s.emoji}</div>
                    <div style={{ fontSize: 11.5, fontWeight: 700, color: '#211a3a', textAlign: 'center', padding: '5px 2px 6px' }}>{s.name.replace(/^(Under the |Whisper |Cloud |Space |Deep |Fern )/, '')}</div>
                  </button>
                )
              })}
            </div>
            <div style={benefit}>✨ Kids lean in when the story lives in their favorite place — so the lesson lands.</div>
            <div style={disc}><span>ⓘ</span><span>Switch worlds anytime. Every skill path is authored for all six.</span></div>
          </>)}

        {Section('voice', '🎙️', 'STEP 3', 'The voice', `${vName} · ${p.voices[vIdx]?.tone ?? ''}`,
          <>
            <div style={instruct}>👉 Tap to hear each narrator. Choose the one that sounds like bedtime to you.</div>
            {p.voices.map((v, i) => {
              const on = v.id === p.voiceId
              return (
                <button key={v.id} onClick={() => { p.setVoiceId(v.id); p.playSample(i); lock() }} aria-pressed={on}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 11, border: `1.5px solid ${on ? AMBER : '#e9ddc4'}`, background: on ? '#fff7ea' : '#fff', borderRadius: 12, padding: '10px 12px', marginBottom: 8, cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ width: 30, height: 30, borderRadius: '50%', background: '#fff3dd', border: `1.5px solid ${AMBER}`, color: '#8a4d0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0 }}>
                    {p.sampleLoading === i
                      ? <span className="sds-eq" style={{ display: 'inline-flex', gap: 2, alignItems: 'flex-end', height: 12 }}><i style={{ width: 2.5, height: 12, background: '#8a4d0a', borderRadius: 1 }} /><i style={{ width: 2.5, height: 12, background: '#8a4d0a', borderRadius: 1 }} /><i style={{ width: 2.5, height: 12, background: '#8a4d0a', borderRadius: 1 }} /></span>
                      : p.playingVoiceIdx === i ? '❚❚' : '▶'}
                  </span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: 'block', fontSize: 13.5, fontWeight: 800, color: '#211a3a' }}>{v.name}</span>
                    <span style={{ display: 'block', fontSize: 11.5, color: '#4a4063' }}>{v.tone}</span>
                  </span>
                </button>
              )
            })}
            <div style={benefit}>✨ A calm, consistent voice helps them wind down and drift off.</div>
            <div style={disc}><span>ⓘ</span><span>Samples are narrated from expert-written scripts. Record your own voice after sign-up.</span></div>
          </>)}

        {Section('skill', '🎯', 'STEP 4', 'The skill it teaches', `${skill.emoji} ${skill.name}`,
          <>
            <div style={instruct}>👉 Choose one real-life skill. Each story teaches just <b>one</b> — building on the last.</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {p.paths.map(s => {
                const on = s.id === p.subjectSlug
                return (
                  <button key={s.id} onClick={() => { p.setSubject(s.id); lock() }} aria-pressed={on}
                    style={{ display: 'flex', alignItems: 'center', gap: 9, border: `1.5px solid ${on ? AMBER : '#e9ddc4'}`, background: on ? '#fff7ea' : '#fff', borderRadius: 12, padding: '9px 11px', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontSize: 18 }}>{s.emoji}</span>
                    <span>
                      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#211a3a' }}>{s.name.replace(/ &.*| Solving| Station/, '')}</span>
                      <span style={{ display: 'block', fontSize: 10.5, color: '#4a4063' }}>{CLAUSE[s.id]?.hint}</span>
                    </span>
                  </button>
                )
              })}
            </div>
            <div style={benefit}>✨ One concept per night beats a dozen forgotten by morning.</div>
            <div style={disc}><span>ⓘ</span><span>35 leveled stories across 7 skills. Money is one of seven — never the headline.</span></div>
          </>)}

        {/* what you'll get */}
        <div style={{ background: 'linear-gradient(135deg,#f7f1e3,#fbf4e6)', border: '1px solid #efe2c8', borderRadius: 14, padding: '12px 14px', marginTop: 4 }}>
          <div style={{ fontSize: 11, letterSpacing: .8, textTransform: 'uppercase', color: '#E0852A', fontWeight: 800, marginBottom: 9 }}>What you&apos;ll get</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['🎧 ~5-min audio story', '📜 Readable script', '📬 Emailed + saved to your library'].map(x => (
              <span key={x} style={{ fontSize: 12, color: '#211a3a', fontWeight: 600, background: '#fff', border: '1px solid #eee0c6', borderRadius: 10, padding: '7px 10px' }}>{x}</span>
            ))}
          </div>
        </div>

        <button onClick={p.onBuild} style={{ width: '100%', padding: 16, fontSize: 16, borderRadius: 15, marginTop: 14, border: 0, cursor: 'pointer', fontWeight: 800, color: '#3a230a', background: 'linear-gradient(135deg,#FFD27A,#E0852A)', boxShadow: '0 12px 24px -8px rgba(244,169,60,.7)' }}>
          Build {p.name.trim() ? `${p.name.trim()}'s` : 'their'} free story →
        </button>
        <div style={{ textAlign: 'center', fontSize: 12, color: '#4a4063', marginTop: 10 }}>First story free · no card to listen · cancel anytime</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 15, flexWrap: 'wrap', marginTop: 13, paddingTop: 13, borderTop: '1px solid #efe6d6' }}>
          {['📚 Levels build', '✍️ Expert-written', '🔒 No data on your child'].map(x => (
            <span key={x} style={{ fontSize: 11, color: '#8a7fb0', fontWeight: 700 }}>{x}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
