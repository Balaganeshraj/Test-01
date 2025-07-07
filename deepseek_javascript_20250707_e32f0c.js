const { GoogleAdsService, MetaAdsService, TikTokService } = require('./platformServices');

class DataSyncService {
  constructor(userId) {
    this.userId = userId;
  }

  async fullSync() {
    try {
      // Parallel platform sync
      await Promise.all([
        this.syncMetaAds(),
        this.syncGoogleAds(),
        this.syncTikTokAds()
      ]);
      
      // Cross-platform analysis
      await this.generateInsights();
      
      return { success: true };
    } catch (err) {
      console.error('Sync failed:', err);
      return { success: false };
    }
  }

  async syncGoogleAds() {
    const service = new GoogleAdsService(this.userId);
    await service.syncCampaigns();
    await service.syncAdGroups();
  }
}