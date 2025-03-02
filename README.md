# Nak Muay Media

A modern, responsive website for Muay Thai news, events, fighter profiles, and community.

## Features

- **Modern UI**: Clean, minimalist design with clear visual hierarchy
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Content-Rich Sections**: Featured articles, fighter profiles, event calendars, and media content
- **Interactive Components**: Tabs, cards, dropdowns, and more
- **Dark/Light Mode**: Theme toggle for user preference
- **Performance Optimized**: Image optimization, bundle analysis, and performance monitoring

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Typography**: Montserrat for headlines, Lora for body text
- **Icons**: Lucide React
- **Performance Tools**: Bundle analyzer, image optimization script

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
- `/scripts`: Utility scripts for deployment and optimization
- `/docs`: Project documentation

## Design System

The design follows these principles:

- **Clean and Modern**: Apple-inspired white space and minimalist layout
- **Warm yet Strong**: Red accent color (#B12025) for CTAs and highlights
- **Editorially Structured**: WSJ-inspired content blocks with clear typographic hierarchy
- **Energy-Infused**: Dynamic content cards with bold headlines and high-contrast imagery

## Development Tools

### Image Optimization

The project includes a custom image optimization script:

```bash
npm run optimize-images
```

This processes images in the `public/images` directory, creating multiple sizes and formats for optimal performance. See [Image Optimization Guide](./docs/IMAGE_OPTIMIZATION.md) for details.

### Performance Monitoring

To check the performance of your website using Lighthouse:

```bash
npm run performance-check [url] [device]
```

Examples:
```bash
npm run performance-check https://nakmuaymedia.com mobile
npm run performance-check https://nakmuaymedia.com desktop
```

This generates a comprehensive report with performance metrics, accessibility scores, and improvement suggestions.

### Bundle Analysis

To analyze the bundle size and identify optimization opportunities:

```bash
npm run analyze
```

This generates a visual representation of the bundle size, helping identify large dependencies.

### Deployment

Prepare for deployment with:

```bash
npm run prepare-deploy
```

Deploy to Vercel with:

```bash
npm run deploy
```

See [Deployment Guide](./docs/DEPLOYMENT.md) for more details.

## Documentation

- [Deployment Guide](./docs/DEPLOYMENT.md): Instructions for deploying to Vercel
- [Testing Guide](./docs/TESTING.md): Testing procedures and best practices
- [Image Optimization Guide](./docs/IMAGE_OPTIMIZATION.md): Best practices for image optimization
- [Performance Guide](./docs/PERFORMANCE.md): Performance optimization strategies and tools
- [SEO Guide](./docs/SEO.md): SEO optimization strategies

## License

MIT
