import React from 'react';
import AssetAllocationChart from '../../components/AssetAllocationChart/AssetAllocationChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        {/* Other dashboard components would go here */}
        <div className="right-column">
          <AssetAllocationChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
