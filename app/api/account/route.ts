// app/api/account/route.ts
// GET    /api/account  — return the parent's account + profile
// DELETE /api/account  — delete everything (requires X-Confirm-Delete: DELETE header)

import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient, BUCKETS } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: account } = await supabase.from('accounts').select('email, plan, created_at').eq('id', user.id).single()
  const { data: profile } = await supabase.from('child_profiles').select('name, age_band, skin_slug, subject_slug, voice_id, current_level').eq('account_id', user.id).single()

  return NextResponse.json({ account, profile })
}

export async function DELETE(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  if (req.headers.get('x-confirm-delete') !== 'DELETE') {
    return NextResponse.json({ error: 'Send X-Confirm-Delete: DELETE header to confirm.' }, { status: 400 })
  }

  // Delete Supabase auth user (cascades to our tables via RLS)
  await adminClient.auth.admin.deleteUser(user.id)

  return NextResponse.json({ ok: true })
}
