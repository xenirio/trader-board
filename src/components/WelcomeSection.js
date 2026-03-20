import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <h1>Welcome to Trader Board!</h1>
      <p>Your ultimate platform for managing and tracking your trading activities. Stay organized, analyze your performance, and make informed decisions.</p>
    </section>
  );
};

export default WelcomeSection;