// content/index.ts
// All content access goes through here.
// Adding a subject: add its levels.ts + skins.ts, import below.

import { LEVELS as MONEY_LEVELS } from '@/content/money/levels'
import { SKINS  as MONEY_SKINS }  from '@/content/money/skins'
import { LEVELS as FOCUS_LEVELS } from '@/content/focus/levels'
import { SKINS  as FOCUS_SKINS }  from '@/content/focus/skins'
import type { Level, Skin, AudioSlotValues, ScriptSlotValues } from '@/content/types'

// ── Subject registry ──────────────────────────────────────────────────────────
const SUBJECT_LEVELS: Record<string, Level[]> = { money: MONEY_LEVELS, focus: FOCUS_LEVELS }
const SUBJECT_SKINS:  Record<string, Record<string, Skin>> = { money: MONEY_SKINS, focus: FOCUS_SKINS }

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

// ── Public assembly functions ─────────────────────────────────────────────────

/**
 * Assemble the AUDIO text for a story.
 * Uses audioTemplate — no child name — fully cacheable.
 * This is what gets sent to Kokoro.
 */
export function assembleAudio(
  subjectSlug:  string,
  levelOrdinal: number,
  skinSlug:     string,
): { audioText: string; level: Level; skin: Skin } {
  const level = getLevel(subjectSlug, levelOrdinal)
  const skin  = getSkin(subjectSlug, skinSlug)
  const audioText = fillTemplate(level.audioTemplate, audioSlots(skin))
  return { audioText, level, skin }
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
): string {
  const level   = getLevel(subjectSlug, levelOrdinal)
  const skin    = getSkin(subjectSlug, skinSlug)
  const template = level.scriptTemplate ?? level.audioTemplate
  const slots: ScriptSlotValues = { ...audioSlots(skin), child_name: childName.trim() }
  return fillTemplate(template, slots)
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
): { audioText: string; script: string; level: Level; skin: Skin } {
  const { audioText, level, skin } = assembleAudio(subjectSlug, levelOrdinal, skinSlug)
  const script = assembleScript(subjectSlug, levelOrdinal, skinSlug, childName)
  return { audioText, script, level, skin }
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
