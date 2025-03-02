export default function EventPage({ params }) {
  const { eventId } = params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading mb-4">Event: {eventId}</h1>
        <div className="bg-white shadow-card rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <p className="text-lg font-bold">Date: March 15, 2025</p>
              <p>Location: Impact Arena, Bangkok</p>
            </div>
            <div>
              <p className="text-lg font-bold">Promotion: ONE Championship</p>
              <p>Status: Upcoming</p>
            </div>
          </div>
          
          <h2 className="text-xl font-heading mb-4">Fight Card</h2>
          {/* BoutList component will be added here */}
          <div className="border-t border-gray-200 pt-4">
            <p>Fight card details will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 