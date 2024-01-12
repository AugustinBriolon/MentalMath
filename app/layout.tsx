import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Header from './components/Header';

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mentalmath.august1.dev/'),
  title: 'MentalMath - Le calcul mental accecible à tous et facilement.',
  description: 'Le calcul mental accecible à tous et facilement.',
  manifest: '/favicon/manifest.json',
  icons: {
    icon: '/favicon/favicon-32x32.png',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon/favicon-32x32.png' },
      { rel: 'apple-touch-icon', url: '/favicon/apple-touch-icon.png' },
      { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon-precomposed.png' },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://mentalmath.august1.dev/',
    title: 'MentalMath - Le calcul mental accecible à tous et facilement.',
    description: 'Le calcul mental accecible à tous et facilement.',
    siteName: 'MentalMath',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
    locale: 'fr_FR',
  },
  keywords: ['calcul mental', 'mathématiques', 'apprentissage'],
  authors: [{ name: 'Augustin Briolon', url: 'https://august1.dev' }],
  alternates: { canonical: 'https://mentalmath.august1.dev/' },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    site: '@AugustinBriolon',
    creator: '@AugustinBriolon',
    images: "/favicon/android-chrome-512x512.png"
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  )
}
