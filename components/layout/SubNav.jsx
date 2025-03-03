'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubNav() {
  const pathname = usePathname();
  
  // Determine which links to show based on the current path
  const getLinks = () => {
    if (pathname === '/news' || pathname.startsWith('/news/')) {
      return [
        { href: '/news/latest', label: 'Latest' },
        { href: '/news/fight-results', label: 'Fight Results' },
        { href: '/news/interviews', label: 'Interviews' },
        { href: '/news/features', label: 'Features' },
      ];
    }
    
    if (pathname === '/fighters' || pathname.startsWith('/fighters/')) {
      return [
        { href: '/fighters/champions', label: 'Champions' },
        { href: '/fighters/rankings', label: 'Rankings' },
        { href: '/fighters/thailand', label: 'Thailand' },
        { href: '/fighters/international', label: 'International' },
      ];
    }
    
    if (pathname === '/events' || pathname.startsWith('/events/')) {
      return [
        { href: '/events/upcoming', label: 'Upcoming' },
        { href: '/events/past', label: 'Past Events' },
        { href: '/events/results', label: 'Results' },
        { href: '/events/stadiums', label: 'Stadiums' },
      ];
    }
    
    if (pathname === '/videos' || pathname.startsWith('/videos/')) {
      return [
        { href: '/videos/fights', label: 'Fights' },
        { href: '/videos/highlights', label: 'Highlights' },
        { href: '/videos/techniques', label: 'Techniques' },
        { href: '/videos/interviews', label: 'Interviews' },
      ];
    }
    
    // Default links for the homepage and other pages
    return [
      { href: '/news', label: 'All News' },
      { href: '/events', label: 'All Events' },
      { href: '/fighters', label: 'All Fighters' },
      { href: '/videos', label: 'All Videos' },
    ];
  };
  
  const links = getLinks();
  
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-center md:justify-start space-x-6 text-sm overflow-x-auto">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-white hover:text-white/80 transition-colors whitespace-nowrap ${
                pathname === link.href ? 'font-medium' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 