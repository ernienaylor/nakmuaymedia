"use client"

import { useTheme as useNextTheme } from 'next-themes'

export function useSafeTheme() {
  try {
    const theme = useNextTheme()
    
    // If theme is undefined, provide default values
    if (theme.theme === undefined) {
      return {
        ...theme,
        theme: 'light',
        resolvedTheme: 'light',
        isDark: false,
        isLight: true,
      }
    }
    
    // Add convenience properties
    return {
      ...theme,
      isDark: theme.resolvedTheme === 'dark',
      isLight: theme.resolvedTheme === 'light',
    }
  } catch (error) {
    // If used outside of provider, return default values
    console.warn('useSafeTheme was used outside of ThemeProvider, using default values')
    return {
      theme: 'light',
      resolvedTheme: 'light',
      setTheme: () => {},
      themes: ['light', 'dark', 'system'],
      systemTheme: 'light',
      isDark: false,
      isLight: true,
    }
  }
} 