"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, Twitch, ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

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

interface FooterLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

function FooterLink({ href, children, className }: FooterLinkProps) {
  return (
    <li>
      <Link 
        href={href} 
        className={cn(
          "text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center group",
          className
        )}
      >
        <ChevronRight className="h-3 w-3 mr-1.5 text-accent/70 transition-transform duration-300 group-hover:translate-x-0.5" />
        <span>{children}</span>
      </Link>
    </li>
  )
}

interface FooterColumnProps {
  title: string
  children: React.ReactNode
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3 className="font-heading font-bold text-lg relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-accent"></span>
      </h3>
      <ul className="space-y-2.5">
        {children}
      </ul>
    </motion.div>
  )
}

interface SocialButtonProps {
  href: string
  label: string
  icon: React.ReactNode
}

function SocialButton({ href, label, icon }: SocialButtonProps) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors duration-300"
    >
      {icon}
    </Link>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="container">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Logo and About */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-6">
            <Logo size="large" />
            
            <p className="text-muted-foreground">
              Your Ringside Seat to Muay Thai Action. The premier destination for Muay Thai news, events, fighter profiles, and community.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <SocialButton 
                href="https://instagram.com/nakmuaymedia" 
                label="Instagram"
                icon={<Instagram className="h-5 w-5" />}
              />
              <SocialButton 
                href="https://twitter.com/nakmuaymedia" 
                label="Twitter"
                icon={<Twitter className="h-5 w-5" />}
              />
              <SocialButton 
                href="https://facebook.com/nakmuaymedia" 
                label="Facebook"
                icon={<Facebook className="h-5 w-5" />}
              />
              <SocialButton 
                href="https://youtube.com/nakmuaymedia" 
                label="YouTube"
                icon={<Youtube className="h-5 w-5" />}
              />
              <SocialButton 
                href="https://twitch.tv/nakmuaymedia" 
                label="Twitch"
                icon={<Twitch className="h-5 w-5" />}
              />
            </div>
            
            <div className="pt-4 space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Fight Street, Bangkok, Thailand 10110
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a href="mailto:info@nakmuaymedia.com" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  info@nakmuaymedia.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a href="tel:+6612345678" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  +66 12 345 678
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <FooterColumn title="Quick Links">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/news">News</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/fighters">Fighters</FooterLink>
              <FooterLink href="/videos">Videos</FooterLink>
              <FooterLink href="/podcast">Podcast</FooterLink>
            </FooterColumn>
          </div>
          
          {/* Resources */}
          <div className="md:col-span-2">
            <FooterColumn title="Resources">
              <FooterLink href="/technique-library">Technique Library</FooterLink>
              <FooterLink href="/gym-finder">Gym Finder</FooterLink>
              <FooterLink href="/rankings">Rankings</FooterLink>
              <FooterLink href="/shop">Shop</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
            </FooterColumn>
          </div>
          
          {/* Company */}
          <div className="md:col-span-2">
            <FooterColumn title="Company">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/advertise">Advertise</FooterLink>
            </FooterColumn>
          </div>
          
          {/* Recent Posts */}
          <div className="md:col-span-2">
            <FooterColumn title="Recent Posts">
              <FooterLink href="/news/rodtang-defends-title">
                Rodtang Defends ONE Title
              </FooterLink>
              <FooterLink href="/news/buakaw-vs-saenchai">
                Buakaw vs Saenchai Announced
              </FooterLink>
              <FooterLink href="/news/lumpinee-international-series">
                Lumpinee International Series
              </FooterLink>
              <FooterLink href="/news/female-fighters-popularity">
                Rise of Female Fighters
              </FooterLink>
              <FooterLink href="/news/muay-thai-mma-influence">
                Muay Thai&apos;s Influence on MMA
              </FooterLink>
            </FooterColumn>
          </div>
        </motion.div>
        
        {/* Sponsors */}
        <div className="py-8 border-t border-b border-border/40 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Our Partners</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <div className="h-8 w-24 bg-muted/30 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Nak Muay Media. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
              Sitemap
            </Link>
          </div>
          
          <div className="text-xs text-muted-foreground/70">
            Designed with <span className="text-accent">&hearts;</span> by Nak Muay Media Team
          </div>
        </div>
      </div>
    </footer>
  )
} 