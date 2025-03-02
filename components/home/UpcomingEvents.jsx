import Link from 'next/link';

export default function UpcomingEvents({ events }) {
  const mainEvent = events[0]; // First event is featured
  const otherEvents = events.slice(1); // Rest are shown in a grid
  
  return (
    <>
      {/* Featured Event */}
      <div className="event-card">
        <div className="event-card-header">
          <h3 className="event-card-title">{mainEvent.title}</h3>
          <p className="event-card-date">{mainEvent.date} | {mainEvent.venue}</p>
        </div>
        
        <div className="event-card-body">
          {mainEvent.bouts.map((bout, index) => (
            <div key={index} className="event-card-bout">
              <div className="bout-fighter">
                <h4 className="bout-fighter-name">{bout.fighter1.name}</h4>
                <p className="bout-fighter-record">{bout.fighter1.record}</p>
              </div>
              
              <div className="bout-vs">VS</div>
              
              <div className="bout-fighter">
                <h4 className="bout-fighter-name">{bout.fighter2.name}</h4>
                <p className="bout-fighter-record">{bout.fighter2.record}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Events */}
      {otherEvents.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-header">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-date">{event.date} | {event.venue}</p>
              </div>
              <div className="p-4 text-center">
                <Link 
                  href={`/events/${event.slug}`} 
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Event Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
} 