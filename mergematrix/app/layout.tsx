import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'MergeMatrix - PDF Merger',
  description: 'Merge your PDF files easily and securely',
  icons: {
    icon: [
      {
        url: '/icon.png',
        href: '/icon.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}