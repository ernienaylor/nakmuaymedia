import Link from "next/link"
import { Button } from "@/components/ui/button"

// A simple 404 page that doesn't depend on any context providers
export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Simple header */}
      <header className="border-b py-4 px-6">
        <div className="container flex justify-between items-center">
          <Link href="/" className="font-heading font-bold text-2xl">
            Nak Muay Media
          </Link>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center text-center py-20">
          <h1 style={{ fontSize: "3rem", lineHeight: "1.2", fontWeight: "700" }} className="mb-6">
            404 - Page Not Found
          </h1>
          <p style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }} className="mb-8 max-w-md">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/">
                Return Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      {/* Simple footer */}
      <footer className="border-t py-4 px-6">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nak Muay Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 