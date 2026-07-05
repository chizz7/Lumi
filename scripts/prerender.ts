#!/usr/bin/env tsx
// scripts/prerender.ts
// Pre-renders the LANDING-PAGE PREVIEW clips (Level 1, per subject × skin ×
// voice) so the sampler plays instantly with zero cold-render latency.
//
// It does NOT pre-render full delivered stories. Delivered audio now speaks the
// child's name, so its cache key includes a per-name segment that can't be known
// ahead of time (audioCacheKey(..., nameTag)). Full stories are therefore
// rendered ON DEMAND at delivery, once we have the child's name, world, voice
// and age — the first delivery for each unique combination renders via Kokoro
// and caches; repeats are instant. (Pre-rendering name-free "full" files was
// dead work: no delivery key ever matched them.)
//
// Usage:
//   npm run prerender                    # all subjects (previews)
//   npm run prerender -- --subject money # one subject
//   npm run prerender -- --dry           # print what would be rendered, no API calls
//
// Safe to re-run — already-cached files are skipped automatically.

import { parseArgs } from 'util'
import { getAllSubjectSlugs, getAllLevels, getAllSkins, assembleAudio, previewText } from '@/content'
import { getOrRenderAudio, audioCacheKey }                             from '@/lib/tts'
import { getVoicesForLang }                                            from '@/lib/voices'
import { adminClient, BUCKETS }                                        from '@/lib/supabase'
import type { AgeBand }                                                from '@/content/types'

const { values: args } = parseArgs({
  options: {
    subject:     { type: 'string' },
    level:       { type: 'string' },
    lang:        { type: 'string', default: 'en' },
    concurrency: { type: 'string', default: '4' },
    dry:         { type: 'boolean', default: false },
  },
})

const LANG        = args.lang ?? 'en'
const CONCURRENCY = parseInt(args.concurrency ?? '4')

// ── Build the work queue ───────────────────────────────────────────────────────

interface RenderJob {
  subjectSlug:  string
  levelOrdinal: number
  levelTitle:   string
  skinSlug:     string
  voiceId:      string
  cacheKey:     string
  audioText:    string
  isPreview:    boolean
}

function buildJobs(): RenderJob[] {
  const subjects = args.subject ? [args.subject] : getAllSubjectSlugs()
  const voices   = getVoicesForLang(LANG)
  const jobs: RenderJob[] = []

  for (const subjectSlug of subjects) {
    const levels = getAllLevels(subjectSlug)
    const skins  = getAllSkins(subjectSlug)

    // Only Level 1 has a landing-page preview clip; skip the rest entirely.
    const level = levels.find(l => l.ordinal === 1)
    if (!level) continue

    for (const skin of skins) {
      for (const voice of voices) {
        // Preview clip for level 1 (the landing-page sampler). Name-free, so it
        // caches cleanly and is shared across all visitors.
        try {
          const { audioText } = assembleAudio(subjectSlug, 1, skin.slug)
          // Preview = first ~400 chars at a word boundary
          const clip = previewText(audioText, 400)
          jobs.push({
            subjectSlug, levelOrdinal: 1, levelTitle: `${level.title} (preview)`,
            skinSlug: skin.slug, voiceId: voice.id,
            cacheKey: audioCacheKey(subjectSlug, 1, skin.slug, voice.id, LANG, true),
            audioText: clip,
            isPreview: true,
          })
        } catch { /* skip */ }
      }
    }
  }

  return jobs
}

// ── Check which jobs are already cached ───────────────────────────────────────

async function filterUncached(jobs: RenderJob[]): Promise<{ job: RenderJob; cached: boolean }[]> {
  // Batch-list the storage bucket once instead of making N head requests
  const { data: objects } = await adminClient.storage.from(BUCKETS.AUDIO).list('', {
    limit: 10000,
    offset: 0,
  })
  const cached = new Set((objects ?? []).map(o => o.name))

  return jobs.map(job => ({ job, cached: cached.has(job.cacheKey) }))
}

// ── Concurrent render pool ─────────────────────────────────────────────────────

async function runWithConcurrency<T>(
  tasks:       (() => Promise<T>)[],
  concurrency: number,
): Promise<T[]> {
  const results: T[] = []
  let idx = 0
  async function worker() {
    while (idx < tasks.length) {
      const i = idx++
      results[i] = await tasks[i]!()
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker))
  return results
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🎙  Lumi Pre-render Script`)
  console.log(`   Language: ${LANG} · Concurrency: ${CONCURRENCY}`)
  if (args.dry) console.log('   DRY RUN — no API calls will be made\n')

  const allJobs = buildJobs()
  console.log(`\n📋 ${allJobs.length} total jobs`)

  const withStatus = await filterUncached(allJobs)
  const toRender   = withStatus.filter(j => !j.cached).map(j => j.job)
  const alreadyOk  = withStatus.filter(j => j.cached).length

  console.log(`   ✓ ${alreadyOk} already cached (skipping)`)
  console.log(`   → ${toRender.length} to render\n`)

  if (toRender.length === 0) {
    console.log('✅ All files already cached — nothing to do.\n')
    return
  }

  if (args.dry) {
    toRender.forEach(j => {
      const type = j.isPreview ? '[preview]' : '[full]  '
      console.log(`  ${type} ${j.subjectSlug} L${j.levelOrdinal} ${j.skinSlug} ${j.voiceId}`)
      console.log(`           → ${j.cacheKey}`)
      console.log(`           ~ ${j.audioText.length} chars`)
    })
    return
  }

  // Estimate cost
  const totalChars = toRender.reduce((n, j) => n + j.audioText.length, 0)
  const costUsd    = (totalChars / 1_000_000 * 0.80).toFixed(3)
  console.log(`💰 Estimated cost: $${costUsd} (${totalChars.toLocaleString()} chars × $0.80/M)\n`)

  let done = 0, failed = 0
  const start = Date.now()

  const tasks = toRender.map(job => async () => {
    const label = `${job.subjectSlug} L${job.levelOrdinal} ${job.skinSlug} ${job.voiceId}${job.isPreview ? ' (preview)' : ''}`
    try {
      await getOrRenderAudio(job.audioText, job.voiceId, job.cacheKey, LANG)
      done++
      const elapsed = ((Date.now() - start) / 1000).toFixed(0)
      console.log(`  ✓ [${done}/${toRender.length}] ${label}  (${elapsed}s elapsed)`)
    } catch (err) {
      failed++
      console.error(`  ✗ [FAILED] ${label}: ${(err as Error).message}`)
    }
  })

  await runWithConcurrency(tasks, CONCURRENCY)

  const totalSec = ((Date.now() - start) / 1000).toFixed(1)
  console.log(`\n${ failed === 0 ? '✅' : '⚠' } Done in ${totalSec}s — ${done} rendered, ${failed} failed`)
  if (failed > 0) console.log('   Re-run to retry failed files.')
}

main()
  .catch(e => { console.error('Pre-render failed:', e); process.exit(1) })
