const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');

// Unified campaign endpoints
router.get('/', campaignController.getAllCampaigns);
router.get('/compare', campaignController.comparePlatforms);
router.post('/optimize', campaignController.optimizeBudget);

// Google Ads specific
router.get('/google', campaignController.getGoogleCampaigns);
router.post('/google/sync', campaignController.syncGoogleAds);

module.exports = router;