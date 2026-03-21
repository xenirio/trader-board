import './globals.css';

export const metadata = {
  title: 'Trader Board',
  description: 'Welcome to Trader Board',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
