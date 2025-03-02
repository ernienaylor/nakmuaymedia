// This file is used to disable static generation for the entire app
// It's imported in the app/layout.tsx file

// Force dynamic rendering for all pages
export const dynamic = 'force-dynamic';

// This file should be imported in the layout.tsx file with:
// import './disable-static-generation';
// This will ensure that all pages are dynamically rendered and not statically generated 