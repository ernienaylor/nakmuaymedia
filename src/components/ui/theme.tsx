"use client"

import React from 'react'
import { cva } from 'class-variance-authority'

// Button component variants
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:bg-accent/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-muted hover:text-accent",
        link: "underline-offset-4 hover:underline text-accent hover:text-accent/80",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Card component variants
export const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-card transition-all duration-200",
  {
    variants: {
      variant: {
        default: "hover:shadow-card-hover",
        flat: "shadow-none",
        outline: "shadow-none border-2",
        elevated: "shadow-lg hover:shadow-xl",
      },
      padding: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

// Typography variants
export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-5xl font-heading font-bold tracking-wide uppercase mb-6",
      h2: "text-4xl font-heading font-bold tracking-wide uppercase mb-5",
      h3: "text-3xl font-heading font-bold tracking-wide uppercase mb-4",
      h4: "text-2xl font-heading font-bold tracking-wide uppercase mb-3",
      h5: "text-xl font-heading font-bold tracking-wide uppercase mb-2",
      h6: "text-lg font-heading font-bold tracking-wide uppercase mb-2",
      p: "text-base leading-relaxed mb-4",
      lead: "text-xl leading-relaxed mb-4",
      large: "text-lg font-medium",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      link: "text-accent underline-offset-4 hover:underline",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

// Badge variants
export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-accent text-accent-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        ghost: "border-transparent bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Input variants
export const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        ghost: "border-none shadow-none focus-visible:ring-0",
        bordered: "border-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Container variants
export const containerVariants = cva("mx-auto px-4 md:px-8", {
  variants: {
    size: {
      default: "max-w-7xl",
      tight: "max-w-4xl",
      wide: "max-w-screen-2xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

// Section variants
export const sectionVariants = cva("", {
  variants: {
    padding: {
      default: "py-12 md:py-24",
      sm: "py-6 md:py-12",
      lg: "py-16 md:py-32",
      none: "py-0",
    },
    background: {
      default: "bg-background",
      muted: "bg-muted",
      accent: "bg-accent text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      light: "bg-gray-light",
    },
  },
  defaultVariants: {
    padding: "default",
    background: "default",
  },
})

// Theme context for global theme settings
type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = React.useState(false)

  // Check for user preference on mount
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }
  return context
} 