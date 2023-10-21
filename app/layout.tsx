import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import Footer from '@/components/Footer'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Latrue',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={onest.className + "tracking-wider leading-normal"}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
