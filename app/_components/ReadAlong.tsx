'use client'
// Read-along player: plays the story audio and highlights each word as it's
// spoken, auto-scrolling like a teleprompter — so a parent who wants to can let
// their child watch the words and follow along (early-reading practice).
//
// Word timings come from Kokoro (cached beside the MP3). When they're absent
// (older audio), this gracefully degrades to a plain, static script — no
// highlighting, no scroll — identical to the previous behaviour.

import { useEffect, useMemo, useRef, useState } from 'react'
import type { WordTiming } from '@/lib/tts'

export default function ReadAlong({
  audioUrl, script, words, autoPlay = false,
}: {
  audioUrl:  string
  script:    string
  words:     WordTiming[] | null
  autoPlay?: boolean
}) {
  const hasTimings = !!(words && words.length)
  const [readAlong, setReadAlong] = useState(hasTimings)
  const [active, setActive]       = useState(-1)

  const audioRef     = useRef<HTMLAudioElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const wordEls      = useRef<(HTMLSpanElement | null)[]>([])

  // Split the script into paragraphs → tokens, assigning each real word a global
  // index so the flat timings sequence maps onto the displayed words in order.
  const paragraphs = useMemo(() => {
    let gi = 0
    return script
      .split(/\n{2,}|\n/)
      .filter(p => p.trim().length)
      .map(p =>
        p.split(/(\s+)/).map(tok =>
          /^\s*$/.test(tok) ? { space: true, tok, i: -1 } : { space: false, tok, i: gi++ },
        ),
      )
  }, [script])

  // Drive the active word from playback position. rAF (not `timeupdate`, which
  // only fires ~4×/s) keeps the highlight tight; it runs only while playing.
  useEffect(() => {
    const a = audioRef.current
    if (!a || !hasTimings || !readAlong) return
    const w = words!
    let raf = 0
    const tick = () => {
      const t = a.currentTime
      // binary search: last word whose start <= t
      let lo = 0, hi = w.length - 1, found = -1
      while (lo <= hi) {
        const mid = (lo + hi) >> 1
        if (w[mid].start <= t) { found = mid; lo = mid + 1 } else hi = mid - 1
      }
      setActive(found)
      raf = requestAnimationFrame(tick)
    }
    const start = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick) }
    const stop  = () => cancelAnimationFrame(raf)
    a.addEventListener('play', start)
    a.addEventListener('pause', stop)
    a.addEventListener('ended', stop)
    if (!a.paused) start()
    return () => { stop(); a.removeEventListener('play', start); a.removeEventListener('pause', stop); a.removeEventListener('ended', stop) }
  }, [hasTimings, readAlong, words])

  // Keep the active word centred in the scroll box (teleprompter feel).
  useEffect(() => {
    if (!readAlong || active < 0) return
    const el = wordEls.current[active]
    const c  = containerRef.current
    if (!el || !c) return
    // Relative offset via bounding rects — robust regardless of offsetParent.
    const er = el.getBoundingClientRect()
    const cr = c.getBoundingClientRect()
    const target = c.scrollTop + (er.top - cr.top) - c.clientHeight / 2 + er.height / 2
    c.scrollTo({ top: Math.max(0, target), behavior: 'smooth' })
  }, [active, readAlong])

  const scrollBox = readAlong && hasTimings

  return (
    <section style={{ marginTop: 4 }}>
      <style>{`
        .ra-word { border-radius: 6px; padding: 0 1px; transition: background .12s ease, color .12s ease; }
        .ra-word.on { background: linear-gradient(120deg,#FFD27A,#F4A93C); color: #3a230a; box-shadow: 0 0 0 3px rgba(244,169,60,.18); }
        .ra-word.done { color: #7a6f96; }
        .ra-toggle { -webkit-tap-highlight-color: transparent; }
      `}</style>

      <audio
        ref={audioRef}
        controls
        autoPlay={autoPlay}
        preload={autoPlay ? 'auto' : 'none'}
        playsInline
        src={audioUrl}
        style={{ width: '100%', marginBottom: 18 }}
      />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, gap: 12 }}>
        <h2 style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: '#9d8fad', fontWeight: 800 }}>
          Read along
        </h2>
        {hasTimings && (
          <button
            className="ra-toggle"
            onClick={() => setReadAlong(v => !v)}
            aria-pressed={readAlong}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
              border: '1px solid #e4d8c0', background: readAlong ? 'linear-gradient(135deg,#FFD27A,#E0852A)' : '#fff',
              color: readAlong ? '#3a230a' : '#5d5278', fontWeight: 700, fontSize: 13,
              padding: '8px 14px', borderRadius: 999,
            }}
          >
            ✨ Highlight words {readAlong ? 'on' : 'off'}
          </button>
        )}
      </div>

      {hasTimings && readAlong && (
        <p style={{ fontSize: 12.5, color: '#9d8fad', margin: '0 0 12px' }}>
          Words light up as they’re read — great for little ones learning to read along.
        </p>
      )}

      <div
        ref={containerRef}
        style={{
          fontFamily: 'var(--font-fraunces)', fontSize: scrollBox ? 21 : 17,
          lineHeight: scrollBox ? 2 : 1.75, color: '#3a3358',
          maxHeight: scrollBox ? 300 : undefined, overflowY: scrollBox ? 'auto' : 'visible',
          padding: scrollBox ? '10px 14px' : 0,
          background: scrollBox ? '#fffdf8' : 'transparent',
          border: scrollBox ? '1px solid #efe4cf' : 'none',
          borderRadius: scrollBox ? 14 : 0,
          scrollBehavior: 'smooth', whiteSpace: 'pre-wrap',
        }}
      >
        {paragraphs.map((para, pi) => (
          <p key={pi} style={{ margin: pi ? '0 0 14px' : '0 0 14px' }}>
            {para.map((t, ti) =>
              t.space ? (
                <span key={ti}>{t.tok}</span>
              ) : (
                <span
                  key={ti}
                  ref={el => { if (readAlong && hasTimings) wordEls.current[t.i] = el }}
                  className={
                    'ra-word' +
                    (readAlong && hasTimings && t.i === active ? ' on' : '') +
                    (readAlong && hasTimings && active >= 0 && t.i < active ? ' done' : '')
                  }
                >
                  {t.tok}
                </span>
              ),
            )}
          </p>
        ))}
      </div>
    </section>
  )
}
