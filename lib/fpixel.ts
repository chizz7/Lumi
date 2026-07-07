// lib/fpixel.ts
// Thin client-side wrapper around the Meta (Facebook) Pixel. The Pixel only
// loads when NEXT_PUBLIC_FACEBOOK_PIXEL_ID is set (see FacebookPixel.tsx), so
// every helper here no-ops safely when it's absent or on the server.

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

type FbqParams = Record<string, unknown>

export function fbPageView(): void {
  if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'PageView')
}

// Fire a Meta *standard* event (Lead, InitiateCheckout, Subscribe, Purchase…).
export function fbEvent(name: string, params?: FbqParams): void {
  if (typeof window !== 'undefined' && window.fbq) window.fbq('track', name, params)
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
    __fbq_initialised?: boolean
  }
}
