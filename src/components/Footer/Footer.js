import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Trader Board</p>
      <p>Version 1.0.0</p>
    </footer>
  );
};

export default Footer;