// content/index.ts
// All content access goes through here.
// Adding a subject: add its levels.ts + skins.ts, import below.

import { LEVELS as MONEY_LEVELS } from '@/content/money/levels'
import { SKINS  as MONEY_SKINS }  from '@/content/money/skins'
import { LEVELS as FOCUS_LEVELS } from '@/content/focus/levels'
import { SKINS  as FOCUS_SKINS }  from '@/content/focus/skins'
import { LEVELS as RESILIENCE_LEVELS } from '@/content/resilience/levels'
import { SKINS  as RESILIENCE_SKINS }  from '@/content/resilience/skins'
import { LEVELS as KINDNESS_LEVELS } from '@/content/kindness/levels'
import { SKINS  as KINDNESS_SKINS }  from '@/content/kindness/skins'
import { LEVELS as PROBLEM_LEVELS } from '@/content/problem/levels'
import { SKINS  as PROBLEM_SKINS }  from '@/content/problem/skins'
import { LEVELS as CONFIDENCE_LEVELS } from '@/content/confidence/levels'
import { SKINS  as CONFIDENCE_SKINS }  from '@/content/confidence/skins'
import { LEVELS as VOICE_LEVELS } from '@/content/voice/levels'
import { SKINS  as VOICE_SKINS }  from '@/content/voice/skins'
import type { Level, Skin, AudioSlotValues, ScriptSlotValues, AgeBand } from '@/content/types'

// ── Subject registry ──────────────────────────────────────────────────────────
const SUBJECT_LEVELS: Record<string, Level[]> = {
  money: MONEY_LEVELS, focus: FOCUS_LEVELS, resilience: RESILIENCE_LEVELS,
  kindness: KINDNESS_LEVELS, problem: PROBLEM_LEVELS, confidence: CONFIDENCE_LEVELS,
  voice: VOICE_LEVELS,
}
const SUBJECT_SKINS:  Record<string, Record<string, Skin>> = {
  money: MONEY_SKINS, focus: FOCUS_SKINS, resilience: RESILIENCE_SKINS,
  kindness: KINDNESS_SKINS, problem: PROBLEM_SKINS, confidence: CONFIDENCE_SKINS,
  voice: VOICE_SKINS,
}

// ── Accessors ─────────────────────────────────────────────────────────────────

export function getLevel(subjectSlug: string, ordinal: number): Level {
  const level = (SUBJECT_LEVELS[subjectSlug] ?? []).find(l => l.ordinal === ordinal)
  if (!level) throw new Error(`Level ${ordinal} not found in ${subjectSlug}`)
  return level
}

export function getSkin(subjectSlug: string, skinSlug: string): Skin {
  const skin = (SUBJECT_SKINS[subjectSlug] ?? {})[skinSlug]
  if (!skin) throw new Error(`Skin "${skinSlug}" not found in ${subjectSlug}`)
  return skin
}

export function getAllSkins(subjectSlug: string): Skin[] {
  return Object.values(SUBJECT_SKINS[subjectSlug] ?? {})
}

export function getAllLevels(subjectSlug: string): Level[] {
  return SUBJECT_LEVELS[subjectSlug] ?? []
}

export function getLevelCount(subjectSlug: string): number {
  return getAllLevels(subjectSlug).length
}

export function getAllSubjectSlugs(): string[] {
  return Object.keys(SUBJECT_LEVELS)
}

// ── Template filling ──────────────────────────────────────────────────────────

function fillTemplate(template: string, slots: Record<string, string>): string {
  return template.replace(/\{([a-z_]+)\}/g, (_, key) => {
    if (!(key in slots)) throw new Error(`Missing slot value: {${key}}`)
    return slots[key]!
  })
}

// Build slot values from a skin (no child name — for audio)
function audioSlots(skin: Skin): AudioSlotValues {
  return {
    hero:           skin.hero,
    setting:        skin.setting,
    companion_name: skin.companionName,
    object_motif:   skin.objectMotif,
    refrain:        skin.refrain,
  }
}

