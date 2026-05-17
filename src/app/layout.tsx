import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIVERSE Web Studio',
  description: 'Fast, professional websites for small businesses, founders, and local brands. Clean builds, clear offers, and fast deployment.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
