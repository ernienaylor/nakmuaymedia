"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "default" | "small" | "large"
}

export function Logo({ className, size = "default" }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <span 
        className={cn(
          "font-heading font-bold tracking-tight transition-colors",
          {
            "text-xl": size === "default",
            "text-lg": size === "small",
            "text-2xl": size === "large",
          }
        )}
        style={{ 
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