import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link"

// This is a simple 404 page that redirects to our custom not-found page
export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to our custom not-found page
    router.replace('/not-found');
  }, [router]);

  // This is just a placeholder - it should never be rendered
  // The useEffect will redirect to /not-found before this is rendered
  return null;
}

// A completely standalone 404 page that doesn't use any components
// that might depend on the theme context
export function Custom404Standalone() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      backgroundColor: "var(--background, white)",
      color: "var(--foreground, black)"
    }}>
      {/* Simple header */}
      <header style={{ 
        borderBottom: "1px solid var(--border, #e5e7eb)", 
        padding: "1rem 1.5rem" 
      }}>
        <div style={{ 
          maxWidth: "80rem", 
          margin: "0 auto", 
          padding: "0 1rem",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center" 
        }}>
          <Link href="/" style={{ 
            fontWeight: "bold", 
            fontSize: "1.5rem",
            fontFamily: "var(--font-heading, sans-serif)"
          }}>
            Nak Muay Media
          </Link>
        </div>
      </header>
      
      {/* Main content */}
      <main style={{ 
        flex: "1", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" 
      }}>
        <div style={{ 
          maxWidth: "80rem", 
          margin: "0 auto", 
          padding: "0 1rem",
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          textAlign: "center", 
          paddingTop: "5rem",
          paddingBottom: "5rem"
        }}>
          <h1 style={{ 
            fontSize: "3rem", 
            lineHeight: "1.2", 
            fontWeight: "700",
            marginBottom: "1.5rem" 
          }}>
            404 - Page Not Found
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            lineHeight: "1.75rem",
            marginBottom: "2rem",
            maxWidth: "28rem" 
          }}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/" style={{ 
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              height: "2.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "var(--accent, #0070f3)",
              color: "var(--accent-foreground, white)",
              textDecoration: "none"
            }}>
              Return Home
            </Link>
            <Link href="/contact" style={{ 
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              height: "2.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "transparent",
              color: "var(--foreground, black)",
              border: "1px solid var(--border, #e5e7eb)",
              textDecoration: "none"
            }}>
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      
      {/* Simple footer */}
      <footer style={{ 
        borderTop: "1px solid var(--border, #e5e7eb)", 
        padding: "1rem 1.5rem" 
      }}>
        <div style={{ 
          maxWidth: "80rem", 
          margin: "0 auto", 
          padding: "0 1rem",
          textAlign: "center" 
        }}>
          <p style={{ 
            fontSize: "0.875rem", 
            color: "var(--muted-foreground, #6b7280)" 
          }}>
            © {new Date().getFullYear()} Nak Muay Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 