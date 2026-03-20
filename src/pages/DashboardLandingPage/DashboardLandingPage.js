import React from 'react';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import styles from './DashboardLandingPage.module.css';

const DashboardLandingPage = () => {
  return (
    <div className={styles.dashboardLandingPage}>
      <WelcomeSection />
      {/* Other dashboard content will go here */}
    </div>
  );
};

export default DashboardLandingPage;