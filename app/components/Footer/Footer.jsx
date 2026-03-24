import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Trader Board. All rights reserved.</p>
        <nav className={styles.nav}>
          <a href="/about" className={styles.link}>About</a>
          <a href="/contact" className={styles.link}>Contact</a>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
