
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>&copy; 2024 Trader Board. All rights reserved.</p>
      <ul className={styles.footerLinks}>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
