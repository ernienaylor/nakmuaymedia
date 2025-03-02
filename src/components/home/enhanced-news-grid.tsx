"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
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
  featured?: boolean
}

interface EnhancedNewsGridProps {
  title?: string
  subtitle?: string
  articles: Article[]
  className?: string
  viewAllLink?: string
}

export function EnhancedNewsGrid({ 
  title = "Latest Articles", 
  subtitle,
  articles, 
  className, 
  viewAllLink = "/news" 
}: EnhancedNewsGridProps) {
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
                  <span>View All Articles</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        
        {/* News Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {articles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Card 
                className="h-full overflow-hidden group transition-all duration-300 hover:shadow-card-hover border-border/50"
              >
                <Link href={`/article/${article.slug}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-100" 
                         style={{ opacity: 0 }} />
                  </div>
                </Link>
                
                <CardHeader className="p-6 pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      className="bg-accent hover:bg-accent/90 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/article/${article.slug}`} className="block group">
                    <h3 className="font-heading text-xl font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                      {article.title}
                    </h3>
                  </Link>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground line-clamp-3 font-body">
                    {article.excerpt}
                  </p>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent group"
                    asChild
                  >
                    <Link href={`/article/${article.slug}`} className="flex items-center">
                      <span className="font-medium">Read more</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

// Sample data for the news grid
export const sampleNewsArticles: Article[] = [
  {
    id: "n1",
    title: "The Evolution of Muay Thai Training Methods in Modern Gyms",
    excerpt: "How traditional training is being combined with modern sports science for better results and injury prevention. Discover the latest techniques used by top fighters.",
    category: "Training",
    image: "/images/news-1.jpg",
    slug: "evolution-muay-thai-training",
    date: "March 12, 2023",
    readTime: "5 min read",
    author: "Sarah Thompson",
    featured: true
  },
  {
    id: "n2",
    title: "Rising Stars: 5 Muay Thai Fighters to Watch in 2023",
    excerpt: "These up-and-coming fighters are making waves in the Muay Thai world with their impressive techniques and fight records.",
    category: "Fighters",
    image: "/images/news-2.jpg",
    slug: "rising-stars-2023",
    date: "March 9, 2023",
    readTime: "4 min read",
    author: "Mike Chen"
  },
  {
    id: "n3",
    title: "The Cultural Significance of the Wai Kru Ram Muay",
    excerpt: "Exploring the traditional pre-fight ritual and its importance in Muay Thai culture, history, and spiritual significance.",
    category: "Culture",
    image: "/images/news-3.jpg",
    slug: "wai-kru-significance",
    date: "March 7, 2023",
    readTime: "6 min read",
    author: "Thanaporn Chaiyasit"
  },
  {
    id: "n4",
    title: "Nutrition Strategies for Muay Thai Fighters During Weight Cuts",
    excerpt: "Expert advice on managing weight cuts while maintaining performance and health. Learn from the pros about safe cutting methods.",
    category: "Health",
    image: "/images/news-4.jpg",
    slug: "nutrition-weight-cuts",
    date: "March 5, 2023",
    readTime: "7 min read",
    author: "Dr. Lisa Rodriguez"
  },
  {
    id: "n5",
    title: "The Growing Popularity of Female Muay Thai Fighters",
    excerpt: "How women are changing the landscape of the sport around the world and breaking barriers in traditional Muay Thai circles.",
    category: "Features",
    image: "/images/news-5.jpg",
    slug: "female-fighters-popularity",
    date: "March 3, 2023",
    readTime: "5 min read",
    author: "Emma Wilson"
  },
  {
    id: "n6",
    title: "Muay Thai's Influence on Modern MMA Striking Techniques",
    excerpt: "The Thai art of eight limbs continues to shape mixed martial arts striking strategies. See how UFC fighters incorporate these techniques.",
    category: "Analysis",
    image: "/images/news-6.jpg",
    slug: "muay-thai-mma-influence",
    date: "March 1, 2023",
    readTime: "6 min read",
    author: "James Peterson"
  }
]; 