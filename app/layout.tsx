import type React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bitcoin Pizza Day 2025 - La Crypta',
  description:
    'Conectá con la Comunidad Bitcoiner. Una noche de networking, conocimiento y celebración de la primera transacción comercial con Bitcoin.',
  keywords: ['Bitcoin', 'Pizza Day', 'La Crypta', 'Evento', 'Networking', 'Criptomonedas', 'Buenos Aires'],
  authors: [{ name: 'La Crypta' }, { name: 'LaWallet' }],
  creator: 'La Crypta',
  publisher: 'La Crypta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pizza.lacrypta.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bitcoin Pizza Day 2025 - Conectá con la Comunidad Bitcoiner',
    description: 'Una noche de networking, conocimiento y celebración de la primera transacción comercial con Bitcoin.',
    url: 'https://pizza.lacrypta.ar',
    siteName: 'Bitcoin Pizza Day 2025',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Pizza Day 2025 - La Crypta',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Pizza Day 2025 - Conectá con la Comunidad Bitcoiner',
    description: 'Una noche de networking, conocimiento y celebración de la primera transacción comercial con Bitcoin.',
    creator: '@lacryptaok',
    images: ['/og-image.png'],
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
  category: 'evento',
  other: {
    'event:location': 'La Crypta, Buenos Aires',
    'event:date': '2025-05-23T19:00:00-03:00',
    'event:end_date': '2025-05-23T23:59:00-03:00',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`} />
        <Script id='google-analytics'>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');
      `}
        </Script>
      </head>
      <body className={`bg-black ${inter.className}}`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
