// app/api/preview/sample/route.ts
// GET /api/preview/sample?skin=sea&voice=af_heart&subject=money
// Returns a signed URL for the pre-rendered Level 1 preview MP3.
// No draft/account needed — powers the landing-page hero sampler + voice switcher.
// Cache-first: hits the same pre-rendered audio the builder preview uses, so cost ≈ $0.

import { NextRequest, NextResponse }      from 'next/server'
import { assembleAudio }                  from '@/content'
import { getOrRenderAudio, audioCacheKey } from '@/lib/tts'
import { getVoicesForLang }               from '@/lib/voices'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const subject = searchParams.get('subject') || 'money'
  const skin    = searchParams.get('skin')    || 'sea'
  const voice   = searchParams.get('voice')   || 'af_heart'

  // Guard: only allow known voice ids so we never spend TTS on arbitrary input.
  const knownVoices = getVoicesForLang('en').map(v => v.id)
  if (!knownVoices.includes(voice)) {
    return NextResponse.json({ error: 'Unknown voice.' }, { status: 400 })
  }

  try {
    // assembleAudio throws on an unknown subject/skin — acts as validation.
    const { audioText } = assembleAudio(subject, 1, skin)
    const cacheKey = audioCacheKey(subject, 1, skin, voice, 'en', true)
    const audioUrl = await getOrRenderAudio(audioText, voice, cacheKey)
    return NextResponse.json({ audioUrl })
  } catch (err) {
    console.error('[preview/sample] error:', err)
    return NextResponse.json({ error: 'Could not load sample.' }, { status: 400 })
  }
}
