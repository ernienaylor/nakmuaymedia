import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import FeaturedFighter from '@/components/home/FeaturedFighter';
import TopStories from '@/components/home/TopStories';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import FeaturedMedia from '@/components/home/FeaturedMedia';
import NewsletterSignup from '@/components/home/NewsletterSignup';

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
      <section className="section section-border">
        <div className="container-custom">
          <h2 className="section-title">Top Stories</h2>
          <TopStories stories={topStories} />
          
          <div className="text-center mt-10">
            <Link href="/news" className="btn-outline">
              View All News
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="section section-border bg-neutral-50">
        <div className="container-custom">
          <h2 className="section-title">Upcoming Events</h2>
          <UpcomingEvents events={upcomingEvents} />
          
          <div className="text-center mt-10">
            <Link href="/events" className="btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Media Section */}
      <section className="section section-border">
        <div className="container-custom">
          <h2 className="section-title">Featured Media</h2>
          <FeaturedMedia video={featuredVideo} podcast={latestPodcast} />
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
} 