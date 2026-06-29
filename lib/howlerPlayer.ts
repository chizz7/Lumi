// lib/howlerPlayer.ts
// A tiny subscribable audio store backed by a single Howl instance.
//
// iOS Safari only LOADS/PLAYS audio when play() runs synchronously inside a
// user gesture (a tap handler). Playing from a React effect — i.e. after a
// state change or an await — lands outside the gesture, so iOS refuses to load
// the media and Howler fires onloaderror ("audio didn't load"). This store is
// therefore driven by play()/toggle() calls made DIRECTLY from onClick handlers,
// never from effects. One audio plays at a time across the whole page.
import { Howl } from 'howler'

export type PlayerState = {
  url:      string | null
  playing:  boolean
  loading:  boolean
  error:    boolean
  duration: number
  position: number
}

let howl: Howl | null = null
let tick = 0

let state: PlayerState = {
  url: null, playing: false, loading: false, error: false, duration: 0, position: 0,
}

const listeners = new Set<() => void>()
function emit() { for (const l of listeners) l() }
function set(patch: Partial<PlayerState>) { state = { ...state, ...patch }; emit() }

export function subscribe(l: () => void): () => void {
  listeners.add(l)
  return () => { listeners.delete(l) }
}
export function getState(): PlayerState { return state }

function startTick() {
  stopTick()
  tick = window.setInterval(() => {
    if (howl && howl.playing()) set({ position: howl.seek() as number })
  }, 250)
}
function stopTick() { if (tick) { window.clearInterval(tick); tick = 0 } }

// Begin playback of `url`. MUST be called inside a user-gesture handler on iOS.
export function play(url: string): void {
  stop()
  set({ url, playing: false, loading: true, error: false, duration: 0, position: 0 })
  const h = new Howl({
    src: [url],
    html5: true,          // stream rather than buffer the whole file
    format: ['mp3'],
    onload:      () => set({ duration: h.duration(), loading: false }),
    onplay:      () => { set({ playing: true, loading: false }); startTick() },
    onpause:     () => { set({ playing: false }); stopTick() },
    onstop:      () => { set({ playing: false }); stopTick() },
    onend:       () => { set({ playing: false, position: 0 }); stopTick() },
    onloaderror: () => { set({ error: true, loading: false, playing: false }); stopTick() },
    onplayerror: () => { set({ error: true, loading: false, playing: false }); stopTick() },
  })
  howl = h
  h.play()
}

// Pause/resume the current clip. Resume happens inside a gesture (button tap),
// which keeps iOS happy.
export function toggle(): void {
  if (!howl) return
  if (howl.playing()) howl.pause()
  else howl.play()
}

export function seek(t: number): void {
  if (!howl) return
  howl.seek(t)
  set({ position: t })
}

export function stop(): void {
  if (howl) {
    try { howl.stop(); howl.unload() } catch { /* noop */ }
    howl = null
  }
  stopTick()
  set({ playing: false, loading: false })
}

// Back-compat fire-and-forget helper for the voice snippets / demo switches.
export function playUrl(url: string): void { play(url) }
export function stopCurrent(): void { stop() }
