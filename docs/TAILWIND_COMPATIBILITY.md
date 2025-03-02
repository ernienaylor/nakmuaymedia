# Tailwind CSS v4 Compatibility Guide

This document provides guidance on handling compatibility issues between Tailwind CSS v3 and v4 in the Nak Muay Media project.

## Key Changes in Tailwind CSS v4

Tailwind CSS v4 introduces several breaking changes that may affect our codebase:

1. **Opacity Utilities**: The syntax for opacity utilities has changed significantly.
2. **Color Opacity**: The approach to color opacity has been updated to use a more intuitive slash syntax.
3. **JIT Engine**: The Just-In-Time engine is now the default and only option.
4. **Configuration Changes**: Several configuration options have been deprecated or changed.
5. **Custom Theme Variables**: The way custom theme variables are accessed has changed.

## Common Issues and Solutions

### 1. Opacity Utility Classes

#### Old Syntax (v3):
```css
.bg-red-500.bg-opacity-50
.border-gray-300.border-opacity-70
.text-blue-600.text-opacity-80
```

#### New Syntax (v4):
```css
.bg-red-500/50
.border-gray-300/70
.text-blue-600/80
```

### 2. Standalone Opacity Utilities

Standalone opacity utilities like `opacity-50` or `opacity-80` should be reviewed:

#### Old Syntax (v3):
```css
<div className="opacity-50">...</div>
<div className="opacity-80">...</div>
```

#### New Syntax (v4):
These utilities still work in v4, but you should ensure they're explicitly defined in your `tailwind.config.js` file:

```js
// In tailwind.config.js
theme: {
  extend: {
    opacity: {
      '0': '0',
      '5': '0.05',
      // ... other values
      '80': '0.8',
      // ... etc
    }
  }
}
```

### 3. HSL Color Variables with Opacity

#### Old Approach (v3):
```css
.element {
  border-color: hsl(var(--border));
  @apply border-opacity-80;
}
```

#### New Approach (v4):
```css
.element {
  border-color: hsl(var(--border) / 0.8);
}
```

### 4. Global Styles with Opacity

If you have global styles in `globals.css` that use opacity utilities, update them:

#### Old:
```css
* {
  border-color: hsl(var(--border));
  @apply border-opacity-80;
}
```

#### New:
```css
* {
  border-color: hsl(var(--border) / 0.8);
}
```

### 5. Modern Slash Syntax

The modern slash syntax for opacity is already compatible with Tailwind CSS v4:

```css
.bg-black/80  /* 80% opacity black background */
.text-white/90  /* 90% opacity white text */
.border-gray-300/40  /* 40% opacity gray border */
```

This syntax is preferred and should be used consistently throughout the codebase.

### 6. Custom Theme Variables

In Tailwind CSS v4, custom theme variables like `bg-background` and `text-foreground` may not be recognized directly in utility classes. Instead, use CSS variables directly:

#### Old Approach (v3):
```css
body {
  @apply bg-background text-foreground;
}
```

#### New Approach (v4):
```css
body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

This is particularly important for elements that use theme variables defined in the `:root` selector.

### 7. Other Theme Variable Utilities

Several other theme variable utilities may also cause issues in Tailwind CSS v4:

#### Card Utilities:
```jsx
// Old - may cause build errors
<div className="bg-card text-card-foreground">...</div>

// New - use inline styles
<div style={{
  backgroundColor: 'hsl(var(--card))',
  color: 'hsl(var(--card-foreground))'
}}>...</div>
```

#### Muted Utilities:
```jsx
// Old - may cause build errors
<div className="bg-muted text-muted-foreground">...</div>

// New - use inline styles
<div style={{
  backgroundColor: 'hsl(var(--muted))',
  color: 'hsl(var(--muted-foreground))'
}}>...</div>
```

#### In CSS Files:
```css
/* Old */
.element {
  @apply bg-muted text-muted-foreground;
}

/* New */
.element {
  background-color: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
}
```

## Automated Fixes

Our project includes a deployment fix script that can automatically detect and fix many Tailwind CSS v4 compatibility issues:

```bash
node scripts/fix-deployment.js
```

This script:
- Scans CSS files for deprecated opacity syntax
- Identifies component files with potential compatibility issues
- Automatically fixes simple cases in `globals.css`
- Provides guidance for manual fixes in component files
- Replaces `@apply bg-background` and `@apply text-foreground` with direct HSL variables

For a quick check of potential issues, you can also run:

```bash
npm run check-tailwind
```

## Manual Fixes Required

Some issues require manual intervention:

1. **Component className Props**: Update any component files that use the old opacity syntax in `className` props:

   ```jsx
   // Old
   <div className="bg-red-500 bg-opacity-50">...</div>
   
   // New
   <div className="bg-red-500/50">...</div>
   ```

2. **Custom Components with Opacity**: Check any custom components that manipulate opacity:

   ```jsx
   // Old
   const opacityClass = `bg-opacity-${level}`;
   
   // New
   const opacityClass = `bg-red-500/${level}`;
   ```

3. **Standalone Opacity Classes**: Review standalone opacity classes and ensure they're defined in the config:

   ```jsx
   // These should be reviewed
   <div className="opacity-80">...</div>
   <span className="opacity-90">...</span>
   ```

4. **Theme Variable Usage**: Replace direct theme variable utilities with CSS variables:

   ```jsx
   // Old - may cause build errors
   <div className="bg-background text-foreground">...</div>
   
   // New - use inline styles or create custom classes
   <div style={{
     backgroundColor: 'hsl(var(--background))',
     color: 'hsl(var(--foreground))'
   }}>...</div>
   ```

## Configuration Updates

Our `tailwind.config.js` has been updated with the following compatibility settings:

```js
module.exports = {
  // ...
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: false, // Set to true for full v4 behavior
  },
  theme: {
    extend: {
      // Explicitly define opacity values to ensure compatibility
      opacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.1',
        // ... other values
        '80': '0.8',
        '90': '0.9',
        '100': '1',
      },
    }
  }
  // ...
}
```

## Testing Compatibility

After making changes, test your components thoroughly:

1. Run the build process to check for any Tailwind-related errors:
   ```bash
   npm run build
   ```

2. Visually inspect components that use opacity to ensure they render correctly.

3. Use the browser inspector to verify that the correct CSS is being applied.

## Common Build Errors

Here are some common build errors you might encounter with Tailwind CSS v4:

1. **Cannot apply unknown utility class: bg-background**
   - This occurs when using `@apply bg-background` in CSS or `className="bg-background"` in components
   - Solution: Use `background-color: hsl(var(--background))` instead

2. **Cannot apply unknown utility class: text-foreground**
   - This occurs when using `@apply text-foreground` in CSS or `className="text-foreground"` in components
   - Solution: Use `color: hsl(var(--foreground))` instead

3. **Unknown modifier: bg-opacity-X**
   - This occurs when using the old opacity syntax
   - Solution: Use the slash syntax (e.g., `bg-red-500/50`) instead

## Additional Resources

- [Official Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind CSS v4 Release Notes](https://github.com/tailwindlabs/tailwindcss/releases)
- [Tailwind CSS Discord Community](https://discord.gg/tailwindcss)

## Need Help?

If you encounter specific issues with Tailwind CSS v4 compatibility that aren't covered in this guide:

1. Run the fix-deployment script first: `node scripts/fix-deployment.js`
2. Check the console output for specific file recommendations
3. Refer to this guide for manual fixes
4. If problems persist, consult the Tailwind CSS documentation or community resources 