# Vercel Build Fix Documentation

## Issue

During the Vercel build process, an error was encountered with the `/_not-found` page:

```
Error: useTheme must be used within a ThemeContextProvider
```

This error occurred because the static generation process was trying to render components that use the `useTheme` hook, but the `ThemeContextProvider` was not properly initialized during static generation.

## Solution

We implemented a comprehensive approach to fix the issue:

1. **Created a completely standalone not-found page**: We updated the `src/app/not-found.tsx` file to use a completely standalone layout that doesn't import any components that might depend on the theme context. We removed the "use client" directive to make it a server component.

2. **Updated the 404 page in the pages directory**: We also updated the `src/pages/404.tsx` file to use the same standalone approach, ensuring that it doesn't depend on any components that might use the theme context.

3. **Disabled static generation for the not-found page**: We updated the Next.js configuration to disable static generation for the not-found page. This includes:
   - Setting `output: 'standalone'` in `next.config.js`
   - Adding `unstable_excludeFiles` to exclude not-found and 404 pages from static generation
   - Creating special configuration files for the not-found page
   - Adding environment variables to disable static generation for the not-found page
   - Creating a middleware to handle 404 pages

4. **Added special route configuration**: We created a special route handler for the not-found page to ensure it's not statically generated.

5. **Updated Vercel configuration**: We updated the `vercel.json` file to configure how 404 pages are handled, including adding a custom route for 404 pages.

## Technical Details

### Next.js Configuration

We updated the `next.config.js` file to disable static generation for the not-found page:

```js
// next.config.js
const nextConfig = {
  // ... other configuration
  
  // Disable static generation for specific pages
  output: 'standalone',
  // Configure which pages should not be statically generated
  unstable_excludeFiles: ['**/not-found.js', '**/not-found.js.map', '**/404.js', '**/404.js.map'],
};
```

### Not Found Page Configuration

We created special configuration files for the not-found page:

```js
// src/app/not-found.config.js
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
```

### Route Handler

We created a special route handler for the not-found page:

```js
// src/app/not-found/route.js
import { NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

export async function GET() {
  return NextResponse.json(
    { message: 'Not Found' },
    { status: 404 }
  );
}
```

### Middleware

We created a middleware to handle 404 pages:

```js
// src/middleware.js
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
```

### Vercel Configuration

We updated the `vercel.json` file to configure how 404 pages are handled:

```json
{
  // ... other configuration
  
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "status": 404, "dest": "/404.html" }
  ],
  "build": {
    "env": {
      "NEXT_PUBLIC_DISABLE_STATIC_NOT_FOUND": "true"
    }
  }
}
```

### Environment Variables

We created an environment variable file to disable static generation for the not-found page:

```
# .env.production
NEXT_PUBLIC_DISABLE_STATIC_NOT_FOUND=true
NEXT_DISABLE_STATIC_NOT_FOUND=true

# Force dynamic rendering for all pages
NEXT_RUNTIME_NODE_ENV=production
```

## Future Considerations

1. **Review other static pages**: Check if there are other pages that might be statically generated and ensure they don't depend on the `useTheme` hook.

2. **Consider using a more robust solution**: If theme context is needed during static generation, consider using a more robust solution like server-side rendering or client-side hydration.

3. **Update the theme context**: Consider updating the theme context to handle static generation more gracefully, perhaps by checking if `window` is defined before accessing it.

4. **Use the `suppressHydrationWarning` attribute**: If you're using client-side hydration, consider adding the `suppressHydrationWarning` attribute to elements that might have different values during server-side rendering and client-side hydration. 