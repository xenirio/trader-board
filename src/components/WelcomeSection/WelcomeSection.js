import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <div className={styles.welcomeSection}>
      <h1 className={styles.heading}>Welcome to Trader Board</h1>
      <p className={styles.description}>
        Your ultimate platform for managing and tracking your trading activities. Get insights into your portfolio, monitor performance, and make informed decisions.
      </p>
    </div>
  );
};

export default WelcomeSection;