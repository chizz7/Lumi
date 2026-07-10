// locales/en.ts — English (source of truth for all other locales)
const strings: Record<string, string> = {
  // Nav
  'nav.how':       'How it works',
  'nav.curriculum':'Curriculum',
  'nav.voices':    'Voices',
  'nav.pricing':   'Pricing',
  'nav.login':     'Log in',
  'nav.cta':       'Build their free story',

  // Hero
  'hero.eyebrow':  'Screen-free bedtime, made for them',
  'hero.title':    'Screen-free bedtime stories that quietly raise a kinder, more capable kid.',
  'hero.title.em': 'kinder, more capable kid',
  'hero.sub':      'Their name, their world, a calm voice you choose — a new adventure every few days that teaches one real-life skill at a time. First story free.',
  'hero.cta.primary':   'Build their free story →',
  'hero.cta.secondary': 'Hear a sample',
  'hero.trust.rating':  'First story free',
  'hero.trust.families':'No card needed',
  'hero.trust.card':    'Cancel anytime',

  // Proof bar
  'proof.label':   'Featured in',

  // How it works
  'how.kicker':    'How it works',
  'how.title':     'Three taps to a story made for your child.',
  'how.sub':       'No account needed to try it — personalize, preview, and only pay when you love it.',
  'how.step1.title':'Personalize',
  'how.step1.desc': "Their name, what they love, and the world the story lives in.",
  'how.step2.title':'Preview free',
  'how.step2.desc': "Hear the opening of their story before you decide anything.",
  'how.step3.title':'It arrives',
  'how.step3.desc': "Full audio + a readable script, emailed and saved to your library.",

  // Curriculum
  'curriculum.kicker': 'The curriculum',
  'curriculum.title':  '7 learning paths. 35 stories. One bedtime at a time.',
  'curriculum.sub':    "You'll share around {{count}} bedtimes before your child turns eight. A normal story is forgotten by morning — these teach one real concept per night and quietly call back the last.",
  'curriculum.bedtimes': '1,800',

  // Voices
  'voices.kicker':     'Choose the voice',
  'voices.title':      'A voice that fits your bedtime.',
  'voices.sub':        'Warm, calm, playful, or gentle — tap to switch. Every story can be told in any of them.',
  'voices.now':        'Now previewing in',
  'voices.own.badge':  'Coming soon',
  'voices.own.title':  '…or your own voice.',
  'voices.own.sub':    "Imagine your child hearing their story in your voice, even when you can't be there.",
  'voices.own.cta':    'See how it works →',

  // Personalized sample
  'sample.kicker':     'See it personalized',
  'sample.title':      'Watch their name appear.',
  'sample.sub':        "The story, the world, and the voice all adapt to your child — but the lesson stays expert-written.",
  'sample.cta':        'Build their free story →',
  'sample.teaches':    'Teaches: one real-life skill — expert-written, age-leveled',

  // Testimonials
  'testimonials.kicker': 'Why parents trust it',
  'testimonials.title':  'Made carefully, on purpose.',
  'founder.note': "Lumi is new — so instead of borrowed praise, here's our promise: every story is written by a person, checked against a teacher-built curriculum, and ends calm. Try the first one free, and judge it the only way that matters — by your child's face.",
  'founder.sig':  '— The Lumi team',
  'midcta.title': "Tonight's story is free — build it in 60 seconds.",
  'midcta.chips': '✓ No account · ✓ No card · ✓ Their name in the title',

  // Pricing
  'pricing.kicker':       'Simple pricing',
  'pricing.title':        'Try one free. Keep the ones you love.',
  'pricing.free.label':   'First story',
  'pricing.free.amount':  'Free',
  'pricing.free.sub':     'Preview before you pay — no card needed',
  'pricing.club.label':   'Story Club',
  'pricing.club.amount':  '$9.99',
  'pricing.club.period':  '/mo',
  'pricing.club.tag':     'Most loved',
  'pricing.club.f1':      'A new leveled story every other day',
  'pricing.club.f2':      'All curated voices',
  'pricing.club.f3':      'Record your own voice',
  'pricing.club.f4':      'Full audio + script library',
  'pricing.club.cta':     'Start free →',
  'pricing.guarantee':    "🛟 Don't love a story? Tap \"report\" and it's on us — automatic credit, no questions.",
  'pricing.value':        'Less than a single bedtime book a month. Cancel anytime.',

  // Trust
  'trust.kicker':     "Made safe, on purpose",
  'trust.title':      "Built for parents who don't hand their kids to AI lightly.",
  'trust.1.title':    'Every story is reviewed',
  'trust.1.sub':      'Safety- and teacher-checked before any child ever hears it.',
  'trust.2.title':    'We collect almost nothing',
  'trust.2.sub':      'No birthdate, no photos, no location. Interests only — export or delete anytime.',
  'trust.3.title':    'Bedtime-safe by design',
  'trust.3.sub':      'No fear or peril — every story winds down to calm.',

  // FAQ
  'faq.kicker': 'Questions',
  'faq.title':  'Good to know',
  'faq.1.q': "Isn't a bedtime story just for winding down?",
  'faq.1.a': "Winding down and learning aren't a trade-off — the calm, attentive minutes before sleep are exactly when gentle teaching lands best.",
  'faq.2.q': 'Is the AI making up stories about my child?',
  'faq.2.a': "No. Stories are written and expert-reviewed in advance. Personalization only adds your child's name, chosen world, and a recurring character — never the lesson.",
  'faq.3.q': 'What ages is this for?',
  'faq.3.a': 'Leveled by age band (roughly 3–11). You pick the band; we match the language and difficulty.',
  'faq.4.q': 'Can I really use my own voice?',
  'faq.4.a': 'Yes — after you create an account and give consent, you can record your voice for narration.',
  'faq.5.q': 'What about my data?',
  'faq.5.a': 'We collect interest tags, not identity. You can export or delete everything in one tap.',
  'faq.6.q': 'What does it cost — and can I really cancel?',
  'faq.6.a': 'Your first story is free, no card needed. The Story Club is $9.99/month for a new story every other day, and you can cancel in one tap from your account — no calls, no hoops.',
  'faq.7.q': "What if my child doesn't like a story?",
  'faq.7.a': "Tap “report” on any story and it's on us — an automatic credit, no questions asked.",
  'faq.8.q': 'How is this different from an audiobook?',
  'faq.8.a': "Audiobooks entertain; Lumi is a leveled curriculum. Each story teaches exactly one skill, and later stories quietly call it back — spaced repetition without flashcards. And it stars your child.",

  // Final CTA
  'final.title': "Tonight's story is happening anyway.",
  'final.sub':   'Make it one that teaches. Free to try — under a minute to start.',
  'final.cta':   'Build their free story →',

  // Email capture
  'waitlist.title':       'Be first when we launch in your language',
  'waitlist.sub':         "We'll email you as soon as stories are available in {{lang}}.",
  'waitlist.placeholder': 'parent@email.com',
  'waitlist.cta':         'Notify me',
  'waitlist.success':     "You're on the list — we'll be in touch.",

  // Library
  'library.title':       "{{name}}'s Library",
  'library.next.label':  'Level {{n}} ready next',
  'library.next.sub':    '{{title}} — continues the path',
  'library.next.cta':    'Get next story →',
  'library.being.made':  'Being prepared…',
  'library.all.paths':   'Explore all 7 learning paths →',

  // Account
  'account.title':    'Account',
  'account.plan':     'Story Club',
  'account.plan.sub': 'New story every other day · All voices',
  'account.active':   'Active',

  // Auth
  'auth.magic.sent':  "Check your email — we've sent a magic link to sign you in.",
  'auth.magic.sub':   'No password needed. Click the link in your email.',

  // Errors
  'error.404.title': 'Page not found',
  'error.404.sub':   'The page you\'re looking for doesn\'t exist.',
  'error.404.cta':   '← Back home',

  // Footer
  'footer.tagline':  'Personalized bedtime stories that teach real skills, one calm night at a time.',
  'footer.product':  'Product',
  'footer.company':  'Company',
  'footer.legal':    'Legal',
  'footer.copy':     '© {{year}} Lumi. All rights reserved.',
}
export default strings
