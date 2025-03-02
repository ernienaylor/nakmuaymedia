export const metadata = {
  title: 'Events | Nak Muay Media',
  description: 'Upcoming and past Muay Thai events, fight cards, and results from around the world.',
};

import EventsCalendar from '@/components/events/EventsCalendar';
import { upcomingEvents } from '@/lib/data';

export default function EventsPage() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Muay Thai Events</h1>
      <p className="text-lg text-neutral-700 mb-8">
        Stay up to date with upcoming Muay Thai events, fight cards, and results from around the world.
      </p>
      
      <EventsCalendar events={upcomingEvents} />
    </div>
  );
} 