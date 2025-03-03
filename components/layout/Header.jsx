'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SubNav from './SubNav';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path;
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Determine if we should show the sub-navigation
  const shouldShowSubNav = () => {
    return (
      pathname === '/news' ||
      pathname === '/videos' ||
      pathname === '/fighters' ||
      pathname === '/events' ||
      pathname.startsWith('/news/') ||
      pathname.startsWith('/videos/') ||
      pathname.startsWith('/fighters/') ||
      pathname.startsWith('/events/')
    );
  };

  return (
    <header style={{ backgroundColor: '#212121', color: '#ffffff' }}>
      {/* Top bar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span style={{ color: '#d32f2f' }} className="mr-2">Nak Muay</span> Media
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            href="/news" 
            className={`hover:text-primary transition-colors ${isActive('/news') ? 'text-primary font-medium' : ''}`}
            style={{ color: isActive('/news') ? '#d32f2f' : undefined }}
          >
            News
          </Link>
          <Link 
            href="/events" 
            className={`hover:text-primary transition-colors ${isActive('/events') ? 'text-primary font-medium' : ''}`}
            style={{ color: isActive('/events') ? '#d32f2f' : undefined }}
          >
            Events
          </Link>
          <Link 
            href="/fighters" 
            className={`hover:text-primary transition-colors ${isActive('/fighters') ? 'text-primary font-medium' : ''}`}
            style={{ color: isActive('/fighters') ? '#d32f2f' : undefined }}
          >
            Fighters
          </Link>
          <Link 
            href="/videos" 
            className={`hover:text-primary transition-colors ${isActive('/videos') ? 'text-primary font-medium' : ''}`}
            style={{ color: isActive('/videos') ? '#d32f2f' : undefined }}
          >
            Videos
          </Link>
          <Link 
            href="/podcast" 
            className={`hover:text-primary transition-colors ${isActive('/podcast') ? 'text-primary font-medium' : ''}`}
            style={{ color: isActive('/podcast') ? '#d32f2f' : undefined }}
          >
            Podcast
          </Link>
          <Link 
            href="/shop" 
            className={`hover:text-primary transition-colors ${isActive('/shop') ? 'text-primary font-medium' : ''}`}
            style={{ color: isActive('/shop') ? '#d32f2f' : undefined }}
          >
            Shop
          </Link>
          <Link 
            href="/community" 
            className={`hover:text-primary transition-colors ${isActive('/community') ? 'text-primary font-medium' : ''}`}
            style={{ color: isActive('/community') ? '#d32f2f' : undefined }}
          >
            Community
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-medium' : ''}`}
            style={{ color: isActive('/about') ? '#d32f2f' : undefined }}
          >
            About
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <button className="p-2 rounded-full transition-colors" style={{ backgroundColor: 'transparent', color: '#ffffff' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md transition-colors"
          style={{ backgroundColor: 'transparent', color: '#ffffff' }}
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden" style={{ backgroundColor: '#484848' }}>
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              href="/news" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/news') ? 'font-medium' : ''}`}
              style={{ color: isActive('/news') ? '#d32f2f' : '#ffffff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="/events" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/events') ? 'font-medium' : ''}`}
              style={{ color: isActive('/events') ? '#d32f2f' : '#ffffff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/fighters" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/fighters') ? 'font-medium' : ''}`}
              style={{ color: isActive('/fighters') ? '#d32f2f' : '#ffffff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Fighters
            </Link>
            <Link 
              href="/videos" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/videos') ? 'font-medium' : ''}`}
              style={{ color: isActive('/videos') ? '#d32f2f' : '#ffffff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Videos
            </Link>
            <Link 
              href="/podcast" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/podcast') ? 'font-medium' : ''}`}
              style={{ color: isActive('/podcast') ? '#d32f2f' : '#ffffff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Podcast
            </Link>
            <Link 
              href="/shop" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/shop') ? 'font-medium' : ''}`}
              style={{ color: isActive('/shop') ? '#d32f2f' : '#ffffff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/community" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/community') ? 'font-medium' : ''}`}
              style={{ color: isActive('/community') ? '#d32f2f' : '#ffffff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="/about" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/about') ? 'font-medium' : ''}`}
              style={{ color: isActive('/about') ? '#d32f2f' : '#ffffff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </nav>
      )}

      {/* Secondary Navigation */}
      {shouldShowSubNav() && <SubNav />}
    </header>
  );
} 