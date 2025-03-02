export const metadata = {
  title: 'Events | Nak Muay Media',
  description: 'Upcoming and past Muay Thai events, fight cards, and results from around the world.',
};

import EventsCalendar from '@/components/events/EventsCalendar.js';
import { upcomingEvents } from '@/lib/data';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Muay Thai Events</h1>
      <EventsCalendar events={[]} />
    </div>
  );
} 