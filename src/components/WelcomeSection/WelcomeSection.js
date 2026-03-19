import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <h1 className={styles.heading}>Welcome to Trader Board!</h1>
      <p className={styles.description}>Your personal platform for managing trades and investments.</p>
    </section>
  );
};

export default WelcomeSection;