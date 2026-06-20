// app/curriculum/page.tsx
// Full curriculum overview — linked from landing nav + footer.
// Shows every path and every level with summaries so parents understand
// exactly what their child will learn before they subscribe.
// Server component — fully SSR for SEO.

import type { Metadata }  from 'next'
import Link               from 'next/link'
import { getAllLevels }   from '@/content'
import CurriculumDetail  from '@/app/_components/CurriculumDetail'

export const metadata: Metadata = {
  title: 'Curriculum — What Your Child Learns',
  description: 'Every learning path, every level, every concept — exactly what Lumi stories teach and why the sequence matters.',
}

const PATHS = [
  { slug:'money',      emoji:'💰', name:'Money & Saving',      available: true,
    why: 'Financial literacy is one of the highest-impact skills to introduce early. Children who understand value, exchange, and saving before age 8 develop habits that compound for life. This path starts with the simplest question — why do coins look different? — and builds systematically to the hardest one: wants vs. needs.' },
  { slug:'focus',      emoji:'🎯', name:'Focus & Goals',        available: true,
    why: 'Executive function — the ability to plan, focus, and follow through — is a stronger predictor of outcomes than IQ. The window to build it is early childhood. These stories give children language for their own attention.' },
  { slug:'resilience', emoji:'💪', name:'Resilience',           available: false,
    why: 'Children who understand that effort changes ability outperform those who believe in fixed talent. Level 1 normalises struggle; without that foundation, Level 4 (learning from mistakes) lands empty.' },
  { slug:'kindness',   emoji:'❤️', name:'Kindness & Empathy',   available: false,
    why: 'Empathy is a skill, not a trait. It is built through repeated, low-stakes practice. Bedtime stories are one of the best contexts: calm, connected, and emotionally open.' },
  { slug:'problem',    emoji:'🧠', name:'Problem Solving',       available: false,
    why: 'Problem solving is a disposition, not a subject. These stories build the habit of pausing before reacting, considering options, and trying systematically.' },
  { slug:'confidence', emoji:'🌱', name:'Confidence',            available: false,
    why: 'Confidence is the quiet belief that you are capable of trying. Level 1 starts by normalising incompleteness — removing the shame that stops children from attempting hard things.' },
]

// Placeholder levels for paths not yet written
const PLACEHOLDER_LEVELS = (n: number) => Array.from({ length: 5 }, (_, i) => ({
  ordinal: i + 1,
  title: ['Coming soon','Coming soon','Coming soon','Coming soon','Coming soon'][i]!,
  concept: 'Content in development',
  callback: null,
  summary: 'This level is currently being written and reviewed. Sign up to be notified when it launches.',
  teachingNote: 'Expert-reviewed before release.',
  ageFloor: 3 + i,
  audioTemplate: '',
}))

