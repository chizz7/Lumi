'use client'
// A Howler-backed audio player bound to the shared player store.
//
// Critical for iOS: this component NEVER starts playback from an effect. The
// first play() is fired by the parent's unlock tap (a real user gesture). Here
// the ▶ button just toggles, and the toggle/resume is itself a gesture — both
// paths iOS allows. The store streams the file via html5 audio.
import { useSyncExternalStore } from 'react'
import { subscribe, getState, play, toggle, seek } from '@/lib/howlerPlayer'

const fmt = (s: number) => {
  if (!isFinite(s) || s < 0) s = 0
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function AudioPlayer({ url, onRetry }: { url: string; onRetry?: () => void }) {
  const state = useSyncExternalStore(subscribe, getState, getState)
  // Only reflect store state when the store is actually playing THIS url —
  // otherwise a voice-snippet tap elsewhere shouldn't move this scrubber.
  const isThis = state.url === url
  const playing = isThis && state.playing
  const dur     = isThis ? state.duration : 0
  const pos     = isThis ? state.position : 0
  const error   = isThis && state.error

  const onPlayPause = () => {
    // If this url isn't the loaded one (or errored), (re)start it in-gesture.
    if (!isThis || error) play(url)
    else toggle()
  }

  if (error) {
    return (
      <div style={{ background:'#fff', border:'1px solid #f1ddb6', borderRadius:14, padding:'12px 14px', textAlign:'center' }}>
        <p style={{ fontSize: 13, color: '#c0392b', margin: '0 0 8px' }}>The audio didn’t load.</p>
        <button onClick={() => { onRetry ? onRetry() : play(url) }}
          style={{ padding:'10px 18px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:800, border:'none', borderRadius:12, cursor:'pointer', fontSize:14 }}>
          ↻ Tap to play
        </button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #ece0c8', borderRadius: 14, padding: '12px 14px' }}>
      <button onClick={onPlayPause} aria-label={playing ? 'Pause' : 'Play'}
        style={{ width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'linear-gradient(135deg,#FFD27A,#E0852A)', color: '#3a230a', fontSize: 16, fontWeight: 800, cursor: 'pointer', flexShrink: 0 }}>
        {isThis && state.loading ? '…' : playing ? '❚❚' : '▶'}
      </button>
      <input type="range" min={0} max={dur || 0} step={0.1} value={pos} onChange={e => seek(Number(e.target.value))} aria-label="Seek"
        style={{ flex: 1, accentColor: '#F4A93C', cursor: 'pointer' }} />
      <span style={{ fontSize: 12, color: '#4a4063', minWidth: 80, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        {fmt(pos)} / {fmt(dur)}
      </span>
    </div>
  )
}
