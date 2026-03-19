import React from 'react';
import WelcomeSection from '../components/WelcomeSection';

const Dashboard = () => {
  return (
    <div>
      <WelcomeSection />
      {/* Other dashboard content will go here */}
      <h2>Dashboard Content</h2>
      <p>This is where your trading data and tools will be displayed.</p>
    </div>
  );
};

export default Dashboard;
