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

  return (
    <header className="bg-secondary text-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between flex-wrap py-4">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link href="/" className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight hover:text-accent transition-colors duration-300">
              Nak Muay Media
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-accent hover:border-accent"
            >
              {mobileMenuOpen ? (
                <X className="h-3 w-3" />
              ) : (
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              )}
            </button>
          </div>
          
          {/* Navigation links */}
          <div className={`w-full ${mobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
            <div className="text-sm lg:flex-grow">
              {navItems.map((item) => (
                <Link 
                  key={item.title}
                  href={item.href} 
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-accent mr-6"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="mt-4 lg:mt-0">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
      
      {/* Submenu */}
      <div className="bg-white text-secondary py-2 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <Link href="/news/all" className="mr-4 py-1 text-primary hover:text-primary-dark">
              All News
            </Link>
            <Link href="/events/all" className="mr-4 py-1 text-primary hover:text-primary-dark">
              All Events
            </Link>
            <Link href="/fighters/all" className="mr-4 py-1 text-primary hover:text-primary-dark">
              All Fighters
            </Link>
            <Link href="/videos/all" className="mr-4 py-1 text-primary hover:text-primary-dark">
              All Videos
            </Link>
          </div>
        </div>
      </div>
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
                className="flex items-center w-full rounded-md p-2 text-sm hover:bg-accent/10 transition-colors"
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
      className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent focus:text-accent nav-link"
    >
      {item.title}
    </Link>
  )
}

// Mobile Navigation Component
function MobileNavigation({
  items,
  onClose,
}: {
  items: typeof navItems
  onClose: () => void
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)

  const toggleItem = (title: string) => {
    setOpenItem(openItem === title ? null : title)
  }

  return (
    <div className="grid gap-2 p-2">
      {items.map((item) => (
        <div key={item.title} className="border-b border-border/50 pb-2">
          {item.items ? (
            <>
              <button
                onClick={() => toggleItem(item.title)}
                className="flex items-center justify-between w-full p-2 text-left"
              >
                <span className="font-medium">{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openItem === item.title ? "rotate-180" : ""
                  )}
                />
              </button>

              {openItem === item.title && (
                <div className="mt-1 ml-4 grid gap-1">
                  <Link
                    href={item.href}
                    className="p-2 text-sm font-medium text-accent"
                    onClick={onClose}
                  >
                    All {item.title}
                  </Link>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="p-2 text-sm"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className="block p-2 font-medium"
              onClick={onClose}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
} 