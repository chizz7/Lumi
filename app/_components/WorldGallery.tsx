'use client'
// WorldGallery — six clickable, illustrated world cards. Each seeds the builder
// with that world: a visual "pick their world" conversion touchpoint outside
// the Story Studio. Scenes are flat silhouettes in the same night-sky language
// as the studio's preview banner.

type Skin = { slug: string; emoji: string; name: string; loves: string; desc: string }

const GRAD: Record<string, string> = {
  sea:    'linear-gradient(150deg,#2d6f96,#1e3d72)',
  space:  'linear-gradient(150deg,#3b2f6e,#181233)',
  forest: 'linear-gradient(150deg,#2f7d52,#15402b)',
  castle: 'linear-gradient(150deg,#7a5a86,#3d2b52)',
  dino:   'linear-gradient(150deg,#9a7b3c,#5e4520)',
  jungle: 'linear-gradient(150deg,#3a8f7e,#1f5e52)',
}
const INK = '#100b2c'

function Scene({ slug }: { slug: string }) {
  const s = { position: 'absolute' as const, inset: 0, width: '100%', height: '100%' }
  switch (slug) {
    case 'sea': return (
      <svg viewBox="0 0 260 130" style={s} aria-hidden="true">
        <circle cx="216" cy="24" r="12" fill="#FBF4E6" opacity=".9" />
        <circle cx="40" cy="20" r="2" fill="#fff" opacity=".5" />
        <circle cx="150" cy="36" r="4" fill="#fff" opacity=".25" />
        <circle cx="163" cy="24" r="2.5" fill="#fff" opacity=".2" />
        <circle cx="141" cy="22" r="2" fill="#fff" opacity=".18" />
        <g fill={INK}>
          <ellipse cx="118" cy="62" rx="17" ry="8.5" />
          <path d="M134 62 l13 -8 v16 z" />
          <path d="M114 55 l6 -8 6 8 z" />
        </g>
        <circle cx="108" cy="60" r="1.7" fill="#fff" />
        <path d="M0 96 Q22 86 44 96 T88 96 T132 96 T176 96 T220 96 T264 96 V130 H0 Z" fill={INK} />
        <path d="M0 108 Q26 100 52 108 T104 108 T156 108 T208 108 T260 108 V130 H0 Z" fill={INK} opacity=".55" />
      </svg>)
    case 'space': return (
      <svg viewBox="0 0 260 130" style={s} aria-hidden="true">
        {[[30, 22, 2], [70, 46, 1.5], [130, 16, 2], [160, 52, 1.5], [235, 20, 2], [210, 74, 1.5]].map(([x, y, r], i) =>
          <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity=".6" />)}
        <g transform="translate(196 42)">
          <circle r="16" fill={INK} />
          <ellipse rx="27" ry="7.5" fill="none" stroke={INK} strokeWidth="3" transform="rotate(-18)" />
        </g>
        <g transform="translate(78 66) rotate(-32)">
          <rect x="-8" y="-20" width="16" height="34" rx="8" fill={INK} />
          <path d="M-8 6 L-16 22 L-8 14 Z" fill={INK} />
          <path d="M8 6 L16 22 L8 14 Z" fill={INK} />
          <circle cy="-8" r="4.5" fill="#FFD27A" />
          <path d="M-4 15 Q0 30 4 15 Z" fill="#F4A93C" />
        </g>
        <path d="M0 112 Q65 100 130 112 T260 112 V130 H0 Z" fill={INK} />
      </svg>)
    case 'forest': return (
      <svg viewBox="0 0 260 130" style={s} aria-hidden="true">
        <circle cx="218" cy="22" r="12" fill="#FBF4E6" opacity=".9" />
        {[[95, 50], [150, 34], [58, 36]].map(([x, y], i) =>
          <circle key={i} cx={x} cy={y} r="2.2" fill="#FFD27A" opacity=".85" />)}
        <g fill={INK}>
          <path d="M14 112 L34 58 L54 112 Z" /><rect x="30" y="112" width="8" height="10" />
          <path d="M62 112 L88 42 L114 112 Z" /><rect x="84" y="112" width="8" height="12" />
          <path d="M122 112 L142 66 L162 112 Z" /><rect x="138" y="112" width="8" height="10" />
          <path d="M170 112 L198 36 L226 112 Z" /><rect x="194" y="112" width="8" height="12" />
        </g>
        <rect x="0" y="118" width="260" height="14" fill={INK} />
      </svg>)
    case 'castle': return (
      <svg viewBox="0 0 260 130" style={s} aria-hidden="true">
        {[[36, 24, 2], [220, 30, 2], [190, 14, 1.5]].map(([x, y, r], i) =>
          <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity=".6" />)}
        <ellipse cx="52" cy="112" rx="42" ry="12" fill="#fff" opacity=".14" />
        <ellipse cx="216" cy="118" rx="46" ry="13" fill="#fff" opacity=".12" />
        <ellipse cx="130" cy="110" rx="56" ry="13" fill="#fff" opacity=".2" />
        <g fill={INK} transform="translate(130 58)">
          <rect x="-36" y="8" width="18" height="42" rx="3" />
          <rect x="18" y="8" width="18" height="42" rx="3" />
          <rect x="-20" y="22" width="40" height="28" />
          <path d="M-36 8 L-27 -8 L-18 8 Z" />
          <path d="M18 8 L27 -8 L36 8 Z" />
          <path d="M-27 -8 v-8 l9 3 -9 3" fill="#FFD27A" />
          <circle cx="0" cy="38" r="6" fill="#FFD27A" />
        </g>
      </svg>)
    case 'dino': return (
      <svg viewBox="0 0 260 130" style={s} aria-hidden="true">
        <circle cx="42" cy="22" r="12" fill="#FBF4E6" opacity=".85" />
        <g fill={INK}>
          <ellipse cx="152" cy="97" rx="30" ry="13" />
          <rect x="134" y="102" width="9" height="16" rx="4" />
          <rect x="160" y="102" width="9" height="16" rx="4" />
          <circle cx="203" cy="52" r="6.5" />
        </g>
        <path d="M174 90 C188 76 190 62 201 55" stroke={INK} strokeWidth="9" strokeLinecap="round" fill="none" />
        <path d="M124 94 q-12 6 -18 16" stroke={INK} strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M46 118 q2 -22 -8 -32 M46 118 q0 -20 12 -28 M46 118 q-3 -16 -18 -18" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M228 118 q2 -18 -7 -26 M228 118 q1 -16 11 -22" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="0" y="116" width="260" height="14" fill={INK} />
      </svg>)
    default: return (   /* jungle */
      <svg viewBox="0 0 260 130" style={s} aria-hidden="true">
        <g fill={INK}>
          <ellipse cx="18" cy="4" rx="36" ry="26" />
          <ellipse cx="82" cy="-6" rx="40" ry="24" />
          <ellipse cx="178" cy="-10" rx="36" ry="24" />
          <ellipse cx="244" cy="2" rx="42" ry="28" />
        </g>
        <path d="M146 0 q-5 26 4 44" stroke={INK} strokeWidth="3" fill="none" />
        <ellipse cx="152" cy="49" rx="7" ry="11" fill={INK} transform="rotate(18 152 49)" />
        {[[52, 56], [104, 40], [212, 58]].map(([x, y], i) =>
          <circle key={i} cx={x} cy={y} r="2.2" fill="#FFD27A" opacity=".85" />)}
        <path d="M0 104 Q65 94 130 104 T260 104 V130 H0 Z" fill={INK} />
        <path d="M108 102 l9 -14 9 14 z" fill={INK} />
        <path d="M138 102 l9 -14 9 14 z" fill={INK} />
        <circle cx="121" cy="109" r="3" fill="#FFD27A" />
        <circle cx="143" cy="109" r="3" fill="#FFD27A" />
      </svg>)
  }
}

