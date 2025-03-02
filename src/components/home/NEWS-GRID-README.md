# Enhanced News Grid Component

The `EnhancedNewsGrid` component is a modern, editorial-style news grid for Nak Muay Media that presents articles in a clean, visually appealing layout while maintaining the energy and excitement of Muay Thai.

## Features

### Visual Elements
- **Clean Card Design**: Minimal, Apple-inspired card design with subtle shadows and borders
- **Consistent Article Cards**: Uniform sizing and spacing for a professional editorial look
- **Optimized Image Thumbnails**: 16:9 aspect ratio for visual consistency
- **Category Labels**: Bold, accent-colored badges using the brand's red (#B12025)
- **Typography Hierarchy**: Clear heading and body text distinction using Montserrat and Roboto
- **Visual Hover Effects**: Subtle image scaling and gradient overlays on hover
- **Section Header**: Elegant section title with accent bar and optional subtitle

### Interactive Elements
- **Smooth Animations**: Subtle fade-in and slide-up animations as content enters viewport
- **Hover States**: Dynamic hover effects on cards, images, and buttons
- **Read More Links**: Clear call-to-action with arrow animation
- **View All Button**: Prominent link to full article listing

### Content Organization
- **Article Metadata**: Clean display of publication date and read time
- **Excerpt Truncation**: Consistent 3-line excerpt display with proper text wrapping
- **Ample White Space**: Generous padding and margins for readability
- **Visual Balance**: Perfect content-to-whitespace ratio for editorial feel

## Responsive Behavior

The component adapts beautifully across all device sizes:

- **Desktop (1024px+)**: 3-column grid with ample spacing
- **Tablet (768px-1023px)**: 2-column grid with adjusted spacing
- **Mobile (<768px)**: Single column with optimized spacing and typography

All elements maintain proper proportions and visual hierarchy at every breakpoint, ensuring a consistent reading experience regardless of device.

## Usage

```tsx
import { EnhancedNewsGrid, sampleNewsArticles } from "@/components/home/enhanced-news-grid"

export default function NewsPage() {
  return (
    <main>
      <EnhancedNewsGrid 
        title="Latest Articles"
        subtitle="Stay updated with the latest news, analysis, and features from the world of Muay Thai"
        articles={sampleNewsArticles} 
        viewAllLink="/news"
      />
    </main>
  )
}
```

## Props

The component accepts the following props:

- `title`: Section title (optional, defaults to "Latest Articles")
- `subtitle`: Descriptive text below the title (optional)
- `articles`: Array of article objects (required)
- `className`: Additional CSS classes to apply to the section (optional)
- `viewAllLink`: URL for the "View All" button (optional, defaults to "/news")

## Article Interface

```tsx
interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  slug: string
  date: string
  readTime: string
  author?: string
  featured?: boolean
}
```

## Design Considerations

The enhanced news grid was designed with the following principles in mind:

1. **Editorial Authority**: Clean layout inspired by professional publications like WSJ
2. **Visual Consistency**: Uniform card sizing, spacing, and typography
3. **Content Hierarchy**: Clear visual distinction between headlines, excerpts, and metadata
4. **Subtle Energy**: Refined animations and hover effects that add dynamism without distraction
5. **Responsive Design**: Thoughtful adaptation across all screen sizes
6. **Brand Alignment**: Use of Nak Muay Media's color palette and typography system

## Implementation Notes

- Uses framer-motion for smooth animations
- Implements responsive grid using CSS Grid
- Follows accessibility best practices with proper contrast and semantic markup
- Maintains brand color palette (#B12025 accent red)
- Uses Montserrat for headings and Roboto for body text
- Includes sample data for easy implementation 