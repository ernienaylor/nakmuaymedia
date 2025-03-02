"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Container, Section } from "@/components/ui/container"
import { TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/typography"

// Sample data for the featured content
const FEATURED_CONTENT = {
  mainArticle: {
    id: "1",
    title: "Rodtang Dominates in ONE Championship's U.S. Debut",
    excerpt: "The 'Iron Man' showcased his signature aggressive style, overwhelming his opponent with relentless pressure and devastating strikes in a performance that captivated the American audience.",
    category: "Fight Coverage",
    image: "/images/featured/rodtang-one-championship.jpg",
    slug: "rodtang-dominates-one-championship-us-debut",
    date: "May 12, 2023",
    readTime: "6 min read"
  },
  secondaryArticles: [
    {
      id: "2",
      title: "Buakaw Announces Return to the Ring Against K-1 Legend",
      excerpt: "The Thai legend will face off against a former K-1 champion in a highly anticipated matchup.",
      category: "Breaking News",
      image: "/images/featured/buakaw-return.jpg",
      slug: "buakaw-announces-return-against-k1-legend",
      date: "May 10, 2023",
      readTime: "4 min read"
    },
    {
      id: "3",
      title: "The Evolution of Clinch Work in Modern Muay Thai",
      excerpt: "How the art of the clinch has transformed from traditional to contemporary fighting styles.",
      category: "Analysis",
      image: "/images/featured/clinch-evolution.jpg",
      slug: "evolution-clinch-work-modern-muay-thai",
      date: "May 8, 2023",
      readTime: "8 min read"
    },
    {
      id: "4",
      title: "Lumpinee Stadium Opens Women's Division for First Time in History",
      excerpt: "A historic shift in Thailand's most prestigious stadium marks a new era for female fighters.",
      category: "Industry News",
      image: "/images/featured/lumpinee-women.jpg",
      slug: "lumpinee-stadium-opens-womens-division",
      date: "May 5, 2023",
      readTime: "5 min read"
    }
  ]
}

// Placeholder image URLs for fallbacks
const PLACEHOLDER_IMAGES = {
  main: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2142&auto=format&fit=crop",
  secondary: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2274&auto=format&fit=crop"
}

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  slug: string
  date: string
  readTime: string
}

interface FeaturedHeroSectionProps {
  mainArticle?: Article
  secondaryArticles?: Article[]
  className?: string
}

export function FeaturedHeroSection({
  mainArticle = FEATURED_CONTENT.mainArticle,
  secondaryArticles = FEATURED_CONTENT.secondaryArticles,
  className,
}: FeaturedHeroSectionProps) {
  // Function to handle image errors
  const getImageSrc = (src: string, isMain: boolean = false) => {
    // If the image path starts with http, it's already a full URL
    if (src.startsWith('http')) {
      return src;
    }
    
    // For local images, check if they exist in public folder
    // Since we can't check at runtime, we'll use the placeholder as fallback
    // in the onError handler of the Image component
    return src;
  }

  return (
    <Section className={cn("pt-20 md:pt-28 pb-12 md:pb-16 home-section", className)}>
      <Container>
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-1 w-8 bg-accent accent-fix rounded-full" />
            <h2 className="text-lg font-heading font-bold uppercase tracking-wider featured-stories-heading">Featured Stories</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl flex-1">
              <Link href={`/article/${mainArticle.slug}`} className="block h-full">
                <div className="relative aspect-[16/10] md:aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden">
                  <Image
                    src={getImageSrc(mainArticle.image, true)}
                    alt={mainArticle.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    onError={(e) => {
                      // @ts-ignore - TypeScript doesn't know about currentTarget.src
                      e.currentTarget.src = PLACEHOLDER_IMAGES.main;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="animate-fade-slide-in">
                    <Badge 
                      variant="default" 
                      className="mb-3 text-xs font-bold uppercase tracking-wider px-3 py-1 bg-accent accent-fix text-white"
                    >
                      {mainArticle.category}
                    </Badge>
                    
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 tracking-tight leading-tight featured-article-title">
                      {mainArticle.title}
                    </h2>
                    
                    <p className="mb-4 line-clamp-2 md:line-clamp-3 max-w-3xl featured-article-excerpt">
                      {mainArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center text-sm featured-article-meta">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{mainArticle.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{mainArticle.date}</span>
                      </div>
                      
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="group/btn bg-accent accent-fix hover:bg-accent/90 text-white transition-all duration-300"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Secondary Articles */}
          <div className="lg:col-span-5 xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {secondaryArticles.map((article, index) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full animate-fade-in secondary-article-card card-fix"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={getImageSrc(article.image)}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // @ts-ignore - TypeScript doesn't know about currentTarget.src
                      e.currentTarget.src = PLACEHOLDER_IMAGES.secondary;
                    }}
                  />
                </div>
                
                <div className="flex flex-col flex-grow p-4 rounded-b-lg">
                  <Badge 
                    variant="outline" 
                    className="self-start mb-2 text-xs font-medium text-accent border-accent/30"
                  >
                    {article.category}
                  </Badge>
                  
                  <h3 className="font-heading text-base md:text-lg font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
} 