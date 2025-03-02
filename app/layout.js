import './globals.css';

export const metadata = {
  title: 'Nak Muay Media | Muay Thai News, Fighters, and Events',
  description: 'The premier destination for Muay Thai news, fighter profiles, and event coverage from around the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
} 