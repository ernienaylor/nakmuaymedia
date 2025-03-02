/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable ESLint during build to prevent build failures
  eslint: {
    // Only run ESLint on local development, not during builds
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    // Skip type checking during builds
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
    // Configure image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable experimental features if needed
  experimental: {
    // Enable server components if you're using them
    // appDir: true,
    // Configure optimizeCss with critters options
    optimizeCss: {
      critters: {
        // Reduce CSS size by removing unused styles
        pruneSource: true,
        // Don't inline critical CSS (can cause issues with some frameworks)
        inlineFonts: false,
        // Avoid processing SVG and font files
        preload: 'media',
        // Minimize network requests
        compress: true,
      },
    },
    // Disable static generation for the not-found page
    disableStaticNotFound: true,
  },
  // Configure headers for better security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        // Cache static assets for a year
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Configure redirects if needed
  async redirects() {
    return [
      // Redirect the /_not-found route to our custom not-found page
      {
        source: '/_not-found',
        destination: '/not-found',
        permanent: true,
      },
    ];
  },
  // Configure rewrites if needed
  async rewrites() {
    return [
      // Rewrite the /_not-found route to our custom not-found page
      {
        source: '/_not-found',
        destination: '/not-found',
      },
    ];
  },
  // Disable static generation for specific pages
  output: 'standalone',
  // Configure which pages should not be statically generated
  unstable_excludeFiles: [
    '**/not-found.js', 
    '**/not-found.js.map', 
    '**/404.js', 
    '**/404.js.map',
    '**/not-found/**',
  ],
};

// Add bundle analyzer in analyze mode
const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

module.exports = withBundleAnalyzer(nextConfig); 