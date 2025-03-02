# Nak Muay Media Home Components

This directory contains the components used on the Nak Muay Media homepage.

## Featured Hero Section

The `FeaturedHeroSection` component is a modern, impactful hero section that combines the editorial authority of WSJ with the energy of ESPN. It showcases a main featured article with supporting secondary articles.

### Features

- **Main Article Showcase**: Large, high-quality image with bold headline and excerpt
- **Secondary Articles Grid**: 3-4 secondary stories displayed alongside or below the main article
- **Responsive Design**: Adapts elegantly from desktop to mobile
- **Visual Hierarchy**: Clear distinction between main and secondary content
- **Typography**: Uses Montserrat for headings and Roboto for body text
- **Animations**: Subtle animations for enhanced user experience
- **Error Handling**: Graceful fallbacks for missing images

### Usage

```tsx
import { FeaturedHeroSection } from "@/components/home/featured-hero-section"

export default function HomePage() {
  return (
    <main>
      <FeaturedHeroSection />
      {/* Other components */}
    </main>
  )
}
```

### Props

The component accepts the following props:

- `mainArticle`: The primary featured article (optional, defaults to sample data)
- `secondaryArticles`: Array of secondary articles (optional, defaults to sample data)
- `className`: Additional CSS classes to apply to the section (optional)

### Article Interface

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
}
```

## Design Considerations

The featured hero section was designed with the following principles in mind:

1. **Editorial Authority**: Clean layout with ample white space and clear typography
2. **Visual Energy**: Bold accent colors and dynamic hover effects
3. **Content Hierarchy**: Main story is visually dominant with secondary stories supporting
4. **Responsive Behavior**: Maintains impact and readability at all screen sizes
5. **Performance**: Optimized images with proper loading strategies

## Implementation Notes

- Uses Next.js Image component for optimized image loading
- Implements fallback images for error handling
- Uses CSS Grid for responsive layout
- Incorporates subtle animations for enhanced engagement
- Follows accessibility best practices 