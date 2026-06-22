# Public brand assets

These are **generated** from brand-accurate SVGs by `scripts/gen-brand-assets.mjs`
(gold crescent moon on the night-sky gradient, "Lumi" serif wordmark + tagline).

| File | Size | Used by | Status |
|------|------|---------|--------|
| `og-image.png` | 1200×630 | Open Graph, Twitter card | ✅ generated |
| `favicon.ico` | 32×32 | Browser tab | ✅ generated |
| `apple-touch-icon.png` | 180×180 | iOS home screen | ✅ generated |
| `favicon-192.png` | 192×192 | Android, web manifest | ✅ generated |
| `favicon-512.png` | 512×512 | PWA splash screen | ✅ generated |

All are referenced in `app/layout.tsx` metadata and `public/site.webmanifest`.

## Regenerating

```bash
node scripts/gen-brand-assets.mjs
```

Edit the palette / motif / wordmark in that script and re-run. The wordmark uses
DejaVu Serif as a stand-in for the Fraunces brand serif; swap in the real
Fraunces (or a hand-designed logo) here when one is available, then regenerate.
Palette is the brand night/gold/amber/cream from `app/globals.css`.
