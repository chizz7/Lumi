// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'https://lumi.app'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#how`,       changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#curriculum`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#pricing`,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/login`,      changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
