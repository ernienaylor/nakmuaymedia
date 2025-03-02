import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 
      className={cn("font-bold tracking-wide uppercase", className)}
      style={{ fontSize: "3rem", lineHeight: "1.2" }}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 
      className={cn("font-bold tracking-wide uppercase", className)}
      style={{ fontSize: "2.25rem", lineHeight: "2.5rem" }}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 
      className={cn("font-bold tracking-wide uppercase", className)}
      style={{ fontSize: "1.875rem", lineHeight: "2.25rem" }}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 
      className={cn("font-bold tracking-wide uppercase", className)}
      style={{ fontSize: "1.5rem", lineHeight: "2rem" }}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn("leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn("leading-relaxed", className)}
      style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}
    >
      {children}
    </p>
  );
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small 
      className={cn("leading-normal", className)}
      style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn("", className)}
      style={{ 
        fontSize: "0.875rem", 
        lineHeight: "1.25rem",
        color: "hsl(var(--muted-foreground))" 
      }}
    >
      {children}
    </p>
  );
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn("leading-relaxed", className)}
      style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote 
      className={cn("pl-4 italic", className)}
      style={{ borderLeftWidth: "4px", borderLeftColor: "hsl(var(--accent))" }}
    >
      {children}
    </blockquote>
  );
} 