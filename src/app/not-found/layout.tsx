// This is a server component - no "use client" directive
import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "../globals.css";
import "../fix.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeReady } from "@/components/ui/theme-ready";

// Import the configuration file to disable static generation
import "./config"

// Force dynamic rendering
export const dynamic = 'force-dynamic'

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
  title: "404 - Page Not Found | Nak Muay Media",
  description: "The page you are looking for doesn't exist or has been moved.",
};

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${oswald.variable} ${roboto.variable} font-body antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ThemeReady>
            {children}
          </ThemeReady>
        </ThemeProvider>
      </body>
    </html>
  );
} 