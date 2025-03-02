# CSS Optimization Configuration

This document outlines the CSS optimization configuration used in the project to improve performance and reduce CSS file sizes.

## Critters Configuration

[Critters](https://github.com/GoogleChromeLabs/critters) is a tool that inlines critical CSS and defers the loading of non-critical CSS. It's used in this project as part of Next.js's experimental `optimizeCss` feature.

### Installation

```bash
npm install critters --save-dev
```

### Configuration in next.config.js

```javascript
experimental: {
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
},
```

## Benefits

1. **Faster Page Load**: By inlining critical CSS, the page can render without waiting for external CSS files to load.
2. **Reduced CSS Size**: Removing unused styles reduces the overall CSS file size.
3. **Improved Performance**: Smaller CSS files lead to faster downloads and parsing.
4. **Better User Experience**: Pages render more quickly, improving the user experience.

## Considerations

1. **Build Time**: CSS optimization can increase build times.
2. **Compatibility**: Some CSS features may not be compatible with the optimization process.
3. **Debugging**: Optimized CSS can be harder to debug.

## Alternatives

If the current configuration causes issues, consider these alternatives:

1. **Disable CSS Optimization**: Set `optimizeCss: false` in next.config.js.
2. **Use a Different Tool**: Consider alternatives like PurgeCSS or UnCSS.
3. **Manual Optimization**: Manually optimize CSS files using techniques like code splitting and lazy loading.

## Monitoring

Monitor the following metrics to ensure CSS optimization is working effectively:

1. **Page Load Time**: Should decrease after optimization.
2. **CSS File Size**: Should be smaller after optimization.
3. **First Contentful Paint**: Should improve after optimization.
4. **Largest Contentful Paint**: Should improve after optimization. 