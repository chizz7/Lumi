#!/usr/bin/env tsx
// scripts/author/draft-level.ts
// Drafts a story using Claude, then prints it so the human can review
// and paste it into content/money/levels.ts.
//
// Usage:
//   npm run author:draft -- --subject money --level 3 --skin sea
//   npm run author:draft -- --subject money --level 3 --skin sea --write
//
// --write  also writes the draft directly into levels.ts (still needs human review)

import { parseArgs } from 'util'
import Anthropic     from '@anthropic-ai/sdk'
import { readFileSync, writeFileSync } from 'fs'
import { join }      from 'path'

const { values: args } = parseArgs({
  options: {
    subject: { type: 'string', default: 'money' },
    level:   { type: 'string' },
    skin:    { type: 'string', default: 'sea' },
    write:   { type: 'boolean', default: false },
  },
})

if (!args.level) {
  console.error('Usage: npm run author:draft -- --level <1-5> [--skin sea] [--write]')
  process.exit(1)
}

const levelOrdinal = parseInt(args.level)

// ── Load context from the content files ───────────────────────────────────────
// We import the TS directly so the script always uses current content
const { LEVELS } = await import(`../../content/${args.subject}/levels.js`).catch(async () => {
  // tsx can run .ts directly
  return await import(`../../content/${args.subject}/levels.ts`)
})
const { SKINS } = await import(`../../content/${args.subject}/skins.js`).catch(async () => {
  return await import(`../../content/${args.subject}/skins.ts`)
})

const targetLevel = LEVELS.find((l: { ordinal: number }) => l.ordinal === levelOrdinal)
if (!targetLevel) {
  console.error(`Level ${levelOrdinal} not found in ${args.subject}`)
  process.exit(1)
}

const skin = SKINS[args.skin as string]
if (!skin) {
  console.error(`Skin "${args.skin}" not found`)
  process.exit(1)
}

const prevLevel  = LEVELS.find((l: { ordinal: number }) => l.ordinal === levelOrdinal - 1) ?? null
const allLevels  = LEVELS.map((l: { ordinal: number; title: string; concept: string }) =>
  `  Level ${l.ordinal}: ${l.title} — teaches "${l.concept}"`
).join('\n')

// ── Build the prompt ──────────────────────────────────────────────────────────
const prompt = `You are a specialist children's bedtime story writer. Write a single complete story for ages ${targetLevel.ageFloor}+.

## The story you're writing
Level ${levelOrdinal} of the "${args.subject}" path: "${targetLevel.title}"
New concept to teach: "${targetLevel.concept}"
${targetLevel.callback ? `Must call back to: "${targetLevel.callback}"` : 'This is Level 1 — no callbacks needed.'}

## Full path context (for consistency)
${allLevels}

## Story world (use these slot markers exactly — {slot_name})
- {child_name} — the child's name (use it naturally throughout)
- {hero}       → ${skin.hero}
- {setting}    → ${skin.setting}
- {companion_name} → ${skin.companionName} (the wise recurring companion)
- {object_motif}   → ${skin.objectMotif}
- {refrain}        → "${skin.refrain}" (use this as the final line, alone)

${prevLevel ? `## Previous story template (for tone + style reference)\n${prevLevel.template.slice(0, 400)}…\n` : ''}

## Hard rules — the "calm adventure" spine (see docs/08_STORY_CRAFT.md)
1. 5-beat structure: HOOK (the hero WANTS something concrete tonight + one small oddity)
   → TRY (the hero attempts the obvious way and fails, gently and a little comically,
   BECAUSE they don't yet have the concept) → TURN (a soft twist reframes the problem;
   the concept is the KEY that unlocks it — the insight is spoken by {child_name}, not
   lectured by the companion) → WIN ({child_name} applies the concept themselves and
   succeeds) → SETTLE (final ~20%: pure wind-down, shortening sentences, one warm
   "ember" of tomorrow — an unanswered cozy detail, never a cliffhanger).
2. {companion_name} is an accomplice, not a professor: at most ONE nudge; the hero
   does the discovering. The twist may touch the companion's own past.
3. Excitement comes from curiosity, mystery, mischief and agency — NEVER fear, peril,
   menace or time-pressure. Twists reframe things upward (kinder/cleverer than they
   seemed). The middle rises; the ending glides.
4. Audio hooks: use "{refrain}" once mid-story in dialogue AND as the final line;
   include one whispered aside to the listener with a guessable clue ("Can you see it
   too?..."); include one small sound word (clink, click, pfft).
5. The twist lands at 55–70% of the story. Nothing new happens in the last 20%.
6. Length: 250–380 words. Short sentences; nothing over 25 words.
7. End with "{refrain}." alone on its own line — the closing ritual.
8. Do NOT include a title — just the story text.
9. Use all six slot markers at least once each.
10. The learning-beat phrase for this level must appear VERBATIM, spoken by the hero
    at the TURN.

Write only the story text. Start with the first sentence of the story.`

// ── Call Claude ───────────────────────────────────────────────────────────────
console.log(`\nDrafting Level ${levelOrdinal} ("${targetLevel.title}") for skin "${args.skin}"…\n`)

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const msg    = await client.messages.create({
  model:      'claude-sonnet-4-20250514',
  max_tokens: 1200,
  system:     'You are a specialist children\'s bedtime story writer. Follow the brief exactly. Output only the story — no titles, no commentary, no markdown.',
  messages:   [{ role: 'user', content: prompt }],
})

const draft = msg.content
  .filter(b => b.type === 'text')
  .map(b => b.text)
  .join('')
  .trim()

// ── Print the draft ───────────────────────────────────────────────────────────
console.log('─'.repeat(60))
console.log(draft)
console.log('─'.repeat(60))
console.log(`\nWord count: ~${draft.split(/\s+/).length}`)

// Check all slots are present
const REQUIRED_SLOTS = ['{child_name}','{hero}','{setting}','{companion_name}','{object_motif}','{refrain}']
const missing = REQUIRED_SLOTS.filter(s => !draft.includes(s))
if (missing.length) {
  console.warn(`\n⚠ Missing slots: ${missing.join(', ')} — review before using.`)
} else {
  console.log('✓ All required slots present')
}

// ── Optional: write back to levels.ts ────────────────────────────────────────
if (args.write) {
  const levelsPath  = join(process.cwd(), `content/${args.subject}/levels.ts`)
  let   levelsFile  = readFileSync(levelsPath, 'utf-8')
  const escaped     = draft.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')

  // Replace the template field for this level
  // Looks for:  ordinal: N,   ...   template: `...`
  const regex = new RegExp(
    `(ordinal:\\s*${levelOrdinal},[\\s\\S]*?template:\\s*\`)([\\s\\S]*?)(\`,)`,
    'm'
  )
  if (regex.test(levelsFile)) {
    levelsFile = levelsFile.replace(regex, `$1${escaped}$3`)
    writeFileSync(levelsPath, levelsFile, 'utf-8')
    console.log(`\n✓ Written to content/${args.subject}/levels.ts`)
    console.log('  Review the diff, then commit.')
  } else {
    console.warn('\n⚠ Could not find level template in levels.ts — copy the draft above manually.')
  }
}

console.log('\nNext: review the draft above, then update content/money/levels.ts if you\'re happy with it.')
