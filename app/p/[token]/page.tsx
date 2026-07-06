// app/p/[token]/page.tsx
// GET /p/:token — the durable "hear it again" preview page linked from the
// lead-capture email. A parent who previewed but didn't buy on the spot can
// reopen this any time: the Level-1 audio is re-signed server-side on every
// open (a raw signed URL would be dead within hours), so it always plays — and
// the page is a conversion surface, ending in a clear "Start Story Club" CTA.
//
// Pre-purchase there's no story_instances row, so the preview params travel in
// the signed token itself (see lib/preview-link.ts). Authless + noindex by
// design: the token is HMAC-signed and exposes no user data.

import { verifyPreviewToken }              from '@/lib/preview-link'
import { assembleStory, previewText }      from '@/content'
import { getOrRenderAudio, audioCacheKey } from '@/lib/tts'
import type { AgeBand }                    from '@/content/types'
import type { Metadata }                   from 'next'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { robots: { index: false, follow: false } }

const BG = '#FBF4E6'

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ minHeight: '100vh', background: BG, color: '#211a3a', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 620, padding: '32px 22px 64px' }}>{children}</div>
    </main>
  )
}

function Expired() {
  return (
    <Shell>
      <div style={{ textAlign: 'center', marginTop: 64 }}>
        <div style={{ fontSize: 44, marginBottom: 12 }}>🌙</div>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 24, marginBottom: 10 }}>This preview link isn’t available</h1>
        <p style={{ color: '#5d5278', fontSize: 15, lineHeight: 1.6, marginBottom: 22 }}>
          It may be from an old builder session. You can create a fresh story preview in a few taps.
        </p>
        <a href="/" style={{ display: 'inline-block', padding: '13px 26px', background: 'linear-gradient(135deg,#FFD27A,#E0852A)', color: '#3a230a', fontWeight: 700, borderRadius: 13, textDecoration: 'none', fontSize: 15 }}>
          Build a new story →
        </a>
      </div>
    </Shell>
  )
}

export default async function PreviewPlayerPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const p = verifyPreviewToken(token)
  if (!p) return <Expired />

  // Rebuild the Level-1 preview from the signed params.
  let audioText: string, script: string, levelTitle: string, ageTag: string
  try {
    const built = assembleStory(p.subjectSlug, 1, p.skinSlug, p.childName, p.ageBand as AgeBand | undefined)
    audioText  = built.audioText
    script     = built.script
    levelTitle = built.level.title
    ageTag     = built.ageTag
  } catch {
    return <Expired />
  }

  // Cache-first render, re-signed on every open (renders once if the object was
  // purged; otherwise an instant signed-URL hit).
  let audioUrl: string | null = null
  try {
    const cacheKey = audioCacheKey(p.subjectSlug, 1, p.skinSlug, p.voiceId, 'en', true, ageTag, p.childName)
    audioUrl = await getOrRenderAudio(audioText, p.voiceId, cacheKey)
  } catch {
    audioUrl = null
  }

  const who     = p.childName ? `${p.childName}'s` : 'your'
  const excerpt = previewText(script)

  return (
    <Shell>
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 18, color: '#3a2470' }}>🌙 Lumi</div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #ece0c8', borderRadius: 20, padding: '26px 22px', boxShadow: '0 20px 50px -28px rgba(8,4,28,.35)' }}>
        <p style={{ fontSize: 12, letterSpacing: 1.4, textTransform: 'uppercase', color: '#E0852A', fontWeight: 800, marginBottom: 6 }}>
          {who} free preview
        </p>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 25, lineHeight: 1.2, marginBottom: 18 }}>{levelTitle}</h1>

        {audioUrl ? (
          <audio controls preload="none" playsInline src={audioUrl} style={{ width: '100%', marginBottom: 6 }} />
        ) : (
          <p style={{ fontSize: 14, color: '#c0392b', background: 'rgba(235,138,138,.1)', border: '1px solid rgba(235,138,138,.3)', borderRadius: 12, padding: '12px 14px' }}>
            The narration is taking a moment to prepare. Please refresh this page shortly.
          </p>
        )}
      </div>

      {excerpt && (
        <section style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: '#9d8fad', fontWeight: 800, marginBottom: 12 }}>
            Read along
          </h2>
          <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 17, lineHeight: 1.75, color: '#3a3358', whiteSpace: 'pre-line' }}>
            {excerpt}
          </div>
        </section>
      )}

      {/* Conversion CTA — this page exists to bring an on-the-fence parent back. */}
      <div style={{ marginTop: 34, background: 'linear-gradient(170deg,#241a52,#3a2470)', borderRadius: 18, padding: '26px 22px', textAlign: 'center', color: '#fff' }}>
        <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: 20, marginBottom: 8 }}>Keep {who} adventure going</p>
        <p style={{ fontSize: 14, color: '#dccffa', lineHeight: 1.6, marginBottom: 18 }}>
          Story Club sends a new levelled bedtime story every other night — building real skills, one calm evening at a time. First story free.
        </p>
        <a href={`/api/checkout/from-preview?token=${token}`} style={{ display: 'inline-block', padding: '14px 30px', background: 'linear-gradient(135deg,#FFD27A,#E0852A)', color: '#3a230a', fontWeight: 800, borderRadius: 13, textDecoration: 'none', fontSize: 15 }}>
          Start Story Club →
        </a>
      </div>
    </Shell>
  )
}
