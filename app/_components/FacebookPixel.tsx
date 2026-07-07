'use client'
// app/_components/FacebookPixel.tsx
// Loads the Meta (Facebook) Pixel and tracks a PageView on every route change,
// so ad clicks and on-site navigation are measured. Standard conversion events
// (Lead, InitiateCheckout, Subscribe) are fired from their funnel points.
//
// Only loads when NEXT_PUBLIC_FACEBOOK_PIXEL_ID is set, and never in dev — so a
// missing id (or local work) simply no-ops.

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef, Suspense }  from 'react'
import { FB_PIXEL_ID, fbPageView }      from '@/lib/fpixel'

function PixelPageView() {
  const pathname     = usePathname()
  const searchParams = useSearchParams()
  const first        = useRef(true)

  useEffect(() => {
    // init() already fires the first PageView; skip it here so it isn't doubled,
    // then track every subsequent client-side navigation.
    if (first.current) { first.current = false; return }
    fbPageView()
  }, [pathname, searchParams])

  return null
}

export default function FacebookPixel() {
  useEffect(() => {
    if (!FB_PIXEL_ID || window.__fbq_initialised) return
    if (process.env.NODE_ENV === 'development') return   // don't pollute the pixel from local

    // Standard Meta bootstrap, written out (instead of the minified snippet) so
    // it type-checks cleanly.
    const fbq = function (...args: unknown[]) {
      // @ts-expect-error — callMethod/queue are attached by the loaded script
      fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args)
    } as ((...args: unknown[]) => void) & { queue: unknown[][]; loaded: boolean; version: string; push: unknown }
    fbq.queue = []; fbq.loaded = true; fbq.version = '2.0'; fbq.push = fbq
    window.fbq = fbq
    if (!window._fbq) window._fbq = fbq

    const s = document.createElement('script')
    s.async = true
    s.src   = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(s)

    window.fbq('init', FB_PIXEL_ID)
    window.fbq('track', 'PageView')
    window.__fbq_initialised = true
  }, [])

  if (!FB_PIXEL_ID) return null
  return (
    <Suspense fallback={null}>
      <PixelPageView />
    </Suspense>
  )
}
