import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iftekhar Ahmed Shafi - Technology Executive & Entrepreneur',
  description: 'Technology executive and entrepreneur with over 21 years of experience in enterprise IT solutions, business development, and strategic leadership. Partner Director & CBO at Technometrics Limited.',
  keywords: 'Iftekhar Ahmed Shafi, Technology Executive, Entrepreneur, Enterprise IT Solutions, Digital Transformation, Strategic Leadership, Technometrics Limited, Bangladesh IT',
  authors: [{ name: 'Iftekhar Ahmed Shafi' }],
  creator: 'Iftekhar Ahmed Shafi',
  publisher: 'Iftekhar Ahmed Shafi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iftekharshafi.org',
    siteName: 'Iftekhar Ahmed Shafi',
    title: 'Iftekhar Ahmed Shafi - Technology Executive & Entrepreneur',
    description: 'Technology executive and entrepreneur with over 21 years of experience in enterprise IT solutions, business development, and strategic leadership.',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 600,
        alt: 'Iftekhar Ahmed Shafi',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iftekhar Ahmed Shafi - Technology Executive & Entrepreneur',
    description: 'Technology executive and entrepreneur with over 21 years of experience in enterprise IT solutions.',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-site-verification-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://iftekharshafi.org" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
} 