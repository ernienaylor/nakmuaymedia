'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SubNav from './SubNav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Active link style helper
  const isActive = (path) => {
    return pathname === path;
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
    <header className="bg-secondary shadow-header">
      {/* Top bar with logo and main navigation */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-white font-heading text-2xl font-bold tracking-tight">
                Nak Muay Media
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${isActive('/') ? 'text-primary' : 'text-white'} hover:text-primary-light font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              href="/news"
              className={`${isActive('/news') || pathname.startsWith('/news/') ? 'text-primary' : 'text-white'} hover:text-primary-light font-medium transition-colors duration-200`}
            >
              News
            </Link>
            <Link
              href="/videos"
              className={`${isActive('/videos') || pathname.startsWith('/videos/') ? 'text-primary' : 'text-white'} hover:text-primary-light font-medium transition-colors duration-200`}
            >
              Videos
            </Link>
            <Link
              href="/podcast"
              className={`${isActive('/podcast') || pathname.startsWith('/podcast/') ? 'text-primary' : 'text-white'} hover:text-primary-light font-medium transition-colors duration-200`}
            >
              Podcast
            </Link>
            <Link
              href="/events"
              className={`${isActive('/events') || pathname.startsWith('/events/') ? 'text-primary' : 'text-white'} hover:text-primary-light font-medium transition-colors duration-200`}
            >
              Events
            </Link>
            <Link
              href="/fighters"
              className={`${isActive('/fighters') || pathname.startsWith('/fighters/') ? 'text-primary' : 'text-white'} hover:text-primary-light font-medium transition-colors duration-200`}
            >
              Fighters
            </Link>
            <Link
              href="/shop"
              className={`${isActive('/shop') || pathname.startsWith('/shop/') ? 'text-primary' : 'text-white'} hover:text-primary-light font-medium transition-colors duration-200`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`${isActive('/about') ? 'text-primary' : 'text-white'} hover:text-primary-light font-medium transition-colors duration-200`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation dropdown */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-secondary-light`}>
        <div className="container-custom py-3">
          <nav className="grid gap-y-3">
            <Link
              href="/"
              className={`${isActive('/') ? 'text-primary' : 'text-white'} hover:text-primary-light px-2 py-1 rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/news"
              className={`${isActive('/news') || pathname.startsWith('/news/') ? 'text-primary' : 'text-white'} hover:text-primary-light px-2 py-1 rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/videos"
              className={`${isActive('/videos') || pathname.startsWith('/videos/') ? 'text-primary' : 'text-white'} hover:text-primary-light px-2 py-1 rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
            </Link>
            <Link
              href="/podcast"
              className={`${isActive('/podcast') || pathname.startsWith('/podcast/') ? 'text-primary' : 'text-white'} hover:text-primary-light px-2 py-1 rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              Podcast
            </Link>
            <Link
              href="/events"
              className={`${isActive('/events') || pathname.startsWith('/events/') ? 'text-primary' : 'text-white'} hover:text-primary-light px-2 py-1 rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/fighters"
              className={`${isActive('/fighters') || pathname.startsWith('/fighters/') ? 'text-primary' : 'text-white'} hover:text-primary-light px-2 py-1 rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              Fighters
            </Link>
            <Link
              href="/shop"
              className={`${isActive('/shop') || pathname.startsWith('/shop/') ? 'text-primary' : 'text-white'} hover:text-primary-light px-2 py-1 rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`${isActive('/about') ? 'text-primary' : 'text-white'} hover:text-primary-light px-2 py-1 rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Sub-navigation */}
      {shouldShowSubNav() && <SubNav pathname={pathname} />}
    </header>
  );
} 