// app/api/account/route.ts
// GET    /api/account  — return the parent's account + all child profiles
// POST   /api/account  — add another child (one subscription covers the family)
// PATCH  /api/account  — update a child profile by childId (name, age, world, voice)
// DELETE /api/account  — delete everything (requires X-Confirm-Delete: DELETE header)

import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient } from '@/lib/supabase'
import { cancelSubscription }        from '@/lib/stripe'
import { track }                     from '@/lib/analytics'
import { getAllSkins, getAllSubjectSlugs } from '@/content'
import { getVoicesForLang }          from '@/lib/voices'

const AGE_BANDS = ['3-4', '5-6', '7-8']
const MAX_CHILDREN = 6   // one subscription covers the whole family; cap to prevent abuse

const PROFILE_COLS = 'id, name, age_band, skin_slug, subject_slug, voice_id, current_level'

export async function GET(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: account } = await supabase.from('accounts').select('email, plan, created_at').eq('id', user.id).single()
  const { data: profiles } = await supabase
    .from('child_profiles').select(PROFILE_COLS)
    .eq('account_id', user.id)
    .order('created_at', { ascending: true })

  return NextResponse.json({ account, profiles: profiles ?? [] })
}

// POST — add another child (one subscription covers all of them).
export async function POST(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: { name?: string; ageBand?: string; skinSlug?: string; subjectSlug?: string; voiceId?: string; interestSlug?: string }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  const name = (body.name ?? '').trim().slice(0, 50)
  if (!name)                                              return NextResponse.json({ error: 'Name is required' }, { status: 422 })
  if (!body.ageBand || !AGE_BANDS.includes(body.ageBand)) return NextResponse.json({ error: 'Invalid age band' }, { status: 422 })
  if (!body.subjectSlug || !getAllSubjectSlugs().includes(body.subjectSlug)) return NextResponse.json({ error: 'Unknown subject' }, { status: 422 })
  if (!body.skinSlug || !getAllSkins(body.subjectSlug).some(s => s.slug === body.skinSlug)) return NextResponse.json({ error: 'Unknown world' }, { status: 422 })
  if (!body.voiceId || !getVoicesForLang('en').some(v => v.id === body.voiceId)) return NextResponse.json({ error: 'Unknown voice' }, { status: 422 })

  const { count } = await supabase.from('child_profiles').select('id', { count: 'exact', head: true }).eq('account_id', user.id)
  if ((count ?? 0) >= MAX_CHILDREN) return NextResponse.json({ error: `You can add up to ${MAX_CHILDREN} children.` }, { status: 422 })

  // Insert via the service-role client: the child_profiles RLS policy is
  // self-referential (it looks the row up by id) so it can't satisfy an INSERT
  // check on a not-yet-existing row. We've already authenticated the session and
  // pin account_id to this user, so this stays scoped to the owner.
  const { data: profile, error } = await adminClient
    .from('child_profiles')
    .insert({
      account_id:   user.id,
      name,
      age_band:     body.ageBand,
      skin_slug:    body.skinSlug,
      subject_slug: body.subjectSlug,
      voice_id:     body.voiceId,
      interest_slug: body.interestSlug ?? null,
      current_level: 1,
    })
    .select(PROFILE_COLS)
    .single()

  if (error) {
    console.error('[account.post] create child failed:', error.message)
    return NextResponse.json({ error: 'Could not add child' }, { status: 500 })
  }
  return NextResponse.json({ ok: true, profile })
}

export async function PATCH(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: { childId?: string; name?: string; ageBand?: string; skinSlug?: string; voiceId?: string }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  if (!body.childId) return NextResponse.json({ error: 'childId is required' }, { status: 400 })

  // Fetch the target child, scoped to this account (also gives us the subject to
  // validate the chosen world).
  const { data: current } = await supabase
    .from('child_profiles').select('subject_slug').eq('id', body.childId).eq('account_id', user.id).single()
  if (!current) return NextResponse.json({ error: 'No such child' }, { status: 404 })

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
    .eq('id', body.childId)
    .eq('account_id', user.id)
    .select(PROFILE_COLS)
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
