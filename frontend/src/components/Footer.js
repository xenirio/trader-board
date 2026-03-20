import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const version = "1.0.0"; // Placeholder for version number

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Trader Board</p>
      <p>Version {version}</p>
    </footer>
  );
};

export default Footer;
