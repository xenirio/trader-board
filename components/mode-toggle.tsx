'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{ background: 'none', border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem', cursor: 'pointer' }}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      <span style={{ display: 'none' }}>Toggle theme</span>
    </button>
  );
}
