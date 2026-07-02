// content/meta.ts
// Shared UI metadata registry — the single source of truth for subject/world/age
// display copy used across the landing page, app screens, curriculum page and
// admin console. Pure constants only: no imports, no runtime content logic.

export interface SubjectMeta {
  slug:      string
  emoji:     string
  name:      string
  shortDesc: string
  why:       string
}

export interface WorldMeta {
  slug:  string
  emoji: string
  name:  string
  loves: string
  desc:  string
}

// All 7 learning paths. Order matters: it drives the landing-page path tabs,
// the Story Studio skill grid, the builder step-3 list and the curriculum page.
export const SUBJECT_META: SubjectMeta[] = [
  {
    slug: 'kindness', emoji: '❤️', name: 'Kindness & Empathy',
    shortDesc: 'Noticing, caring, sharing',
    why: 'Empathy is a skill, not a trait — built through repeated, low-stakes practice. Bedtime stories are one of the best contexts for it.',
  },
  {
    slug: 'confidence', emoji: '🌱', name: 'Confidence',
    shortDesc: 'Trying before you feel ready',
    why: "Confidence is the quiet belief that you're capable of trying. Level 1 normalises incompleteness — removing the shame that stops children from attempting hard things.",
  },
  {
    slug: 'resilience', emoji: '💪', name: 'Resilience',
    shortDesc: 'Growth mindset, bouncing back',
    why: 'Children who understand that effort changes ability outperform those who believe in fixed talent. Level 1 normalises struggle; without that, Level 4 lands empty.',
  },
  {
    slug: 'focus', emoji: '🎯', name: 'Focus & Goals',
    shortDesc: 'Attention, planning, finishing',
    why: 'Executive function — the ability to plan, focus, and follow through — is a stronger predictor of outcomes than IQ. The window to build it is early childhood.',
  },
  {
    slug: 'problem', emoji: '🧠', name: 'Problem Solving',
    shortDesc: 'Pause, ideas, try and see',
    why: 'Problem solving is a disposition, not a subject. These stories build the habit of pausing before reacting and trying systematically.',
  },
  {
    slug: 'money', emoji: '💰', name: 'Money & Saving',
    shortDesc: 'Coins, value, saving for goals',
    why: 'Children who understand value, exchange, and saving before age 8 develop habits that compound for life. This path starts with the simplest question — why do coins look different? — and builds to the hardest: wants vs. needs.',
  },
  {
    slug: 'voice', emoji: '🗣️', name: 'Speaking Up',
    shortDesc: 'Find your voice, set boundaries',
    why: 'Self-advocacy is a learnable skill: knowing your voice matters, asking clearly, setting boundaries, and being assertive without being unkind. This path builds from finding the courage to speak to using that voice for others.',
  },
]

// Worlds the child can be the hero of. `loves` frames the choice as an interest
// ("what does your child love?"); each maps to a cosmetic world that exists for
// every subject.
export const WORLD_META: WorldMeta[] = [
  { slug: 'sea',    emoji: '🐬', name: 'Under the Sea',  loves: 'animals & the ocean', desc: 'a dolphin & Pip the crab' },
  { slug: 'space',  emoji: '🚀', name: 'Space Station',  loves: 'space & robots',      desc: 'a robot & Circuit the cat' },
  { slug: 'forest', emoji: '🦊', name: 'Whisper Forest', loves: 'woodland animals',    desc: 'a fox & Old Owl' },
  { slug: 'castle', emoji: '🐉', name: 'Cloud Castle',   loves: 'dragons & castles',   desc: 'a dragon & Mira the bunny' },
  { slug: 'dino',   emoji: '🦕', name: 'Fern Valley',    loves: 'dinosaurs',           desc: 'a dino & Rex the raptor' },
  { slug: 'jungle', emoji: '🐯', name: 'Deep Jungle',    loves: 'jungle animals',      desc: 'a tiger cub & Echo the parrot' },
]

// value = canonical hyphen form stored in the DB; label = prettier en-dash for display
export const AGE_BANDS = [
  { value: '3-4', label: '3–4' },
  { value: '5-6', label: '5–6' },
  { value: '7-8', label: '7–8' },
  { value: '9-11', label: '9–11' },
]
