import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Header from './components/Header';

import './globals.css'

export const metadata: Metadata = {
  title: 'MentalMath',
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
    locale: 'fr_FR',
    url: 'https://mentalmath.vercel.app/',
    title: 'MentalMath',
    description: 'Le calcul mental accecible à tous et facilement.',
  },
  keywords: ['calcul mental', 'mathématiques', 'apprentissage'],
  authors: [{ name: 'Augustin Briolon' }],
  alternates: { canonical: 'https://mentalmath.vercel.app/' },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    site: '@ton_compte_twitter',
    creator: '@ton_compte_twitter',
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className='max-w-default mx-auto'>
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  )
}
