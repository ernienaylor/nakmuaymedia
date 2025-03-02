// This file is used to handle the not-found route
// It ensures that the not-found page is not statically generated

import { NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Handle GET requests to the not-found page
export async function GET() {
  // Return a 404 response
  return NextResponse.json(
    { message: 'Not Found' },
    { status: 404 }
  );
} 