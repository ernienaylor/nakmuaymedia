"use client"

import React from 'react';
import { cn } from '@/lib/utils';

export default function Card({
  children,
  className,
  hover = false,
  ...props
}) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-card overflow-hidden',
        hover && 'transition-transform duration-300 hover:shadow-hover hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn('p-4 border-b border-gray-100', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn('p-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn('p-4 border-t border-gray-100', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}) {
  return (
    <h3
      className={cn('text-lg font-heading font-bold', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
  ...props
}) {
  return (
    <p
      className={cn('text-sm text-gray-500', className)}
      {...props}
    >
      {children}
    </p>
  );
} 