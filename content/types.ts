// content/types.ts

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
