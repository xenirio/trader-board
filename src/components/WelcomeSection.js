
import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <div className={styles.welcomeContainer}>
      <h2>Welcome to Trader Board!</h2>
      <p>Your ultimate platform for managing and tracking your trading activities. Get started by exploring your dashboard.</p>
    </div>
  );
};

export default WelcomeSection;
