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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://mylumi.xyz'),
  title: { default:'Lumi — Screen-Free Bedtime Stories That Teach', template:'%s · Lumi' },
  description: "Personalized, screen-free audio bedtime stories that teach your child real-life skills — kindness, focus, confidence and more — one calm night at a time.",
  keywords: ['screen-free bedtime stories','audio bedtime stories for kids','bedtime stories that teach','social-emotional skills for kids','personalized children stories','kids audio stories ages 3-8'],
  authors: [{ name:'Lumi' }],
  openGraph: {
    type:'website', siteName:'Lumi',
    title:'Lumi — Screen-Free Bedtime Stories That Teach',
    description:"Personalized, screen-free audio bedtime stories that teach real-life skills — kindness, focus, confidence and more — in a voice your child loves.",
    images: [{ url:'/og-image.png', width:1200, height:630, alt:'Lumi — Screen-Free Bedtime Stories That Teach' }],
  },
  twitter: { card:'summary_large_image', title:'Lumi — Screen-Free Bedtime Stories That Teach', description:"Screen-free audio bedtime stories that teach your child real-life skills.", images:['/og-image.png'] },
  robots: { index:true, follow:true },
  icons: { icon:'/favicon.ico', apple:'/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = { themeColor:'#241a52', width:'device-width', initialScale:1 }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang } = await getI18n()
  return (
    <html lang={lang} className={`${fraunces.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context':'https://schema.org',
          '@graph':[
            {
              '@type':'Organization', '@id':`${process.env.NEXT_PUBLIC_APP_URL}/#org`,
              name:'Lumi', url: process.env.NEXT_PUBLIC_APP_URL,
              logo:`${process.env.NEXT_PUBLIC_APP_URL}/favicon-512.png`,
              description:'Screen-free, personalized audio bedtime stories that teach children real-life skills.',
            },
            {
              '@type':'WebApplication',
              name:'Lumi', url: process.env.NEXT_PUBLIC_APP_URL,
              description:'Screen-free, personalized audio bedtime stories that teach children real-life skills — kindness, focus, confidence and more.',
              applicationCategory:'EducationalApplication', operatingSystem:'Web',
              publisher:{'@id':`${process.env.NEXT_PUBLIC_APP_URL}/#org`},
              // First story free, then a $9.99/mo Story Club subscription.
              offers:{'@type':'Offer', price:'9.99', priceCurrency:'USD', description:'Story Club — first story free, then $9.99/month, cancel anytime.'},
              audience:{'@type':'PeopleAudience', suggestedMinAge:3, suggestedMaxAge:8},
            },
          ],
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
