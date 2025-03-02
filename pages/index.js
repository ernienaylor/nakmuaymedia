import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FeaturedFighter from '../components/home/FeaturedFighter';
import TopStories from '../components/home/TopStories';
import UpcomingEvents from '../components/home/UpcomingEvents';
import FeaturedMedia from '../components/home/FeaturedMedia';
import NewsletterSignup from '../components/home/NewsletterSignup';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedFighter />
      <TopStories />
      <UpcomingEvents />
      <FeaturedMedia />
      <NewsletterSignup />
    </Layout>
  );
} 