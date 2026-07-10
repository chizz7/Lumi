'use client'
// Vignettes — small drawn illustrations that replace text/emoji blocks on the
// landing page: the how-it-works step scenes and the curriculum level trail.

const INK = '#211a3a'
const AMBER = '#F4A93C'

// One illustrated scene per how-it-works step: personalize → preview → deliver.
export function StepVignette({ n }: { n: 1 | 2 | 3 }) {
  const box = { width: '100%', height: 'auto', display: 'block', background: '#fff7ea', borderRadius: '14px', marginBottom: '16px' } as const
  if (n === 1) return (
    <svg viewBox="0 0 300 96" style={box} aria-hidden="true">
      <rect x="20" y="30" width="150" height="36" rx="11" fill="#fff" stroke={AMBER} strokeWidth="2" />
      <text x="36" y="54" fontSize="17" fontWeight="700" fill={INK} fontFamily="Georgia, serif">Maya</text>
      <rect x="86" y="38" width="2" height="20" fill="#E0852A" />
      <rect x="186" y="24" width="52" height="24" rx="12" fill="#fff" stroke="#e0d2b7" strokeWidth="1.5" />
      <text x="196" y="40" fontSize="11.5" fill={INK}>🌊 Sea</text>
      <rect x="186" y="54" width="62" height="24" rx="12" fill="#fff" stroke="#e0d2b7" strokeWidth="1.5" />
      <text x="196" y="70" fontSize="11.5" fill={INK}>age 5–6</text>
      <text x="256" y="34" fontSize="15" fill={AMBER}>✦</text>
      <text x="270" y="72" fontSize="11" fill={AMBER}>✦</text>
    </svg>)
  if (n === 2) return (
    <svg viewBox="0 0 300 96" style={box} aria-hidden="true">
      <circle cx="62" cy="48" r="27" fill={AMBER} />
      <path d="M54 33 L79 48 L54 63 Z" fill="#fff" />
      {[14, 26, 38, 22, 42, 18, 32, 12, 26, 38, 20, 12].map((h, i) => (
        <rect key={i} x={106 + i * 15} y={48 - h / 2} width="6" height={h} rx="3" fill={i % 3 === 1 ? AMBER : INK} opacity={i % 3 === 1 ? 1 : .75} />
      ))}
    </svg>)
  return (
    <svg viewBox="0 0 300 96" style={box} aria-hidden="true">
      <g transform="translate(56 22)">
        <rect width="96" height="56" rx="8" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <path d="M2 8 L48 38 L94 8" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <circle cx="205" cy="35" r="13" fill="#FBF4E6" stroke={AMBER} strokeWidth="2" />
      <path d="M200 35 a6 6 0 0 1 10 -4" fill="none" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
      <text x="228" y="70" fontSize="21" fill={INK}>♪</text>
      <text x="250" y="48" fontSize="15" fill={AMBER}>♪</text>
      <text x="30" y="26" fontSize="13" fill={AMBER}>✦</text>
    </svg>)
}

// The 5 levels as a climbing trail with clickable numbered stops and a summit
// flag — progression at a glance, replacing a paragraph of explanation.
export function LevelTrail({ active, onPick }: { active: number | null; onPick: (n: number) => void }) {
  const pts: [number, number][] = [[27, 66], [137, 44], [250, 56], [363, 34], [473, 48]]
  return (
    <svg viewBox="0 0 500 92" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <path d="M27 66 C 65 44, 105 32, 137 44 S 215 64, 250 56 S 330 22, 363 34 S 445 56, 473 48"
        fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M473 30 V10" stroke="#FFD27A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M473 10 l15 5 -15 5 z" fill="#FFD27A" />
      {pts.map(([x, y], i) => {
        const n = i + 1, on = active === n
        return (
          <g key={n} onClick={() => onPick(n)} style={{ cursor: 'pointer' }} role="button" aria-label={`Level ${n}`}>
            <circle cx={x} cy={y} r="16" fill={on ? '#F4A93C' : 'rgba(255,255,255,.12)'} stroke={on ? '#FFD27A' : 'rgba(255,255,255,.4)'} strokeWidth="1.5" />
            <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill={on ? '#3a230a' : 'rgba(255,255,255,.85)'} style={{ pointerEvents: 'none' }}>{n}</text>
          </g>
        )
      })}
    </svg>
  )
}
