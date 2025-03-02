# Vercel Build Fix Documentation

## Issue

During the Vercel build process, an error was encountered with the `/_not-found` page:

```
Error: useTheme must be used within a ThemeContextProvider
```

This error occurred because the static generation process was trying to render components that use the `useTheme` hook, but the `ThemeContextProvider` was not properly initialized during static generation.

## Solution

We implemented a comprehensive approach to fix the issue:

1. **Created a completely separate not-found page**: We created a new not-found page in `/src/app/not-found/` with its own layout that doesn't use the theme context. This ensures that the page is completely isolated from the theme context.

2. **Updated the 404 page in the pages directory**: We also updated the `src/pages/404.tsx` file to use the same standalone approach, ensuring that it doesn't depend on any components that might use the theme context.

3. **Disabled static generation for the not-found page**: We updated the Next.js configuration to disable static generation for the not-found page. This includes:
   - Setting `output: 'standalone'` in `next.config.js`
   - Adding `unstable_excludeFiles` to exclude not-found and 404 pages from static generation
   - Creating special configuration files for the not-found page
   - Adding environment variables to disable static generation for the not-found page
   - Creating a middleware to handle 404 pages

4. **Added special route configuration**: We created a special route handler for the not-found page to ensure it's not statically generated.

5. **Updated Vercel configuration**: We updated the `vercel.json` file to configure how 404 pages are handled, including adding a custom route for 404 pages.

## Technical Details

### Next.js Configuration

We updated the `next.config.js` file to disable static generation for the not-found page and to rewrite the `/_not-found` route to our custom not-found page:

```js
// next.config.js
const nextConfig = {
  // ... other configuration
  
  // Configure rewrites if needed
  async rewrites() {
    return [
      // Rewrite the /_not-found route to our custom not-found page
      {
        source: '/_not-found',
        destination: '/not-found',
      },
    ];
  },
  
  // Disable static generation for specific pages
  output: 'standalone',
  // Configure which pages should not be statically generated
  unstable_excludeFiles: [
    '**/not-found.js', 
    '**/not-found.js.map', 
    '**/404.js', 
    '**/404.js.map',
    '**/not-found/**',
  ],
};
```

### Not Found Page Layout

We created a special layout for the not-found page that doesn't use the theme context:

```tsx
// src/app/not-found/layout.tsx
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
```

### Not Found Page

We created a special not-found page that doesn't use the theme context:

```tsx
// src/app/not-found/page.tsx
// This is a server component - no "use client" directive
import Link from "next/link"

// These exports ensure this page is not statically generated
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'force-no-store'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

export default function NotFoundPage() {
  // Component implementation with inline styles
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      backgroundColor: "var(--background, white)",
      color: "var(--foreground, black)"
    }}>
      {/* Header, main content, and footer with inline styles */}
      {/* ... */}
    </div>
  )
}
```

### Middleware

We updated the middleware to handle 404 pages:

```js
// src/middleware.js
import { NextResponse } from 'next/server';

// This middleware is used to handle 404 pages
// It ensures that the not-found page is not statically generated
export function middleware(request) {
  // Check if the request is for the not-found page
  if (request.nextUrl.pathname === '/_not-found') {
    // Redirect to our custom not-found page
    return NextResponse.redirect(new URL('/not-found', request.url));
  }

  // Continue with the request
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ['/_not-found', '/_not-found/(.*)'],
};
```

### Vercel Configuration

We updated the `vercel.json` file to configure how 404 pages are handled:

```json
{
  // ... other configuration
  
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "status": 404, "dest": "/404.html" }
  ],
  "build": {
    "env": {
      "NEXT_PUBLIC_DISABLE_STATIC_NOT_FOUND": "true"
    }
  }
}
```

### Environment Variables

We created an environment variable file to disable static generation for the not-found page:

```
# .env.production
NEXT_PUBLIC_DISABLE_STATIC_NOT_FOUND=true
NEXT_DISABLE_STATIC_NOT_FOUND=true

# Force dynamic rendering for all pages
NEXT_RUNTIME_NODE_ENV=production
```

## Future Considerations

1. **Review other static pages**: Check if there are other pages that might be statically generated and ensure they don't depend on the `useTheme` hook.

2. **Consider using a more robust solution**: If theme context is needed during static generation, consider using a more robust solution like server-side rendering or client-side hydration.

3. **Update the theme context**: Consider updating the theme context to handle static generation more gracefully, perhaps by checking if `window` is defined before accessing it.

4. **Use the `suppressHydrationWarning` attribute**: If you're using client-side hydration, consider adding the `suppressHydrationWarning` attribute to elements that might have different values during server-side rendering and client-side hydration. 