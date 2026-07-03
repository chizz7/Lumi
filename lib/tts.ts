// lib/tts.ts
// Render text to MP3 via Kokoro-82M on DeepInfra.
// Cache: check Supabase Storage before calling the API.
// Cache key: {prefix}-{subjectSlug}-level{ordinal}-{skinSlug}-{voiceId}-{lang}.mp3

import { createHash }           from 'crypto'
import { adminClient, BUCKETS } from '@/lib/supabase'

const DEEPINFRA_URL = 'https://api.deepinfra.com/v1/inference/hexgrad/Kokoro-82M'

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
      preset_voice:  voiceId,
      voice:         voiceId,  // legacy field name kept for compat
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
// bypassed instead of served. v1 stored raw DeepInfra JSON (iOS refused it).
// v2 fixed the bytes but sent the voice as `voice` — a field Kokoro's DeepInfra
// endpoint ignores (it reads `preset_voice`), so every v2 file was rendered in
// the DEFAULT voice regardless of its key. v3 = correct per-voice renders.
const AUDIO_CACHE_VERSION = 'v3'

// Normalise a child's name into a safe, stable cache-key segment. Same name →
// same file (so repeat names reuse the render); strips anything non-alphanumeric.
// Names with no [a-z0-9] at all (e.g. 小明, さくら, أحمد) would strip to '' and
// silently collide with the GENERIC no-name cache key — every such child would
// hear whichever audio rendered first. Fall back to a short hash so the key
// stays unique per name and distinct from the generic key.
function nameSlug(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 24)
  if (slug) return slug
  return 'n' + createHash('sha256').update(name).digest('hex').slice(0, 12)
}

// Build the cache key — includes language so EN and ES renders are separate files.
// `ageTag` is appended only for age-tuned variants ('all' keeps the original key,
// so previously rendered files stay valid). `nameTag` is appended for
// personalised (name-in-audio) renders; omit it for generic/sample audio.
export function audioCacheKey(
  subjectSlug:  string,
  levelOrdinal: number,
  skinSlug:     string,
  voiceId:      string,
  lang      = 'en',
  preview   = false,
  ageTag    = 'all',
  nameTag   = '',
): string {
  const prefix = `${preview ? 'preview' : 'full'}-${AUDIO_CACHE_VERSION}`
  const age    = ageTag && ageTag !== 'all' ? `-${ageTag}` : ''
  const slug   = nameTag.trim() ? nameSlug(nameTag) : ''
  const name   = slug ? `-${slug}` : ''
  return `${prefix}-${subjectSlug}-level${levelOrdinal}-${skinSlug}-${voiceId}-${lang}${age}${name}.mp3`
}
