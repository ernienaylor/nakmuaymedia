import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-5xl font-bold tracking-wide uppercase", className)}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-4xl font-bold tracking-wide uppercase", className)}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-3xl font-bold tracking-wide uppercase", className)}>
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn("text-2xl font-bold tracking-wide uppercase", className)}>
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
    <p className={cn("text-lg leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn("text-sm leading-normal", className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn("text-sm", className)}
      style={{ color: "hsl(var(--muted-foreground))" }}
    >
      {children}
    </p>
  );
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-xl leading-relaxed", className)}>
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