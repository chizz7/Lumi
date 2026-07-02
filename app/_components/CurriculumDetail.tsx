'use client'
// app/_components/CurriculumDetail.tsx
// Shows a full level-by-level breakdown for a single learning path.
// Used on the /curriculum page (one instance per path).
//
// Props:
//   levels      — the levels to display
//   subjectSlug — picks the path's accent colours

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
}

export default function CurriculumDetail({ levels, subjectSlug }: Props) {
  const colors = PATH_COLORS[subjectSlug] ?? PATH_COLORS['money']!

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
      {levels.map((level, i) => (
        <div key={level.ordinal} style={{
          background: '#fff',
          border: '1.5px solid #ece0c8',
          borderRadius: '18px',
          padding: '20px 22px',
          position: 'relative',
        }}>

          {/* Connector line between levels */}
          {i < levels.length - 1 && (
            <div style={{
              position: 'absolute', bottom: '-14px', left: '30px',
              width: '2px', height: '14px',
              background: '#e0d2b7',
            }} />
          )}

          <div style={{ display:'flex', alignItems:'flex-start', gap:'13px' }}>
            {/* Level badge */}
            <div style={{
              width: '38px', height: '38px', minWidth: '38px',
              borderRadius: '11px',
              background: '#e8dfd0', color: '#8a7a68',
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--font-fraunces)', fontWeight: 700,
              fontSize: '17px',
            }}>
              {level.ordinal}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap', marginBottom:'4px' }}>
                <span style={{ fontWeight: 800, fontSize: '15px', color:'#211a3a' }}>
                  {level.title}
                </span>
              </div>

              {/* Concept */}
              <p style={{ fontSize: '13px', color: '#E0852A', fontWeight: 700, marginBottom: '8px' }}>
                Teaches: {level.concept}
              </p>

              {/* Summary */}
              <p style={{ fontSize:'14px', color:'#5d5278', lineHeight:1.6, marginBottom:'10px' }}>
                {level.summary}
              </p>

              {/* Teaching note */}
              <div style={{ display:'flex', gap:'7px', alignItems:'flex-start', background: colors.light, border:`1px dashed ${colors.border}`, borderRadius:'10px', padding:'9px 12px' }}>
                <span style={{ fontSize:'14px', flexShrink:0 }}>💡</span>
                <p style={{ fontSize:'12.5px', color:'#5d5278', lineHeight:1.5, margin:0, fontStyle:'italic' }}>
                  {level.teachingNote}
                </p>
              </div>

              {/* Callback badge */}
              {level.callback && (
                <div style={{ display:'inline-flex', gap:'6px', alignItems:'center', background:'#f0ece4', border:'1px solid #e0d2b7', borderRadius:'99px', padding:'5px 12px', marginTop:'10px', fontSize:'12px', color:'#8a7a68' }}>
                  <span>🔁</span> Revisits: {level.callback}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
