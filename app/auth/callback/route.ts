// app/auth/callback/route.ts
// Handles the magic-link redirect from Supabase Auth.
// Without this route, clicking the login link returns a 404.
//
// Flow: parent clicks magic link → Supabase redirects here with a code →
// we exchange it for a session → redirect to /library (or / if it fails).

import { NextRequest, NextResponse }   from 'next/server'
import { serverClient }                from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const { searchParams, origin } = req.nextUrl
  const code     = searchParams.get('code')
  const next     = searchParams.get('next') ?? '/library'
  const error    = searchParams.get('error')

  if (error) {
    console.error('[auth/callback] Supabase error:', searchParams.get('error_description'))
    return NextResponse.redirect(`${origin}/?auth=error`)
  }

  if (!code) {
    return NextResponse.redirect(`${origin}/?auth=no-code`)
  }

  const supabase = await serverClient()
  const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

  if (exchangeError) {
    console.error('[auth/callback] exchange error:', exchangeError.message)
    return NextResponse.redirect(`${origin}/?auth=error`)
  }

  // Redirect to /library (or wherever the user was heading)
  return NextResponse.redirect(`${origin}${next}`)
}
