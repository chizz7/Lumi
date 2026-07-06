// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'https://mylumi.xyz'
  const now  = new Date()
  // Only real, indexable URLs — hash anchors (#how, #pricing) are not separate
  // pages and don't belong in a sitemap.
  return [
    { url: base,                 lastModified: now, changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/curriculum`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/terms`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/contact`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    // /login is a thin magic-link page — intentionally excluded from the sitemap.
  ]
}
