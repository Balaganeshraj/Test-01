import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';

export default function PlatformComparison() {
  const [platformData, setPlatformData] = useState(null);

  useEffect(() => {
    // API call to fetch Meta/Google/TikTok performance
    fetch('/api/performance/comparison')
      .then(res => res.json())
      .then(data => setPlatformData(data));
  }, []);

  const chartData = {
    labels: ['CTR', 'CPC', 'ROAS', 'Impressions', 'Conversion Rate'],
    datasets: [
      {
        label: 'Meta',
        data: platformData?.meta || [],
        backgroundColor: 'rgba(59, 89, 152, 0.2)',
        borderColor: '#3b5998'
      },
      {
        label: 'Google Ads',
        data: platformData?.google || [],
        backgroundColor: 'rgba(66, 133, 244, 0.2)',
        borderColor: '#4285F4'
      },
      {
        label: 'TikTok',
        data: platformData?.tiktok || [],
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: '#000000'
      }
    ]
  };

  return (
    <div className="dashboard-card">
      <h3><i className="fas fa-chart-network"></i> Cross-Platform Performance</h3>
      <div className="chart-container">
        <Radar 
          data={chartData}
          options={{
            responsive: true,
            scales: {
              r: {
                angleLines: { display: true },
                suggestedMin: 0
              }
            }
          }}
        />
      </div>
    </div>
  );
}