import React from 'react';
import styles from '../styles/LandingPage.module.css';

const LandingPageSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Trader Board</h1>
      <p className={styles.paragraph}>
        Your ultimate platform for real-time trading insights and market analysis.
      </p>
    </div>
  );
};

export default LandingPageSection;
