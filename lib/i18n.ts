// lib/i18n.ts
// Simple i18n without an external library.
// Language is detected from Accept-Language header, stored in a cookie.
//
// Usage (server component):
//   const { t, lang } = await getI18n()
//   t('hero.title') → "Bedtime stories that teach..."
//
// Usage (client):
//   const lang = document.cookie.match(/lumi_lang=([a-z-]+)/)?.[1] ?? 'en'

import { cookies, headers } from 'next/headers'
import type { NextRequest }  from 'next/server'

export type Lang = 'en' | 'es' | 'fr' | 'pt' | 'de' | 'ja' | 'zh' | 'ko' | 'hi' | 'it'

const SUPPORTED_LANGS: Lang[] = ['en','es','fr','pt','de','ja','zh','ko','hi','it']
export const LANG_NAMES: Record<Lang, string> = {
  en: 'English', es: 'Español', fr: 'Français', pt: 'Português',
  de: 'Deutsch', ja: '日本語',   zh: '中文',      ko: '한국어',
  hi: 'हिन्दी',  it: 'Italiano',
}
const LANG_COOKIE = 'lumi_lang'

// Detect language from Accept-Language header
function detectLang(acceptLanguage: string | null): Lang {
  if (!acceptLanguage) return 'en'
  const preferred = acceptLanguage
    .split(',')
    .map(s => s.split(';')[0]?.trim().toLowerCase().slice(0, 2))
    .filter(Boolean) as string[]
  return (preferred.find(l => SUPPORTED_LANGS.includes(l as Lang)) as Lang) ?? 'en'
}

// Load translations for a given language
async function loadTranslations(lang: Lang): Promise<Record<string, string>> {
  try {
    const mod = await import(`@/locales/${lang}`)
    return mod.default ?? mod.strings ?? {}
  } catch {
    // Fall back to English
    const mod = await import('@/locales/en')
    return mod.default ?? {}
  }
}

// Use in Server Components and Route Handlers
export async function getI18n(req?: NextRequest) {
  // 1. Check explicit cookie (user chose a language)
  const jar = req ? req.cookies : await cookies()
  const cookieLang = jar.get(LANG_COOKIE)?.value as Lang | undefined

  // 2. Fall back to Accept-Language header
  const hdrs       = req ? req.headers : await headers()
  const headerLang = detectLang(hdrs.get('accept-language'))

  const lang       = (SUPPORTED_LANGS.includes(cookieLang!) ? cookieLang! : headerLang) as Lang
  const strings    = await loadTranslations(lang)

  function t(key: string, vars?: Record<string, string>): string {
    let str = strings[key] ?? key
    if (vars) Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{{${k}}}`, v) })
    return str
  }

  return { t, lang, strings }
}
