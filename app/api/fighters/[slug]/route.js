import { allFighters } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function GET(request, { params }) {
  const { slug } = params;
  
  try {
    // In a real application, you would fetch this data from a database
    // For now, we're using the sample data from lib/data.js
    
    const fighter = allFighters.find(fighter => fighter.slug === slug);
    
    if (!fighter) {
      return Response.json({ 
        message: 'Fighter not found',
        status: 'error'
      }, { status: 404 });
    }
    
    return Response.json({ 
      fighter,
      status: 'success'
    });
  } catch (error) {
    console.error('Fighter detail API error:', error);
    
    return Response.json({ 
      message: 'Error fetching fighter details',
      error: error.message,
      status: 'error'
    }, { status: 500 });
  }
} 