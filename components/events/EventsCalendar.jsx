import Link from 'next/link';
import Image from 'next/image';

export default function EventsCalendar({ events }) {
  return (
    <div className="space-y-8">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <div className="relative h-48 md:h-full">
                <Image
                  src={event.image || "/images/placeholder.jpg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-sm font-medium">{event.promotion}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                {event.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-700 mb-2">
                <span className="font-medium">{event.date}</span> | {event.venue}
              </p>
              
              <p className="text-neutral-600 mb-4">{event.description}</p>
              
              {event.bouts.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm uppercase font-bold text-neutral-500 mb-2">Main Card</h4>
                  {event.bouts.slice(0, 1).map((bout, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-200">
                      <div className="text-center w-2/5">
                        <p className="font-heading font-bold">{bout.fighter1.name}</p>
                        <p className="text-xs text-neutral-500">{bout.fighter1.record}</p>
                      </div>
                      
                      <div className="text-center">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {bout.is_title_fight ? 'Title Fight' : bout.weight_class}
                        </span>
                      </div>
                      
                      <div className="text-center w-2/5">
                        <p className="font-heading font-bold">{bout.fighter2.name}</p>
                        <p className="text-xs text-neutral-500">{bout.fighter2.record}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <Link 
                href={`/events/${event.slug}`} 
                className="inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded text-sm font-medium transition-colors duration-200"
              >
                View Full Card
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 