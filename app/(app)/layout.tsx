// app/(app)/layout.tsx — authenticated shell layout
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false }, // don't index authenticated pages
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
