// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Trader Board</h1>
      <nav>
        {/* Navigation links will go here */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;