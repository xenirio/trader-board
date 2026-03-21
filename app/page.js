import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TraderBoard</h1>
      <p className={styles.subtitle}>Modern trader dashboard</p>
    </div>
  );
}
