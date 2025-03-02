"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, Clock, Calendar, ChevronRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Container, Section } from "@/components/ui/container"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

// Video interfaces
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

// Podcast interfaces
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

// Props interfaces
interface MediaSectionProps {
  featuredVideo: VideoItem
  relatedVideos: RelatedVideo[]
  featuredPodcast: PodcastItem
  recentEpisodes: PodcastEpisode[]
  className?: string
}

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

// Format time from seconds to MM:SS
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

// Video Feature Component
function VideoFeature({ video, relatedVideos }: { video: VideoItem, relatedVideos: RelatedVideo[] }) {
  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Featured Video */}
      <motion.div variants={itemVariants}>
        <Card className="overflow-hidden border-border/50 hover:shadow-card-hover transition-all duration-300">
          <CardContent className="p-0">
            <div className="relative">
              <Link href={`/videos/${video.slug}`} className="block group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-90 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  {video.category && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent hover:bg-accent/90 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold">
                        {video.category}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center">
                    <Clock className="h-3 w-3 mr-1.5" />
                    {video.duration}
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="p-6">
              <Link href={`/videos/${video.slug}`} className="block group">
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {video.title}
                </h3>
              </Link>
              
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {video.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>{video.date}</span>
                </div>
                <div className="flex items-center">
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Related Videos */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-heading font-medium">Related Videos</h3>
          <Button variant="ghost" size="sm" asChild className="group">
            <Link href="/videos" className="flex items-center text-sm">
              <span>View All</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedVideos.map((video, index) => (
            <motion.div 
              key={video.id}
              variants={itemVariants}
              className="col-span-1"
            >
              <Card className="overflow-hidden h-full border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-0">
                  <Link href={`/videos/${video.slug}`} className="block group">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white ml-0.5" />
                        </div>
                      </div>
                      
                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-medium mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                        {video.title}
                      </h4>
                      
                      <div className="text-xs text-muted-foreground">
                        {video.views} views
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Podcast Feature Component
function PodcastFeature({ podcast, recentEpisodes }: { podcast: PodcastItem, recentEpisodes: PodcastEpisode[] }) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(180) // Default 3 minutes in seconds
  const [isMuted, setIsMuted] = React.useState(false)
  const [volume, setVolume] = React.useState(80)
  
  // Toggle play/pause
  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }
  
  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }
  
  // Handle time update (simulated)
  React.useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prevTime + 1
        })
      }, 1000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, duration])
  
  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Featured Podcast */}
      <motion.div variants={itemVariants}>
        <Card className="overflow-hidden border-border/50 hover:shadow-card-hover transition-all duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Podcast Artwork */}
              <div className="md:w-2/5 lg:w-1/3">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Episode number badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent hover:bg-accent/90 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold">
                      Episode {podcast.episodeNumber}
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Podcast Info */}
              <div className="p-6 md:w-3/5 lg:w-2/3 flex flex-col">
                <Link href={`/podcast/${podcast.slug}`} className="block group">
                  <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {podcast.title}
                  </h3>
                </Link>
                
                <div className="mb-3 text-sm">
                  <span className="font-medium">Host: {podcast.host}</span>
                  {podcast.guest && (
                    <span className="ml-2 text-muted-foreground">• Guest: {podcast.guest}</span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {podcast.description}
                </p>
                
                {/* Audio Player */}
                <div className="mt-auto space-y-3">
                  {/* Progress bar */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground w-10">{formatTime(currentTime)}</span>
                    <Slider
                      value={[currentTime]}
                      max={duration}
                      step={1}
                      className="flex-1"
                      onValueChange={(value: number[]) => setCurrentTime(value[0])}
                    />
                    <span className="text-xs text-muted-foreground w-10">{formatTime(duration)}</span>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        onClick={toggleMute}
                      >
                        {isMuted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                        <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
                      </Button>
                      
                      <Slider
                        value={[isMuted ? 0 : volume]}
                        max={100}
                        step={1}
                        className="w-20"
                        onValueChange={(value: number[]) => {
                          setVolume(value[0])
                          if (value[0] > 0 && isMuted) setIsMuted(false)
                          if (value[0] === 0 && !isMuted) setIsMuted(true)
                        }}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                      >
                        <SkipBack className="h-4 w-4" />
                        <span className="sr-only">Previous</span>
                      </Button>
                      
                      <Button 
                        variant="default" 
                        size="icon" 
                        className="h-12 w-12 rounded-full bg-accent hover:bg-accent/90"
                        onClick={togglePlayback}
                      >
                        {isPlaying ? (
                          <Pause className="h-6 w-6 text-white" />
                        ) : (
                          <Play className="h-6 w-6 text-white ml-0.5" />
                        )}
                        <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                      >
                        <SkipForward className="h-4 w-4" />
                        <span className="sr-only">Next</span>
                      </Button>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      <span>{podcast.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="px-6 py-4 bg-muted/20 border-t border-border/50">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{podcast.duration}</span>
              </div>
              
              <Button variant="outline" size="sm" asChild className="group">
                <Link href={`/podcast/${podcast.slug}`} className="flex items-center text-sm">
                  <span>Full Episode</span>
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
      
      {/* Recent Episodes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-heading font-medium">Recent Episodes</h3>
          <Button variant="ghost" size="sm" asChild className="group">
            <Link href="/podcast" className="flex items-center text-sm">
              <span>View All</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="space-y-3">
          {recentEpisodes.map((episode, index) => (
            <motion.div 
              key={episode.id}
              variants={itemVariants}
            >
              <Card className="overflow-hidden border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-0">
                  <Link href={`/podcast/${episode.slug}`} className="block group">
                    <div className="flex items-center p-3">
                      {/* Episode Thumbnail */}
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={episode.thumbnail}
                          alt={episode.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Episode Info */}
                      <div className="ml-4 flex-1">
                        <div className="flex items-center mb-1">
                          <Badge className="bg-muted-foreground/20 hover:bg-muted-foreground/30 text-muted-foreground px-2 py-0.5 text-xs">
                            Ep. {episode.episodeNumber}
                          </Badge>
                        </div>
                        
                        <h4 className="font-medium line-clamp-1 group-hover:text-accent transition-colors duration-300">
                          {episode.title}
                        </h4>
                        
                        <div className="text-xs text-muted-foreground mt-1">
                          {episode.duration}
                        </div>
                      </div>
                      
                      {/* Play Button */}
                      <div className="ml-4">
                        <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                          <Play className="h-4 w-4 ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Main Media Section Component
export function MediaSection({ 
  featuredVideo, 
  relatedVideos, 
  featuredPodcast, 
  recentEpisodes, 
  className 
}: MediaSectionProps) {
  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-1 w-8 bg-accent rounded-full" />
            <h2 className="text-lg font-heading font-bold uppercase tracking-wider">Media</h2>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-6 md:mb-0">
              Videos and podcasts from the world of Muay Thai
            </p>
          </div>
        </div>
        
        {/* Media Tabs */}
        <Tabs defaultValue="video" className="space-y-8">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
            <TabsTrigger value="video" className="text-base py-3 font-medium">
              Videos
            </TabsTrigger>
            <TabsTrigger value="podcast" className="text-base py-3 font-medium">
              Podcasts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="video" className="mt-0">
            <VideoFeature video={featuredVideo} relatedVideos={relatedVideos} />
          </TabsContent>
          
          <TabsContent value="podcast" className="mt-0">
            <PodcastFeature podcast={featuredPodcast} recentEpisodes={recentEpisodes} />
          </TabsContent>
        </Tabs>
      </Container>
    </Section>
  )
}

// Sample data for the media section
export const sampleFeaturedVideo: VideoItem = {
  id: "v1",
  title: "Rodtang vs. Haggerty 2: Full Fight Breakdown and Analysis",
  description: "A detailed analysis of the rematch between Rodtang Jitmuangnon and Jonathan Haggerty for the ONE Flyweight Muay Thai World Championship. We break down the key moments, techniques, and strategies that led to Rodtang's victory.",
  thumbnail: "/images/video-1.jpg",
  duration: "18:42",
  date: "March 10, 2023",
  views: "245K",
  slug: "rodtang-haggerty-2-breakdown",
  category: "Analysis"
}

export const sampleRelatedVideos: RelatedVideo[] = [
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
]

export const sampleFeaturedPodcast: PodcastItem = {
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
}

export const sampleRecentEpisodes: PodcastEpisode[] = [
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