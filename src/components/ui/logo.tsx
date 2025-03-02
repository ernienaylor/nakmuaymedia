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
          "font-heading font-bold text-accent tracking-tight transition-colors hover:text-accent/90",
          {
            "text-xl": size === "default",
            "text-lg": size === "small",
            "text-2xl": size === "large",
          }
        )}
      >
        Nak Muay Media
      </span>
    </Link>
  )
} 