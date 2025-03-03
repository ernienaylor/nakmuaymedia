import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection.jsx';
import FeaturedFighter from '@/components/home/FeaturedFighter.jsx';
import TopStories from '@/components/home/TopStories.jsx';
import UpcomingEvents from '@/components/home/UpcomingEvents.jsx';
import FeaturedMedia from '@/components/home/FeaturedMedia.jsx';
import NewsletterSignup from '@/components/home/NewsletterSignup.jsx';

// Sample data - In a real app, this would come from an API or CMS
import { featuredFighter, topStories, upcomingEvents, featuredVideos } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="WELCOME TO <span class='text-primary'>NAK MUAY</span> MEDIA"
        subtitle="Your source for Muay Thai news, fighter profiles, and event coverage from around the world."
      />
      
      {/* Featured Fighter */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">FEATURED FIGHTER</h2>
          <FeaturedFighter fighter={featuredFighter} />
        </div>
      </section>
      
      {/* Latest News */}
      <section className="py-12 md:py-16 bg-black/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title">LATEST NEWS</h2>
          <TopStories />
          <div className="text-center mt-8">
            <Link href="/news" className="btn btn-primary">
              View All News
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">UPCOMING EVENTS</h2>
          <UpcomingEvents />
          <div className="text-center mt-8">
            <Link href="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Media */}
      <section className="py-12 md:py-16 bg-black/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title">FEATURED MEDIA</h2>
          <FeaturedMedia />
          <div className="text-center mt-8">
            <Link href="/videos" className="btn btn-primary">
              View All Videos
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
} 