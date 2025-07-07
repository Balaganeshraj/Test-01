const { OpenAI } = require('openai');
const sharp = require('sharp');
const AdTemplate = require('../models/AdTemplate');

class AIService {
  constructor() {
    this.openai = new OpenAI(process.env.OPENAI_KEY);
    this.stableDiffusionUrl = process.env.SD_API_URL;
  }

  async generateAdVariants(imageBuffer, productDetails) {
    // Step 1: Process image
    const processedImage = await sharp(imageBuffer)
      .resize(1200, 630)
      .toBuffer();

    // Step 2: Generate copy variants
    const copy = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [{
        role: "system",
        content: "Generate 5 ad headline and description pairs for this product:"
      }, {
        role: "user",
        content: JSON.stringify(productDetails)
      }]
    });

    // Step 3: Generate image variants (using Stable Diffusion API)
    const imageVariants = await Promise.all(
      [1, 2, 3].map(async () => {
        const response = await fetch(this.stableDiffusionUrl, {
          method: 'POST',
          body: JSON.stringify({
            init_images: [processedImage.toString('base64')],
            prompt: productDetails.description
          })
        });
        return await response.json();
      })
    );

    // Step 4: Combine into ad templates
    return imageVariants.map((img, i) => new AdTemplate({
      image: img.images[0],
      headline: copy.choices[i].message.content.headline,
      description: copy.choices[i].message.content.description
    }));
  }
}