type Props = {
  skins: Skin[]
  t: (key: string) => string
  onPick: (slug: string) => void
}

export default function WorldGallery({ skins, t, onPick }: Props) {
  return (
    <section aria-labelledby="worlds-heading" style={{ padding: '80px 0', background: '#16123a', color: '#fff' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '12.5px', letterSpacing: '1.8px', textTransform: 'uppercase', color: '#FFD27A', fontWeight: 800 }}>{t('worlds.kicker')}</p>
        <h2 id="worlds-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(26px,3vw,36px)', marginBottom: '12px' }}>{t('worlds.title')}</h2>
        <p style={{ fontSize: '16px', color: '#cfc3ea', maxWidth: '600px', margin: '0 auto 40px' }}>{t('worlds.sub')}</p>
        <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: '16px' }}>
          {skins.map(sk => (
            <button key={sk.slug} onClick={() => onPick(sk.slug)}
              style={{ padding: 0, textAlign: 'left', border: '1px solid rgba(255,255,255,.14)', borderRadius: '18px', overflow: 'hidden', background: 'rgba(255,255,255,.04)', cursor: 'pointer', color: '#fff', transition: 'transform .2s, box-shadow .2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 36px -16px rgba(244,169,60,.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ aspectRatio: '2 / 1', background: GRAD[sk.slug] ?? GRAD.jungle, position: 'relative' }}>
                <Scene slug={sk.slug} />
              </div>
              <div style={{ padding: '13px 15px 15px' }}>
                <div style={{ fontWeight: 800, fontSize: '15px' }}>{sk.emoji} {sk.name}</div>
                <div style={{ fontSize: '12.5px', color: '#cfc3ea', marginTop: '3px' }}>{t('worlds.loves')} {sk.loves}</div>
                <div style={{ fontSize: '12px', color: '#FFD27A', marginTop: '7px', fontWeight: 700 }}>{t('worlds.cta')}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
