
import styles from './Features.module.css';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className={styles.card}>
    <div className={styles.icon}>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const featuresData: FeatureCardProps[] = [
  {
    icon: <span>📈</span>,
    title: 'Real-Time Data',
    description: 'Track stock prices and market changes as they happen.',
  },
  {
    icon: <span>📊</span>,
    title: 'Advanced Charting',
    description: 'Use advanced charting tools to analyze market trends.',
  },
  {
    icon: <span>🔔</span>,
    title: 'Custom Alerts',
    description: 'Set custom alerts for price changes and never miss an opportunity.',
  },
];

export const Features = () => (
  <section className={styles.featuresSection}>
    <h2>Features</h2>
    <div className={styles.featuresGrid}>
      {featuresData.map(feature => <FeatureCard key={feature.title} {...feature} />)}
    </div>
  </section>
);
