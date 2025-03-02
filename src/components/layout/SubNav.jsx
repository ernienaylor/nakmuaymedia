"use client"

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function SubNav({ items, activePath, className }) {
  return (
    <div className={cn('bg-primary-50 py-3', className)}>
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap gap-4">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-primary-700 hover:text-primary-900 font-medium',
                activePath === item.href && 'text-primary-900 font-bold'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
} 