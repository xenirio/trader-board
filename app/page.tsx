import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Trader Board</h1>
      <p>Your dashboard for all things trading.</p>
    </div>
  );
}
