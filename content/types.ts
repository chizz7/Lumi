// content/types.ts

export type AgeBand = '3-4' | '5-6' | '7-8'

export interface Level {
  ordinal:   number
  title:     string
  concept:   string        // short label: "Coin identification"
  callback:  string | null // prior concept revisited, or null for L1

  // For parents — shown on landing page + in app before requesting
  summary:      string     // 2-3 sentences: what this story is about + what it teaches
  teachingNote: string     // 1 sentence: the specific insight a child takes away

  ageFloor:  number
  audioTemplate:   string
  scriptTemplate?: string

  // The immutable learning beat — a slot-free phrase that MUST appear verbatim in
  // every assembled variant (any skin, any age). The assembler asserts this, which
  // enforces "fixed curriculum, cosmetic personalization" in code (PRD FR-9).
  learningBeat?: string

  // Optional age-tuned overrides. If a band is absent, the default templates are
  // used. A variant must still contain `learningBeat` — the guard checks it.
  ageVariants?: Partial<Record<AgeBand, { audioTemplate: string; scriptTemplate?: string }>>
}

export interface Skin {
  slug:          string
  setting:       string
  hero:          string
  companionName: string
  objectMotif:   string
  refrain:       string
}

export type AudioSlotValues = {
  hero: string; setting: string
  companion_name: string; object_motif: string; refrain: string
}

export type ScriptSlotValues = AudioSlotValues & { child_name: string }
