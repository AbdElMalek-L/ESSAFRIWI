const sharp = require('sharp');
const fs = require('fs');

async function generateFavicon() {
  try {
    const svgBuffer = fs.readFileSync('./public/favicon.svg');
    
    // Generate 16x16 favicon
    await sharp(svgBuffer)
      .resize(16, 16)
      .toFile('./public/favicon.ico');
    
    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 