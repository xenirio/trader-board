import React from 'react';
import styles from '../styles/Home.module.css';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <p className={styles.footerCopyright}>&copy; {currentYear} Trader Board. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
