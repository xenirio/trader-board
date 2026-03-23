"use client";

import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.toggleButton}>
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  );
};

export default ThemeToggle;
