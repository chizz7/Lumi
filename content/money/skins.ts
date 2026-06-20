// content/money/skins.ts
import type { Skin } from '@/content/types'

export const SKINS: Record<string, Skin> = {
  sea: {
    slug:          'sea',
    setting:       'the warm shallows',
    hero:          'dolphin',
    companionName: 'Pip the crab',
    objectMotif:   'shiny sea-coin',
    refrain:       'The tide remembers every kindness',
  },
  space: {
    slug:          'space',
    setting:       'the star-lit station',
    hero:          'robot',
    companionName: 'Circuit the space-cat',
    objectMotif:   'glowing star-crystal',
    refrain:       'Every star remembers where it started',
  },
  forest: {
    slug:          'forest',
    setting:       'the heart of Whisper Forest',
    hero:          'fox',
    companionName: 'Old Owl',
    objectMotif:   'golden acorn',
    refrain:       'The forest holds on to every good thing',
  },
  castle: {
    slug:          'castle',
    setting:       'the towers of Cloud Castle',
    hero:          'dragon',
    companionName: 'Mira the cloud-bunny',
    objectMotif:   'sparkling sky-gem',
    refrain:       'The clouds remember every brave choice',
  },
  dino: {
    slug:          'dino',
    setting:       'the green fern valley',
    hero:          'dinosaur',
    companionName: 'Rex the little raptor',
    objectMotif:   'shiny amber-coin',
    refrain:       'The valley keeps what is worth keeping',
  },
  jungle: {
    slug:          'jungle',
    setting:       'the deep green jungle',
    hero:          'tiger cub',
    companionName: 'Echo the parrot',
    objectMotif:   'golden jungle-coin',
    refrain:       'The jungle rewards the one who saves for the dry season',
  },
}
