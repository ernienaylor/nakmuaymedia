# Nak Muay Media Homepage Testing Guide

This guide provides comprehensive instructions for testing and refining the Nak Muay Media homepage to ensure it meets our quality standards across all devices and browsers.

## Getting Started

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/yourusername/nakmuaymedia.git
   cd nakmuaymedia
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000` to view the homepage.

## Testing Tools

We've created several tools to help with testing:

### 1. Debug Toolbar

The Debug Toolbar is automatically included in the homepage during development. Click the 🛠️ icon in the bottom-left corner to access the following tools:

- **Layout Grid**: Displays a grid overlay to check alignment and spacing
- **Performance**: Shows real-time performance metrics
- **Accessibility**: Highlights potential accessibility issues

### 2. Testing Checklist

We've provided a comprehensive testing checklist in `testing-checklist.md`. Use this to methodically verify all aspects of the homepage.

### 3. Cross-Browser Testing Script

To test across multiple browsers and viewports:

1. Install Playwright:
   ```bash
   npm install -D playwright
   ```

2. Run the testing script:
   ```bash
   node scripts/browser-testing.js
   ```

3. Check the `test-results` directory for screenshots and reports.

## Manual Testing Procedures

### Responsive Testing

Test the homepage at these key breakpoints:

- **Mobile**: 320px - 428px
- **Tablet**: 768px - 1024px
- **Desktop**: 1280px+

Use Chrome DevTools (F12) to simulate different devices and test responsiveness.

### Performance Testing

1. Use Lighthouse in Chrome DevTools to measure:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

2. Check Core Web Vitals:
   - Largest Contentful Paint (LCP): < 2.5s
   - First Input Delay (FID): < 100ms
   - Cumulative Layout Shift (CLS): < 0.1

3. Monitor JavaScript performance:
   - Open Chrome DevTools > Performance tab
   - Record while scrolling through the page
   - Look for long tasks and rendering bottlenecks

### Accessibility Testing

1. Use the built-in A11y debugger in our Debug Toolbar
2. Test keyboard navigation (Tab key) through all interactive elements
3. Verify proper heading hierarchy (h1-h6)
4. Check color contrast ratios for text
5. Test with a screen reader (VoiceOver on Mac, NVDA on Windows)

### Animation Testing

1. Check that all animations trigger at appropriate scroll positions
2. Verify animations respect the "prefers-reduced-motion" setting
3. Ensure animations don't cause layout shifts
4. Test animation performance on lower-end devices

## Common Issues and Fixes

### Layout Issues

- **Problem**: Elements not aligning properly at certain breakpoints
  - **Fix**: Check container widths and padding in responsive views

- **Problem**: Text overflow in containers
  - **Fix**: Use `text-ellipsis` or adjust font sizes at breakpoints

### Performance Issues

- **Problem**: Slow initial load time
  - **Fix**: Ensure images use the OptimizedImage component with proper sizing

- **Problem**: Animations causing jank
  - **Fix**: Use `will-change` property sparingly and optimize animation properties

### Accessibility Issues

- **Problem**: Low contrast text
  - **Fix**: Adjust text or background colors to meet WCAG AA standards (4.5:1)

- **Problem**: Missing alt text on images
  - **Fix**: Add descriptive alt text to all images

## Final Refinements

Before considering the homepage complete, make these final refinements:

1. **Loading States**: Ensure all sections have appropriate loading states
2. **Error States**: Add fallbacks for failed image loads or data fetches
3. **Micro-interactions**: Add subtle hover effects to interactive elements
4. **Typography**: Check for consistent font sizes, weights, and line heights
5. **Spacing**: Verify consistent spacing between sections and elements

## Deployment Checklist

Before deploying to production:

1. Run the full test suite
2. Verify all images are optimized
3. Check bundle size with `npm run analyze`
4. Test on actual devices (not just emulators)
5. Validate HTML with W3C validator

## Getting Help

If you encounter issues that aren't covered in this guide, please:

1. Check the project documentation
2. Open an issue on GitHub
3. Contact the development team

---

By following this testing guide, we can ensure the Nak Muay Media homepage provides an excellent user experience across all devices and browsers. 