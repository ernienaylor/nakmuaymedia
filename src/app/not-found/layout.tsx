// This is a server component - no "use client" directive
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "../globals.css";
import "../fix.css";

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
  title: "404 - Page Not Found | Nak Muay Media",
  description: "The page you are looking for doesn't exist or has been moved.",
};

// These exports ensure this page is not statically generated
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'force-no-store'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

export default function NotFoundLayout({
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
        {children}
      </body>
    </html>
  );
} 