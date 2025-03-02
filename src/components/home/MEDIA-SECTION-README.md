# Media Section Component

## Component Overview

The `MediaSection` component is a premium multimedia experience for Nak Muay Media, designed to showcase featured videos and podcasts in an immersive interface. It combines the sleek design of premium streaming platforms with the energy of sports media to create an engaging user experience.

## Features

### Visual Elements
- **Tabbed Interface**: Clean, modern tabs for switching between video and podcast content
- **Featured Content Showcase**: Large, prominent display for featured videos and podcasts
- **Media Player Controls**: Interactive controls with progress tracking and time display
- **Thumbnail Previews**: High-quality image thumbnails with hover effects
- **Content Carousels**: Horizontal scrolling for related videos and recent podcast episodes
- **Visual Hierarchy**: Clear distinction between featured and related/recent content

### Interactive Elements
- **Tab Switching**: Smooth transitions between video and podcast content
- **Media Controls**: Play/pause buttons, volume slider, and progress tracking
- **Hover Effects**: Dynamic scaling and shadow effects on media items
- **Carousel Navigation**: Arrow controls for browsing additional content
- **Responsive Interactions**: Touch-friendly controls for mobile users

### Content Organization
- **Featured Video**: Prominently displayed with title, description, duration, and date
- **Related Videos**: Collection of additional videos with thumbnails and basic metadata
- **Featured Podcast**: Highlighted podcast episode with cover art, title, and description
- **Recent Episodes**: List of recent podcast episodes with relevant information
- **Metadata Display**: Consistent presentation of duration, date, and other details

## Responsive Behavior

### Desktop (1024px+)
- Full-width layout with large featured content area
- Side-by-side arrangement for featured content and description
- Horizontal carousels for related videos and recent episodes
- Full media player controls visible

### Tablet (768px - 1023px)
- Maintained tab interface with slightly reduced content size
- Adjusted spacing and typography for medium screens
- Carousel navigation optimized for touch interactions
- Preserved media player functionality

### Mobile (< 768px)
- Stacked layout with vertical content flow
- Full-width media items for optimal viewing
- Simplified controls and metadata display
- Touch-optimized carousel for horizontal scrolling

## Usage

```tsx
import { MediaSection, sampleFeaturedVideo, sampleRelatedVideos, sampleFeaturedPodcast, sampleRecentEpisodes } from "@/components/home/media-section"

export default function HomePage() {
  return (
    <main>
      {/* Other components */}
      
      <MediaSection 
        featuredVideo={sampleFeaturedVideo}
        relatedVideos={sampleRelatedVideos}
        featuredPodcast={sampleFeaturedPodcast}
        recentEpisodes={sampleRecentEpisodes}
        className="bg-neutral-light py-12 md:py-16"
      />
      
      {/* Other components */}
    </main>
  )
}
```

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `featuredVideo` | `Video` | The main video to be featured prominently | Yes |
| `relatedVideos` | `Video[]` | Array of related videos to display in carousel | Yes |
| `featuredPodcast` | `Podcast` | The main podcast episode to be featured | Yes |
| `recentEpisodes` | `Podcast[]` | Array of recent podcast episodes | Yes |
| `className` | `string` | Additional CSS classes to apply to the component | No |

## Media Interfaces

### Video Interface
```typescript
interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  views?: string;
  slug: string;
}
```

### Podcast Interface
```typescript
interface Podcast {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  slug: string;
}
```

## Design Considerations

- **Immersive Experience**: Creates a premium media consumption environment that encourages exploration
- **Content Discovery**: Facilitates discovery of related content through intuitive navigation
- **Visual Consistency**: Maintains brand identity while providing distinct visual treatment for different media types
- **User Control**: Gives users control over their media experience with interactive elements
- **Accessibility**: Ensures all users can access and interact with media content regardless of abilities
- **Performance**: Optimizes media loading and playback for smooth user experience

## Implementation Notes

- Uses `framer-motion` for smooth animations and transitions
- Implements `@radix-ui/react-tabs` for accessible tab functionality
- Utilizes `@radix-ui/react-slider` for media progress and volume controls
- Employs CSS Grid and Flexbox for responsive layouts
- Includes sample data exports for easy implementation and testing
- Follows accessibility best practices with proper ARIA attributes and keyboard navigation
- Simulates media playback functionality (actual implementation would require integration with a media player library)

## Demo

A demo page showcasing the Media Section component is available at `/media-section-demo`. 