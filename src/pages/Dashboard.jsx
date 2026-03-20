import React from 'react';
import MarketSummaryCardsContainer from '../components/MarketSummaryCardsContainer';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <MarketSummaryCardsContainer />
      {/* Other dashboard content can go here */}
    </div>
  );
};

export default Dashboard;
