const CampaignSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  platform: { type: String, enum: ['meta', 'google', 'tiktok'] },
  name: String,
  status: String,
  budget: Number,
  performance: {
    impressions: Number,
    ctr: Number,
    roas: Number,
    lastSynced: Date
  },
  aiSuggestions: [{
    date: Date,
    recommendation: String,
    accepted: Boolean
  }]
}, { timestamps: true });