// Resolve which templates to use for an age band. Returns an `ageTag` for cache
// keying: the band when an age variant exists, else 'all' (so bands that share the
// default audio also share one cached MP3 — no needless cache fragmentation).
function resolveTemplates(level: Level, ageBand?: AgeBand): {
  audioTemplate: string; scriptTemplate?: string; ageTag: string
} {
  const v = ageBand ? level.ageVariants?.[ageBand] : undefined
  if (v) return { audioTemplate: v.audioTemplate, scriptTemplate: v.scriptTemplate ?? level.scriptTemplate, ageTag: ageBand! }
  return { audioTemplate: level.audioTemplate, scriptTemplate: level.scriptTemplate, ageTag: 'all' }
}

// FR-9 immutability guard: assembled text must contain no unfilled slot and must
// preserve the level's learning beat verbatim. A violation means personalization
// altered the lesson — that must fail loudly, never ship.
function assertImmutable(level: Level, text: string, where: string): void {
  const leftover = text.match(/\{[a-z_]+\}/)
  if (leftover) throw new Error(`[assemble] unfilled slot ${leftover[0]} in ${where} (level ${level.ordinal})`)
  if (level.learningBeat && !text.includes(level.learningBeat)) {
    throw new Error(`[assemble] learning beat missing in ${where} (level ${level.ordinal}) — personalization must not change the lesson`)
  }
}

// ── Public assembly functions ─────────────────────────────────────────────────

/**
 * Assemble the AUDIO text for a story.
 *
 * Without a `childName`, uses the hero-based audioTemplate — no name, fully
 * cacheable by (level × skin × voice) — for generic voice samples.
 *
 * With a `childName`, narrates the child's name using the same prose as the
 * readable script (scriptTemplate already carries {child_name}). This is what
 * makes the delivered story say "Nola" instead of "the tiger cub". Such renders
 * are cached per name (the name is part of the cache key).
 *
 * An optional age band selects an age-tuned variant when one exists; `ageTag`
 * feeds the cache key. This is what gets sent to Kokoro.
 */
export function assembleAudio(
  subjectSlug:  string,
  levelOrdinal: number,
  skinSlug:     string,
  ageBand?:     AgeBand,
  childName?:   string,
): { audioText: string; level: Level; skin: Skin; ageTag: string } {
  const level = getLevel(subjectSlug, levelOrdinal)
  const skin  = getSkin(subjectSlug, skinSlug)
  const { audioTemplate, scriptTemplate, ageTag } = resolveTemplates(level, ageBand)
  const name = childName?.trim()
  const template = name ? (scriptTemplate ?? audioTemplate) : audioTemplate
  const slots: Record<string, string> = name
    ? { ...audioSlots(skin), child_name: name }
    : audioSlots(skin)
  const audioText = fillTemplate(template, slots)
  assertImmutable(level, audioText, 'audio')
  return { audioText, level, skin, ageTag }
}

/**
 * Assemble the SCRIPT text (shown to parents, in email).
 * Uses scriptTemplate if present, falls back to audioTemplate.
 * Includes the child's name.
 */
export function assembleScript(
  subjectSlug:  string,
  levelOrdinal: number,
  skinSlug:     string,
  childName:    string,
  ageBand?:     AgeBand,
): string {
  const level   = getLevel(subjectSlug, levelOrdinal)
  const skin    = getSkin(subjectSlug, skinSlug)
  const { audioTemplate, scriptTemplate } = resolveTemplates(level, ageBand)
  const template = scriptTemplate ?? audioTemplate
  const slots: ScriptSlotValues = { ...audioSlots(skin), child_name: childName.trim() }
  const text = fillTemplate(template, slots)
  assertImmutable(level, text, 'script')
  return text
}

/**
 * Convenience: assemble both audio + script in one call.
 * Used in the webhook and story/next route.
 */
export function assembleStory(
  subjectSlug:  string,
  levelOrdinal: number,
  skinSlug:     string,
  childName:    string,
  ageBand?:     AgeBand,
): { audioText: string; script: string; level: Level; skin: Skin; ageTag: string } {
  const { audioText, level, skin, ageTag } = assembleAudio(subjectSlug, levelOrdinal, skinSlug, ageBand, childName)
  const script = assembleScript(subjectSlug, levelOrdinal, skinSlug, childName, ageBand)
  return { audioText, script, level, skin, ageTag }
}

/**
 * Preview text shown before payment.
 * Clips the script at a word boundary so parents can read the opening.
 */
export function previewText(script: string, chars = 350): string {
  if (script.length <= chars) return script
  const clipped   = script.slice(0, chars)
  const lastSpace = clipped.lastIndexOf(' ')
  return (lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped) + '…'
}
