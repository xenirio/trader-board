import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Welcome to Trader Board</h1>
        <p className={styles.subtitle}>Your one-stop solution for tracking the market.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </section>
  );
}
