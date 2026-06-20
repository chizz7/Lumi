// content/interests.ts
// Deterministic interest -> world mapping (a join, not generation — PRD FR-7).
// The builder asks "what does your child love?"; the answer selects a cosmetic
// world. Every world exists for every subject, so the lesson is unaffected.

export interface Interest {
  slug:  string   // stored on child_profiles.interest_slug
  label: string   // shown in the builder
  emoji: string
  world: string   // resolves to a skin slug (see content/<subject>/skins.ts)
}

export const INTERESTS: Interest[] = [
  { slug: 'ocean',     label: 'Animals & the ocean', emoji: '🐬', world: 'sea' },
  { slug: 'space',     label: 'Space & robots',      emoji: '🚀', world: 'space' },
  { slug: 'woodland',  label: 'Woodland animals',    emoji: '🦊', world: 'forest' },
  { slug: 'magic',     label: 'Dragons & castles',   emoji: '🐉', world: 'castle' },
  { slug: 'dinosaurs', label: 'Dinosaurs',           emoji: '🦕', world: 'dino' },
  { slug: 'jungle',    label: 'Jungle animals',      emoji: '🐯', world: 'jungle' },
]

const BY_SLUG  = Object.fromEntries(INTERESTS.map(i => [i.slug, i]))
const BY_WORLD = Object.fromEntries(INTERESTS.map(i => [i.world, i]))

export function worldForInterest(slug?: string | null): string {
  return (slug && BY_SLUG[slug]?.world) || 'sea'
}

export function interestForWorld(world?: string | null): Interest | undefined {
  return world ? BY_WORLD[world] : undefined
}
