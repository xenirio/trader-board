'use client';

import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  if (!theme) {
    // Avoid rendering button until theme is determined client-side
    return null; 
  }

  return (
    <button onClick={toggleTheme} className={styles.toggleButton}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
