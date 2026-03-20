import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const appVersion = 'v1.0.0'; // Placeholder for version number

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© {currentYear} Trader Board</p>
      <p className={styles.version}>{appVersion}</p>
    </footer>
  );
};

export default Footer;