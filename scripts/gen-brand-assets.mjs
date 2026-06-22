// scripts/gen-brand-assets.mjs
// Generates Lumi's public brand assets from brand-accurate SVGs.
//   node scripts/gen-brand-assets.mjs
// Outputs to /public: og-image.png, apple-touch-icon.png, favicon-192.png,
// favicon-512.png, favicon.ico.
//
// Brand palette (app/globals.css): night #16123a/#241a52/#3a2470, gold #FFD27A,
// amber #F4A93C, cream #FBF4E6. Motif: gold crescent moon on a night sky.
// Wordmark uses DejaVu Serif (a stand-in for the Fraunces brand serif), tagline
// uses DejaVu Sans. Regenerate any time the logo or palette changes.

import sharp from 'sharp'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

// Shared night-sky background + a reusable gold crescent moon. cx/cy/r in px.
const sky = (w, h) => `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2c2063"/>
      <stop offset="0.55" stop-color="#1d1747"/>
      <stop offset="1" stop-color="#16123a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.4" r="0.6">
      <stop offset="0" stop-color="#4d2e85" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#16123a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="moon" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFE6A8"/>
      <stop offset="0.5" stop-color="#FFD27A"/>
      <stop offset="1" stop-color="#F4A93C"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>`

const moon = (cx, cy, r) => `
  <mask id="crescent-${cx}-${cy}">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="white"/>
    <circle cx="${cx + r * 0.42}" cy="${cy - r * 0.30}" r="${r * 0.96}" fill="black"/>
  </mask>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#moon)" mask="url(#crescent-${cx}-${cy})"/>`

// A 4-point sparkle star.
const star = (cx, cy, s, op = 0.9) => {
  const p = [
    [cx, cy - s], [cx + s * 0.28, cy - s * 0.28], [cx + s, cy],
    [cx + s * 0.28, cy + s * 0.28], [cx, cy + s], [cx - s * 0.28, cy + s * 0.28],
    [cx - s, cy], [cx - s * 0.28, cy - s * 0.28],
  ].map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  return `<polygon points="${p}" fill="#FBF4E6" opacity="${op}"/>`
}

// ── Square icon (used for favicon, apple-touch, manifest) ──────────────────
// Always rendered from a 512 viewBox and resized down, so detail stays crisp.
const iconSvg = (S) => `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 512 512">
  ${sky(512, 512)}
  ${star(120, 130, 14, 0.85)}
  ${star(395, 150, 20, 0.95)}
  ${star(150, 380, 11, 0.7)}
  ${star(380, 385, 9, 0.6)}
  ${moon(270, 262, 150)}
</svg>`

// ── Open Graph card (1200×630) ─────────────────────────────────────────────
const ogSvg = () => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${sky(1200, 630)}
  ${star(180, 120, 16, 0.8)}
  ${star(1010, 110, 22, 0.95)}
  ${star(300, 470, 12, 0.65)}
  ${star(950, 500, 14, 0.7)}
  ${star(620, 90, 10, 0.6)}
  ${star(120, 330, 9, 0.5)}
  ${moon(600, 196, 86)}
  <text x="600" y="406" text-anchor="middle" font-family="DejaVu Serif" font-weight="bold"
        font-size="158" fill="#FFD27A" letter-spacing="2">Lumi</text>
  <text x="600" y="486" text-anchor="middle" font-family="DejaVu Sans"
        font-size="42" fill="#FBF4E6" opacity="0.92">Bedtime stories that teach.</text>
  <rect x="556" y="430" width="88" height="5" rx="2.5" fill="#F4A93C"/>
</svg>`

// ── Minimal ICO encoder: wraps a single 32×32 PNG (valid in all modern UAs) ──
function pngToIco(png, size = 32) {
  const head = Buffer.alloc(6)
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(1, 4)
  const entry = Buffer.alloc(16)
  entry.writeUInt8(size % 256, 0); entry.writeUInt8(size % 256, 1)
  entry.writeUInt8(0, 2); entry.writeUInt8(0, 3)
  entry.writeUInt16LE(1, 4); entry.writeUInt16LE(32, 6)
  entry.writeUInt32LE(png.length, 8); entry.writeUInt32LE(6 + 16, 12)
  return Buffer.concat([head, entry, png])
}

// Flatten onto the darkest night tone so outputs carry no alpha channel —
// Apple touch icons in particular must be fully opaque.
const FLAT = { r: 0x16, g: 0x12, b: 0x3a }
const renderPng = (svg, size) =>
  sharp(Buffer.from(svg)).resize(size, size).flatten({ background: FLAT }).png().toBuffer()

async function main() {
  // OG image
  await sharp(Buffer.from(ogSvg())).flatten({ background: FLAT }).png().toFile(join(PUBLIC, 'og-image.png'))

  // Square icons
  await sharp(Buffer.from(iconSvg(512))).flatten({ background: FLAT }).png().toFile(join(PUBLIC, 'favicon-512.png'))
  await sharp(Buffer.from(iconSvg(192))).flatten({ background: FLAT }).png().toFile(join(PUBLIC, 'favicon-192.png'))
  await sharp(Buffer.from(iconSvg(180))).flatten({ background: FLAT }).png().toFile(join(PUBLIC, 'apple-touch-icon.png'))

  // favicon.ico (32×32 PNG wrapped in an ICO container)
  const fav32 = await renderPng(iconSvg(32), 32)
  writeFileSync(join(PUBLIC, 'favicon.ico'), pngToIco(fav32, 32))

  console.log('Wrote: og-image.png, favicon-512.png, favicon-192.png, apple-touch-icon.png, favicon.ico')
}

main().catch((e) => { console.error(e); process.exit(1) })
