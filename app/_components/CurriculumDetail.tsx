'use client'
// app/_components/CurriculumDetail.tsx
// Shows a full level-by-level breakdown for a single learning path.
// Used on the landing page (path-switcher context) and in the app
// (before a parent requests the next level).
//
// Props:
//   levels    — the levels to display (can be all 5, or just upcoming)
//   current   — ordinal of the current/active level (highlighted)
//   compact   — if true, shows a shorter version suitable for the app's
//               "next story" card
//   onRequest — if provided, shows a "Request this story" CTA on the
//               current level card

import type { Level } from '@/content/types'

const PATH_COLORS: Record<string, { bg: string; text: string; border: string; light: string }> = {
  money:      { bg:'#F4A93C', text:'#3a230a', border:'rgba(244,169,60,.35)', light:'rgba(244,169,60,.12)' },
  focus:      { bg:'#7FC8E8', text:'#0d3d52', border:'rgba(127,200,232,.35)', light:'rgba(127,200,232,.12)' },
  resilience: { bg:'#EB8A8A', text:'#5a1a1a', border:'rgba(235,138,138,.35)', light:'rgba(235,138,138,.12)' },
  kindness:   { bg:'#F8CBA0', text:'#6b3a1a', border:'rgba(248,203,160,.35)', light:'rgba(248,203,160,.12)' },
  problem:    { bg:'#9B86E0', text:'#2a1a52', border:'rgba(155,134,224,.35)', light:'rgba(155,134,224,.12)' },
  confidence: { bg:'#54B6A6', text:'#0d3b35', border:'rgba(84,182,166,.35)', light:'rgba(84,182,166,.12)' },
}

interface Props {
  levels:      Level[]
  subjectSlug: string
  current?:    number   // ordinal of level in progress
  compact?:    boolean  // shorter cards for the app
  onRequest?:  (ordinal: number) => void
}

export default function CurriculumDetail({ levels, subjectSlug, current, compact, onRequest }: Props) {
  const colors = PATH_COLORS[subjectSlug] ?? PATH_COLORS['money']!

  return (
    <div style={{ display:'flex', flexDirection:'column', gap: compact ? '10px' : '14px' }}>
      {levels.map((level, i) => {
        const isCurrent  = level.ordinal === current
        const isDone     = current != null && level.ordinal < current
        const isLocked   = current != null && level.ordinal > current
        const isNext     = current != null && level.ordinal === current

        return (
          <div key={level.ordinal} style={{
            background: isCurrent ? colors.light : isDone ? '#f9f5f0' : '#fff',
            border: `1.5px solid ${isCurrent ? colors.border : isDone ? '#e8dfd0' : '#ece0c8'}`,
            borderRadius: '18px',
            padding: compact ? '14px 16px' : '20px 22px',
            position: 'relative',
            opacity: isLocked ? .55 : 1,
            transition: '.2s',
          }}>

            {/* Connector line between levels */}
            {i < levels.length - 1 && !compact && (
              <div style={{
                position: 'absolute', bottom: '-14px', left: compact ? '22px' : '30px',
                width: '2px', height: '14px',
                background: isDone ? colors.bg : '#e0d2b7',
              }} />
            )}

            <div style={{ display:'flex', alignItems:'flex-start', gap:'13px' }}>
              {/* Level badge */}
              <div style={{
                width: compact ? '32px' : '38px',
                height: compact ? '32px' : '38px',
                minWidth: compact ? '32px' : '38px',
                borderRadius: '11px',
                background: isDone ? colors.bg : isCurrent ? colors.bg : '#e8dfd0',
                color: isDone || isCurrent ? colors.text : '#8a7a68',
                display: 'grid', placeItems: 'center',
                fontFamily: 'var(--font-fraunces)', fontWeight: 700,
                fontSize: compact ? '15px' : '17px',
              }}>
                {isDone ? '✓' : level.ordinal}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Status + concept */}
                <div style={{ display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap', marginBottom:'4px' }}>
                  <span style={{ fontWeight: 800, fontSize: compact ? '14px' : '15px', color:'#211a3a' }}>
                    {level.title}
                  </span>
                  {isCurrent && (
                    <span style={{ fontSize:'10.5px', background: colors.bg, color: colors.text, padding:'2px 9px', borderRadius:'99px', fontWeight:800 }}>
                      Current
                    </span>
                  )}
                  {isDone && (
                    <span style={{ fontSize:'10.5px', background:'#e8f5e9', color:'#2e7d32', padding:'2px 9px', borderRadius:'99px', fontWeight:800 }}>
                      Completed
                    </span>
                  )}
                  {isLocked && !compact && (
                    <span style={{ fontSize:'10.5px', background:'#f0ece4', color:'#8a7a68', padding:'2px 9px', borderRadius:'99px', fontWeight:800 }}>
                      🔒 Locked
                    </span>
                  )}
                </div>

                {/* Concept */}
                <p style={{ fontSize: compact ? '12px' : '13px', color: '#E0852A', fontWeight: 700, marginBottom: compact ? '0' : '8px' }}>
                  Teaches: {level.concept}
                </p>

                {/* Summary — only in full mode */}
                {!compact && (
                  <p style={{ fontSize:'14px', color:'#5d5278', lineHeight:1.6, marginBottom:'10px' }}>
                    {level.summary}
                  </p>
                )}

                {/* Teaching note — only in full mode for non-locked levels */}
                {!compact && !isLocked && (
                  <div style={{ display:'flex', gap:'7px', alignItems:'flex-start', background: colors.light, border:`1px dashed ${colors.border}`, borderRadius:'10px', padding:'9px 12px' }}>
                    <span style={{ fontSize:'14px', flexShrink:0 }}>💡</span>
                    <p style={{ fontSize:'12.5px', color:'#5d5278', lineHeight:1.5, margin:0, fontStyle:'italic' }}>
                      {level.teachingNote}
                    </p>
                  </div>
                )}

                {/* Callback badge */}
                {level.callback && !compact && (
                  <div style={{ display:'inline-flex', gap:'6px', alignItems:'center', background:'#f0ece4', border:'1px solid #e0d2b7', borderRadius:'99px', padding:'5px 12px', marginTop:'10px', fontSize:'12px', color:'#8a7a68' }}>
                    <span>🔁</span> Revisits: {level.callback}
                  </div>
                )}

                {/* Request CTA on current level */}
                {isCurrent && onRequest && (
                  <button
                    onClick={() => onRequest(level.ordinal)}
                    style={{
                      marginTop:'14px', padding:'11px 20px',
                      background:`linear-gradient(135deg,${colors.bg},#E0852A)`,
                      color: colors.text, fontWeight:700, border:'none',
                      borderRadius:'12px', cursor:'pointer', fontSize:'14px',
                      display:'block', width:'100%',
                    }}>
                    Get Level {level.ordinal} — {level.title} →
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
