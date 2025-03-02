"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Trophy, MapPin, Calendar, Clock, Dumbbell, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Container, Section } from "@/components/ui/container"

interface FightResult {
  id: string
  opponent: string
  date: string
  event: string
  result: "win" | "loss" | "draw" | "nc"
  method: string
  round: number
  time: string
}

interface Achievement {
  id: string
  title: string
  year: string
  organization: string
}

interface Fighter {
  id: string
  name: string
  nickname: string
  image: string
  actionImage: string
  profileImage: string
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
  achievements: Achievement[]
  recentFights: FightResult[]
  slug: string
  socialMedia?: {
    instagram?: string
    twitter?: string
    facebook?: string
    youtube?: string
  }
}

// Sample fighter data
const SAMPLE_FIGHTER: Fighter = {
  id: "1",
  name: "Rodtang Jitmuangnon",
  nickname: "The Iron Man",
  image: "/images/fighters/rodtang-profile.jpg",
  actionImage: "/images/fighters/rodtang-action.jpg",
  profileImage: "/images/fighters/rodtang-portrait.jpg",
  nationality: "Thailand",
  age: 26,
  height: "5'5\" (165 cm)",
  weight: "135 lbs (61 kg)",
  weightClass: "Flyweight",
  stance: "Orthodox",
  team: "Jitmuangnon Gym",
  location: "Bangkok, Thailand",
  experience: "267-42-10 (Pro)",
  trainingSince: "Age 8",
  record: {
    wins: 267,
    losses: 42,
    draws: 10,
    nc: 0,
    kos: 61
  },
  bio: "Rodtang Jitmuangnon is a Thai Muay Thai fighter and current ONE Flyweight Muay Thai World Champion. Known for his aggressive fighting style and iron chin, Rodtang has become one of the most popular fighters in the sport. His forward pressure and devastating strikes have earned him the nickname 'The Iron Man'. He began training at the age of 8 and had his first professional fight shortly after, amassing hundreds of fights in Thailand's most prestigious stadiums before signing with ONE Championship.",
  achievements: [
    {
      id: "a1",
      title: "ONE Flyweight Muay Thai World Champion",
      year: "2019-Present",
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
  socialMedia: {
    instagram: "rodtang_jimungnon",
    twitter: "rodtang_jr",
    facebook: "rodtangjitmuangnon",
    youtube: "rodtangofficial"
  }
};

interface EnhancedFeaturedFighterProps {
  fighter?: Fighter;
  className?: string;
}

export function EnhancedFeaturedFighter({ 
  fighter = SAMPLE_FIGHTER, 
  className 
}: EnhancedFeaturedFighterProps) {
  const [activeTab, setActiveTab] = React.useState<'bio' | 'fights' | 'achievements'>('bio');
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  
  // Calculate win percentage
  const totalFights = fighter.record.wins + fighter.record.losses + fighter.record.draws + fighter.record.nc;
  const winPercentage = Math.round((fighter.record.wins / totalFights) * 100);
  const koPercentage = Math.round((fighter.record.kos / fighter.record.wins) * 100);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
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
  };

  return (
    <Section className={cn("py-16 md:py-24 overflow-hidden", className)}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-1 w-8 bg-accent rounded-full" />
            <h2 className="text-lg font-heading font-bold uppercase tracking-wider">Featured Fighter</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Hero Image Area - Left Column */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden rounded-xl shadow-lg">
              {/* Main Image */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/30 z-10" />
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  isImageLoaded ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={fighter.actionImage || fighter.image}
                  alt={`${fighter.name} in action`}
                  fill
                  className="object-cover"
                  priority
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>
              
              {/* Placeholder/Loading State */}
              <div className={cn(
                "absolute inset-0 bg-muted/80 flex items-center justify-center transition-opacity duration-500",
                isImageLoaded ? "opacity-0" : "opacity-100"
              )}>
                <div className="w-16 h-16 rounded-full border-4 border-accent border-t-transparent animate-spin" />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20" />
              
              {/* Fighter Name and Nickname */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30">
                <Badge 
                  className="mb-3 bg-accent text-white px-3 py-1 text-xs uppercase tracking-wider font-bold"
                >
                  {fighter.weightClass} Division
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-2 tracking-tight leading-none">
                  {fighter.name}
                </h2>
                {fighter.nickname && (
                  <p className="text-xl md:text-2xl text-white/90 italic font-heading">
                    "{fighter.nickname}"
                  </p>
                )}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 z-30">
                <Image 
                  src={`/flags/${fighter.nationality.toLowerCase().replace(/\s+/g, '-')}.svg`} 
                  alt={fighter.nationality} 
                  width={40} 
                  height={30} 
                  className="rounded shadow-md"
                />
              </div>
            </div>
          </div>
          
          {/* Fighter Info - Right Column */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Record Summary */}
              <motion.div variants={itemVariants} className="grid grid-cols-5 gap-3">
                <div className="flex flex-col items-center justify-center p-3 bg-card rounded-lg border border-border/50 shadow-sm">
                  <span className="text-3xl md:text-4xl font-bold text-accent">{fighter.record.wins}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Wins</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-card rounded-lg border border-border/50 shadow-sm">
                  <span className="text-3xl md:text-4xl font-bold">{fighter.record.losses}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Losses</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-card rounded-lg border border-border/50 shadow-sm">
                  <span className="text-3xl md:text-4xl font-bold">{fighter.record.draws}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Draws</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-card rounded-lg border border-border/50 shadow-sm">
                  <span className="text-3xl md:text-4xl font-bold">{fighter.record.kos}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">KOs</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-card rounded-lg border border-border/50 shadow-sm">
                  <span className="text-3xl md:text-4xl font-bold">{totalFights}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Fights</span>
                </div>
              </motion.div>
              
              {/* Win Percentage Bar */}
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Win Rate</span>
                  <span className="text-sm font-bold">{winPercentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${winPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">KO Rate</span>
                  <span className="text-sm font-bold">{koPercentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent/80 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${koPercentage}%` }}
                  />
                </div>
              </motion.div>
              
              {/* Fighter Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Age</span>
                  </div>
                  <p className="font-medium">{fighter.age}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-1 font-bold text-xs">H</span>
                    <span>Height</span>
                  </div>
                  <p className="font-medium">{fighter.height}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-1 font-bold text-xs">W</span>
                    <span>Weight</span>
                  </div>
                  <p className="font-medium">{fighter.weight}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Dumbbell className="h-4 w-4 mr-1" />
                    <span>Stance</span>
                  </div>
                  <p className="font-medium">{fighter.stance}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Team</span>
                  </div>
                  <p className="font-medium">{fighter.team}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Location</span>
                  </div>
                  <p className="font-medium">{fighter.location}</p>
                </div>
              </motion.div>
              
              {/* Tabs */}
              <motion.div variants={itemVariants} className="border-b border-border">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveTab('bio')}
                    className={cn(
                      "pb-2 font-medium text-sm transition-colors",
                      activeTab === 'bio' 
                        ? "border-b-2 border-accent text-accent" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Biography
                  </button>
                  <button
                    onClick={() => setActiveTab('achievements')}
                    className={cn(
                      "pb-2 font-medium text-sm transition-colors",
                      activeTab === 'achievements' 
                        ? "border-b-2 border-accent text-accent" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Achievements
                  </button>
                  <button
                    onClick={() => setActiveTab('fights')}
                    className={cn(
                      "pb-2 font-medium text-sm transition-colors",
                      activeTab === 'fights' 
                        ? "border-b-2 border-accent text-accent" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Recent Fights
                  </button>
                </div>
              </motion.div>
              
              {/* Tab Content */}
              <motion.div 
                variants={itemVariants}
                className="min-h-[200px]"
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'bio' && (
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed">{fighter.bio}</p>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="font-medium">{fighter.experience}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Training Since</p>
                        <p className="font-medium">{fighter.trainingSince}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'achievements' && (
                  <div className="space-y-4">
                    {fighter.achievements.map((achievement) => (
                      <div 
                        key={achievement.id}
                        className="flex items-start p-3 bg-card rounded-lg border border-border/50 shadow-sm"
                      >
                        <div className="mr-3 mt-1">
                          <Trophy className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-bold">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {achievement.organization} • {achievement.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'fights' && (
                  <div className="space-y-3">
                    {fighter.recentFights.map((fight) => (
                      <div 
                        key={fight.id}
                        className="flex items-center p-3 bg-card rounded-lg border border-border/50 shadow-sm"
                      >
                        <div className="mr-3">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs",
                            fight.result === "win" ? "bg-green-600" : 
                            fight.result === "loss" ? "bg-red-600" : 
                            fight.result === "draw" ? "bg-amber-600" : "bg-slate-600"
                          )}>
                            {fight.result === "win" ? "W" : 
                             fight.result === "loss" ? "L" : 
                             fight.result === "draw" ? "D" : "NC"}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold">vs. {fight.opponent}</p>
                          <p className="text-sm text-muted-foreground">
                            {fight.method} • R{fight.round} {fight.time}
                          </p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>{fight.event}</p>
                          <p>{fight.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <Button 
                  asChild 
                  className="w-full bg-accent hover:bg-accent/90 text-white group"
                  size="lg"
                >
                  <Link href={`/fighters/${fighter.slug}`}>
                    <span>View Full Fighter Profile</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
} 