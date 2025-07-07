function checkSubscriptionAccess(user, feature) {
  return user.subscription.features.includes(feature);
}