export default function CurriculumPage() {
  return (
    <main style={{ background:'#FBF4E6', minHeight:'100vh', paddingBottom:'80px' }}>

      {/* Header */}
      <header style={{ background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff', padding:'80px 24px 60px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, opacity:.05, backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
        <div style={{ maxWidth:'760px', margin:'0 auto', position:'relative' }}>
          <Link href="/" style={{ color:'rgba(255,255,255,.6)', fontSize:'14px', textDecoration:'none', display:'block', marginBottom:'20px' }}>← Back to Lumi</Link>
          <p style={{ fontSize:'12px', letterSpacing:'2px', textTransform:'uppercase', color:'#FFD27A', fontWeight:800, marginBottom:'12px' }}>The curriculum</p>
          <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'clamp(28px,4vw,44px)', lineHeight:1.1, marginBottom:'16px' }}>
            Every story teaches one thing.<br />In exactly the right order.
          </h1>
          <p style={{ fontSize:'17px', color:'#dccffa', lineHeight:1.6, maxWidth:'56ch', margin:'0 auto 28px' }}>
            6 learning paths. 5 levels each. 30 stories total. Each level teaches one concept, then quietly revisits the last — so children revise without realising it.
          </p>
          <Link href="/" style={{ display:'inline-block', padding:'14px 28px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, borderRadius:'14px', textDecoration:'none', fontSize:'15px' }}>
            Try a story free →
          </Link>
        </div>
      </header>

      {/* How the sequence works */}
      <section style={{ maxWidth:'760px', margin:'0 auto', padding:'52px 24px 0' }}>
        <div style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'20px', padding:'28px', marginBottom:'48px', boxShadow:'0 10px 30px -14px rgba(8,4,28,.15)' }}>
          <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'21px', marginBottom:'14px' }}>Why the sequence matters</h2>
          <p style={{ fontSize:'15px', color:'#5d5278', lineHeight:1.7, marginBottom:'14px' }}>
            Most children's content treats each episode as standalone. Lumi stories are built differently: each level introduces one concept, and a later level quietly references it — not as a test, but as a familiar detail woven into a new adventure.
          </p>
          <p style={{ fontSize:'15px', color:'#5d5278', lineHeight:1.7 }}>
            A child who heard Level 2 (coins have different values) will notice the callback in Level 4 (saving coins) without being told it's a revision. That's spaced repetition without flashcards — delivered at exactly the right moment, in the calm minutes before sleep when lessons stick.
          </p>
        </div>

        {/* All paths */}
        {PATHS.map(path => {
          const levels = path.available
            ? getAllLevels(path.slug)
            : PLACEHOLDER_LEVELS(5)

          return (
            <section key={path.slug} style={{ marginBottom:'52px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'6px' }}>
                <span style={{ fontSize:'30px' }}>{path.emoji}</span>
                <div>
                  <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', lineHeight:1 }}>
                    {path.name}
                  </h2>
                  {!path.available && (
                    <span style={{ fontSize:'11px', background:'#e8dfd0', color:'#8a7a68', padding:'2px 9px', borderRadius:'99px', fontWeight:800 }}>
                      Coming soon
                    </span>
                  )}
                </div>
              </div>

              <p style={{ fontSize:'14.5px', color:'#5d5278', lineHeight:1.65, marginBottom:'22px', paddingLeft:'42px' }}>
                {path.why}
              </p>

              {path.available ? (
                <CurriculumDetail
                  levels={levels}
                  subjectSlug={path.slug}
                />
              ) : (
                <div style={{ background:'#f9f5f0', border:'1px solid #ece0c8', borderRadius:'16px', padding:'22px', textAlign:'center', color:'#8a7a68', fontSize:'14.5px' }}>
                  <p style={{ marginBottom:'14px', lineHeight:1.6 }}>
                    This path is being written and expert-reviewed. We release paths as they're ready rather than rushing them out.
                  </p>
                  <Link href="/" style={{ display:'inline-block', padding:'11px 22px', background:'#F4E9D4', color:'#211a3a', fontWeight:700, borderRadius:'12px', textDecoration:'none', fontSize:'14px' }}>
                    Join waitlist for early access →
                  </Link>
                </div>
              )}
            </section>
          )
        })}

        {/* Bottom CTA */}
        <div style={{ background:'linear-gradient(135deg,#241a52,#3a2470)', borderRadius:'22px', padding:'36px', textAlign:'center', color:'#fff' }}>
          <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'24px', marginBottom:'10px' }}>
            Start with Money — it's free.
          </h2>
          <p style={{ color:'#dccffa', marginBottom:'22px', fontSize:'15px', lineHeight:1.6 }}>
            Preview the opening of Level 1 before you pay anything. No account needed.
          </p>
          <Link href="/" style={{ display:'inline-block', padding:'15px 32px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, borderRadius:'15px', textDecoration:'none', fontSize:'16px' }}>
            Try Level 1 free →
          </Link>
        </div>
      </section>
    </main>
  )
}
