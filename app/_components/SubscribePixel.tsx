'use client'
// app/_components/SubscribePixel.tsx
// Fires the Meta "Subscribe" conversion once when a parent lands on /welcome
// after checkout — this is the signal Meta optimises ad delivery toward.
// Guarded per Stripe session id so a page refresh doesn't double-count.

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { fbEvent } from '@/lib/fpixel'

// The Story Club price. Currency mirrors the Stripe price; adjust if yours isn't USD.
const VALUE = 9.99
const CURRENCY = 'USD'

export default function SubscribePixel() {
  const params = useSearchParams()

  useEffect(() => {
    const sid = params.get('session_id') ?? 'welcome'
    const key = `fb_sub_${sid}`
    if (sessionStorage.getItem(key)) return          // already counted this checkout
    sessionStorage.setItem(key, '1')
    fbEvent('Subscribe', { value: VALUE, currency: CURRENCY, predicted_ltv: VALUE })
  }, [params])

  return null
}
