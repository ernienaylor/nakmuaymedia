"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FeaturedHeroSection } from "@/components/home/featured-hero-section"
import { EnhancedFeaturedFighter } from "@/components/home/enhanced-featured-fighter"
import { EnhancedNewsGrid } from "@/components/home/enhanced-news-grid"
import { TopStories } from "@/components/home/top-stories"
import { EventCalendar } from "@/components/home/event-calendar"
import { MediaSection } from "@/components/home/media-section"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { DebugToolbar, usePrefersReducedMotion } from "@/utils/test-utils"

// Data interfaces
// FeaturedHeroSection Article interface
interface HeroArticle {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  slug: string
  date: string
  readTime: string
}

// EnhancedNewsGrid Article interface
interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  slug: string
  date: string
  readTime: string
  author?: string
  featured?: boolean
}

interface Fighter {
  id: string
  name: string
  nickname: string
  image: string
  profileImage: string
  actionImage: string
  nationality: string
  age: number
  height: string
  weight: string
  weightClass: string
  stance: string
  team: string
  location: string
  experience: string
  trainingSince: string
  record: {
    wins: number
    losses: number
    draws: number
    nc: number
    kos: number
  }
  bio: string
  recentFights: {
    id: string
    opponent: string
    date: string
    event: string
    result: "win" | "loss" | "draw" | "nc"
    method: string
    round: number
    time: string
  }[]
  slug: string
  achievements: {
    id: string
    title: string
    year: string
    organization: string
  }[]
  socialMedia?: {
    instagram?: string
    twitter?: string
    facebook?: string
    youtube?: string
  }
}

interface Event {
  id: string
  title: string
  date: string
  time: string
  venue: string
  location: string
  image: string
  promotion: string
  mainEvent: string
  coMainEvent?: string
  ticketUrl?: string
  watchUrl?: string
  slug: string
  isFeatured?: boolean
  status?: "upcoming" | "live" | "completed"
}

interface VideoItem {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  date: string
  views: string
  slug: string
  category?: string
}

interface RelatedVideo {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
  slug: string
}

interface PodcastItem {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  date: string
  slug: string
  episodeNumber: number
  host: string
  guest?: string
}

interface PodcastEpisode {
  id: string
  title: string
  thumbnail: string
  duration: string
  episodeNumber: number
  slug: string
}

