// This file is used to disable static generation for the entire app
// It's imported in the app/layout.tsx file

// Force dynamic rendering for all pages
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto'; 