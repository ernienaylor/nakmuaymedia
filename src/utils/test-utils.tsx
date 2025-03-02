"use client"

import { useEffect, useState } from 'react'

/**
 * Hook to detect current viewport size and provide responsive breakpoint information
 * @returns Object with current viewport information
 */
export function useViewport() {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop' | 'unknown'>('unknown')
  
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        
        // Set breakpoint based on Tailwind's default breakpoints
        if (window.innerWidth < 640) {
          setBreakpoint('mobile')
        } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
          setBreakpoint('tablet')
        } else {
          setBreakpoint('desktop')
        }
      }
      
      // Set initial values
      handleResize()
      
      // Add event listener
      window.addEventListener('resize', handleResize)
      
      // Clean up
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return { width, height, breakpoint }
}

/**
 * Hook to detect if reduced motion is preferred
 * @returns Boolean indicating if reduced motion is preferred
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false)
  
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      
      const handleChange = () => {
        setPrefersReducedMotion(mediaQuery.matches)
      }
      
      // Set initial value
      handleChange()
      
      // Add event listener
      mediaQuery.addEventListener('change', handleChange)
      
      // Clean up
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])
  
  return prefersReducedMotion
}

/**
 * Hook to measure performance metrics
 * @returns Object with performance metrics
 */
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    fcp: 0, // First Contentful Paint
    lcp: 0, // Largest Contentful Paint
    cls: 0, // Cumulative Layout Shift
    fid: 0, // First Input Delay
  })
  
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        if (entries.length > 0) {
          const fcp = entries[0]
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }))
          fcpObserver.disconnect()
        }
      })
      
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        if (entries.length > 0) {
          const lcp = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }))
        }
      })
      
      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0
        for (const entry of entryList.getEntries()) {
          // Type assertion for layout shift entry
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number }
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }))
      })
      
      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        if (entries.length > 0) {
          // Type assertion for first input entry
          const fid = entries[0] as PerformanceEntry & { processingStart: number }
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }))
          fidObserver.disconnect()
        }
      })
      
      // Start observing
      try {
        fcpObserver.observe({ type: 'paint', buffered: true })
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
        clsObserver.observe({ type: 'layout-shift', buffered: true })
        fidObserver.observe({ type: 'first-input', buffered: true })
      } catch (e) {
        console.error('Performance observer error:', e)
      }
      
      // Clean up
      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        clsObserver.disconnect()
        fidObserver.disconnect()
      }
    }
  }, [])
  
  return metrics
}

/**
 * Component to display a visual grid overlay for layout debugging
 */
export function LayoutDebugger({ enabled = false }: { enabled?: boolean }) {
  if (!enabled) return null
  
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 px-4 mx-auto max-w-7xl opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-red-500 h-full"></div>
        ))}
      </div>
    </div>
  )
}

/**
 * Component to display performance metrics for debugging
 */
export function PerformanceDebugger({ enabled = false }: { enabled?: boolean }) {
  const metrics = usePerformanceMetrics()
  const { breakpoint } = useViewport()
  
  if (!enabled) return null
  
  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-black/80 text-white p-4 rounded-lg text-xs font-mono">
      <div>Breakpoint: {breakpoint}</div>
      <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
      <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
      <div>CLS: {metrics.cls.toFixed(4)}</div>
      <div>FID: {metrics.fid.toFixed(2)}ms</div>
    </div>
  )
}

/**
 * Component to highlight accessibility issues
 */
export function A11yDebugger({ enabled = false }: { enabled?: boolean }) {
  useEffect(() => {
    if (enabled && typeof window !== 'undefined') {
      // Highlight elements without alt text
      const imagesWithoutAlt = document.querySelectorAll('img:not([alt])')
      imagesWithoutAlt.forEach(img => {
        // Type assertion for HTMLImageElement
        (img as HTMLImageElement).style.outline = '3px solid red'
      })
      
      // Highlight elements with poor contrast (simplified check)
      const elements = document.querySelectorAll('*')
      elements.forEach(el => {
        const style = window.getComputedStyle(el)
        const color = style.color
        const bgColor = style.backgroundColor
        
        // Very simplified contrast check - just for demonstration
        if (color === 'rgb(255, 255, 255)' && bgColor === 'rgb(255, 255, 255)') {
          // Type assertion for HTMLElement
          (el as HTMLElement).style.outline = '3px dashed orange'
        }
      })
    }
    
    return () => {
      // Clean up
      if (enabled && typeof window !== 'undefined') {
        const highlightedElements = document.querySelectorAll('[style*="outline"]')
        highlightedElements.forEach(el => {
          // Type assertion for HTMLElement
          (el as HTMLElement).style.outline = ''
        })
      }
    }
  }, [enabled])
  
  return null
}

/**
 * Debug toolbar component that combines all debuggers
 */
export function DebugToolbar() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [activeTools, setActiveTools] = useState({
    layout: false,
    performance: false,
    a11y: false
  })
  
  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null
  
  return (
    <>
      <div className="fixed bottom-4 left-4 z-[10000] flex flex-col gap-2">
        <button 
          onClick={() => setIsEnabled(!isEnabled)}
          className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          {isEnabled ? '✕' : '🛠️'}
        </button>
        
        {isEnabled && (
          <div className="bg-black/80 p-3 rounded-lg flex flex-col gap-2 text-sm">
            <label className="flex items-center gap-2 text-white">
              <input 
                type="checkbox" 
                checked={activeTools.layout}
                onChange={() => setActiveTools(prev => ({ ...prev, layout: !prev.layout }))}
              />
              Layout Grid
            </label>
            <label className="flex items-center gap-2 text-white">
              <input 
                type="checkbox" 
                checked={activeTools.performance}
                onChange={() => setActiveTools(prev => ({ ...prev, performance: !prev.performance }))}
              />
              Performance
            </label>
            <label className="flex items-center gap-2 text-white">
              <input 
                type="checkbox" 
                checked={activeTools.a11y}
                onChange={() => setActiveTools(prev => ({ ...prev, a11y: !prev.a11y }))}
              />
              Accessibility
            </label>
          </div>
        )}
      </div>
      
      <LayoutDebugger enabled={isEnabled && activeTools.layout} />
      <PerformanceDebugger enabled={isEnabled && activeTools.performance} />
      <A11yDebugger enabled={isEnabled && activeTools.a11y} />
    </>
  )
} 