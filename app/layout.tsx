import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import './globals.css'

export const metadata: Metadata = {
  title: 'Calcul Mental',
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
    url: 'https://calcul-mental.vercel.app/',
    title: 'Calcul Mental',
    description: 'Le calcul mental accecible à tous et facilement.',
  },  
  keywords: ['calcul mental', 'mathématiques', 'apprentissage'],
  authors: [{ name: 'Augustin Briolon' }],
  alternates: { canonical: 'https://calcul-mental.vercel.app/' },
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
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}
