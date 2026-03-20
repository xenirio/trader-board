import React from 'react';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';

const DashboardLandingPage = () => {
  return (
    <div>
      <WelcomeSection
        heading="Welcome to Trader Board"
        description="Your personal dashboard to track and manage your trades effectively."
      />
      {/* Other dashboard content will go here */}
    </div>
  );
};

export default DashboardLandingPage;