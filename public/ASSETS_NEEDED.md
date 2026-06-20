# Public assets needed before launch

Add these files to this `/public` directory:

| File | Size | Used by |
|------|------|---------|
| `og-image.png` | 1200×630px | Open Graph, Twitter card |
| `favicon.ico` | 32×32px | Browser tab |
| `apple-touch-icon.png` | 180×180px | iOS home screen |
| `favicon-192.png` | 192×192px | Android, web manifest |
| `favicon-512.png` | 512×512px | PWA splash screen |

## Quick start: generate from a single logo
If you have your logo as an SVG or PNG:
- Use https://realfavicongenerator.net (free, generates all sizes)
- For og-image: use Figma or Canva with the 1200×630 template
  - Background: deep purple #241a52
  - Logo centred, tagline below: "Bedtime stories that teach."
  - A simple illustration (the 🌙 moon + dolphin character works)

These are all referenced in `app/layout.tsx` metadata already.
