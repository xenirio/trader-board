import React from 'react';
import PortfolioSummaryLayout from '../../components/PortfolioSummary/PortfolioSummaryLayout';
import PortfolioValueCard from '../../components/PortfolioSummary/PortfolioValueCard';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <PortfolioSummaryLayout>
        <PortfolioValueCard />
      </PortfolioSummaryLayout>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;