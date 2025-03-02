"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme"

interface LogoProps {
  className?: string
  size?: "default" | "small" | "large"
}

export function Logo({ className, size = "default" }: LogoProps) {
  const { isDark } = useTheme();
  
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
          "font-heading font-bold tracking-tight transition-colors logo-text",
        )}
        style={{ 
          fontSize: getFontSize(),
          color: `hsl(var(--accent, ${isDark ? '358 70% 50%' : '358 70% 41%'}))`,
          fontFamily: "var(--font-montserrat)",
          fontWeight: "700",
          letterSpacing: "-0.025em",
          textShadow: isDark ? "0 1px 2px rgba(0,0,0,0.3)" : "none"
        }}
      >
        Nak Muay Media
      </span>
    </Link>
  )
} 