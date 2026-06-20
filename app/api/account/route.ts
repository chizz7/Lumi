// app/api/account/route.ts
// GET    /api/account  — return the parent's account + profile
// DELETE /api/account  — delete everything (requires X-Confirm-Delete: DELETE header)

import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient } from '@/lib/supabase'
import { cancelSubscription }        from '@/lib/stripe'
import { track }                     from '@/lib/analytics'

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

  // 1. Cancel any active Stripe subscription so deletion stops the billing too.
  const { data: account } = await adminClient
    .from('accounts').select('stripe_customer_id').eq('id', user.id).single()
  if (account?.stripe_customer_id) {
    try { await cancelSubscription(account.stripe_customer_id) }
    catch (err) { console.error('[account.delete] subscription cancel failed (non-fatal):', err) }
  }

  // 2. Delete our DB rows. accounts.id has no FK to auth.users, so this won't
  //    cascade automatically — delete the account row explicitly. child_profiles
  //    and story_instances DO cascade from accounts via their FKs.
  await adminClient.from('accounts').delete().eq('id', user.id)

  // 3. Finally remove the Supabase Auth user.
  await adminClient.auth.admin.deleteUser(user.id)

  track('account_deleted', {}, user.id)
  return NextResponse.json({ ok: true })
}
