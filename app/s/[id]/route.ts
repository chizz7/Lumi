// app/s/[id]/route.ts
// GET /s/:id — durable "play the story" link used in delivery emails.
//
// The email is opened hours after delivery (a morning-delivered story is played
// at bedtime), so it CANNOT embed a short-lived signed URL — that link is dead
// by the time it's tapped. Instead the email links here with the story's id, and
// this route re-signs the audio fresh on every open and redirects to it. Story
// ids are random UUIDs (unguessable), so this stays authless — the parent can
// open it straight from their inbox without logging in.

import { NextRequest, NextResponse } from 'next/server'
import { adminClient, BUCKETS }      from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  const { data: story } = await adminClient
    .from('story_instances')
    .select('audio_key')
    .eq('id', id)
    .maybeSingle()

  if (!story?.audio_key) {
    return NextResponse.json({ error: 'Story not found' }, { status: 404 })
  }

  // Sign for 1 hour — long enough for one listening session, re-minted on the
  // next open. The stored object was rendered before this row was written, so
  // it exists (a failed render never records a story — see lib/deliver.ts).
  const { data: signed } = await adminClient.storage
    .from(BUCKETS.AUDIO)
    .createSignedUrl(story.audio_key, 60 * 60)

  if (!signed?.signedUrl) {
    return NextResponse.json({ error: 'Audio is not available right now.' }, { status: 404 })
  }

  return NextResponse.redirect(signed.signedUrl, 302)
}
