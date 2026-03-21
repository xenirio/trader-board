import React from 'react';
import FeatureCard from './FeatureCard';
import styles from '../styles/Home.module.css';

const Features: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2>Key Features</h2>
        <div className={styles.featuresGrid}>
          <FeatureCard
            icon="📊"
            title="Real-time Data"
            description="Access up-to-the-minute market data for informed decisions."
          />
          <FeatureCard
            icon="📈"
            title="Advanced Analytics"
            description="Utilize powerful tools to analyze market trends and patterns."
          />
          <FeatureCard
            icon="💬"
            title="Community Support"
            description="Connect with other traders and share insights."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
