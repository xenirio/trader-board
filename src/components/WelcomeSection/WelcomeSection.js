import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <h1 className={styles.heading}>Welcome to Trader Board</h1>
      <p className={styles.description}>
        Your ultimate platform for managing and tracking your trades. Stay organized, analyze your performance, and make informed decisions with ease.
      </p>
    </section>
  );
};

export default WelcomeSection;
