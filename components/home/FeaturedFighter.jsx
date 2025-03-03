import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedFighter({ fighter }) {
  if (!fighter) {
    return null;
  }

  return (
    <div style={{ backgroundColor: '#ffffff' }} className="rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 h-64 md:h-auto relative" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          {fighter.image ? (
            <Image 
              src={fighter.image} 
              alt={fighter.name} 
              fill 
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" style={{ color: 'rgba(0, 0, 0, 0.2)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-6 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold">Featured Fighter</div>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mt-2">{fighter.name}</h2>
          <p style={{ color: 'rgba(0, 0, 0, 0.5)' }} className="mt-1">{fighter.record}</p>
          <div className="mt-4">
            <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{fighter.bio}</p>
          </div>
          <div className="mt-6">
            <Link href={`/fighters/${fighter.slug}`} className="btn btn-primary">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 