import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './page.module.css'
import Link from 'next/link'
import DropdownHeader from '@/components/DropdownHeader'
import { Suspense } from 'react'
import { Button } from 'antd'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alaska',
  description: 'Generated by @primebit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Raleway:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <header className={styles.header}>
          <Link href={'/'}>
          <h1 className={styles.logo}>Alaska</h1>
          </Link>
          <nav className={styles.nav}>
            <DropdownHeader/>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <p>&copy; 2024 @primebit. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
