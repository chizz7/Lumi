// scripts/setup-storage.ts
//
// Idempotent: creates the private Storage bucket the app needs (audio MP3
// cache). Safe to re-run — an existing bucket is left as-is.
//
//   npx tsx scripts/setup-storage.ts
//
// Requires NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in the env
// (importing @/lib/supabase fails loudly without them).
// No AWS CLI: Supabase Storage is managed entirely through the Supabase client.

import { adminClient, BUCKETS } from '@/lib/supabase'

// bucket id -> options. Private (no public reads); the app serves audio via
// short-lived signed URLs created with the service role.
const WANTED: Record<string, { fileSizeLimit: number; allowedMimeTypes: string[] }> = {
  [BUCKETS.AUDIO]: { fileSizeLimit: 25 * 1024 * 1024, allowedMimeTypes: ['audio/mpeg'] },
}

async function main() {
  const { data: existing, error: listErr } = await adminClient.storage.listBuckets()
  if (listErr) throw listErr
  const have = new Set((existing ?? []).map(b => b.id))

  for (const [id, opts] of Object.entries(WANTED)) {
    if (have.has(id)) {
      console.log(`✓ bucket '${id}' already exists — skipping`)
      continue
    }
    const { error } = await adminClient.storage.createBucket(id, {
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
