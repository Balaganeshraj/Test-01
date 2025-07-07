// migrations/add_ai_fields.js
const migrateAI = async () => {
  await db.campaigns.updateMany(
    {},
    { $set: { 
      'performance.aiScore': 0,
      'aiSuggestions': [] 
    }}
  );
  console.log('Migration complete');
};