// content/problem/skins.ts
// Same four worlds, with a "puzzle that yields to patient thinking" motif and a
// problem-solving refrain — pause, look, and there is always a way through.
import type { Skin } from '@/content/types'

export const SKINS: Record<string, Skin> = {
  sea: {
    slug:          'sea',
    setting:       'the warm shallows',
    hero:          'dolphin',
    companionName: 'Pip the crab',
    objectMotif:   'curious shell-puzzle',
    refrain:       'Every puzzle has a way through, for those who stop to look',
  },
  space: {
    slug:          'space',
    setting:       'the star-lit station',
    hero:          'robot',
    companionName: 'Circuit the space-cat',
    objectMotif:   'blinking star-puzzle',
    refrain:       'A calm mind solves what a rushing one cannot',
  },
  forest: {
    slug:          'forest',
    setting:       'the heart of Whisper Forest',
    hero:          'fox',
    companionName: 'Old Owl',
    objectMotif:   'tangled little knot of vines',
    refrain:       'Every knot comes loose, one patient pull at a time',
  },
  castle: {
    slug:          'castle',
    setting:       'the towers of Cloud Castle',
    hero:          'dragon',
    companionName: 'Mira the cloud-bunny',
    objectMotif:   'small puzzle-lock',
    refrain:       'There is always a key, if you stop to find it',
  },
}
