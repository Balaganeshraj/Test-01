const GoogleAdsService = require('../services/googleAdsService');
const { validatePlatformAccess } = require('../middlewares/auth');

exports.getPerformance = async (req, res) => {
  try {
    await validatePlatformAccess(req.user, 'google');
    const service = new GoogleAdsService(req.user.googleAdsCustomerId);
    
    const data = await service.getPerformanceReport({
      startDate: req.query.startDate,
      endDate: req.query.endDate
    });

    res.json({
      success: true,
      data
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
};

exports.syncCampaigns = async (req, res) => {
  const service = new GoogleAdsService(req.user.googleAdsCustomerId);
  await service.syncToDatabase();
  res.json({ success: true });
};