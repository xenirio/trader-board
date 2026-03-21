export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>TraderBoard</title>
        <meta name="description" content="Modern trader dashboard" />
      </head>
      <body>{children}</body>
    </html>
  );
}