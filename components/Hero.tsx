
import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Welcome to Trader Board</h1>
      <p className={styles.heroSubtitle}>
        Your ultimate platform for managing trades and tracking market insights.
      </p>
      <a href="#" className={styles.ctaButton}>Get Started</a>
    </div>
  );
};

export default Hero;
