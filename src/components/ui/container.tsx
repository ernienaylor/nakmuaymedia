import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "tight" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 md:px-6",
        {
          "max-w-7xl": size === "default",
          "max-w-4xl": size === "tight",
          "max-w-6xl": size === "wide",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("py-12 md:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
} 