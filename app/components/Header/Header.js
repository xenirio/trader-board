import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Trader Board</div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
