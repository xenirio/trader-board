'use client'; // This is a client-side layout

import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/themes.css";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

// Note: Metadata export is not supported in client-side layouts.
// It should be moved to a server-side parent layout if needed.
// For now, we'll keep it simple as the focus is on the theme toggle.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {/* We need a wrapper component to use the theme context for the header */}
          <ThemedLayout>
            {children}
          </ThemedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

function ThemedLayout({ children }) {
  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
        <ThemeToggle />
      </header>
      <main>{children}</main>
    </>
  );
}
