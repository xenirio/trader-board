import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © 2023 Trader Board
      </div>
      <div className={styles.version}>
        v1.0.0
      </div>
    </footer>
  );
};

export default Footer;