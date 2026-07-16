// scripts/optimize-hero.mjs
// Generates responsive WebP + JPEG versions of the hero image

import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const SRC = 'public/hero-bag.jpeg';
const DEST = 'public/images';

const SIZES = [
  { width: 480,  suffix: 'sm'  },  // mobile
  { width: 768,  suffix: 'md'  },  // tablet
  { width: 1280, suffix: 'lg'  },  // laptop
  { width: 1920, suffix: 'xl'  },  // desktop
];

if (!existsSync(DEST)) mkdirSync(DEST, { recursive: true });

console.log('🖼  Optimizing hero image...\n');

for (const { width, suffix } of SIZES) {
  const base = `hero-bag-${suffix}`;

  // WebP — best compression, modern browsers
  await sharp(SRC)
    .resize(width, null, { withoutEnlargement: true, fit: 'cover' })
    .webp({ quality: 82, effort: 5 })
    .toFile(join(DEST, `${base}.webp`));

  // JPEG fallback — older browsers / Safari < 14
  await sharp(SRC)
    .resize(width, null, { withoutEnlargement: true, fit: 'cover' })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(join(DEST, `${base}.jpg`));

  // Log sizes
  const { size: webpSize } = await import('fs').then(f =>
    f.promises.stat(join(DEST, `${base}.webp`))
  );
  const { size: jpgSize } = await import('fs').then(f =>
    f.promises.stat(join(DEST, `${base}.jpg`))
  );

  console.log(`  ${suffix.padEnd(3)} ${String(width).padStart(4)}px  |  WebP ${(webpSize/1024).toFixed(0).padStart(4)} KB  |  JPEG ${(jpgSize/1024).toFixed(0).padStart(4)} KB`);
}

console.log('\n✅  Done! Files saved to public/images/');
