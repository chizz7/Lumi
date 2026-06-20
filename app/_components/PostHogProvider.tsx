'use client'
// app/_components/PostHogProvider.tsx
// Initialises PostHog on the client for page-view tracking and UI events.
// Server-side events go through lib/analytics.ts directly.
//
// Only loads when NEXT_PUBLIC_POSTHOG_KEY is set — safe in development.

import posthog                       from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense }       from 'react'

function PostHogPageView() {
  const pathname     = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.__posthog_initialised) return
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '')
    posthog.capture('$pageview', { $current_url: url })
  }, [pathname, searchParams])

  return null
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  const key  = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://app.posthog.com'

  useEffect(() => {
    if (!key || window.__posthog_initialised) return
    posthog.init(key, {
      api_host:              host,
      capture_pageview:      false,   // we do it manually above
      capture_pageleave:     true,
      autocapture:           false,   // too noisy for a kids app
      session_recording: {
        maskAllInputs:        true,   // never capture what parents type
        maskInputOptions:     { password: true, email: true, text: true },
      },
      persistence:           'localStorage',
      loaded: (ph) => {
        // Don't track in development
        if (process.env.NODE_ENV === 'development') ph.opt_out_capturing()
      },
    })
    window.__posthog_initialised = true
  }, [key, host])

  if (!key) return <>{children}</>

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  )
}

// Extend Window type so the initialisation flag works in TypeScript
declare global {
  interface Window { __posthog_initialised?: boolean }
}
