import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeReady } from "@/components/ui/theme-ready";
// Import the disable-static-generation file to disable static generation for the entire app
import "./disable-static-generation";

// Force dynamic rendering for the entire app
export const dynamic = 'force-dynamic';

// Define fonts with proper weights and subsets
const oswald = Oswald({ 
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "700"],
});

const roboto = Roboto({ 
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nak Muay Media | Muay Thai News, Training, and Community",
  description: "Your Ringside Seat to Muay Thai Action - The premier destination for Muay Thai news, events, fighter profiles, and community.",
  keywords: "Muay Thai, Thai Boxing, Combat Sports, Martial Arts, Fighters, Events, Training",
  authors: [{ name: "Nak Muay Media Team" }],
  creator: "Nak Muay Media",
  publisher: "Nak Muay Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nakmuaymedia.com",
    title: "Nak Muay Media | Muay Thai News, Training, and Community",
    description: "Your Ringside Seat to Muay Thai Action - The premier destination for Muay Thai news, events, fighter profiles, and community.",
    siteName: "Nak Muay Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nak Muay Media | Muay Thai News, Training, and Community",
    description: "Your Ringside Seat to Muay Thai Action - The premier destination for Muay Thai news, events, fighter profiles, and community.",
    creator: "@nakmuaymedia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${oswald.variable} ${roboto.variable} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ThemeReady>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 main-content">{children}</main>
              <Footer />
            </div>
          </ThemeReady>
        </ThemeProvider>
      </body>
    </html>
  );
}
