"use client"

import * as React from "react"

// A simplified version of ThemeContext that doesn't depend on next-themes
// This is used for static pages like not-found.tsx
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