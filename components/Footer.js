import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-8 pb-4 mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading text-accent mb-4">About Nak Muay Media</h3>
            <p className="mb-4">
              Your source for Muay Thai news, fighter profiles, 
              technique breakdowns, and event coverage from around the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-accent transition-colors duration-300">
                  News
                </Link>
              </li>
              <li>
                <Link href="/fighters" className="hover:text-accent transition-colors duration-300">
                  Fighters
                </Link>
              </li>
              <li>
                <Link href="/techniques" className="hover:text-accent transition-colors duration-300">
                  Techniques
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent transition-colors duration-300">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading text-accent mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://instagram.com/nakmuaymedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/nakmuaymedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/nakmuaymedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  YouTube
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Nak Muay Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 