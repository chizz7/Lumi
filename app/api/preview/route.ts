// app/api/preview/route.ts
// GET /api/preview — builds a preview from the draft cookie.
// Returns the first ~350 chars of the script + a signed audio URL.

import { NextRequest, NextResponse }            from 'next/server'
import { getDraft }                              from '@/lib/draft'
import { assembleStory, previewText }            from '@/content'
import { getOrRenderAudio, audioCacheKey }       from '@/lib/tts'

export async function GET(req: NextRequest) {
  const draft = await getDraft(req)
  if (!draft) {
    return NextResponse.json(
      { error: 'No draft found — please use the story builder first.' },
      { status: 400 }
    )
  }

  // Always preview Level 1 for anonymous visitors
  const ageBand = draft.ageBand as import('@/content/types').AgeBand
  let audioText: string, script: string, level: import('@/content/types').Level, skin: import('@/content/types').Skin, ageTag: string
  try {
    ;({ audioText, script, level, skin, ageTag } = assembleStory(draft.subjectSlug, 1, draft.skinSlug, draft.childName, ageBand))
  } catch (err) {
    console.error('[preview] assemble error:', err)
    return NextResponse.json({ error: 'Could not build your story. Please try again.' }, { status: 500 })
  }
  const excerpt = previewText(script)

  // Preview audio from the cacheable audioText (not the script). The script is
  // the moment-of-value, so we NEVER let a slow/cold TTS render block (or worse,
  // time the function out and hard-fail) the whole preview. Race the render
  // against a budget well under the function's maxDuration: if audio wins, great;
  // if it's slow, return the script now with a graceful retry state. The render
  // keeps going and caches, so the retry is an instant cache hit.
  const AUDIO_BUDGET_MS = 40_000
  let audioUrl:   string | null = null
  let audioError: string | null = null
  try {
    const cacheKey = audioCacheKey(draft.subjectSlug, 1, draft.skinSlug, draft.voiceId, 'en', true, ageTag, draft.childName)
    audioUrl = await Promise.race([
      getOrRenderAudio(audioText, draft.voiceId, cacheKey),
      new Promise<string>((_, reject) =>
        setTimeout(() => reject(new Error('audio render exceeded budget')), AUDIO_BUDGET_MS)),
    ])
  } catch (err) {
    // Non-fatal: the script still renders. Surface a friendly reason so the UI
    // shows a Retry button instead of a dead native player. Detailed error
    // (TTS status, timeout) stays in the server logs only.
    console.error('[preview] audio error (non-fatal):', err)
    audioError = 'The narration is taking a moment — tap retry, or we’ll email it.'
  }

  return NextResponse.json({
    script:     excerpt,
    audioUrl,
    audioError,
    levelTitle: level.title,
    concept:    level.concept,
    skinSlug:   skin.slug,
    childName:  draft.childName,
  })
}
