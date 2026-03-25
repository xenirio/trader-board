import ThemeToggle from '../theme-toggle/ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Trader Board</div>
      <nav>
        <ThemeToggle />
      </nav>
    </header>
  );
}
