const AiTemplateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  originalImage: String, // S3 path or Base64
  variants: [{
    image: String,
    headline: String,
    description: String,
    performanceScore: Number, // 0-100
    platformOptimized: { 
      meta: Boolean,
      google: Boolean,
      tiktok: Boolean 
    }
  }],
  generationCost: Number // Track AI API costs
}, { timestamps: true });