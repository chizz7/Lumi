// scripts/setup-storage.ts
//
// Idempotent: creates the private Storage buckets the app needs (audio MP3 cache
// + script text). Safe to re-run — existing buckets are left as-is.
//
//   npx tsx scripts/setup-storage.ts
//
// Requires NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in the env.
// No AWS CLI: Supabase Storage is managed entirely through the Supabase client.

import { createClient } from '@supabase/supabase-js'
import { BUCKETS } from '@/lib/supabase'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const admin = createClient(url, key, { auth: { persistSession: false } })

// bucket id -> options. Private (no public reads); the app serves audio via
// short-lived signed URLs created with the service role.
const WANTED: Record<string, { fileSizeLimit: number; allowedMimeTypes: string[] }> = {
  [BUCKETS.AUDIO]:   { fileSizeLimit: 25 * 1024 * 1024, allowedMimeTypes: ['audio/mpeg'] },
  [BUCKETS.SCRIPTS]: { fileSizeLimit: 5 * 1024 * 1024,  allowedMimeTypes: ['text/plain'] },
}

async function main() {
  const { data: existing, error: listErr } = await admin.storage.listBuckets()
  if (listErr) throw listErr
  const have = new Set((existing ?? []).map(b => b.id))

  for (const [id, opts] of Object.entries(WANTED)) {
    if (have.has(id)) {
      console.log(`✓ bucket '${id}' already exists — skipping`)
      continue
    }
    const { error } = await admin.storage.createBucket(id, {
      public: false,
      fileSizeLimit: opts.fileSizeLimit,
      allowedMimeTypes: opts.allowedMimeTypes,
    })
    if (error) throw new Error(`createBucket('${id}') failed: ${error.message}`)
    console.log(`＋ created private bucket '${id}'`)
  }
  console.log('Storage ready.')
}

main().catch(err => { console.error(err); process.exit(1) })
