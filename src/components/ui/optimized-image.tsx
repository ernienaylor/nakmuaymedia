"use client"

import { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  fallbackColor?: string
  aspectRatio?: string
  wrapperClassName?: string
}

/**
 * OptimizedImage component that enhances the Next.js Image component with:
 * - Blur-up placeholder effect
 * - Proper aspect ratio preservation
 * - Loading state visualization
 * - Error handling with fallback
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackColor = '#f3f4f6', // Default light gray
  aspectRatio = 'aspect-video', // Default 16:9
  wrapperClassName,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [error, setError] = useState(false)

  // Reset loading state when src changes
  useEffect(() => {
    if (!priority) {
      setIsLoading(true)
      setError(false)
    }
  }, [src, priority])

  // Handle image load complete
  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  // Handle image load error
  const handleError = () => {
    setIsLoading(false)
    setError(true)
  }

  return (
    <div 
      className={cn(
        'relative overflow-hidden bg-neutral-100', 
        aspectRatio,
        wrapperClassName
      )}
      style={{ backgroundColor: fallbackColor }}
    >
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-neutral-200" />
      )}

      {/* Error fallback */}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
          <span className="text-sm text-neutral-500">Image not available</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            'object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          onLoad={handleLoadComplete}
          onError={handleError}
          priority={priority}
          {...props}
        />
      )}
    </div>
  )
}

/**
 * Hero image variant with enhanced loading effects
 */
export function HeroImage({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  priority = true,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('transition-transform duration-700 hover:scale-105', className)}
      wrapperClassName={cn('aspect-[16/9] md:aspect-[21/9]', wrapperClassName)}
      priority={priority}
      {...props}
    />
  )
}

/**
 * Article thumbnail variant with consistent aspect ratio
 */
export function ArticleThumbnail({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 225}
      className={cn('transition-all duration-300 hover:brightness-110', className)}
      wrapperClassName={cn('aspect-[16/9] rounded-lg overflow-hidden', wrapperClassName)}
      {...props}
    />
  )
}

/**
 * Profile image variant with rounded style
 */
export function ProfileImage({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width || 100}
      height={height || 100}
      className={cn('rounded-full', className)}
      wrapperClassName={cn('aspect-square rounded-full', wrapperClassName)}
      {...props}
    />
  )
} 