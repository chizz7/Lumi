// app/page.tsx
// Landing page — server component.
// Interactive sections (builder overlay, voice switcher, story sampler)
// are in client components imported below.
// SEO: full metadata, JSON-LD, i18n lang attribute set in layout.tsx.

import type { Metadata }       from 'next'
import { getI18n, LANG_NAMES, type Lang } from '@/lib/i18n'
import { getVoicesForLang }    from '@/lib/voices'
import LandingClient           from './_components/LandingClient'

// Dedicated, length-tuned homepage metadata (≤60 char title, ≤160 char
// description). hreflang alternates were removed: only EN content exists, and
// the ?lang= URLs don't actually serve different languages, so they were
// duplicate-content. Re-add hreflang once real per-language URLs exist.
export const metadata: Metadata = {
  title:       'Screen-Free Bedtime Stories That Teach',
  description: 'Personalized, screen-free audio bedtime stories that teach your child real-life skills — kindness, focus, confidence and more. First story free, no card.',
  alternates: { canonical: '/' },
}

export default async function LandingPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; cancelled?: string; auth?: string }>
}) {
  const params   = await searchParams
  const { t, lang, strings } = await getI18n()
  const voices   = getVoicesForLang(lang)

  // Show a language-availability banner if the detected language doesn't have
  // content yet. English is always available; others are added as translated.
  const contentAvailable: Lang[] = ['en'] // expand as you add translated content
  const showLangBanner = !contentAvailable.includes(lang)

  // FAQ structured data — eligible for Google rich results. Built from the same
  // localized strings the on-page FAQ renders, so they never drift apart.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [1, 2, 3, 4, 5].map(n => ({
      '@type': 'Question',
      name: t(`faq.${n}.q`),
      acceptedAnswer: { '@type': 'Answer', text: t(`faq.${n}.a`) },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Skip-to-content for screen readers */}
      <a href="#main-content" className="skip-link">Skip to content</a>

      <LandingClient
        lang={lang}
        strings={strings}
        voices={voices}
        showLangBanner={showLangBanner}
        langName={LANG_NAMES[lang] ?? 'English'}
        cancelled={params.cancelled === '1'}
        authError={params.auth === 'error'}
      />
    </>
  )
}
