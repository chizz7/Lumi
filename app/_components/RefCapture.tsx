'use client'
// app/_components/RefCapture.tsx
// Persists an inbound ?ref=CODE for the duration of the funnel. Mounted once in
// the root layout so it works no matter which page the referral link lands on.
// The code is later read by /api/draft (the lumi_ref cookie) and baked into the
// signed draft, so it survives all the way to the Stripe webhook on paid signup.

import { useEffect } from 'react'

const MAX_AGE = 60 * 60 * 24 * 30  // 30 days

export default function RefCapture() {
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (!ref) return
    const code = ref.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 16)
    if (!code) return
    // Lax cookie so it's sent on the same-site /api/draft POST. Not httpOnly —
    // there's nothing sensitive here (it's the friend's public share code).
    document.cookie = `lumi_ref=${code}; path=/; max-age=${MAX_AGE}; samesite=lax`
  }, [])
  return null
}
