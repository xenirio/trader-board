import React from 'react';
import Header from '../components/Header/Header';
import './DashboardLandingPage.css'; // Assuming some page-level styling

const DashboardLandingPage = () => {
  return (
    <div className="dashboard-landing-page">
      <Header />
      <main>
        {/* Main content of the dashboard landing page */}
        <h1>Welcome to Your Trader Board Dashboard!</h1>
        <p>This is where your financial insights and tools will be displayed.</p>
      </main>
    </div>
  );
};

export default DashboardLandingPage;
