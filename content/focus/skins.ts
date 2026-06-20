// content/focus/skins.ts
// Same four worlds as the Money path (a child keeps their world across subjects),
// with a focus-themed object motif (a steady guiding light) and a calm refrain.
import type { Skin } from '@/content/types'

export const SKINS: Record<string, Skin> = {
  sea: {
    slug:          'sea',
    setting:       'the warm shallows',
    hero:          'dolphin',
    companionName: 'Pip the crab',
    objectMotif:   'glowing tide-light',
    refrain:       'The tide keeps going, one calm wave at a time',
  },
  space: {
    slug:          'space',
    setting:       'the star-lit station',
    hero:          'robot',
    companionName: 'Circuit the space-cat',
    objectMotif:   'steady north-star',
    refrain:       'One steady star can guide a whole night',
  },
  forest: {
    slug:          'forest',
    setting:       'the heart of Whisper Forest',
    hero:          'fox',
    companionName: 'Old Owl',
    objectMotif:   'bright trail-lantern',
    refrain:       'Step by step, every path finds its end',
  },
  castle: {
    slug:          'castle',
    setting:       'the towers of Cloud Castle',
    hero:          'dragon',
    companionName: 'Mira the cloud-bunny',
    objectMotif:   'calm watch-candle',
    refrain:       'A calm mind builds the tallest tower',
  },
}
