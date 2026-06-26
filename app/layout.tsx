// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Fraunces, Figtree }        from 'next/font/google'
import { getI18n }                  from '@/lib/i18n'
import PostHogProvider              from './_components/PostHogProvider'
import RefCapture                   from './_components/RefCapture'
import './globals.css'

const fraunces = Fraunces({ subsets:['latin'], variable:'--font-fraunces', axes:['opsz'], display:'swap' })
const figtree  = Figtree({  subsets:['latin'], variable:'--font-figtree',  display:'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://lumi.app'),
  title: { default:'Lumi — Bedtime Stories That Teach', template:'%s · Lumi' },
  description: "Personalized bedtime stories that teach your child real skills — money, focus, kindness — level by level, in a voice they'll love.",
  keywords: ['bedtime stories','educational stories for kids','personalized children stories','kids learning app','financial literacy for kids','SEL stories'],
  authors: [{ name:'Lumi' }],
  openGraph: {
    type:'website', siteName:'Lumi',
    title:'Lumi — Bedtime Stories That Teach',
    description:"Personalized bedtime stories that teach real skills — money, focus, kindness — in a voice your child loves.",
    images: [{ url:'/og-image.png', width:1200, height:630, alt:'Lumi — Bedtime Stories That Teach' }],
  },
  twitter: { card:'summary_large_image', title:'Lumi — Bedtime Stories That Teach', description:"Bedtime stories that teach your child real skills.", images:['/og-image.png'] },
  robots: { index:true, follow:true },
  icons: { icon:'/favicon.ico', apple:'/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = { themeColor:'#241a52', width:'device-width', initialScale:1, maximumScale:5 }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang } = await getI18n()
  return (
    <html lang={lang} className={`${fraunces.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context':'https://schema.org','@type':'WebApplication',
          name:'Lumi', description:'Personalized bedtime stories that teach children real skills.',
          url: process.env.NEXT_PUBLIC_APP_URL,
          applicationCategory:'EducationalApplication', operatingSystem:'Web',
          offers:{'@type':'Offer', price:'0', priceCurrency:'USD'},
          audience:{'@type':'PeopleAudience', suggestedMinAge:3, suggestedMaxAge:8},
        })}} />
      </head>
      <body className="antialiased">
        <PostHogProvider>
          <RefCapture />
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
