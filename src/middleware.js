import { NextResponse } from 'next/server';

// This middleware is used to handle 404 pages
// It ensures that the not-found page is not statically generated
export function middleware(request) {
  // Check if the request is for the not-found page
  if (request.nextUrl.pathname === '/_not-found') {
    // Redirect to the custom 404 page
    return NextResponse.redirect(new URL('/404', request.url));
  }

  // Continue with the request
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ['/_not-found', '/_not-found/(.*)'],
}; 