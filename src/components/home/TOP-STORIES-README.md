# Top Stories Component

The `TopStories` component is a premium editorial section for Nak Muay Media that highlights the most important content with a clear visual hierarchy. It combines the editorial authority of professional publications like WSJ with the visual impact of sports media like ESPN.

## Features

### Visual Elements
- **Prominent Main Story**: Large, impactful featured article with overlay text and gradient
- **Dramatic Typography**: Bold headlines with proper hierarchy and contrast
- **Visual Hierarchy**: Clear distinction between main and secondary stories through size and positioning
- **Category Badges**: Bold, accent-colored badges using the brand's red (#B12025)
- **Balanced White Space**: Generous padding and margins that guide the eye naturally
- **Section Header**: Elegant section title with accent bar and optional subtitle

### Interactive Elements
- **Smooth Animations**: Subtle fade-in and slide-up animations as content enters viewport
- **Hover Effects**: Dynamic image scaling and color transitions on interaction
- **CTA Buttons**: Clear call-to-action with arrow animations
- **View All Button**: Prominent link to full article listing

### Content Organization
- **Main Story**: Dominant display of the most important story with overlay title for impact
- **Secondary Stories**: Compact but engaging presentation of supporting stories
- **Article Metadata**: Clean display of publication date and read time
- **Excerpt Presentation**: Clear, readable text with proper spacing and line clamping
- **Visual Flow**: Layout that naturally guides the reader's eye from main to secondary content

## Responsive Behavior

The component adapts beautifully across all device sizes:

- **Desktop (1024px+)**: Side-by-side layout with main story taking 2/3 of the width
- **Tablet (768px-1023px)**: Maintains visual hierarchy with adjusted spacing
- **Mobile (<768px)**: Stacked layout that preserves the importance of the main story

All elements maintain proper proportions and visual hierarchy at every breakpoint, ensuring a consistent reading experience regardless of device.

## Usage

```tsx
import { TopStories, sampleMainStory, sampleSecondaryStories } from "@/components/home/top-stories"

export default function NewsPage() {
  return (
    <main>
      <TopStories 
        title="Top Stories"
        subtitle="The stories you need to read today"
        mainStory={sampleMainStory}
        secondaryStories={sampleSecondaryStories}
        viewAllLink="/news"
      />
    </main>
  )
}
```

## Props

The component accepts the following props:

- `title`: Section title (optional, defaults to "Top Stories")
- `subtitle`: Descriptive text below the title (optional)
- `mainStory`: The main article to display prominently (required)
- `secondaryStories`: Array of supporting articles (required)
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
}
```

## Design Considerations

The Top Stories component was designed with the following principles in mind:

1. **Editorial Authority**: Layout inspired by premium publications like WSJ
2. **Visual Impact**: Dramatic presentation of the main story with overlay title
3. **Content Hierarchy**: Clear visual distinction between primary and secondary content
4. **Guided Reading Flow**: Layout that naturally directs the reader's attention
5. **Balanced White Space**: Strategic use of spacing to create a premium feel
6. **Typography Hierarchy**: Font sizes and weights that clearly communicate importance
7. **Brand Alignment**: Use of Nak Muay Media's color palette and typography system

## Implementation Notes

- Uses framer-motion for smooth animations
- Implements responsive layout using CSS Grid
- Features content overlay technique for the main story
- Follows accessibility best practices with proper contrast and semantic markup
- Maintains brand color palette (#B12025 accent red)
- Uses Montserrat for headings and Roboto for body text
- Includes sample data for easy implementation 