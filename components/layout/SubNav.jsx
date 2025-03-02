'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubNav({ pathname }) {
  // Helper to check active links
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // Determine which navigation links to show based on the current section
  const getNavLinks = () => {
    if (pathname.startsWith('/news')) {
      return [
        { href: '/news', label: 'All News', isPrimary: true },
        { href: '/news/fight-results', label: 'Fight Results' },
        { href: '/news/industry-updates', label: 'Industry Updates' },
        { href: '/news/editorials', label: 'Editorials' },
      ];
    }

    if (pathname.startsWith('/videos')) {
      return [
        { href: '/videos', label: 'All Videos', isPrimary: true },
        { href: '/videos/technique-breakdowns', label: 'Technique Breakdowns' },
        { href: '/videos/fighter-interviews', label: 'Fighter Interviews' },
        { href: '/videos/behind-the-scenes', label: 'Behind The Scenes' },
      ];
    }

    if (pathname.startsWith('/fighters')) {
      return [
        { href: '/fighters', label: 'All Fighters', isPrimary: true },
        { href: '/fighters/champions', label: 'Champions' },
        { href: '/fighters/contenders', label: 'Contenders' },
        { href: '/fighters/rankings', label: 'Rankings' },
      ];
    }

    if (pathname.startsWith('/events')) {
      return [
        { href: '/events', label: 'All Events', isPrimary: true },
        { href: '/events/upcoming', label: 'Upcoming' },
        { href: '/events/past', label: 'Past Events' },
        { href: '/events/results', label: 'Results' },
      ];
    }

    return [];
  };

  const navLinks = getNavLinks();

  if (navLinks.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="container-custom py-2">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActive(link.href)
                  ? 'text-primary font-medium'
                  : 'text-secondary hover:text-primary'
              } ${link.isPrimary ? 'font-medium' : ''} transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 