// Animation component for section reveals
function AnimatedSection({ 
  children, 
  className,
  delay = 0
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const controls = useAnimation()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <section className={className}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            delay,
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// Enhanced version with loading state
function EnhancedSection({
  children,
  className,
  delay = 0,
  isLoading = false
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  isLoading?: boolean
}) {
  if (isLoading) {
    return (
      <section className={`${className} animate-pulse`}>
        <div className="container mx-auto px-4">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <AnimatedSection className={className} delay={delay}>
      {children}
    </AnimatedSection>
  )
}

// Sample data for the homepage
const featuredArticles: HeroArticle[] = [
  {
    id: "1",
    title: "Buakaw Banchamek Returns to the Ring Against Saenchai in Historic Matchup",
    excerpt: "Two legends of Muay Thai will face off in a highly anticipated bout that fans have been waiting for. The event is set to take place in Bangkok's Lumpinee Stadium next month.",
    category: "Featured",
    image: "/images/hero-1.jpg",
    slug: "buakaw-vs-saenchai",
    date: "March 15, 2023",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Rodtang Jitmuangnon Defends ONE Flyweight Muay Thai World Title",
    excerpt: "The Iron Man continues his dominant reign with another spectacular performance.",
    category: "News",
    image: "/images/hero-2.jpg",
    slug: "rodtang-defends-title",
    date: "March 10, 2023",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "Superbon Singha Mawynn Prepares for Kickboxing Showdown",
    excerpt: "The Thai superstar is set to face a new challenger in ONE Championship.",
    category: "Fighters",
    image: "/images/hero-3.jpg",
    slug: "superbon-prepares",
    date: "March 8, 2023",
    readTime: "3 min read"
  },
  {
    id: "4",
    title: "Lumpinee Stadium Announces New International Series",
    excerpt: "Thailand's most prestigious venue is launching a new tournament format.",
    category: "Events",
    image: "/images/hero-4.jpg",
    slug: "lumpinee-international-series",
    date: "March 5, 2023",
    readTime: "6 min read"
  }
]

const featuredFighter: Fighter = {
  id: "1",
  name: "Rodtang Jitmuangnon",
  nickname: "The Iron Man",
  image: "/images/fighter-1.jpg",
  profileImage: "/images/fighter-1.jpg",
  actionImage: "/images/fighter-action-1.jpg",
  nationality: "Thailand",
  age: 25,
  height: "5'5\" (165 cm)",
  weight: "135 lbs (61 kg)",
  weightClass: "Flyweight",
  stance: "Orthodox",
  team: "Jitmuangnon Gym",
  location: "Bangkok, Thailand",
  experience: "10+ years",
  trainingSince: "Age 7",
  record: {
    wins: 267,
    losses: 42,
    draws: 10,
    nc: 0,
    kos: 128
  },
  bio: "Rodtang Jitmuangnon is a Thai Muay Thai fighter and current ONE Flyweight Muay Thai World Champion. Known for his aggressive fighting style and iron chin, Rodtang has become one of the most popular fighters in the sport. He began training at the age of 7 and had his first professional fight at 8 years old.",
  recentFights: [
    {
      id: "f1",
      opponent: "Joseph Lasiri",
      date: "May 20, 2022",
      event: "ONE 157",
      result: "win",
      method: "Unanimous Decision",
      round: 5,
      time: "3:00"
    },
    {
      id: "f2",
      opponent: "Danial Williams",
      date: "January 14, 2022",
      event: "ONE: Heavy Hitters",
      result: "win",
      method: "Unanimous Decision",
      round: 3,
      time: "3:00"
    },
    {
      id: "f3",
      opponent: "Demetrious Johnson",
      date: "March 26, 2021",
      event: "ONE on TNT 1",
      result: "loss",
      method: "Submission (Rear-Naked Choke)",
      round: 2,
      time: "2:13"
    }
  ],
  slug: "rodtang-jitmuangnon",
  achievements: [
    {
      id: "a1",
      title: "ONE Flyweight Muay Thai World Champion",
      year: "2019",
      organization: "ONE Championship"
    },
    {
      id: "a2",
      title: "Omnoi Stadium Champion",
      year: "2018",
      organization: "Omnoi Stadium"
    },
    {
      id: "a3",
      title: "MAX Muay Thai Champion",
      year: "2017",
      organization: "MAX Muay Thai"
    }
  ],
  socialMedia: {
    instagram: "https://instagram.com/rodtang_jimungnon",
    facebook: "https://facebook.com/rodtangjitmuangnon",
    twitter: "https://twitter.com/rodtang_jimungnon"
  }
}

const newsArticles: NewsArticle[] = [
  {
    id: "n1",
    title: "The Evolution of Muay Thai Training Methods in Modern Gyms",
    excerpt: "How traditional training is being combined with modern sports science for better results.",
    category: "Training",
    image: "/images/news-1.jpg",
    slug: "evolution-muay-thai-training",
    date: "March 12, 2023",
    readTime: "5 min read"
  },
  {
    id: "n2",
    title: "Rising Stars: 5 Muay Thai Fighters to Watch in 2023",
    excerpt: "These up-and-coming fighters are making waves in the Muay Thai world.",
    category: "Fighters",
    image: "/images/news-2.jpg",
    slug: "rising-stars-2023",
    date: "March 9, 2023",
    readTime: "4 min read"
  },
  {
    id: "n3",
    title: "The Cultural Significance of the Wai Kru Ram Muay",
    excerpt: "Exploring the traditional pre-fight ritual and its importance in Muay Thai.",
    category: "Culture",
    image: "/images/news-3.jpg",
    slug: "wai-kru-significance",
    date: "March 7, 2023",
    readTime: "6 min read"
  },
  {
    id: "n4",
    title: "Nutrition Strategies for Muay Thai Fighters During Weight Cuts",
    excerpt: "Expert advice on managing weight cuts while maintaining performance.",
    category: "Health",
    image: "/images/news-4.jpg",
    slug: "nutrition-weight-cuts",
    date: "March 5, 2023",
    readTime: "7 min read"
  },
  {
    id: "n5",
    title: "The Growing Popularity of Female Muay Thai Fighters",
    excerpt: "How women are changing the landscape of the sport around the world.",
    category: "Features",
    image: "/images/news-5.jpg",
    slug: "female-fighters-popularity",
    date: "March 3, 2023",
    readTime: "5 min read"
  },
  {
    id: "n6",
    title: "Muay Thai's Influence on Modern MMA Striking Techniques",
    excerpt: "The Thai art of eight limbs continues to shape mixed martial arts.",
    category: "Analysis",
    image: "/images/news-6.jpg",
    slug: "muay-thai-mma-influence",
    date: "March 1, 2023",
    readTime: "6 min read"
  }
]

const topStories = {
  mainStory: {
    id: "ms1",
    title: "Thailand's National Muay Thai Day Celebrations Across the Country",
    excerpt: "March 17th marks National Muay Thai Day in Thailand, with celebrations and exhibitions planned at major stadiums and cultural centers throughout the country. This year's event will feature demonstrations from legendary fighters and special youth programs.",
    category: "Culture",
    image: "/images/top-story-1.jpg",
    slug: "national-muay-thai-day",
    date: "March 14, 2023",
    readTime: "8 min read"
  },
  secondaryStories: [
    {
      id: "ss1",
      title: "ONE Championship Announces New Muay Thai Grand Prix Tournament",
      excerpt: "Eight of the world's top fighters will compete for a world title shot and $100,000 prize.",
      category: "News",
      image: "/images/top-story-2.jpg",
      slug: "one-grand-prix-announcement",
      date: "March 13, 2023",
      readTime: "4 min read"
    },
    {
      id: "ss2",
      title: "Legendary Trainer Yodkhunpon Opens New Gym in Phuket",
      excerpt: "The former Lumpinee champion brings his expertise to a state-of-the-art facility.",
      category: "Gyms",
      image: "/images/top-story-3.jpg",
      slug: "yodkhunpon-new-gym",
      date: "March 11, 2023",
      readTime: "5 min read"
    },
    {
      id: "ss3",
      title: "The Technical Breakdown: Saenchai's Cartwheel Kick",
      excerpt: "Analyzing the mechanics behind one of Muay Thai's most spectacular techniques.",
      category: "Technique",
      image: "/images/top-story-4.jpg",
      slug: "saenchai-cartwheel-kick",
      date: "March 10, 2023",
      readTime: "6 min read"
    }
  ]
}

const upcomingEvents: Event[] = [
  {
    id: "e1",
    title: "ONE Championship: Immortal Glory",
    date: "April 8, 2023",
    time: "7:00 PM ICT",
    venue: "Impact Arena",
    location: "Bangkok, Thailand",
    image: "/images/event-1.jpg",
    promotion: "ONE Championship",
    mainEvent: "Rodtang Jitmuangnon vs. Jacob Smith",
    coMainEvent: "Superbon Singha Mawynn vs. Sitthichai Sitsongpeenong",
    ticketUrl: "https://onefc.com/tickets",
    watchUrl: "https://watch.onefc.com",
    slug: "one-immortal-glory",
    isFeatured: true,
    status: "upcoming"
  },
  {
    id: "e2",
    title: "Rajadamnern World Series",
    date: "April 15, 2023",
    time: "6:30 PM ICT",
    venue: "Rajadamnern Stadium",
    location: "Bangkok, Thailand",
    image: "/images/event-2.jpg",
    promotion: "Rajadamnern Stadium",
    mainEvent: "Panpayak Jitmuangnon vs. Mongkolpetch Petchyindee",
    ticketUrl: "https://rajadamnern.com/tickets",
    watchUrl: "https://rajadamnern.com/watch",
    slug: "rajadamnern-world-series-april",
    status: "upcoming"
  },
  {
    id: "e3",
    title: "Lumpinee Champion Night",
    date: "April 22, 2023",
    time: "6:00 PM ICT",
    venue: "Lumpinee Boxing Stadium",
    location: "Bangkok, Thailand",
    image: "/images/event-3.jpg",
    promotion: "Lumpinee Stadium",
    mainEvent: "Tawanchai PK.Saenchai vs. Saeksan Or. Kwanmuang",
    coMainEvent: "Petchmorakot Petchyindee vs. Yodlekpet Or. Pitisak",
    ticketUrl: "https://lumpinee.com/tickets",
    watchUrl: "https://lumpinee.com/watch",
    slug: "lumpinee-champion-night-april",
    status: "upcoming"
  },
  {
    id: "e4",
    title: "Lion Fight 77",
    date: "April 29, 2023",
    time: "7:00 PM EST",
    venue: "Foxwoods Resort Casino",
    location: "Mashantucket, CT, USA",
    image: "/images/event-4.jpg",
    promotion: "Lion Fight",
    mainEvent: "Steve Walker vs. Salah Khalifa",
    ticketUrl: "https://lionfight.com/tickets",
    watchUrl: "https://lionfight.com/watch",
    slug: "lion-fight-77",
    status: "upcoming"
  },
  {
    id: "e5",
    title: "MAX Muay Thai Ultimate",
    date: "May 6, 2023",
    time: "7:30 PM ICT",
    venue: "Pattaya City",
    location: "Pattaya, Thailand",
    image: "/images/event-5.jpg",
    promotion: "MAX Muay Thai",
    mainEvent: "Kulabdam Sor. Jor. Piek-U-Thai vs. Muangthai PK.Saenchai",
    ticketUrl: "https://maxmuaythai.com/tickets",
    watchUrl: "https://maxmuaythai.com/watch",
    slug: "max-muay-thai-ultimate-may",
    status: "upcoming"
  }
]

const mediaContent = {
  featuredVideo: {
    id: "v1",
    title: "Rodtang vs. Haggerty 2: Full Fight Breakdown and Analysis",
    description: "A detailed analysis of the rematch between Rodtang Jitmuangnon and Jonathan Haggerty for the ONE Flyweight Muay Thai World Championship. We break down the key moments, techniques, and strategies that led to Rodtang's victory.",
    thumbnail: "/images/video-1.jpg",
    duration: "18:42",
    date: "March 10, 2023",
    views: "245K",
    slug: "rodtang-haggerty-2-breakdown",
    category: "Analysis"
  },
  relatedVideos: [
    {
      id: "rv1",
      title: "Top 5 Muay Thai Knockouts of 2022",
      thumbnail: "/images/hero-2.jpg",
      duration: "12:18",
      views: "189K",
      slug: "top-5-muay-thai-knockouts-2022"
    },
    {
      id: "rv2",
      title: "Muay Thai Clinch Techniques with Saenchai",
      thumbnail: "/images/hero-3.jpg",
      duration: "15:45",
      views: "132K",
      slug: "clinch-techniques-saenchai"
    },
    {
      id: "rv3",
      title: "The Evolution of Buakaw Banchamek",
      thumbnail: "/images/hero-4.jpg",
      duration: "22:31",
      views: "201K",
      slug: "evolution-buakaw-banchamek"
    }
  ],
  featuredPodcast: {
    id: "p1",
    title: "The Mental Game of Muay Thai with Pornsanae Sitmonchai",
    description: "In this episode, we sit down with former Lumpinee Stadium champion Pornsanae Sitmonchai to discuss the mental aspects of fighting, his career journey, and his training philosophy. Pornsanae shares insights on overcoming adversity, preparing mentally for fights, and the importance of mindset in Muay Thai.",
    thumbnail: "/images/hero-2.jpg",
    duration: "1:12:35",
    date: "March 8, 2023",
    slug: "nak-muay-nation-ep42",
    episodeNumber: 42,
    host: "Sean Fagan",
    guest: "Pornsanae Sitmonchai"
  },
  recentEpisodes: [
    {
      id: "ep41",
      title: "Training Muay Thai in Thailand: The Ultimate Guide",
      thumbnail: "/images/hero-1.jpg",
      duration: "58:22",
      episodeNumber: 41,
      slug: "nak-muay-nation-ep41"
    },
    {
      id: "ep40",
      title: "Nutrition Strategies for Muay Thai Athletes",
      thumbnail: "/images/hero-3.jpg",
      duration: "1:05:17",
      episodeNumber: 40,
      slug: "nak-muay-nation-ep40"
    },
    {
      id: "ep39",
      title: "The History and Evolution of Muay Thai Rules",
      thumbnail: "/images/hero-4.jpg",
      duration: "1:10:45",
      episodeNumber: 39,
      slug: "nak-muay-nation-ep39"
    }
  ]
}

// Force dynamic rendering to avoid theme context issues during static generation
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main 
      className="min-h-screen"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* Hero Section */}
      <FeaturedHeroSection 
        mainArticle={featuredArticles[0]}
        secondaryArticles={featuredArticles.slice(1)}
      />
      
      {/* Featured Fighter */}
      <EnhancedSection 
        className="bg-neutral-light py-16 md:py-24 border-t border-border/20"
        delay={0.1}
      >
        <EnhancedFeaturedFighter 
          fighter={featuredFighter}
        />
      </EnhancedSection>
      
      {/* News Grid */}
      <EnhancedSection 
        className="py-16 md:py-24 border-t border-border/20"
        delay={0.2}
      >
        <EnhancedNewsGrid 
          articles={newsArticles}
          title="Latest News"
          subtitle="Stay updated with the latest news, analysis, and features from the world of Muay Thai"
          viewAllLink="/news"
        />
      </EnhancedSection>
      
      {/* Top Stories */}
      <EnhancedSection 
        className="bg-neutral-light py-16 md:py-24 border-t border-border/20"
        delay={0.3}
      >
        <TopStories 
          mainStory={topStories.mainStory}
          secondaryStories={topStories.secondaryStories}
          title="Top Stories"
          subtitle="The stories you need to read today"
          viewAllLink="/featured"
        />
      </EnhancedSection>
      
      {/* Event Calendar */}
      <EnhancedSection 
        className="py-16 md:py-24 border-t border-border/20"
        delay={0.4}
      >
        <EventCalendar 
          events={upcomingEvents}
          title="Upcoming Events"
          subtitle="Follow the most exciting Muay Thai events from around the world"
          viewAllLink="/events"
        />
      </EnhancedSection>
      
      {/* Media Section */}
      <EnhancedSection 
        className="bg-neutral-light py-16 md:py-24 border-t border-border/20"
        delay={0.5}
      >
        <MediaSection 
          featuredVideo={mediaContent.featuredVideo}
          relatedVideos={mediaContent.relatedVideos}
          featuredPodcast={mediaContent.featuredPodcast}
          recentEpisodes={mediaContent.recentEpisodes}
        />
      </EnhancedSection>
      
      {/* Newsletter Section */}
      <EnhancedSection 
        className="py-16 md:py-24 border-t border-border/20"
        delay={0.6}
      >
        <NewsletterSection />
      </EnhancedSection>

      {/* Debug Toolbar - only visible in development */}
      <DebugToolbar />
    </main>
  )
} 