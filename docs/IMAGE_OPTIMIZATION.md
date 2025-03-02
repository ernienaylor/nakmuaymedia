# Image Optimization Guide for Nak Muay Media

This guide outlines best practices for optimizing images in the Nak Muay Media website to ensure fast loading times, good user experience, and efficient resource usage.

## Table of Contents

1. [Why Image Optimization Matters](#why-image-optimization-matters)
2. [Image Optimization Tools](#image-optimization-tools)
3. [Best Practices](#best-practices)
4. [Using the Optimization Script](#using-the-optimization-script)
5. [Next.js Image Component](#nextjs-image-component)
6. [Image Formats](#image-formats)
7. [Performance Metrics](#performance-metrics)

## Why Image Optimization Matters

Images typically account for the largest portion of a website's page weight. Optimizing images can:

- **Improve page load times**: Faster loading pages lead to better user experience and SEO rankings
- **Reduce bandwidth usage**: Especially important for users on mobile data plans
- **Lower hosting costs**: Less data transfer means lower CDN and hosting costs
- **Improve Core Web Vitals**: Better LCP (Largest Contentful Paint) scores
- **Reduce carbon footprint**: More efficient websites use less energy

## Image Optimization Tools

The Nak Muay Media project includes several tools for image optimization:

1. **Built-in script**: `npm run optimize-images` - Processes images in the `public/images` directory
2. **Next.js Image component**: Automatic optimization for images used with the `<Image>` component
3. **Bundle analyzer**: `npm run analyze` - Helps identify large image assets in your bundle

## Best Practices

### General Guidelines

- **Use appropriate dimensions**: Don't load a 2000px wide image for a 400px container
- **Use responsive images**: Provide different sizes for different viewport widths
- **Lazy load images**: Only load images when they're about to enter the viewport
- **Use modern formats**: WebP and AVIF offer better compression than JPEG and PNG
- **Optimize for quality/size balance**: Usually 70-80% quality is sufficient
- **Add meaningful alt text**: For accessibility and SEO

### File Size Guidelines

| Image Type | Recommended Max Size |
|------------|----------------------|
| Hero images | 200KB |
| Article thumbnails | 50KB |
| Gallery images | 100KB |
| Icons | 5KB (use SVG when possible) |
| Background images | 100KB |

## Using the Optimization Script

The project includes a custom image optimization script that can be run with:

```bash
npm run optimize-images
```

This script:

1. Processes all images in the `public/images` directory
2. Creates multiple sizes (small, medium, large) for responsive usage
3. Converts images to modern formats (WebP, AVIF) while maintaining JPEG fallbacks
4. Applies appropriate compression to balance quality and file size
5. Outputs optimized images to `public/images/optimized` directory

### Example Usage in Code

```jsx
// Using an optimized image in a component
import Image from 'next/image';

export function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <Image
        src={`/images/optimized/${article.image}-md.webp`}
        alt={article.title}
        width={640}
        height={360}
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL={`/images/optimized/${article.image}-sm.webp`}
      />
      <h2>{article.title}</h2>
    </div>
  );
}
```

## Next.js Image Component

The Next.js `<Image>` component provides several optimization features:

- **Automatic WebP conversion**: Serves WebP when supported by the browser
- **Lazy loading**: Images load only when they enter the viewport
- **Size optimization**: Prevents layout shift with proper sizing
- **Responsive images**: Serves different sizes based on the device
- **Placeholder support**: Blur-up or dominant color placeholders

### Example Usage

```jsx
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="hero">
      <Image
        src="/images/hero-banner.jpg"
        alt="Muay Thai fighter in action"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div className="hero-content">
        <h1>Welcome to Nak Muay Media</h1>
      </div>
    </div>
  );
}
```

## Image Formats

| Format | Use Case | Browser Support |
|--------|----------|----------------|
| AVIF | Best compression, use for all images when possible | Chrome, Firefox, Opera |
| WebP | Good compression, wide support | All modern browsers |
| JPEG | Fallback for photos | Universal |
| PNG | Images requiring transparency | Universal |
| SVG | Icons, logos, illustrations | Universal |

## Performance Metrics

Regularly test your image optimization using:

1. **Lighthouse**: Check the "Opportunities" section for image optimization suggestions
2. **WebPageTest**: Analyze image compression and loading behavior
3. **Core Web Vitals**: Monitor LCP (Largest Contentful Paint) in Google Search Console
4. **Bundle Analyzer**: Check image sizes in your JavaScript bundles

### Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **Total Image Weight**: < 1MB per page
- **First Meaningful Paint**: < 1 second

## Continuous Improvement

Image optimization is an ongoing process:

1. Regularly run the optimization script on new images
2. Monitor performance metrics after adding new content
3. Update optimization techniques as new formats and tools become available
4. Consider implementing an image CDN for advanced optimization

---

For questions or suggestions about image optimization, please contact the development team. 