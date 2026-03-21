import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>Welcome to TraderBoard</h1>
      <p className={styles.heroDescription}>
        Your ultimate platform for real-time trading insights and community engagement.
      </p>
    </section>
  );
};

export default HeroSection;