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
    <header className="bg-secondary text-white">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-primary mr-2">Nak Muay</span> Media
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            href="/news" 
            className={`hover:text-primary transition-colors ${isActive('/news') ? 'text-primary font-medium' : ''}`}
          >
            News
          </Link>
          <Link 
            href="/events" 
            className={`hover:text-primary transition-colors ${isActive('/events') ? 'text-primary font-medium' : ''}`}
          >
            Events
          </Link>
          <Link 
            href="/fighters" 
            className={`hover:text-primary transition-colors ${isActive('/fighters') ? 'text-primary font-medium' : ''}`}
          >
            Fighters
          </Link>
          <Link 
            href="/videos" 
            className={`hover:text-primary transition-colors ${isActive('/videos') ? 'text-primary font-medium' : ''}`}
          >
            Videos
          </Link>
          <Link 
            href="/podcast" 
            className={`hover:text-primary transition-colors ${isActive('/podcast') ? 'text-primary font-medium' : ''}`}
          >
            Podcast
          </Link>
          <Link 
            href="/shop" 
            className={`hover:text-primary transition-colors ${isActive('/shop') ? 'text-primary font-medium' : ''}`}
          >
            Shop
          </Link>
          <Link 
            href="/community" 
            className={`hover:text-primary transition-colors ${isActive('/community') ? 'text-primary font-medium' : ''}`}
          >
            Community
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-medium' : ''}`}
          >
            About
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <button className="p-2 rounded-full hover:bg-secondary-light transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-secondary-light transition-colors"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-secondary-light">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              href="/news" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/news') ? 'text-primary font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="/events" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/events') ? 'text-primary font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/fighters" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/fighters') ? 'text-primary font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Fighters
            </Link>
            <Link 
              href="/videos" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/videos') ? 'text-primary font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Videos
            </Link>
            <Link 
              href="/podcast" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/podcast') ? 'text-primary font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Podcast
            </Link>
            <Link 
              href="/shop" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/shop') ? 'text-primary font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/community" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/community') ? 'text-primary font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="/about" 
              className={`py-2 hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </nav>
      )}

      {/* Secondary Navigation */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-center md:justify-start space-x-6 text-sm">
            <Link href="/news" className="text-white hover:text-white/80 transition-colors">
              All News
            </Link>
            <Link href="/events" className="text-white hover:text-white/80 transition-colors">
              All Events
            </Link>
            <Link href="/fighters" className="text-white hover:text-white/80 transition-colors">
              All Fighters
            </Link>
            <Link href="/videos" className="text-white hover:text-white/80 transition-colors">
              All Videos
            </Link>
          </div>
        </div>
      </div>

      {/* Sub-navigation */}
      {shouldShowSubNav() && <SubNav pathname={pathname} />}
    </header>
  );
} 