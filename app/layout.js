export const metadata = {
  title: 'URBAN Thredz - Fashion Forward',
  description: 'Premium clothing brand for the modern trendsetter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
