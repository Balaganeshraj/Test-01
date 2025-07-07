router.post('/webhooks/google', (req, res) => {
  DataSyncService.handleRealTimeUpdate(req.body);
  res.status(200).end();
});