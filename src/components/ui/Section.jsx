"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

export default function Section({
  children,
  className,
  containerSize = 'default',
  background = 'white',
  spacing = 'default',
  ...props
}) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-secondary text-white',
    primary: 'bg-primary-50',
    accent: 'bg-accent-light',
  };

  const spacings = {
    small: 'py-4',
    default: 'py-8',
    large: 'py-12',
    xl: 'py-16',
  };

  return (
    <section
      className={cn(
        backgrounds[background],
        spacings[spacing],
        className
      )}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}

export function SectionTitle({
  children,
  className,
  subtitle,
  centered = false,
  ...props
}) {
  return (
    <div className={cn('mb-8', centered && 'text-center', className)} {...props}>
      <h2 className="text-3xl font-heading font-bold">{children}</h2>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  );
} 