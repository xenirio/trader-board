import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/themes.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trader Board",
  description: "A dashboard for traders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <ThemeToggle />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
