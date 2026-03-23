
"use client";

import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Trader Board</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
