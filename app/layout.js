import './globals.css'

export const metadata = {
  title: 'TraderBoard',
  description: 'Modern trader dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}