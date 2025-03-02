"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Ticket, Trophy, Users, Filter, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Container, Section } from "@/components/ui/container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface Fighter {
  name: string
  image: string
  country: string
  record?: string
}

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  venue: string
  image: string
  slug: string
  promotion: string
  ticketLink?: string
  streamLink?: string
  isFeatured?: boolean
  isMajor?: boolean
  fighters?: Fighter[]
  mainCard?: string[]
}

interface EventCalendarProps {
  title?: string
  subtitle?: string
  events: Event[]
  className?: string
  viewAllLink?: string
}

export function EventCalendar({ 
  title = "Upcoming Events",
  subtitle,
  events, 
  className,
  viewAllLink = "/events"
}: EventCalendarProps) {
  const [filter, setFilter] = React.useState<string>("all")
  const currentDate = new Date()
  
  // Sort events by date (ascending)
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  
  // Filter events based on the selected filter
  const filteredEvents = sortedEvents.filter(event => {
    if (filter === "all") return true
    if (filter === "major") return event.isMajor
    if (filter === "featured") return event.isFeatured
    return true
  })
  
  // Get featured event
  const featuredEvent = filteredEvents.find(event => event.isFeatured) || filteredEvents[0]
  
  // Get other events (excluding featured)
  const otherEvents = filteredEvents.filter(event => event !== featuredEvent)
  
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
  
  // Format date to display month and day
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      month: date.toLocaleString('default', { month: 'short' }),
      day: date.getDate(),
      weekday: date.toLocaleString('default', { weekday: 'short' }),
      full: date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center rounded-lg p-1"
                   style={{ backgroundColor: 'hsl(var(--muted))' }}>
                <Filter className="h-4 w-4 ml-2 mr-1" 
                        style={{ color: 'hsl(var(--muted-foreground))' }} />
                <select 
                  className="bg-transparent text-sm font-medium focus:outline-none"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Events</option>
                  <option value="major">Major Events</option>
                  <option value="featured">Featured Events</option>
                </select>
              </div>
              
              {viewAllLink && (
                <Button variant="outline" size="sm" asChild className="group">
                  <Link href={viewAllLink} className="flex items-center">
                    <span>View Full Calendar</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured Event - Left Column */}
          {featuredEvent && (
            <motion.div 
              className="lg:col-span-7 xl:col-span-8"
              variants={itemVariants}
            >
              <Card 
                className="h-full overflow-hidden group transition-all duration-300 hover:shadow-card-hover border-border/50"
              >
                <div className="relative">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Promotion badge */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className="bg-accent hover:bg-accent/90 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold"
                      >
                        {featuredEvent.promotion}
                      </Badge>
                    </div>
                    
                    {/* Featured badge */}
                    {featuredEvent.isFeatured && (
                      <div className="absolute top-4 right-4">
                        <Badge 
                          className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 text-xs uppercase tracking-wider font-bold"
                        >
                          Featured Event
                        </Badge>
                      </div>
                    )}
                    
                    {/* Date overlay */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 text-white rounded-lg overflow-hidden shadow-lg">
                      <div className="flex flex-col items-center p-2 min-w-[80px]">
                        <span className="text-xs font-medium uppercase">{formatDate(featuredEvent.date).month}</span>
                        <span className="text-2xl font-bold leading-none">{formatDate(featuredEvent.date).day}</span>
                        <span className="text-xs" style={{ opacity: 0.8 }}>{formatDate(featuredEvent.date).weekday}</span>
                      </div>
                    </div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight group-hover:text-accent/90 transition-colors duration-300">
                        {featuredEvent.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" style={{ opacity: 0.8 }} />
                          <span>{featuredEvent.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" style={{ opacity: 0.8 }} />
                          <span>{featuredEvent.venue}, {featuredEvent.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 md:p-8">
                  <Tabs defaultValue="fighters" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="fighters" className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>Main Card</span>
                      </TabsTrigger>
                      <TabsTrigger value="details" className="flex items-center gap-1">
                        <Trophy className="h-4 w-4" />
                        <span>Event Details</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="fighters" className="mt-0">
                      {featuredEvent.fighters && featuredEvent.fighters.length >= 2 ? (
                        <div className="flex flex-col items-center">
                          <div className="flex items-center justify-center w-full mb-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-accent mb-2">
                                <Image
                                  src={featuredEvent.fighters[0].image}
                                  alt={featuredEvent.fighters[0].name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <h4 className="font-heading font-bold text-lg md:text-xl mb-1">{featuredEvent.fighters[0].name}</h4>
                              <div className="flex items-center justify-center mb-1">
                                <span className="text-sm text-muted-foreground">{featuredEvent.fighters[0].country}</span>
                              </div>
                              {featuredEvent.fighters[0].record && (
                                <span className="text-sm font-medium">{featuredEvent.fighters[0].record}</span>
                              )}
                            </div>
                            
                            <div className="flex flex-col items-center justify-center mx-4 md:mx-8">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl md:text-2xl mb-2">
                                VS
                              </div>
                              <span className="text-xs text-muted-foreground">Main Event</span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center">
                              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-accent mb-2">
                                <Image
                                  src={featuredEvent.fighters[1].image}
                                  alt={featuredEvent.fighters[1].name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <h4 className="font-heading font-bold text-lg md:text-xl mb-1">{featuredEvent.fighters[1].name}</h4>
                              <div className="flex items-center justify-center mb-1">
                                <span className="text-sm text-muted-foreground">{featuredEvent.fighters[1].country}</span>
                              </div>
                              {featuredEvent.fighters[1].record && (
                                <span className="text-sm font-medium">{featuredEvent.fighters[1].record}</span>
                              )}
                            </div>
                          </div>
                          
                          {featuredEvent.mainCard && featuredEvent.mainCard.length > 0 && (
                            <div className="w-full">
                              <h5 className="font-heading font-medium text-sm uppercase text-muted-foreground mb-3">Also on the Main Card:</h5>
                              <ul className="space-y-2">
                                {featuredEvent.mainCard.map((fight, index) => (
                                  <li key={index} className="text-sm border-b border-border/50 pb-2 last:border-0">
                                    {fight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : featuredEvent.mainCard && featuredEvent.mainCard.length > 0 ? (
                        <div className="w-full">
                          <h5 className="font-heading font-medium text-sm uppercase text-muted-foreground mb-3">Main Card:</h5>
                          <ul className="space-y-2">
                            {featuredEvent.mainCard.map((fight, index) => (
                              <li key={index} className="text-sm border-b border-border/50 pb-2 last:border-0">
                                {fight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center">Main card details coming soon</p>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="details" className="mt-0">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-heading font-medium text-sm uppercase text-muted-foreground mb-2">Date & Time</h5>
                          <p className="font-medium">{formatDate(featuredEvent.date).full} • {featuredEvent.time}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-heading font-medium text-sm uppercase text-muted-foreground mb-2">Venue</h5>
                          <p className="font-medium">{featuredEvent.venue}, {featuredEvent.location}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-heading font-medium text-sm uppercase text-muted-foreground mb-2">Promotion</h5>
                          <p className="font-medium">{featuredEvent.promotion}</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                
                <CardFooter className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto"
                    asChild
                  >
                    <Link href={`/events/${featuredEvent.slug}`} className="flex items-center justify-center">
                      <span>Event Details</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  
                  {featuredEvent.ticketLink && (
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto"
                      asChild
                    >
                      <Link href={featuredEvent.ticketLink} className="flex items-center justify-center">
                        <Ticket className="mr-2 h-4 w-4" />
                        <span>Get Tickets</span>
                      </Link>
                    </Button>
                  )}
                  
                  {featuredEvent.streamLink && (
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto"
                      asChild
                    >
                      <Link href={featuredEvent.streamLink} className="flex items-center justify-center">
                        <span>Watch Live</span>
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          )}
          
          {/* Other Events - Right Column */}
          <motion.div 
            className="lg:col-span-5 xl:col-span-4"
            variants={containerVariants}
          >
            <div className="space-y-6">
              {otherEvents.map((event, index) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Card 
                    className={cn(
                      "overflow-hidden group transition-all duration-300 hover:shadow-card-hover border-border/50",
                      event.isMajor ? "border-l-4 border-l-accent" : ""
                    )}
                  >
                    <Link href={`/events/${event.slug}`} className="block">
                      <div className="flex items-stretch">
                        {/* Date Column */}
                        <div className="flex flex-col items-center justify-center p-4 min-w-[80px] text-center"
                             style={{ backgroundColor: 'hsl(var(--muted))' }}>
                          <span className="text-xs font-medium uppercase">{formatDate(event.date).month}</span>
                          <span className="text-2xl font-bold leading-none">{formatDate(event.date).day}</span>
                          <span className="text-xs text-muted-foreground">{formatDate(event.date).weekday}</span>
                        </div>
                        
                        {/* Content Column */}
                        <div className="flex-1 p-4">
                          <div className="flex items-start justify-between mb-2">
                            <Badge 
                              className={cn(
                                "px-2 py-0.5 text-xs uppercase tracking-wider font-medium",
                                event.isMajor 
                                  ? "bg-accent hover:bg-accent/90 text-white" 
                                  : "bg-muted-foreground/20 hover:bg-muted-foreground/30 text-muted-foreground"
                              )}
                            >
                              {event.promotion}
                            </Badge>
                            
                            {event.isMajor && (
                              <Badge 
                                className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 text-xs"
                              >
                                Major Event
                              </Badge>
                            )}
                          </div>
                          
                          <h4 className="font-heading text-lg font-bold mb-2 line-clamp-1 group-hover:text-accent transition-colors duration-300">
                            {event.title}
                          </h4>
                          
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center">
                              <Clock className="h-3.5 w-3.5 mr-1" style={{ opacity: 0.8 }} />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-3.5 w-3.5 mr-1" style={{ opacity: 0.8 }} />
                              <span className="line-clamp-1">{event.venue}, {event.location}</span>
                            </div>
                          </div>
                          
                          {event.fighters && event.fighters.length >= 2 && (
                            <div className="flex items-center text-sm mt-3">
                              <span className="font-medium mr-2">Main Event:</span>
                              <span>{event.fighters[0].name} vs {event.fighters[1].name}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <Link href={viewAllLink} className="flex items-center justify-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>View Full Calendar</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

// Sample data for the event calendar
export const sampleEvents: Event[] = [
  {
    id: "e1",
    title: "ONE Championship: Immortal Glory",
    date: "2023-04-22",
    time: "7:00 PM ICT",
    location: "Bangkok, Thailand",
    venue: "Impact Arena",
    image: "/images/hero-1.jpg",
    slug: "one-immortal-glory",
    promotion: "ONE Championship",
    ticketLink: "https://www.onefc.com/tickets",
    streamLink: "https://watch.onefc.com",
    isFeatured: true,
    isMajor: true,
    fighters: [
      {
        name: "Nong-O Gaiyanghadao",
        image: "/images/fighter-1.jpg",
        country: "Thailand",
        record: "262-54-10"
      },
      {
        name: "Jonathan Haggerty",
        image: "/images/fighter-1.jpg",
        country: "United Kingdom",
        record: "19-5-0"
      }
    ],
    mainCard: [
      "Rodtang Jitmuangnon vs. Jacob Smith - Flyweight Muay Thai",
      "Petchmorakot Petchyindee vs. Jimmy Vienot - Featherweight Muay Thai Title",
      "Panpayak Jitmuangnon vs. Savvas Michael - Flyweight Muay Thai"
    ]
  },
  {
    id: "e2",
    title: "Rajadamnern World Series",
    date: "2023-04-15",
    time: "6:30 PM ICT",
    location: "Bangkok, Thailand",
    venue: "Rajadamnern Stadium",
    image: "/images/hero-2.jpg",
    slug: "rajadamnern-world-series",
    promotion: "Rajadamnern",
    isMajor: true,
    fighters: [
      {
        name: "Seksan Or Kwanmuang",
        image: "/images/fighter-1.jpg",
        country: "Thailand",
        record: "221-59-13"
      },
      {
        name: "Kongthoranee Sor Sommai",
        image: "/images/fighter-1.jpg",
        country: "Thailand",
        record: "78-21-5"
      }
    ],
    mainCard: [
      "Yodlekpet Or Atchariya vs. Prajanchai PK Saenchai - 130 lbs",
      "Rungkit Wor Sanprapai vs. Petchdam Petchyindee - 135 lbs",
      "Yodpanomrung Jitmuangnon vs. Samingdet Nor Sripueng - 140 lbs"
    ]
  },
  {
    id: "e3",
    title: "MAX Muay Thai",
    date: "2023-04-08",
    time: "7:00 PM ICT",
    location: "Pattaya, Thailand",
    venue: "MAX Muay Thai Stadium",
    image: "/images/hero-3.jpg",
    slug: "max-muay-thai",
    promotion: "MAX Muay Thai",
    mainCard: [
      "Kulabdam Sor Jor Piekuthai vs. Kompetch Fairtex - 147 lbs",
      "Littewada Sitthikul vs. Changpuek Kiatsongrit - 140 lbs",
      "Petchsila Wor Auracha vs. Yodkhunpon Sitmonchai - 135 lbs"
    ]
  },
  {
    id: "e4",
    title: "Lion Fight 77",
    date: "2023-04-01",
    time: "7:30 PM EST",
    location: "Tampa, Florida, USA",
    venue: "Yuengling Center",
    image: "/images/hero-4.jpg",
    slug: "lion-fight-77",
    promotion: "Lion Fight",
    ticketLink: "https://www.lionfight.com/tickets",
    fighters: [
      {
        name: "Steve Walker",
        image: "/images/fighter-1.jpg",
        country: "United States",
        record: "11-3-0"
      },
      {
        name: "Geoffrey Then",
        image: "/images/fighter-1.jpg",
        country: "France",
        record: "35-8-1"
      }
    ]
  },
  {
    id: "e5",
    title: "Lumpinee Stadium Championship",
    date: "2023-04-28",
    time: "6:00 PM ICT",
    location: "Bangkok, Thailand",
    venue: "Lumpinee Boxing Stadium",
    image: "/images/hero-1.jpg",
    slug: "lumpinee-championship",
    promotion: "Lumpinee",
    isMajor: true,
    mainCard: [
      "Tawanchai PK Saenchai vs. Superbon Banchamek - 145 lbs Title Fight",
      "Sangmanee Sor Cafemuay vs. Ferrari Fairtex - 135 lbs",
      "Chamuaktong Fightermuay vs. Kiewpayak Jitmuangnon - 147 lbs"
    ]
  }
]; 