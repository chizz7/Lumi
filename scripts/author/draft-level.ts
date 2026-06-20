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

## Hard rules
1. 5-beat structure: cozy opening → discovery/problem → attempt or turn → teaching moment → calm wind-down
2. The teaching moment must come from {companion_name}, spoken gently to {child_name}
3. Bedtime register throughout: calm, warm, wonder-filled. Energy decreases beat by beat.
4. No fear, no peril, no cliffhangers. Every story winds down to calm.
5. Length: 250–380 words
6. Short sentences. Nothing over 25 words.
7. End with "{refrain}." alone on its own line — this is the closing ritual
8. Do NOT include a title — just the story text
9. Use all six slot markers at least once each

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
