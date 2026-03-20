import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <h1 className={styles.welcomeTitle}>Welcome to Trader Board!</h1>
      <p className={styles.welcomeDescription}>
        Your ultimate platform for managing and tracking your trading activities.
      </p>
    </section>
  );
};

export default WelcomeSection;