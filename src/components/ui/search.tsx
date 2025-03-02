"use client"

import * as React from "react"
import { Search as SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Search({ className, ...props }: SearchProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const searchRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const toggleSearch = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 200)
    }
  }

  // Close search when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node) && isExpanded) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isExpanded])

  return (
    <div 
      ref={searchRef}
      className={cn(
        "relative flex items-center",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "flex items-center overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "w-[200px] md:w-[300px] opacity-100" : "w-0 opacity-0"
        )}
      >
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search..."
          className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-none"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSearch}
        className={cn(
          "ml-1 h-9 w-9 rounded-md transition-colors",
          isExpanded && "text-accent"
        )}
        aria-label="Search"
      >
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  )
} 