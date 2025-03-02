// This file is used to configure the not-found page
// It's specifically focused on disabling static generation

// Force dynamic rendering for the not-found page
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

// Disable static generation for the not-found page
export const generateStaticParams = () => {
  return [];
};

// Disable static generation for the not-found page
export const unstable_settings = {
  notFound: {
    dynamic: 'force-dynamic',
  },
}; 