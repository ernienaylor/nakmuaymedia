import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function EventsCalendar({ events = [] }) {
  return (
    <div className="space-y-6">
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold mb-2">{event.title || "Upcoming Event"}</h3>
            <p className="text-gray-600">{event.date || "Date TBA"}</p>
          </div>
        ))
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Events Coming Soon</h3>
          <p className="text-black/60">Check back later for upcoming Muay Thai events.</p>
        </div>
      )}
    </div>
  );
} 