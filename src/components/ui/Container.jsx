"use client"

import React from 'react';
import { cn } from '@/lib/utils';

export default function Container({
  children,
  className,
  size = 'default',
  ...props
}) {
  const sizes = {
    small: 'max-w-3xl',
    default: 'max-w-6xl',
    large: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 