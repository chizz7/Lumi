// app/s/[id]/page.tsx
// GET /s/:id — the branded "play your story" page linked from every delivery
// email. This is the audio-delivery surface OUTSIDE the dashboard: a parent taps
// the button in their inbox and lands here — no login, no app — with a real
// player and the full story to read along.
//
// Why a page, not a redirect to the raw MP3:
//   • the audio is re-signed server-side on every open, so a story delivered in
//     the morning still plays at bedtime (a raw 4h signed URL would be dead);
//   • it stays in a Lumi-branded context with the readable script and a link
//     into the library, instead of dumping the parent onto a bare audio file.
//
// Authless by design: story ids are random UUIDs (unguessable) and the page is
// noindex, so it's safe to open straight from an emailed link.

import { adminClient, BUCKETS } from '@/lib/supabase'
import { getAllLevels }         from '@/content'
import { fetchWordTimings }     from '@/lib/tts'
import ReadAlong                from '@/app/_components/ReadAlong'
import type { Metadata }        from 'next'

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

export default async function StoryPlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { data: story } = await adminClient
    .from('story_instances')
    .select('audio_key, script_text, subject_slug, level_ordinal')
    .eq('id', id)
    .maybeSingle()

  if (!story?.audio_key) {
    return (
      <Shell>
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>🌙</div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 24, marginBottom: 10 }}>This story link isn’t available</h1>
          <p style={{ color: '#5d5278', fontSize: 15, lineHeight: 1.6 }}>
            It may have expired or moved. You can always find every story in your{' '}
            <a href="/library" style={{ color: '#E0852A', fontWeight: 700 }}>library</a>.
          </p>
        </div>
      </Shell>
    )
  }

  // Re-sign fresh on every open (1h window, plenty for one sitting), and load the
  // cached word timings so the child can watch each word light up (null → the
  // read-along just shows plain text).
  const [{ data: signed }, words] = await Promise.all([
    adminClient.storage.from(BUCKETS.AUDIO).createSignedUrl(story.audio_key, 60 * 60),
    fetchWordTimings(story.audio_key),
  ])

  // Level title for a friendly heading (best-effort; falls back gracefully).
  const level = getAllLevels(story.subject_slug).find(l => l.ordinal === story.level_ordinal)
  const title = level?.title ?? 'Tonight’s story'

  return (
    <Shell>
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 18, color: '#3a2470' }}>🌙 Lumi</div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #ece0c8', borderRadius: 20, padding: '26px 22px', boxShadow: '0 20px 50px -28px rgba(8,4,28,.35)' }}>
        <p style={{ fontSize: 12, letterSpacing: 1.4, textTransform: 'uppercase', color: '#E0852A', fontWeight: 800, marginBottom: 6 }}>
          Tonight’s bedtime story
        </p>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 25, lineHeight: 1.2, marginBottom: 18 }}>{title}</h1>

        {signed?.signedUrl ? (
          <ReadAlong audioUrl={signed.signedUrl} script={story.script_text ?? ''} words={words} />
        ) : (
          <p style={{ fontSize: 14, color: '#c0392b', background: 'rgba(235,138,138,.1)', border: '1px solid rgba(235,138,138,.3)', borderRadius: 12, padding: '12px 14px' }}>
            The narration is taking a moment to prepare. Please refresh this page shortly, or
            open it from your <a href="/library" style={{ color: '#c0392b', fontWeight: 700 }}>library</a>.
          </p>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: 34 }}>
        <a href="/library" style={{ display: 'inline-block', padding: '13px 26px', background: 'linear-gradient(135deg,#FFD27A,#E0852A)', color: '#3a230a', fontWeight: 700, borderRadius: 13, textDecoration: 'none', fontSize: 15 }}>
          See all your stories →
        </a>
      </div>
    </Shell>
  )
}
