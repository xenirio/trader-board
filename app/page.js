import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <main className={styles.main}>
        <div className={styles.features}>
          <FeatureCard
            title="Real-Time Data"
            description="Get real-time market data to make informed decisions."
          />
          <FeatureCard
            title="Advanced Charting"
            description="Use our advanced charting tools to analyze market trends."
          />
          <FeatureCard
            title="Secure Wallet"
            description="Keep your assets secure with our integrated wallet."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
