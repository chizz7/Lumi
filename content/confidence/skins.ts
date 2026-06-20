// content/confidence/skins.ts
// Same four worlds, with an "inner light you already carry" motif and a quiet
// confidence refrain — courage is trusting your own small, steady spark.
import type { Skin } from '@/content/types'

export const SKINS: Record<string, Skin> = {
  sea: {
    slug:          'sea',
    setting:       'the warm shallows',
    hero:          'dolphin',
    companionName: 'Pip the crab',
    objectMotif:   'quiet inner-pearl',
    refrain:       'The light you carry is yours, and it is enough',
  },
  space: {
    slug:          'space',
    setting:       'the star-lit station',
    hero:          'robot',
    companionName: 'Circuit the space-cat',
    objectMotif:   'small inner-star',
    refrain:       'You do not borrow your shine — you already have it',
  },
  forest: {
    slug:          'forest',
    setting:       'the heart of Whisper Forest',
    hero:          'fox',
    companionName: 'Old Owl',
    objectMotif:   'small steady spark',
    refrain:       'A small spark, trusted, can light the whole way',
  },
  castle: {
    slug:          'castle',
    setting:       'the towers of Cloud Castle',
    hero:          'dragon',
    companionName: 'Mira the cloud-bunny',
    objectMotif:   'little inner-flame',
    refrain:       'Brave is not loud; brave is simply trying',
  },
  dino: {
    slug:          'dino',
    setting:       'the green fern valley',
    hero:          'dinosaur',
    companionName: 'Rex the little raptor',
    objectMotif:   'small inner-ember',
    refrain:       'Even the smallest dinosaur has a mighty heart inside',
  },
  jungle: {
    slug:          'jungle',
    setting:       'the deep green jungle',
    hero:          'tiger cub',
    companionName: 'Echo the parrot',
    objectMotif:   'bright inner-spark',
    refrain:       'The quietest cub still has the bravest heart',
  },
}
