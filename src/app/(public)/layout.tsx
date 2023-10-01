import '../globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASA',
  description: 'ASA application for donations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
