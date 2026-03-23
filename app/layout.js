import './globals.css';
import '@/app/styles/themes.module.css';
import { ThemeProvider } from '@/app/context/ThemeContext';

export const metadata = {
  title: 'Trader Board',
  description: 'Welcome to the future of trading.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
