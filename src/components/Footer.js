import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Trader Board</p>
      <p>v1.0.0</p>
    </footer>
  );
};

export default Footer;