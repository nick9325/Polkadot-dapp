import './globals.css'
import type { Metadata } from 'next'
import ClientProviders from './providers'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'InkDapps',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
        </body>
    </html>
  )
}
