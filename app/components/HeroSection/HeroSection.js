import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Welcome to Trader Board</h1>
      <p className={styles.description}>
        The ultimate platform for traders to connect, share, and learn.
      </p>
      <button className={styles.ctaButton}>Get Started</button>
    </section>
  );
}
