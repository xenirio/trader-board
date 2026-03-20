import React from 'react';
import WelcomeSection from '../components/WelcomeSection';

const DashboardLandingPage = () => {
  return (
    <div>
      <WelcomeSection 
        title="Welcome to Trader Board" 
        description="Your personal dashboard for managing trades and market insights."
      />
      {/* Other dashboard content will go here */}
    </div>
  );
};

export default DashboardLandingPage;