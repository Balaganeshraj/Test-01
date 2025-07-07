const encrypted = CryptoJS.AES.encrypt(
  process.env.GOOGLE_ADS_SECRET, 
  'your-secret-key'
).toString();