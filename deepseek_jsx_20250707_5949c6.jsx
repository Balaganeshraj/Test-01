import React from 'react';
import PlatformComparison from './components/PlatformComparison';
import CreativeStudio from './components/CreativeStudio';
import CompetitorIntel from './components/CompetitorIntel';
import CampaignManager from './components/CampaignManager';

export default function App() {
  return (
    <div className="dashboard">
      <header>
        <h1>MetaDataFlow</h1>
        <div className="user-controls">
          <button className="btn-upgrade">Upgrade Plan</button>
        </div>
      </header>

      <main>
        <div className="dashboard-row">
          <PlatformComparison />
          <CompetitorIntel />
        </div>
        
        <div className="dashboard-row">
          <CampaignManager />
        </div>

        <div className="dashboard-row">
          <CreativeStudio />
        </div>
      </main>
    </div>
  );
}