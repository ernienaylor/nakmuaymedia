import { allFighters } from '@/lib/data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined;
  const country = searchParams.get('country');
  const weight = searchParams.get('weight');
  
  try {
    // In a real application, you would fetch this data from a database
    // For now, we're using the sample data from lib/data.js
    
    let fighters = [...allFighters];
    
    // Apply filters if specified
    if (country) {
      fighters = fighters.filter(fighter => 
        fighter.country && fighter.country.toLowerCase() === country.toLowerCase()
      );
    }
    
    if (weight) {
      fighters = fighters.filter(fighter => 
        fighter.weight && fighter.weight.toLowerCase() === weight.toLowerCase()
      );
    }
    
    // Apply limit if specified
    if (limit && !isNaN(limit)) {
      fighters = fighters.slice(0, limit);
    }
    
    return Response.json({ 
      fighters,
      count: fighters.length,
      status: 'success'
    });
  } catch (error) {
    console.error('Fighters API error:', error);
    
    return Response.json({ 
      message: 'Error fetching fighters',
      error: error.message,
      status: 'error'
    }, { status: 500 });
  }
} 