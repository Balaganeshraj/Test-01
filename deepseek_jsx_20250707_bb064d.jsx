import React, { useEffect, useState } from 'react';

export default function CampaignManager() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  useEffect(() => {
    fetch(`/api/campaigns?platform=${selectedPlatform}`)
      .then(res => res.json())
      .then(data => setCampaigns(data));
  }, [selectedPlatform]);

  const platformFilters = [
    { id: 'all', name: 'All Platforms' },
    { id: 'meta', name: 'Meta' },
    { id: 'google', name: 'Google Ads' },
    { id: 'tiktok', name: 'TikTok' }
  ];

  return (
    <div className="campaign-manager">
      <div className="manager-header">
        <h3><i className="fas fa-project-diagram"></i> Unified Campaign Manager</h3>
        <div className="platform-filters">
          {platformFilters.map(filter => (
            <button
              key={filter.id}
              className={selectedPlatform === filter.id ? 'active' : ''}
              onClick={() => setSelectedPlatform(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      <div className="campaign-grid">
        {campaigns.map(campaign => (
          <div key={campaign.id} className={`campaign-card ${campaign.platform}`}>
            <div className="campaign-meta">
              <span className={`platform-icon ${campaign.platform}`}>
                {campaign.platform === 'meta' && <i className="fab fa-facebook"></i>}
                {campaign.platform === 'google' && <i className="fab fa-google"></i>}
                {campaign.platform === 'tiktok' && <i className="fab fa-tiktok"></i>}
              </span>
              <h4>{campaign.name}</h4>
              <p className="campaign-status">{campaign.status}</p>
            </div>
            
            <div className="campaign-stats">
              <div className="stat">
                <label>Spend</label>
                <span>${campaign.spend.toLocaleString()}</span>
              </div>
              <div className="stat">
                <label>ROAS</label>
                <span className={campaign.roas >= 3 ? 'positive' : 'negative'}>
                  {campaign.roas}x
                </span>
              </div>
            </div>

            <button className="btn-optimize">
              <i className="fas fa-magic"></i> Optimize
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}