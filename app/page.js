import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection.jsx';
import FeaturedFighter from '@/components/home/FeaturedFighter.jsx';
import TopStories from '@/components/home/TopStories.jsx';
import UpcomingEvents from '@/components/home/UpcomingEvents.jsx';
import FeaturedMedia from '@/components/home/FeaturedMedia.jsx';
import NewsletterSignup from '@/components/home/NewsletterSignup.jsx';
import NewsGrid from '@/components/news/NewsGrid.jsx';

// Sample data - In a real app, this would come from an API or CMS
import { featuredFighter, topStories, upcomingEvents, featuredVideo, latestPodcast } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="Your Ringside Seat to <span class='text-primary'>Muay Thai</span> Action"
        subtitle="The premier destination for Muay Thai news, fighter profiles, and event coverage from around the world."
      />
      
      {/* Featured Fighter Section */}
      <section className="section section-border">
        <div className="container-custom">
          <h2 className="section-title">Featured Fighter</h2>
          <FeaturedFighter fighter={featuredFighter} />
        </div>
      </section>
      
      {/* Top Stories Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Latest News</h2>
          <TopStories />
          <div className="text-center mt-8">
            <Link href="/news" className="btn btn-primary">
              View All News
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-12 md:py-16 bg-black/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <UpcomingEvents />
          <div className="text-center mt-8">
            <Link href="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Media Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Media</h2>
          <FeaturedMedia />
          <div className="text-center mt-8">
            <Link href="/videos" className="btn btn-primary">
              View All Videos
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
} 