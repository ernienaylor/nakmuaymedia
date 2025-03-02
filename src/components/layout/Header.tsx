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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 header-container",
        {
          "bg-background/80 backdrop-blur-md shadow-sm": isScrolled,
          "bg-background": !isScrolled,
        }
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo size="large" className="logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <div className="container mx-auto py-4">
            <MobileNavigation
              items={navItems}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  )
}

// Desktop Navigation Item Component
function NavItem({ item }: { item: (typeof navItems)[number] }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const { isDark } = useTheme()

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      <div ref={dropdownRef} className="relative group nav-item">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors nav-link",
            isOpen 
              ? "text-accent" 
              : "hover:text-accent focus:text-accent"
          )}
          style={{
            color: isOpen ? `hsl(var(--accent, ${isDark ? '358 70% 50%' : '358 70% 41%'}))` : ''
          }}
        >
          {item.title}
          <ChevronDown className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )} />
        </button>

        {/* Dropdown Menu */}
        <div className={cn(
          "dropdown-menu",
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}>
          <div className="p-2 grid gap-1">
            {/* Main Category Link */}
            <Link
              href={item.href}
              className="flex items-center w-full rounded-md bg-accent accent-fix p-3 text-sm font-medium hover:bg-accent/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              All {item.title}
            </Link>
            
            {/* Divider */}
            <div className="h-px bg-border/60 my-1"></div>
            
            {/* Subcategory Links */}
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.href}
                className="flex items-center w-full rounded-md p-2 text-sm hover:bg-accent/10 hover:text-accent transition-colors"
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

  // If no subitems, render simple link
  return (
    <Link
      href={item.href}
      className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent focus:text-accent nav-item nav-link"
    >
      {item.title}
    </Link>
  )
}

// Mobile Navigation Component
function MobileNavigation({ 
  items, 
  onClose 
}: { 
  items: typeof navItems,
  onClose: () => void
}) {
  return (
    <nav className="space-y-6">
      {items.map((item, index) => (
        <MobileNavItem 
          key={item.title} 
          item={item} 
          index={index}
          onItemClick={onClose}
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
    <div className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
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