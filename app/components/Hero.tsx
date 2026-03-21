import React from 'react';
import styles from '../styles/Home.module.css';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.heroHeadline}>Welcome to Trader Board</h1>
        <p className={styles.heroSubtext}>
          Your ultimate platform for real-time market data and trading insights.
        </p>
        <a href="#" className={styles.ctaButton}>Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
