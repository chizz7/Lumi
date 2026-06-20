// content/resilience/skins.ts
// Same four worlds, with a "grows with effort" motif and a resilience refrain —
// effort changes ability, the way a small sprout grows when it is cared for.
import type { Skin } from '@/content/types'

export const SKINS: Record<string, Skin> = {
  sea: {
    slug:          'sea',
    setting:       'the warm shallows',
    hero:          'dolphin',
    companionName: 'Pip the crab',
    objectMotif:   'little coral-sprout',
    refrain:       'Every wave that falls back rises again',
  },
  space: {
    slug:          'space',
    setting:       'the star-lit station',
    hero:          'robot',
    companionName: 'Circuit the space-cat',
    objectMotif:   'small star-seedling',
    refrain:       'Even the smallest spark can grow into a star',
  },
  forest: {
    slug:          'forest',
    setting:       'the heart of Whisper Forest',
    hero:          'fox',
    companionName: 'Old Owl',
    objectMotif:   'tiny green sprout',
    refrain:       'What grows slowly grows strong',
  },
  castle: {
    slug:          'castle',
    setting:       'the towers of Cloud Castle',
    hero:          'dragon',
    companionName: 'Mira the cloud-bunny',
    objectMotif:   'small climbing vine',
    refrain:       'A little vine can climb the tallest wall',
  },
}
