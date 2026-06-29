// lib/howlerPlayer.ts
// Fire-and-forget playback for short voice snippets, backed by Howler.
// Howler handles the cross-browser audio "unlock" (the autoplay-gesture mess we
// fought with the raw <audio> element) automatically, so a .play() that runs
// after an async fetch works once the user has interacted with the page.
import { Howl } from 'howler'

let current: Howl | null = null

export function playUrl(url: string): void {
  stopCurrent()
  current = new Howl({ src: [url], html5: true, format: ['mp3'] })
  current.play()
}

export function stopCurrent(): void {
  if (current) {
    try { current.stop(); current.unload() } catch { /* noop */ }
    current = null
  }
}
