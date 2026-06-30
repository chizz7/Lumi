// content/voice/skins.ts
// "Speaking Up" path (slug: voice) — assertiveness, boundaries, self-advocacy,
// standing up for yourself and others. Worlds keep the SAME setting/hero/
// companion as every other path (a child's chosen world is consistent); only
// the object motif + refrain are themed to "your voice matters".
import type { Skin } from '@/content/types'

export const SKINS: Record<string, Skin> = {
  sea: {
    slug:          'sea',
    setting:       'the warm shallows',
    hero:          'dolphin',
    companionName: 'Pip the crab',
    objectMotif:   'true-toned song-shell',
    refrain:       'Even under deep water, a true voice still carries',
  },
  space: {
    slug:          'space',
    setting:       'the star-lit station',
    hero:          'robot',
    companionName: 'Circuit the space-cat',
    objectMotif:   'clear signal-chime',
    refrain:       'A clear voice travels further than the loudest noise',
  },
  forest: {
    slug:          'forest',
    setting:       'the heart of Whisper Forest',
    hero:          'fox',
    companionName: 'Old Owl',
    objectMotif:   'ringing echo-acorn',
    refrain:       'The whole forest leans in when a true voice speaks',
  },
  castle: {
    slug:          'castle',
    setting:       'the towers of Cloud Castle',
    hero:          'dragon',
    companionName: 'Mira the cloud-bunny',
    objectMotif:   'true bell-note',
    refrain:       'A voice spoken with care rings through every tower',
  },
  dino: {
    slug:          'dino',
    setting:       'the green fern valley',
    hero:          'dinosaur',
    companionName: 'Rex the little raptor',
    objectMotif:   'bright call-stone',
    refrain:       'Even the gentlest dinosaur has a call worth hearing',
  },
  jungle: {
    slug:          'jungle',
    setting:       'the deep green jungle',
    hero:          'tiger cub',
    companionName: 'Echo the parrot',
    objectMotif:   'clear calling-note',
    refrain:       'In the loud jungle, a true voice still finds its way',
  },
}
