"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "default" | "small" | "large"
}

export function Logo({ className, size = "default" }: LogoProps) {
  // Define font sizes based on size prop
  const getFontSize = () => {
    switch(size) {
      case "small":
        return "1.125rem"; // text-lg
      case "large":
        return "1.5rem"; // text-2xl
      default:
        return "1.25rem"; // text-xl
    }
  };

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <span 
        className={cn(
          "font-heading font-bold tracking-tight transition-colors",
        )}
        style={{ 
          fontSize: getFontSize(),
          color: "hsl(var(--accent))",
          "&:hover": {
            color: "hsla(var(--accent), 0.9)"
          }
        } as React.CSSProperties}
      >
        Nak Muay Media
      </span>
    </Link>
  )
} 