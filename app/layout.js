import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import './styles/themes.module.css';

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
