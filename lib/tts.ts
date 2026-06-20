// lib/tts.ts
// Render text to MP3 via Kokoro-82M on DeepInfra.
// Cache: check Supabase Storage before calling the API.
// Cache key: {prefix}-{subjectSlug}-level{ordinal}-{skinSlug}-{voiceId}-{lang}.mp3

import { adminClient, BUCKETS } from '@/lib/supabase'

const DEEPINFRA_URL = 'https://api.deepinfra.com/v1/inference/hexgrad/Kokoro-82M'

// Re-export for convenience — importers only need lib/tts
export type { VoiceConfig } from '@/lib/voices'
export type VoiceId = string  // Kokoro voice IDs vary by language

export { VOICES_BY_LANG, getVoicesForLang, defaultVoiceForLang } from '@/lib/voices'

// Returns a short-lived signed URL to the audio file.
export async function getOrRenderAudio(
  text:     string,
  voiceId:  string,
  cacheKey: string,
  lang = 'en',
): Promise<string> {
  // ── Cache hit ──────────────────────────────────────────────────────────────
  const { data: existing } = await adminClient.storage
    .from(BUCKETS.AUDIO)
    .createSignedUrl(cacheKey, 60 * 60 * 4)  // 4h TTL

  if (existing?.signedUrl) return existing.signedUrl

  // ── Cache miss: render via Kokoro ─────────────────────────────────────────
  const res = await fetch(DEEPINFRA_URL, {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${process.env.DEEPINFRA_API_KEY}`,
    },
    body: JSON.stringify({
      text,
      voice:         voiceId,
      speed:         0.95,
      output_format: 'mp3',
      // Kokoro uses the voice ID to infer language; pass lang as hint
      language:      lang,
    }),
  })

  if (!res.ok) throw new Error(`Kokoro API error ${res.status}: ${await res.text()}`)

  const buffer = Buffer.from(await res.arrayBuffer())

  // ── Store ──────────────────────────────────────────────────────────────────
  const { error } = await adminClient.storage
    .from(BUCKETS.AUDIO)
    .upload(cacheKey, buffer, { contentType: 'audio/mpeg', upsert: false })

  if (error && !error.message.includes('already exists')) {
    throw new Error(`Storage upload failed: ${error.message}`)
  }

  const { data: signed } = await adminClient.storage
    .from(BUCKETS.AUDIO)
    .createSignedUrl(cacheKey, 60 * 60 * 4)

  if (!signed?.signedUrl) throw new Error('Could not sign audio URL')
  return signed.signedUrl
}

// Build the cache key — includes language so EN and ES renders are separate files.
// `ageTag` is appended only for age-tuned variants ('all' keeps the original key,
// so previously rendered files stay valid).
export function audioCacheKey(
  subjectSlug:  string,
  levelOrdinal: number,
  skinSlug:     string,
  voiceId:      string,
  lang      = 'en',
  preview   = false,
  ageTag    = 'all',
): string {
  const prefix = preview ? 'preview' : 'full'
  const age    = ageTag && ageTag !== 'all' ? `-${ageTag}` : ''
  return `${prefix}-${subjectSlug}-level${levelOrdinal}-${skinSlug}-${voiceId}-${lang}${age}.mp3`
}
