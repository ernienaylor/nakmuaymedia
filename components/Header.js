import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary text-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex flex-wrap items-center justify-between py-4">
          <h1 className="text-2xl md:text-3xl font-heading font-bold uppercase">
            <Link href="/" className="hover:text-accent transition-colors duration-300">
              Nak Muay Media
            </Link>
          </h1>
          
          <button 
            className="block md:hidden p-2 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
          
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto mt-4 md:mt-0 md:space-x-6 flex-col md:flex-row`}>
            <li className="py-2 md:py-0">
              <Link href="/" className="hover:text-accent transition-colors duration-300">
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/news" className="hover:text-accent transition-colors duration-300">
                News
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/fighters" className="hover:text-accent transition-colors duration-300">
                Fighters
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/techniques" className="hover:text-accent transition-colors duration-300">
                Techniques
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/events" className="hover:text-accent transition-colors duration-300">
                Events
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/about" className="hover:text-accent transition-colors duration-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 