# Enhanced Featured Fighter Component

The `EnhancedFeaturedFighter` component is a modern, visually striking section that showcases top Muay Thai talent with both editorial depth and visual impact. It combines the trustworthiness of WSJ's editorial style with the excitement of UFC fighter profiles.

## Features

### Visual Elements
- **Dynamic Hero Image**: Large, high-quality fighter portrait/action shot with elegant loading state
- **Dramatic Typography**: Bold, impactful display of fighter name and nickname
- **Visual Record Display**: Clean, scannable presentation of fight statistics
- **Progress Bars**: Visual representation of win rate and KO percentage
- **Tabbed Content**: Organized presentation of biography, achievements, and fight history
- **Visual Fight Results**: Color-coded indicators for wins, losses, and draws

### Interactive Elements
- **Tabbed Navigation**: Switch between biography, achievements, and recent fights
- **Animated Content**: Subtle animations that enhance the user experience
- **Responsive Design**: Adapts seamlessly to all screen sizes
- **CTA Button**: Clear call-to-action to view the fighter's full profile

### Content Organization
- **Fighter Statistics**: Key data presented in a clean, scannable format
- **Fight Record**: Comprehensive record with visual win/loss indicators
- **Notable Achievements**: Championship information and career highlights
- **Gym Affiliation**: Training details and location information
- **Recent Fights**: History of recent bouts with results and details

## Usage

```tsx
import { EnhancedFeaturedFighter } from "@/components/home/enhanced-featured-fighter"

export default function HomePage() {
  return (
    <main>
      <EnhancedFeaturedFighter />
      {/* Other components */}
    </main>
  )
}
```

## Props

The component accepts the following props:

- `fighter`: Fighter data object (optional, defaults to sample data)
- `className`: Additional CSS classes to apply to the section (optional)

## Fighter Interface

```tsx
interface Fighter {
  id: string
  name: string
  nickname: string
  image: string
  actionImage: string
  profileImage: string
  nationality: string
  age: number
  height: string
  weight: string
  weightClass: string
  stance: string
  team: string
  location: string
  experience: string
  trainingSince: string
  record: {
    wins: number
    losses: number
    draws: number
    nc: number
    kos: number
  }
  bio: string
  achievements: Achievement[]
  recentFights: FightResult[]
  slug: string
  socialMedia?: {
    instagram?: string
    twitter?: string
    facebook?: string
    youtube?: string
  }
}
```

## Design Considerations

The enhanced featured fighter component was designed with the following principles in mind:

1. **Editorial Depth**: Clean data presentation inspired by Apple's minimal design
2. **Visual Impact**: Energy and intensity reflecting the fighter's persona
3. **Typography Hierarchy**: Clear typography using brand fonts
4. **Animation**: Subtle animations that add dynamism without distraction
5. **Responsive Design**: Fully responsive across all screen sizes

## Implementation Notes

- Uses framer-motion for smooth animations
- Implements loading states for images
- Uses CSS Grid for responsive layout
- Follows accessibility best practices
- Maintains brand color palette and design system 