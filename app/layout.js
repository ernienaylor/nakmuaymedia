import './globals.css';
import { Roboto, Oswald } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Define fonts
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});

export const metadata = {
  title: 'Nak Muay Media | Muay Thai News, Fighters, and Events',
  description: 'The premier destination for Muay Thai news, fighter profiles, and event coverage from around the world.',
  keywords: ['Muay Thai', 'kickboxing', 'martial arts', 'combat sports', 'fighting', 'MMA', 'Thailand'],
  openGraph: {
    title: 'Nak Muay Media | Your Ringside Seat to Muay Thai Action',
    description: 'Your source for Muay Thai news, fighter profiles, technique breakdowns, and event coverage.',
    url: 'https://nakmuaymedia.vercel.app',
    siteName: 'Nak Muay Media',
    images: [
      {
        url: 'https://nakmuaymedia.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nak Muay Media | Your Ringside Seat to Muay Thai Action',
    description: 'Your source for Muay Thai news, fighter profiles, technique breakdowns, and event coverage.',
    images: ['https://nakmuaymedia.vercel.app/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 