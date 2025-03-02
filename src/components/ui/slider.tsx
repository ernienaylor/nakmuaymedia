"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track 
      className="relative h-1.5 w-full grow overflow-hidden rounded-full" 
      style={{ backgroundColor: 'hsl(var(--muted))' }}
    >
      <SliderPrimitive.Range 
        className="absolute h-full" 
        style={{ backgroundColor: 'hsl(var(--accent))' }}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb 
      className="block h-4 w-4 rounded-full shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none" 
      style={{ 
        backgroundColor: 'hsl(var(--background))',
        borderColor: 'hsla(var(--primary), 0.5)',
        opacity: props.disabled ? 0.5 : 1
      }}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider } 