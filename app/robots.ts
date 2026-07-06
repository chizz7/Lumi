// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'https://mylumi.xyz'
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/library', '/account', '/welcome', '/admin'] },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
