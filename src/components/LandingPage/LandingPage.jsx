import React from 'react';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Trader Board</h1>
        <p className={styles.paragraph}>Your ultimate platform for real-time trading insights.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <p className={styles.paragraph}>Access live market data, analyze trends, and make informed decisions with our powerful tools.</p>
        <p className={styles.paragraph}>Personalized dashboards, watchlists, and alerts keep you ahead of the market.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Get Started Today</h2>
        <p className={styles.paragraph}>Join thousands of successful traders who trust Trader Board for their daily market analysis.</p>
        <a href="/signup" className={styles.ctaButton}>Sign Up Now</a>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default LandingPage;