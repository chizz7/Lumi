// app/api/preview/route.ts
// GET /api/preview — builds a preview from the draft cookie.
// Returns the first ~350 chars of the script + a signed audio URL.

import { NextRequest, NextResponse }            from 'next/server'
import { getDraft }                              from '@/lib/draft'
import { assembleAudio, assembleScript, previewText } from '@/content'
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
  let audioText: string, level: import('@/content/types').Level, skin: import('@/content/types').Skin, ageTag: string
  try {
    ;({ audioText, level, skin, ageTag } = assembleAudio(draft.subjectSlug, 1, draft.skinSlug, ageBand))
  } catch (err) {
    console.error('[preview] assemble error:', err)
    return NextResponse.json({ error: 'Could not build your story. Please try again.' }, { status: 500 })
  }

  const script  = assembleScript(draft.subjectSlug, 1, draft.skinSlug, draft.childName, ageBand)
  const excerpt = previewText(script)

  // Preview audio from the cacheable audioText (not the script)
  let audioUrl: string | null = null
  try {
    const cacheKey = audioCacheKey(draft.subjectSlug, 1, draft.skinSlug, draft.voiceId, 'en', true, ageTag)
    audioUrl = await getOrRenderAudio(audioText, draft.voiceId, cacheKey)
  } catch (err) {
    console.error('[preview] audio error (non-fatal):', err)
  }

  return NextResponse.json({
    script:     excerpt,
    audioUrl,
    levelTitle: level.title,
    concept:    level.concept,
    skinSlug:   skin.slug,
    childName:  draft.childName,
  })
}
