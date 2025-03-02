# Performance Optimization Guide for Nak Muay Media

This guide outlines best practices and tools for optimizing the performance of the Nak Muay Media website.

## Table of Contents

1. [Performance Metrics](#performance-metrics)
2. [Performance Tools](#performance-tools)
3. [Image Optimization](#image-optimization)
4. [JavaScript Optimization](#javascript-optimization)
5. [CSS Optimization](#css-optimization)
6. [Server-Side Optimization](#server-side-optimization)
7. [Monitoring and Continuous Improvement](#monitoring-and-continuous-improvement)

## Performance Metrics

### Core Web Vitals

Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience:

- **Largest Contentful Paint (LCP)**: Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
- **First Input Delay (FID)**: Measures interactivity. Pages should have a FID of less than 100 milliseconds.
- **Cumulative Layout Shift (CLS)**: Measures visual stability. Pages should maintain a CLS of less than 0.1.

### Other Important Metrics

- **Time to First Byte (TTFB)**: The time it takes for a user's browser to receive the first byte of page content.
- **First Contentful Paint (FCP)**: The time from when the page starts loading to when any part of the page's content is rendered on the screen.
- **Total Blocking Time (TBT)**: The total amount of time between FCP and Time to Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness.
- **Speed Index**: How quickly the contents of a page are visibly populated.

## Performance Tools

### Built-in Performance Check

The project includes a Lighthouse-based performance check script:

```bash
npm run performance-check [url] [device]
```

Examples:
```bash
npm run performance-check https://nakmuaymedia.com mobile
npm run performance-check https://nakmuaymedia.com desktop
```

This script:
1. Runs a Lighthouse audit on the specified URL
2. Generates an HTML report with detailed performance metrics
3. Provides suggestions for improvement
4. Saves the report to the `reports` directory and opens it in your browser

### Bundle Analyzer

To analyze your JavaScript bundle size:

```bash
npm run analyze
```

This helps identify large dependencies and code splitting opportunities.

### Browser DevTools

- **Chrome DevTools Performance Panel**: Record and analyze runtime performance
- **Network Panel**: Analyze network requests and loading times
- **Lighthouse in DevTools**: Run performance audits directly in the browser

## Image Optimization

Images often account for the largest portion of a page's weight. See the [Image Optimization Guide](./IMAGE_OPTIMIZATION.md) for detailed strategies, including:

- Using the built-in image optimization script
- Leveraging Next.js Image component
- Implementing responsive images
- Using modern formats (WebP, AVIF)
- Lazy loading images

## JavaScript Optimization

### Code Splitting

Next.js automatically code-splits your JavaScript by pages. Further optimize by:

- Using dynamic imports for large components:
  ```jsx
  const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
    loading: () => <p>Loading...</p>,
    ssr: false // If not needed for SSR
  });
  ```

- Splitting third-party libraries:
  ```jsx
  // Instead of importing the entire library
  import { debounce, throttle } from 'lodash';
  
  // Import only what you need
  import debounce from 'lodash/debounce';
  import throttle from 'lodash/throttle';
  ```

### Reducing JavaScript Size

- Remove unused dependencies
- Use tree-shaking friendly imports
- Minimize polyfills for modern browsers
- Consider using smaller alternatives for large libraries

### Defer Non-Critical JavaScript

- Load third-party scripts with the `next/script` component:
  ```jsx
  import Script from 'next/script';
  
  <Script
    src="https://example.com/analytics.js"
    strategy="lazyOnload"
  />
  ```

## CSS Optimization

### Minimize CSS

- Remove unused CSS with tools like PurgeCSS (already integrated with Tailwind)
- Split CSS by routes when possible
- Consider critical CSS extraction for above-the-fold content

### CSS Best Practices

- Avoid expensive CSS selectors (deep nesting)
- Minimize the use of CSS frameworks or use tree-shakable ones
- Use CSS variables for theme values to reduce duplication
- Leverage CSS containment for complex layouts

## Server-Side Optimization

### Static Generation

Use static generation (SSG) whenever possible:

```jsx
// pages/blog/[slug].js
export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post }, revalidate: 60 };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: 'blocking'
  };
}
```

### Incremental Static Regeneration (ISR)

For content that changes but not frequently:

```jsx
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 60 * 10, // Regenerate every 10 minutes
  };
}
```

### API Route Optimization

- Implement caching for API routes
- Use edge functions for global performance
- Consider serverless functions for dynamic content

## Monitoring and Continuous Improvement

### Regular Performance Audits

Run performance checks regularly, especially after major updates:

```bash
npm run performance-check https://nakmuaymedia.com mobile
```

### Real User Monitoring (RUM)

Consider implementing RUM with tools like:
- Google Analytics 4
- Vercel Analytics
- Custom performance monitoring using the Web Vitals library

Example implementation:

```jsx
// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { getCLS, getFID, getLCP } from 'web-vitals';

function reportWebVitals({ name, delta, id }) {
  gtag.event({
    action: name,
    category: 'Web Vitals',
    label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    non_interaction: true,
  });
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Report Core Web Vitals
    getCLS(reportWebVitals);
    getFID(reportWebVitals);
    getLCP(reportWebVitals);
  }, []);
  
  return <Component {...pageProps} />;
}

export default MyApp;
```

### Performance Budgets

Establish performance budgets for your site:

| Metric | Budget |
|--------|--------|
| Total page size | < 1MB |
| JavaScript size | < 300KB |
| CSS size | < 100KB |
| LCP | < 2.5s |
| CLS | < 0.1 |
| TTI | < 3.5s |

## Checklist for Deployment

Before deploying to production, ensure:

1. ✅ Images are optimized (`npm run optimize-images`)
2. ✅ Bundle size is analyzed (`npm run analyze`)
3. ✅ Performance is checked on both mobile and desktop
4. ✅ Core Web Vitals meet the recommended thresholds
5. ✅ No render-blocking resources remain
6. ✅ Proper caching headers are configured
7. ✅ CDN is properly configured

## Resources

- [Next.js Performance Documentation](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse Performance Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

For questions or suggestions about performance optimization, please contact the development team.