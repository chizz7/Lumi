// app/api/admin/approvals/route.ts
// GET  — list all approval rows (admin only).
// POST — set a level's approval status: { subjectSlug, levelOrdinal, status, notes? }.
//
// Admin = logged-in user whose email is in ADMIN_EMAILS.

import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient } from '@/lib/supabase'
import { isAdmin }                    from '@/lib/admin'
import { getAllSubjectSlugs, getLevel } from '@/content'

const STATUSES = ['pending', 'approved', 'rejected'] as const
type Status = typeof STATUSES[number]

async function requireAdmin() {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized', status: 401 as const, user: null }
  if (!isAdmin(user.email)) return { error: 'Forbidden', status: 403 as const, user: null }
  return { error: null, status: 200 as const, user }
}

export async function GET() {
  const gate = await requireAdmin()
  if (gate.error) return NextResponse.json({ error: gate.error }, { status: gate.status })

  const { data: approvals } = await adminClient
    .from('content_approvals')
    .select('subject_slug, level_ordinal, status, reviewer_email, updated_at')

  return NextResponse.json({ approvals: approvals ?? [], subjects: getAllSubjectSlugs() })
}

export async function POST(req: NextRequest) {
  const gate = await requireAdmin()
  if (gate.error) return NextResponse.json({ error: gate.error }, { status: gate.status })

  let body: { subjectSlug?: string; levelOrdinal?: number; status?: Status; notes?: string }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  const { subjectSlug, levelOrdinal, status, notes } = body
  if (!subjectSlug || !levelOrdinal || !status || !STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Need subjectSlug, levelOrdinal and a valid status.' }, { status: 422 })
  }
  // Validate the level actually exists (throws otherwise).
  try { getLevel(subjectSlug, levelOrdinal) }
  catch { return NextResponse.json({ error: 'Unknown subject/level' }, { status: 422 }) }

  const { error } = await adminClient.from('content_approvals').upsert({
    subject_slug:   subjectSlug,
    level_ordinal:  levelOrdinal,
    status,
    reviewer_email: gate.user!.email,
    notes:          notes ?? null,
    updated_at:     new Date().toISOString(),
  }, { onConflict: 'subject_slug,level_ordinal' })

  if (error) {
    console.error('[admin.approvals] upsert failed:', error.message)
    return NextResponse.json({ error: 'Save failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
