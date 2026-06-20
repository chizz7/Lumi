// content/kindness/skins.ts
// Same four worlds, with a "warm light that brightens when shared" motif and a
// kindness refrain — empathy grows the more it is practised.
import type { Skin } from '@/content/types'

export const SKINS: Record<string, Skin> = {
  sea: {
    slug:          'sea',
    setting:       'the warm shallows',
    hero:          'dolphin',
    companionName: 'Pip the crab',
    objectMotif:   'warm pearl-light',
    refrain:       'Warmth shared in the water reaches every shore',
  },
  space: {
    slug:          'space',
    setting:       'the star-lit station',
    hero:          'robot',
    companionName: 'Circuit the space-cat',
    objectMotif:   'warm little starlight',
    refrain:       'A warm light grows brighter the more it is shared',
  },
  forest: {
    slug:          'forest',
    setting:       'the heart of Whisper Forest',
    hero:          'fox',
    companionName: 'Old Owl',
    objectMotif:   'warm firefly-light',
    refrain:       'Kindness, like light, is never used up by giving',
  },
  castle: {
    slug:          'castle',
    setting:       'the towers of Cloud Castle',
    hero:          'dragon',
    companionName: 'Mira the cloud-bunny',
    objectMotif:   'warm hearth-light',
    refrain:       'A warm heart keeps the whole castle warm',
  },
  dino: {
    slug:          'dino',
    setting:       'the green fern valley',
    hero:          'dinosaur',
    companionName: 'Rex the little raptor',
    objectMotif:   'warm amber-light',
    refrain:       'Warmth shared in the valley reaches every nest',
  },
  jungle: {
    slug:          'jungle',
    setting:       'the deep green jungle',
    hero:          'tiger cub',
    companionName: 'Echo the parrot',
    objectMotif:   'warm canopy-light',
    refrain:       'A kind call travels the whole canopy',
  },
}
