const PerformanceHistorySchema = new mongoose.Schema({
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  date: Date,
  metrics: {
    spend: Number,
    impressions: Number,
    conversions: Number,
    roas: Number
  },
  platformComparison: {
    meta: { type: mongoose.Schema.Types.Mixed },
    google: { type: mongoose.Schema.Types.Mixed },
    tiktok: { type: mongoose.Schema.Types.Mixed }
  }
});