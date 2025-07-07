app.use((err, req, res, next) => {
  if (err.isPlatformError) {
    res.status(400).json({ 
      error: `API Error: ${err.platform}`
    });
  }
});