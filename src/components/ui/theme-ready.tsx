"use client"

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface ThemeReadyProps {
  children: React.ReactNode
}

export function ThemeReady({ children }: ThemeReadyProps) {
  const [isThemeReady, setIsThemeReady] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  
  useEffect(() => {
    // Check if theme is available
    if (theme !== undefined && resolvedTheme !== undefined) {
      setIsThemeReady(true)
    }
  }, [theme, resolvedTheme])

  // Show nothing until theme is ready
  if (!isThemeReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-muted rounded"></div>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 