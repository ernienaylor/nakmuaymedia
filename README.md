# Nak Muay Media

A modern, responsive website for Muay Thai news, events, fighter profiles, and community.

## Features

- **Modern UI**: Clean, minimalist design with clear visual hierarchy
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Content-Rich Sections**: Featured articles, fighter profiles, event calendars, and media content
- **Interactive Components**: Tabs, cards, dropdowns, and more
- **Dark/Light Mode**: Theme toggle for user preference

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Typography**: Montserrat for headlines, Lora for body text
- **Icons**: Lucide React

## Components

The website includes the following key components:

- **Header**: Logo, navigation, search, and theme toggle
- **Hero Section**: Featured content with main and secondary articles
- **Featured Fighter**: Detailed fighter profile with stats and fight history
- **News Grid**: Latest articles in a responsive grid layout
- **Top Stories**: Highlighted news with visual hierarchy
- **Event Calendar**: Upcoming events with details and fighter matchups
- **Media Section**: Videos and podcasts with tabs interface
- **Newsletter**: Email signup with form validation
- **Footer**: Site navigation, social links, and newsletter signup

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app`: Next.js app router pages
- `/components`: Reusable UI components
  - `/ui`: Base UI components
  - `/home`: Homepage-specific components
  - `/layout`: Layout components (header, footer, etc.)
- `/lib`: Utility functions
- `/public`: Static assets

## Design System

The design follows these principles:

- **Clean and Modern**: Apple-inspired white space and minimalist layout
- **Warm yet Strong**: Red accent color (#B12025) for CTAs and highlights
- **Editorially Structured**: WSJ-inspired content blocks with clear typographic hierarchy
- **Energy-Infused**: Dynamic content cards with bold headlines and high-contrast imagery

## License

MIT
