import React from 'react';
import styles from './FixedTopNavigationBar.module.css';

const FixedTopNavigationBar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.brand}>TraderBoard</div>
      </div>
      <div className={styles.centerSection}>
        <nav className={styles.navLinks}>
          <ul>
            <li>Dashboard</li>
            <li>Markets</li>
            <li>Portfolio</li>
            <li>Watchlist</li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.searchIcon}>Search</div>
        <div className={styles.notificationBell}>Bell</div>
        <div className={styles.userAvatar}>Avatar</div>
      </div>
      <div className={styles.hamburgerMenu}>☰</div>
    </header>
  );
};

export default FixedTopNavigationBar;