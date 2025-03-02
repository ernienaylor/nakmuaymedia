# Vercel Build Fix Documentation

## Issue

During the Vercel build process, an error was encountered with the `/_not-found` page:

```
Error: useTheme must be used within a ThemeContextProvider
```

This error occurred because the static generation process was trying to render components that use the `useTheme` hook, but the `ThemeContextProvider` was not properly initialized during static generation.

## Solution

We implemented the following changes to fix the issue:

1. **Created a simplified not-found page**: We updated the `src/app/not-found.tsx` file to use a simplified layout that doesn't depend on components that use the `useTheme` hook. This page now has its own simple header and footer instead of using the shared `Header` and `Footer` components.

2. **Created a static theme provider**: We created a new `src/components/ui/static-theme-provider.tsx` file that provides a simplified theme context that doesn't depend on `next-themes`. This provider can be used during static generation without causing errors.

3. **Used the static theme provider in the not-found page**: We wrapped the not-found page with the `StaticThemeProvider` to ensure it has access to a theme context during static generation.

4. **Verified the 404 page in the pages directory**: We confirmed that the `src/pages/404.tsx` file already exists and doesn't depend on the `ThemeContextProvider`. This page handles the `/_not-found` route during static generation.

## Technical Details

### Static Theme Provider

The static theme provider is a simplified version of the theme context that doesn't depend on `next-themes`. It provides a basic theme context with an `isDark` state and a `toggleTheme` function.

```tsx
// src/components/ui/static-theme-provider.tsx
"use client"

import * as React from "react"

type StaticThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
}

const StaticThemeContext = React.createContext<StaticThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
})

export function StaticThemeProvider({ 
  children,
  defaultIsDark = false
}: { 
  children: React.ReactNode
  defaultIsDark?: boolean
}) {
  const [isDark, setIsDark] = React.useState(defaultIsDark)

  const toggleTheme = React.useCallback(() => {
    setIsDark(prev => !prev)
  }, [])

  const value = React.useMemo(() => ({
    isDark,
    toggleTheme
  }), [isDark, toggleTheme])

  return (
    <StaticThemeContext.Provider value={value}>
      {children}
    </StaticThemeContext.Provider>
  )
}

export function useStaticTheme() {
  return React.useContext(StaticThemeContext)
}
```

### Not Found Page

The not-found page now uses a simplified layout that doesn't depend on components that use the `useTheme` hook:

```tsx
// src/app/not-found.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StaticThemeProvider } from "@/components/ui/static-theme-provider"

export default function NotFound() {
  return (
    <StaticThemeProvider>
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
    </StaticThemeProvider>
  )
}
```

## Future Considerations

1. **Review other static pages**: Check if there are other pages that might be statically generated and ensure they don't depend on the `useTheme` hook.

2. **Consider using a more robust solution**: If theme context is needed during static generation, consider using a more robust solution like server-side rendering or client-side hydration.

3. **Update the theme context**: Consider updating the theme context to handle static generation more gracefully, perhaps by checking if `window` is defined before accessing it. 