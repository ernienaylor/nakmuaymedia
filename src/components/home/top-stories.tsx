"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Container, Section } from "@/components/ui/container"
import { cn } from "@/lib/utils"

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  slug: string
  date: string
  readTime: string
  author?: string
}

interface TopStoriesProps {
  title?: string
  subtitle?: string
  mainStory: Article
  secondaryStories: Article[]
  className?: string
  viewAllLink?: string
}

export function TopStories({ 
  title = "Top Stories", 
  subtitle,
  mainStory, 
  secondaryStories, 
  className,
  viewAllLink = "/news" 
}: TopStoriesProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-1 w-8 bg-accent rounded-full" />
            <h2 className="text-lg font-heading font-bold uppercase tracking-wider">{title}</h2>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {subtitle && (
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-6 md:mb-0">
                {subtitle}
              </p>
            )}
            
            {viewAllLink && (
              <Button variant="outline" size="lg" asChild className="group self-start">
                <Link href={viewAllLink} className="flex items-center">
                  <span>View All Stories</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        
        {/* Top Stories Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Story - Left Column */}
          <motion.div 
            className="lg:col-span-8"
            variants={itemVariants}
          >
            <Card 
              className="h-full overflow-hidden group transition-all duration-300 hover:shadow-card-hover border-border/50"
            >
              <Link href={`/article/${mainStory.slug}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={mainStory.image}
                    alt={mainStory.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <Badge 
                      className="bg-accent hover:bg-accent/90 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold mb-3"
                    >
                      {mainStory.category}
                    </Badge>
                    
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight group-hover:text-accent/90 transition-colors duration-300">
                      {mainStory.title}
                    </h3>
                  </div>
                </div>
              </Link>
              
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{mainStory.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{mainStory.readTime}</span>
                </div>
                
                <p className="text-muted-foreground text-base md:text-lg mb-6">
                  {mainStory.excerpt}
                </p>
                
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white group"
                  asChild
                >
                  <Link href={`/article/${mainStory.slug}`} className="flex items-center">
                    <span>Read Full Story</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Secondary Stories - Right Column */}
          <motion.div 
            className="lg:col-span-4 flex flex-col space-y-8"
            variants={containerVariants}
          >
            {secondaryStories.map((story, index) => (
              <motion.div key={story.id} variants={itemVariants} className="h-full">
                <Card 
                  className="h-full overflow-hidden group transition-all duration-300 hover:shadow-card-hover border-border/50"
                >
                  <div className="flex flex-col">
                    <Link href={`/article/${story.slug}`} className="block">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-100" 
                             style={{ opacity: 0 }} />
                        
                        {/* Category badge overlay */}
                        <div className="absolute top-0 left-0 p-4">
                          <Badge 
                            className="bg-accent hover:bg-accent/90 text-white px-2 py-0.5 text-xs uppercase tracking-wider font-bold"
                          >
                            {story.category}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                    
                    <CardContent className="p-5">
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <span>{story.date}</span>
                        <span className="mx-2">•</span>
                        <span>{story.readTime}</span>
                      </div>
                      
                      <Link href={`/article/${story.slug}`} className="block group">
                        <h4 className="font-heading text-lg font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                          {story.title}
                        </h4>
                      </Link>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {story.excerpt}
                      </p>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent group"
                        asChild
                      >
                        <Link href={`/article/${story.slug}`} className="flex items-center">
                          <span className="font-medium">Read more</span>
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

// Sample data for the top stories section
export const sampleMainStory: Article = {
  id: "ms1",
  title: "Thailand's National Muay Thai Day Celebrations Across the Country",
  excerpt: "March 17th marks National Muay Thai Day in Thailand, with celebrations and exhibitions planned at major stadiums and cultural centers throughout the country. This year's event will feature demonstrations from legendary fighters and special youth programs.",
  category: "Culture",
  image: "/images/top-story-1.jpg",
  slug: "national-muay-thai-day",
  date: "March 14, 2023",
  readTime: "8 min read",
  author: "Somchai Rattanakul"
};

export const sampleSecondaryStories: Article[] = [
  {
    id: "ss1",
    title: "ONE Championship Announces New Muay Thai Grand Prix Tournament",
    excerpt: "Eight of the world's top fighters will compete for a world title shot and $100,000 prize.",
    category: "News",
    image: "/images/top-story-2.jpg",
    slug: "one-grand-prix-announcement",
    date: "March 13, 2023",
    readTime: "4 min read",
    author: "James Wilson"
  },
  {
    id: "ss2",
    title: "Legendary Trainer Yodkhunpon Opens New Gym in Phuket",
    excerpt: "The former Lumpinee champion brings his expertise to a state-of-the-art facility.",
    category: "Gyms",
    image: "/images/top-story-3.jpg",
    slug: "yodkhunpon-new-gym",
    date: "March 11, 2023",
    readTime: "5 min read",
    author: "Lisa Rodriguez"
  },
  {
    id: "ss3",
    title: "The Technical Breakdown: Saenchai's Cartwheel Kick",
    excerpt: "Analyzing the mechanics behind one of Muay Thai's most spectacular techniques.",
    category: "Technique",
    image: "/images/top-story-4.jpg",
    slug: "saenchai-cartwheel-kick",
    date: "March 10, 2023",
    readTime: "6 min read",
    author: "Mike Chen"
  }
]; 