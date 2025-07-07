const CompetitorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  brandName: String,
  platform: { type: String, enum: ['meta', 'google', 'tiktok'] },
  ads: [{
    adId: String,
    imageUrl: String,
    headline: String,
    firstSeen: Date,
    lastSeen: Date,
    estimatedSpend: Number,
    estimatedImpressions: Number,
    similarToUserAd: { 
      adId: { type: mongoose.Schema.Types.ObjectId, ref: 'AdVariant' },
      similarityScore: Number 
    }
  }],
  benchmarkStats: {
    avgCtr: Number,
    avgCpc: Number
  }
}, { timestamps: true });