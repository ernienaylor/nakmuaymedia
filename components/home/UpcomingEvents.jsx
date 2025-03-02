import Link from 'next/link';
import { upcomingEvents } from '@/lib/data';

export default function UpcomingEvents() {
  // Display only the first 3 events
  const displayedEvents = upcomingEvents.slice(0, 3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayedEvents.length > 0 ? (
        displayedEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-neutral-200">
              <h3 className="text-lg font-bold">{event.title || "Event Title"}</h3>
              <p className="text-sm text-neutral-500">{event.date || "Upcoming"}</p>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {event.bouts && event.bouts.length > 0 ? (
                  event.bouts.map((bout, boutIndex) => (
                    <div key={boutIndex} className="flex items-center justify-between">
                      <div className="text-sm font-medium">{bout.fighter1 || "Fighter 1"}</div>
                      <div className="text-xs bg-neutral-100 px-2 py-1 rounded">VS</div>
                      <div className="text-sm font-medium text-right">{bout.fighter2 || "Fighter 2"}</div>
                    </div>
                  ))
                ) : (
                  <p className="text-neutral-600 text-sm">Bout details coming soon</p>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Events Coming Soon</h3>
          <p className="text-neutral-600">Check back for upcoming Muay Thai events.</p>
        </div>
      )}
    </div>
  );
} 