"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "text-primary hover:bg-accent/90",
        destructive:
          "text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:text-accent-foreground",
        secondary:
          "text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:text-accent-foreground",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Define styles based on variant
    const getStyles = () => {
      const baseStyle: React.CSSProperties = {
        opacity: props.disabled ? 0.5 : 1
      }
      
      switch(variant) {
        case 'default':
          return {
            ...baseStyle,
            backgroundColor: "hsl(var(--accent))"
          }
        case 'destructive':
          return {
            ...baseStyle,
            backgroundColor: "hsl(var(--destructive))"
          }
        case 'outline':
          return {
            ...baseStyle,
            backgroundColor: "hsl(var(--background))",
            ':hover': {
              backgroundColor: "hsl(var(--accent))"
            }
          }
        case 'secondary':
          return {
            ...baseStyle,
            backgroundColor: "hsl(var(--secondary))"
          }
        case 'ghost':
          return {
            ...baseStyle,
            ':hover': {
              backgroundColor: "hsl(var(--accent))"
            }
          }
        case 'link':
          return baseStyle
        default:
          return baseStyle
      }
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={getStyles()}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 