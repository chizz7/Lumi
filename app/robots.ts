// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'https://lumi.app'
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/library', '/account', '/welcome'] },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
