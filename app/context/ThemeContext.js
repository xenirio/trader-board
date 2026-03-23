
'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default to light

  useEffect(() => {
    // On mount, check localStorage for a saved theme
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no preference, check system preference
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme class to body and save to localStorage whenever theme changes
    document.body.className = `theme-${theme}`;
    localStorage.setItem('themePreference', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
