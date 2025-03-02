import { upcomingEvents } from '@/lib/data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined;
  
  try {
    // In a real application, you would fetch this data from a database
    // For now, we're using the sample data from lib/data.js
    
    let events = [...upcomingEvents];
    
    // Apply limit if specified
    if (limit && !isNaN(limit)) {
      events = events.slice(0, limit);
    }
    
    return Response.json({ 
      events,
      count: events.length,
      status: 'success'
    });
  } catch (error) {
    console.error('Events API error:', error);
    
    return Response.json({ 
      message: 'Error fetching events',
      error: error.message,
      status: 'error'
    }, { status: 500 });
  }
} 