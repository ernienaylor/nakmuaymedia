import React from 'react';

export default function UpcomingEvents({ events = [] }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          ))
        ) : (
          <p>No events scheduled</p>
        )}
      </div>
    </div>
  );
} 