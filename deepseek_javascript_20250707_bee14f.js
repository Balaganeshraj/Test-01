// Optimize for frequent queries
CampaignSchema.index({ userId: 1, platform: 1 });
CompetitorSchema.index({ userId: 1, brandName: 1 });
AiTemplateSchema.index({ userId: 1, 'variants.performanceScore': -1 });