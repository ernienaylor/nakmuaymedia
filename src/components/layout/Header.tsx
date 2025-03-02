"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { useTheme } from "@/components/ui/theme"

// Navigation items structure
const navItems = [
  {
    title: "News",
    href: "/news",
    items: [
      { title: "Latest News", href: "/news/latest" },
      { title: "Fight Results", href: "/news/results" },
      { title: "Interviews", href: "/news/interviews" },
      { title: "Analysis", href: "/news/analysis" },
    ],
  },
  {
    title: "Events",
    href: "/events",
    items: [
      { title: "Upcoming Events", href: "/events/upcoming" },
      { title: "Past Events", href: "/events/past" },
      { title: "Event Calendar", href: "/events/calendar" },
    ],
  },
  {
    title: "Fighters",
    href: "/fighters",
    items: [
      { title: "Fighter Profiles", href: "/fighters/profiles" },
      { title: "Rankings", href: "/fighters/rankings" },
      { title: "Champions", href: "/fighters/champions" },
    ],
  },
  {
    title: "Videos",
    href: "/videos",
    items: [
      { title: "Fight Highlights", href: "/videos/highlights" },
      { title: "Technique Breakdowns", href: "/videos/techniques" },
      { title: "Interviews", href: "/videos/interviews" },
      { title: "Documentaries", href: "/videos/documentaries" },
    ],
  },
  {
    title: "Podcast",
    href: "/podcast",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "Community",
    href: "/community",
    items: [
      { title: "Forums", href: "/community/forums" },
      { title: "Find a Gym", href: "/community/gyms" },
      { title: "Events", href: "/community/events" },
    ],
  },
  {
    title: "About",
    href: "/about",
    items: [
      { title: "Our Story", href: "/about" },
      { title: "Team", href: "/about/team" },
      { title: "Contact", href: "/contact" },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [searchExpanded, setSearchExpanded] = React.useState(false)
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const { isDark } = useTheme()

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle search expansion
  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded)
    if (!searchExpanded) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 200)
    }
  }

  // Close search when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const searchContainer = document.getElementById('search-container')
      if (searchContainer && !searchContainer.contains(target) && searchExpanded) {
        setSearchExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchExpanded])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm" 
          : "bg-background"
      )}
    >
      {/* Desktop Header */}
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo 
            size="large" 
            className={cn(
              "transition-all duration-300",
              isScrolled ? "scale-90" : "scale-100"
            )} 
          />
          <p className={cn(
            "ml-2 text-xs text-muted-foreground hidden md:block transition-opacity duration-300",
            isScrolled ? "opacity-0" : "opacity-100"
          )}>
            Your Ringside Seat to Muay Thai Action
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </nav>

        {/* Right Section - Search & Theme Toggle */}
        <div className="flex items-center space-x-1">
          {/* Search */}
          <div id="search-container" className="relative flex items-center">
            <div className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              searchExpanded ? "w-[200px] md:w-[300px] opacity-100" : "w-0 opacity-0"
            )}>
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search..."
                className="h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-none focus:ring-1 focus:ring-accent"
                style={{ backgroundColor: 'hsl(var(--background))' }}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className={cn(
                "ml-1 h-9 w-9 rounded-md transition-colors",
                searchExpanded && "text-accent"
              )}
              aria-label="Search"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </Button>
          </div>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden ml-1"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-50 lg:hidden transition-all duration-300 flex flex-col",
        mobileMenuOpen 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none"
      )}>
        {/* Mobile Menu Header */}
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between border-b border-border/40">
          <Logo size="large" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <MobileNavigation 
              items={navItems} 
              onItemClick={() => setMobileMenuOpen(false)} 
            />
          </div>
        </div>

        {/* Mobile Menu Footer */}
        <div className="container mx-auto px-4 py-4 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">
            Your Ringside Seat to Muay Thai Action
          </p>
        </div>
      </div>
    </header>
  )
}

// Desktop Navigation Item Component
function NavItem({ item }: { item: typeof navItems[0] }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // If item has subitems, render dropdown
  if (item.items) {
    return (
      <div ref={dropdownRef} className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
            isOpen 
              ? "text-accent" 
              : "hover:text-accent focus:text-accent"
          )}
        >
          {item.title}
          <ChevronDown className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )} />
        </button>

        {/* Dropdown Menu */}
        <div className={cn(
          "absolute top-full left-0 mt-1 w-56 rounded-md border border-border bg-card shadow-lg overflow-hidden transition-all duration-200 origin-top-left",
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}>
          <div className="p-2 grid gap-1">
            {/* Main Category Link */}
            <Link
              href={item.href}
              className="flex items-center w-full rounded-md bg-accent text-accent-foreground p-3 text-sm font-medium hover:bg-accent/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              All {item.title}
            </Link>
            
            {/* Divider */}
            <div className="h-px bg-border/60 my-1"></div>
            
            {/* Subcategory Links */}
            {item.items.map((subItem, index) => (
              <Link
                key={subItem.title}
                href={subItem.href}
                className="flex items-center w-full rounded-md p-2 text-sm hover:bg-accent/10 hover:text-accent transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // If item has no subitems, render simple link
  return (
    <Link
      href={item.href}
      className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent focus:text-accent"
    >
      {item.title}
    </Link>
  )
}

// Mobile Navigation Component
function MobileNavigation({ 
  items, 
  onItemClick 
}: { 
  items: typeof navItems,
  onItemClick: () => void
}) {
  return (
    <nav className="space-y-6">
      {items.map((item, index) => (
        <MobileNavItem 
          key={item.title} 
          item={item} 
          index={index}
          onItemClick={onItemClick}
        />
      ))}
    </nav>
  )
}

// Mobile Navigation Item Component
function MobileNavItem({ 
  item, 
  index,
  onItemClick 
}: { 
  item: typeof navItems[0],
  index: number,
  onItemClick: () => void
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className="text-xl font-heading font-semibold tracking-wide transition-colors hover:text-accent"
          onClick={onItemClick}
        >
          {item.title}
        </Link>
        
        {item.items && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Collapse" : "Expand"}
            className="h-8 w-8"
          >
            <ChevronDown className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen ? "rotate-180" : ""
            )} />
          </Button>
        )}
      </div>
      
      {/* Subitems */}
      {item.items && (
        <div className={cn(
          "mt-2 ml-4 space-y-2 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          {item.items.map((subItem, subIndex) => (
            <Link
              key={subItem.title}
              href={subItem.href}
              className="block py-2 text-base text-muted-foreground transition-all duration-200 hover:text-accent hover:translate-x-1"
              style={{ 
                animationDelay: `${(index * 50) + (subIndex * 30)}ms`,
                animation: 'fadeSlideIn 0.3s ease forwards',
              }}
              onClick={onItemClick}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 