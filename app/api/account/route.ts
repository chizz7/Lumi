// app/api/account/route.ts
// GET    /api/account  — return the parent's account + profile
// PATCH  /api/account  — update the child profile (name, age band, world, voice)
// DELETE /api/account  — delete everything (requires X-Confirm-Delete: DELETE header)

import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient } from '@/lib/supabase'
import { cancelSubscription }        from '@/lib/stripe'
import { track }                     from '@/lib/analytics'
import { getAllSkins }               from '@/content'
import { getVoicesForLang }          from '@/lib/voices'

const AGE_BANDS = ['3-4', '5-6', '7-8']

export async function GET(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: account } = await supabase.from('accounts').select('email, plan, created_at').eq('id', user.id).single()
  const { data: profile } = await supabase.from('child_profiles').select('name, age_band, skin_slug, subject_slug, voice_id, current_level').eq('account_id', user.id).single()

  return NextResponse.json({ account, profile })
}

export async function PATCH(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: { name?: string; ageBand?: string; skinSlug?: string; voiceId?: string }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  // Need the profile's subject to validate the chosen world.
  const { data: current } = await supabase
    .from('child_profiles').select('subject_slug').eq('account_id', user.id).single()
  if (!current) return NextResponse.json({ error: 'No profile found' }, { status: 404 })

  const updates: Record<string, string> = {}

  if (typeof body.name === 'string' && body.name.trim()) {
    updates.name = body.name.trim().slice(0, 50)
  }
  if (body.ageBand) {
    if (!AGE_BANDS.includes(body.ageBand)) return NextResponse.json({ error: 'Invalid age band' }, { status: 422 })
    updates.age_band = body.ageBand
  }
  if (body.skinSlug) {
    if (!getAllSkins(current.subject_slug).some(s => s.slug === body.skinSlug)) {
      return NextResponse.json({ error: 'Unknown world' }, { status: 422 })
    }
    updates.skin_slug = body.skinSlug
  }
  if (body.voiceId) {
    if (!getVoicesForLang('en').some(v => v.id === body.voiceId)) {
      return NextResponse.json({ error: 'Unknown voice' }, { status: 422 })
    }
    updates.voice_id = body.voiceId
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
  }

  const { data: profile, error } = await supabase
    .from('child_profiles')
    .update(updates)
    .eq('account_id', user.id)
    .select('name, age_band, skin_slug, subject_slug, voice_id, current_level')
    .single()

  if (error) {
    console.error('[account.patch] update failed:', error.message)
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, profile })
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
