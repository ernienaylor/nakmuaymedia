"use client"

import * as React from "react"
import { EventCalendar, sampleEvents } from "@/components/home/event-calendar"

export default function EventCalendarDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Enhanced Event Calendar
            </h1>
            <p className="text-xl text-muted-foreground">
              A premium component that balances the authoritative structure of a WSJ financial calendar 
              with the energy of UFC event listings, creating a perfect balance of information and excitement.
            </p>
          </div>
        </div>
        
        <EventCalendar 
          title="Upcoming Muay Thai Events" 
          subtitle="Don't miss the most exciting Muay Thai events from around the world"
          events={sampleEvents}
          viewAllLink="/events/all"
        />
      </div>
    </main>
  )
} 