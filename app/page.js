import HeroSection from './components/HeroSection/HeroSection';
import FeatureCard from './components/FeatureCard/FeatureCard';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <section className={styles.features}>
          <FeatureCard
            title="Connect with Traders"
            description="Join a community of passionate traders and share your insights."
          />
          <FeatureCard
            title="Real-Time Data"
            description="Access up-to-the-minute market data and analysis tools."
          />
          <FeatureCard
            title="Learn & Grow"
            description="Improve your trading skills with resources from experienced members."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
