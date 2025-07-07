const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String, // Hashed
  subscription: {
    plan: { type: String, enum: ['starter', 'growth', 'enterprise'] },
    expiresAt: Date,
    features: [String] // e.g., ['google-ads', 'ai-creatives']
  },
  connectedAccounts: {
    meta: { 
      accessToken: String,
      adAccountId: String 
    },
    google: {
      refreshToken: String,
      customerId: String
    },
    tiktok: {
      accessToken: String
    }
  }
}, { timestamps: true });