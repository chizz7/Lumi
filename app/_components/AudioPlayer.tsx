'use client'
// A small Howler-backed audio player with a play/pause button + scrubber.
// Replaces the raw native <audio controls> (which got stuck at 0:00 and fought
// the autoplay policy). Howler manages loading + the cross-browser unlock.
import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

const fmt = (s: number) => {
  if (!isFinite(s) || s < 0) s = 0
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function AudioPlayer({ url, autoPlay = false }: { url: string; autoPlay?: boolean }) {
  const howlRef = useRef<Howl | null>(null)
  const [playing, setPlaying] = useState(false)
  const [dur, setDur] = useState(0)
  const [pos, setPos] = useState(0)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false); setPos(0); setDur(0)
    const h = new Howl({
      src: [url],
      html5: true,
      format: ['mp3'],
      onload:  () => setDur(h.duration()),
      onplay:  () => setPlaying(true),
      onpause: () => setPlaying(false),
      onstop:  () => setPlaying(false),
      onend:   () => { setPlaying(false); setPos(0) },
      onloaderror: () => setError(true),
      onplayerror: () => setError(true),
    })
    howlRef.current = h
    if (autoPlay) h.play()
    const iv = window.setInterval(() => { if (h.playing()) setPos(h.seek() as number) }, 250)
    return () => { window.clearInterval(iv); h.unload(); howlRef.current = null }
  }, [url]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = () => {
    const h = howlRef.current
    if (!h) return
    h.playing() ? h.pause() : h.play()
  }
  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const h = howlRef.current
    if (!h) return
    const t = Number(e.target.value)
    h.seek(t); setPos(t)
  }

  if (error) {
    return <p style={{ fontSize: 13, color: '#c0392b', textAlign: 'center', margin: '4px 0' }}>The audio didn’t load — tap retry below.</p>
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #ece0c8', borderRadius: 14, padding: '12px 14px' }}>
      <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}
        style={{ width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'linear-gradient(135deg,#FFD27A,#E0852A)', color: '#3a230a', fontSize: 16, fontWeight: 800, cursor: 'pointer', flexShrink: 0 }}>
        {playing ? '❚❚' : '▶'}
      </button>
      <input type="range" min={0} max={dur || 0} step={0.1} value={pos} onChange={onSeek} aria-label="Seek"
        style={{ flex: 1, accentColor: '#F4A93C', cursor: 'pointer' }} />
      <span style={{ fontSize: 12, color: '#4a4063', minWidth: 80, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        {fmt(pos)} / {fmt(dur)}
      </span>
    </div>
  )
}
