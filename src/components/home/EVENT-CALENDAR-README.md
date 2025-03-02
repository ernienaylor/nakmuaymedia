# Enhanced Event Calendar Component

The `EventCalendar` component is a premium editorial section for Nak Muay Media that showcases upcoming Muay Thai events with a perfect balance of information and excitement. The design merges the authoritative structure of a Wall Street Journal financial calendar with the energy of UFC event listings, creating a component that is both informative and visually engaging.

## Features

### Visual Elements

- **Dramatic Visual Hierarchy**: Featured events receive prominent placement with large hero images, while secondary events are displayed in a structured, scannable list format.
- **Promotion & Event Badges**: Clear visual indicators distinguish between major events and regular shows, with special highlighting for featured events.
- **Date Prominence**: Dates are displayed in a visually distinct format that makes scanning for timeline information intuitive and immediate.
- **Fighter Showcases**: Main event fighters are prominently displayed with profile images, country flags, and fight records when available.
- **Gradient Overlays**: Subtle gradients improve text readability while adding visual depth to event imagery.
- **Tabbed Content**: Organized information architecture with tabs separating fighter information from event details.

### Interactive Elements

- **Filtering System**: Users can filter events by category (All Events, Major Events, Featured Events).
- **Smooth Animations**: Subtle entrance animations using Framer Motion enhance the user experience without being distracting.
- **Hover Effects**: Interactive elements provide visual feedback on hover, improving usability.
- **Clear CTAs**: Prominent call-to-action buttons for event details, ticket purchases, and live streams.
- **Expandable Information**: Tabbed interface allows users to toggle between fighter information and event details.

### Content Organization

- **Chronological Listing**: Events are automatically sorted by date, with the nearest events displayed first.
- **Featured Event Showcase**: The most important upcoming event receives premium placement and expanded information.
- **Main Card Highlights**: Lists of main card fights provide additional context about event significance.
- **Event Metadata**: Structured presentation of date, time, venue, location, and promotion information.
- **Multiple CTAs**: Contextual links for event details, ticket purchases, and streaming options when available.

## Responsive Behavior

The Event Calendar component is fully responsive, adapting elegantly to different device sizes:

- **Desktop (1024px+)**: Two-column layout with featured event taking approximately 2/3 of the width and upcoming events list taking 1/3.
- **Tablet (768px - 1023px)**: Maintains two-column layout but with adjusted proportions and slightly reduced imagery.
- **Mobile (<768px)**: Stacks to a single column with the featured event on top, followed by the list of upcoming events. Date indicators and fighter showcases are optimized for smaller screens.

## Usage

```tsx
import { EventCalendar, sampleEvents } from "@/components/home/event-calendar";

export default function EventsPage() {
  return (
    <main>
      <EventCalendar 
        title="Upcoming Muay Thai Events" 
        subtitle="Don't miss the most exciting Muay Thai events from around the world"
        events={sampleEvents}
        viewAllLink="/events/all"
      />
    </main>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Upcoming Events"` | The title displayed at the top of the component |
| `subtitle` | `string` | `undefined` | Optional subtitle text displayed below the title |
| `events` | `Event[]` | Required | Array of event objects to display |
| `className` | `string` | `undefined` | Optional additional CSS classes |
| `viewAllLink` | `string` | `"/events"` | URL for the "View Full Calendar" button |

## Event Interface

```typescript
interface Event {
  id: string;
  title: string;
  date: string;  // Format: "YYYY-MM-DD"
  time: string;
  location: string;
  venue: string;
  image: string;
  slug: string;
  promotion: string;
  ticketLink?: string;
  streamLink?: string;
  isFeatured?: boolean;
  isMajor?: boolean;
  fighters?: Fighter[];
  mainCard?: string[];
}

interface Fighter {
  name: string;
  image: string;
  country: string;
  record?: string;
}
```

## Design Considerations

The Event Calendar component was designed with the following principles in mind:

1. **Editorial Authority**: The component uses structured layouts, clear typography hierarchy, and consistent metadata presentation to convey authority and reliability.

2. **Visual Impact**: Strategic use of imagery, color accents, and visual hierarchy creates excitement and draws attention to major events.

3. **Information Density**: The design balances comprehensive information with visual clarity, ensuring users can quickly scan for relevant details.

4. **Guided Focus**: Visual cues direct attention to the most important upcoming event while maintaining easy access to other events.

5. **Brand Alignment**: The component uses the Nak Muay Media color palette, typography, and design language for a consistent brand experience.

6. **Contextual Actions**: Call-to-action buttons are contextually relevant to each event's status (details, tickets, streaming).

## Implementation Notes

- Uses `framer-motion` for smooth entrance animations and hover effects
- Implements CSS Grid for responsive layouts
- Utilizes the Container and Section components for consistent spacing
- Includes filtering functionality with React state
- Formats dates using JavaScript's Date API
- Provides sample data export for easy implementation
- Includes conditional rendering for optional event properties
- Uses Lucide icons for consistent visual language
- Implements accessible tab interface for content organization
- Follows accessibility best practices with appropriate contrast and focus states

## Sample Data

The component exports `sampleEvents` which provides example event data for implementation and testing purposes. This data includes a variety of event types, including featured events, major events, and regular events, with different combinations of available information. 