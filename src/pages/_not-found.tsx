// This is a special file to handle the not-found route in the pages directory
// It's used by Next.js when a page is not found

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to our custom not-found page
    router.replace('/not-found');
  }, [router]);

  // This is just a placeholder - it should never be rendered
  // The useEffect will redirect to /not-found before this is rendered
  return null;
}

// Disable static generation for this page
export const config = {
  unstable_runtimeJS: true,
}; 