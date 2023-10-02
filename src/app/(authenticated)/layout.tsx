import '../globals.scss'
import type { Metadata } from 'next'

import Header from "@/components/Header";
import Navbar from '@/components/Navbar'

const metadata: Metadata = {
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
      <body>
          <Navbar/>
          {children}
      </body>
    </html>
  )
}
