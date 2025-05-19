const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 192, 256, 512];

async function generateFavicon() {
  const inputPath = path.join(__dirname, '../public/icon.png');
  const outputDir = path.join(__dirname, '../public');

  // Generate different sizes
  for (const size of sizes) {
    await sharp(inputPath)
      .resize(size, size)
      .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
  }

  // Generate favicon.ico (16x16)
  await sharp(inputPath)
    .resize(16, 16)
    .toFile(path.join(outputDir, 'favicon.ico'));

  console.log('Favicon generation complete!');
}

generateFavicon().catch(console.error); 