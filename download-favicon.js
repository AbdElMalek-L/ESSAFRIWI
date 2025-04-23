const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

async function downloadAndConvertFavicon() {
  try {
    // Download the image
    const imageUrl = 'https://i.ibb.co/vxFy0fzh/Picsart-25-04-23-19-43-36-443.png';
    const imagePath = './public/favicon.png';
    
    const file = fs.createWriteStream(imagePath);
    https.get(imageUrl, (response) => {
      response.pipe(file);
      
      file.on('finish', async () => {
        file.close();
        console.log('Image downloaded successfully!');
        
        // Convert to favicon
        await sharp(imagePath)
          .resize(32, 32)
          .toFile('./public/favicon.ico');
        
        console.log('Favicon generated successfully!');
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

downloadAndConvertFavicon(); 