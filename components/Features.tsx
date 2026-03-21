
import React from 'react';
import styles from '../styles/Features.module.css';

const Features: React.FC = () => {
  return (
    <section className={styles.featuresContainer}>
      <h2 className={styles.featuresTitle}>Key Features</h2>
      <div className={styles.grid}>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>📈</span>
          <h3 className={styles.featureTitle}>Real-time Data</h3>
          <p className={styles.featureDescription}>
            Access up-to-the-minute market data and insights.
          </p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>📊</span>
          <h3 className={styles.featureTitle}>Portfolio Management</h3>
          <p className={styles.featureDescription}>
            Effortlessly manage your investment portfolio.
          </p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🤖</span>
          <h3 className={styles.featureTitle}>Automated Trading</h3>
          <p className={styles.featureDescription}>
            Set up automated trading strategies to maximize profits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
