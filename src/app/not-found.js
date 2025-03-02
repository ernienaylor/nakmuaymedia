// This file is used to handle the not-found route
// It ensures that the not-found page is not statically generated

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Redirect to our custom not-found page
export default function NotFound() {
  // This is just a placeholder - it should never be rendered
  // The middleware will redirect to /not-found before this is rendered
  return null;
} 