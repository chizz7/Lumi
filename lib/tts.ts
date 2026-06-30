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

  // DeepInfra's inference endpoint returns JSON, NOT raw audio bytes:
  //   { audio: "data:audio/mp3;base64,<...>", output_format: "mp3", words: [...] }
  // The `audio` field is a base64 data URI. We MUST decode it to real MP3 bytes —
  // storing the raw response body produces a JSON file mislabelled audio/mpeg that
  // iOS WebKit (correctly) refuses to decode.
  const json = (await res.json()) as { audio?: string; output_format?: string }
  if (!json.audio) {
    throw new Error('Kokoro response missing "audio" field')
  }
  // Strip the optional `data:...;base64,` prefix, then decode.
  const base64 = json.audio.includes(',') ? json.audio.slice(json.audio.indexOf(',') + 1) : json.audio
  const buffer = Buffer.from(base64, 'base64')

  // ── Store ──────────────────────────────────────────────────────────────────
  // upsert:true so a re-render cleanly overwrites any earlier (corrupt) object.
  const { error } = await adminClient.storage
    .from(BUCKETS.AUDIO)
    .upload(cacheKey, buffer, { contentType: 'audio/mpeg', upsert: true })

  if (error && !error.message.includes('already exists')) {
    throw new Error(`Storage upload failed: ${error.message}`)
  }

  const { data: signed } = await adminClient.storage
    .from(BUCKETS.AUDIO)
    .createSignedUrl(cacheKey, 60 * 60 * 4)

  if (!signed?.signedUrl) throw new Error('Could not sign audio URL')
  return signed.signedUrl
}

// Bump this when the render/encoding pipeline changes so stale cached files are
// bypassed instead of served. v2 = real MP3 bytes (v1 mistakenly stored the raw
// DeepInfra JSON response, which iOS refused to decode).
const AUDIO_CACHE_VERSION = 'v2'

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
  const prefix = `${preview ? 'preview' : 'full'}-${AUDIO_CACHE_VERSION}`
  const age    = ageTag && ageTag !== 'all' ? `-${ageTag}` : ''
  return `${prefix}-${subjectSlug}-level${levelOrdinal}-${skinSlug}-${voiceId}-${lang}${age}.mp3`
}
