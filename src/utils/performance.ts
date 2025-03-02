/**
 * Utility functions for performance monitoring and optimization
 */

/**
 * Debounce function to limit how often a function can be called
 * @param func The function to debounce
 * @param wait The time to wait in milliseconds
 * @returns A debounced version of the function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function to limit how often a function can be called
 * @param func The function to throttle
 * @param limit The time limit in milliseconds
 * @returns A throttled version of the function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  let lastFunc: ReturnType<typeof setTimeout>
  let lastRan: number
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      lastRan = Date.now()
      inThrottle = true
      
      setTimeout(() => {
        inThrottle = false
      }, limit)
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

/**
 * Lazy load images that are not handled by Next.js Image component
 * @param imageSelector The CSS selector for images to lazy load
 */
export function lazyLoadImages(imageSelector: string = 'img.lazy'): void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return
  }
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement
        const src = image.dataset.src
        
        if (src) {
          image.src = src
          image.classList.remove('lazy')
          imageObserver.unobserve(image)
        }
      }
    })
  })
  
  const images = document.querySelectorAll(imageSelector)
  images.forEach((image) => {
    imageObserver.observe(image)
  })
}

/**
 * Measure and log component render time
 * @param componentName The name of the component
 * @param callback Optional callback with timing information
 * @returns A cleanup function to call when component unmounts
 */
export function measureRenderTime(
  componentName: string,
  callback?: (timing: { mount: number; update: number; unmount: number }) => void
): () => void {
  const timing = {
    mount: 0,
    update: 0,
    unmount: 0
  }
  
  const startTime = performance.now()
  let updateStartTime = 0
  
  // Record mount time
  timing.mount = performance.now() - startTime
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${componentName} mounted in ${timing.mount.toFixed(2)}ms`)
  }
  
  // Setup for measuring updates
  updateStartTime = performance.now()
  
  // Return cleanup function
  return () => {
    timing.unmount = performance.now() - updateStartTime
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} unmounted in ${timing.unmount.toFixed(2)}ms`)
    }
    
    if (callback) {
      callback(timing)
    }
  }
}

/**
 * Check if the browser supports certain performance features
 * @returns An object with boolean flags for supported features
 */
export function checkPerformanceSupport(): {
  observer: boolean;
  api: boolean;
  memory: boolean;
  navigation: boolean;
} {
  if (typeof window === 'undefined') {
    return {
      observer: false,
      api: false,
      memory: false,
      navigation: false
    }
  }
  
  return {
    observer: 'PerformanceObserver' in window,
    api: 'performance' in window,
    memory: !!(window.performance as any)?.memory,
    navigation: !!(window.performance as any)?.navigation
  }
}

/**
 * Get basic performance metrics for the current page
 * @returns An object with performance metrics
 */
export function getPagePerformance(): {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  domInteractive: number;
  domComplete: number;
} {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return {
      loadTime: 0,
      domContentLoaded: 0,
      firstPaint: 0,
      firstContentfulPaint: 0,
      domInteractive: 0,
      domComplete: 0
    }
  }
  
  const perf = window.performance
  const navTiming = perf.timing
  
  // Calculate basic metrics
  const loadTime = navTiming.loadEventEnd - navTiming.navigationStart
  const domContentLoaded = navTiming.domContentLoadedEventEnd - navTiming.navigationStart
  const domInteractive = navTiming.domInteractive - navTiming.navigationStart
  const domComplete = navTiming.domComplete - navTiming.navigationStart
  
  // Get paint metrics if available
  let firstPaint = 0
  let firstContentfulPaint = 0
  
  const paintMetrics = perf.getEntriesByType('paint')
  if (paintMetrics.length) {
    const fpEntry = paintMetrics.find(entry => entry.name === 'first-paint')
    const fcpEntry = paintMetrics.find(entry => entry.name === 'first-contentful-paint')
    
    if (fpEntry) firstPaint = fpEntry.startTime
    if (fcpEntry) firstContentfulPaint = fcpEntry.startTime
  }
  
  return {
    loadTime,
    domContentLoaded,
    firstPaint,
    firstContentfulPaint,
    domInteractive,
    domComplete
  }
} 