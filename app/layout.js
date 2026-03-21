import './globals.css';

export const metadata = {
  title: 'Trader Board',
  description: 'Welcome to the future of trading.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
