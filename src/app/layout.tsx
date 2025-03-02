import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import "./fix.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

// Define fonts with proper weights and subsets
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} font-body antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 main-content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
