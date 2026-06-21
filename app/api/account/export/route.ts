// app/api/account/export/route.ts
// GET /api/account/export — returns a JSON download of everything we store.
import { NextRequest, NextResponse } from 'next/server'
import { serverClient, adminClient } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const supabase = await serverClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // account + all children; stories depend on each child's id.
  const [{ data: account }, { data: profiles }] = await Promise.all([
    supabase.from('accounts').select('email, plan, created_at').eq('id', user.id).single(),
    supabase.from('child_profiles').select('id, name, age_band, skin_slug, subject_slug, voice_id, current_level, interest_slug').eq('account_id', user.id),
  ])

  const childProfiles = await Promise.all((profiles ?? []).map(async profile => {
    const { data: stories } = await supabase
      .from('story_instances').select('level_ordinal, subject_slug, skin_slug, delivered_at').eq('profile_id', profile.id)
    return { ...profile, storiesDelivered: stories ?? [] }
  }))

  const bundle = {
    exportedAt: new Date().toISOString(),
    account:    { email: account?.email, plan: account?.plan, createdAt: account?.created_at },
    childProfiles,
    note: "This is all data Lumi holds about you. No behavioural tracking, no location, no birthdate.",
  }

  const date = new Date().toISOString().slice(0, 10)
  return new NextResponse(JSON.stringify(bundle, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="lumi-data-${date}.json"`,
      'Cache-Control': 'no-store',
    },
  })
}
