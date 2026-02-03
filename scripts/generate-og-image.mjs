import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, 'og-image.svg');
const logoPath = join(__dirname, '..', 'public', 'images', 'logo.png');
const outputPath = join(__dirname, '..', 'src', 'app', 'opengraph-image.png');

const svgBuffer = readFileSync(svgPath);

// Logo position: left of "Brain House" text at header
const logoSize = 70;
const logoX = 460;  // Left of text
const logoY = 25;

// Resize logo
const resizedLogo = await sharp(logoPath)
  .resize(logoSize, logoSize)
  .toBuffer();

// Create background from SVG and composite logo
sharp(svgBuffer)
  .resize(1200, 630)
  .composite([
    {
      input: resizedLogo,
      top: logoY,
      left: logoX,
    },
  ])
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('OG image generated:', outputPath);
  })
  .catch((err) => {
    console.error('Error generating OG image:', err);
    process.exit(1);
  });
