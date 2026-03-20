
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.appName}>Trader Board</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {/* Navigation links will go here */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
