# Tailwind CSS v4 Compatibility Fixes

This document outlines the changes made to ensure compatibility with Tailwind CSS v4, addressing various breaking changes and deprecated features.

## Overview of Changes

### 1. Text Size Utility Classes

Tailwind CSS v4 has removed the traditional text size utility classes. We've replaced these with inline styles:

- `text-xs` → `font-size: 0.75rem; line-height: 1rem;`
- `text-sm` → `font-size: 0.875rem; line-height: 1.25rem;`
- `text-base` → `font-size: 1rem; line-height: 1.5rem;`
- `text-lg` → `font-size: 1.125rem; line-height: 1.75rem;`
- `text-xl` → `font-size: 1.25rem; line-height: 1.75rem;`
- `text-2xl` → `font-size: 1.5rem; line-height: 2rem;`
- `text-3xl` → `font-size: 1.875rem; line-height: 2.25rem;`
- `text-4xl` → `font-size: 2.25rem; line-height: 2.5rem;`
- `text-5xl` → `font-size: 3rem; line-height: 1.2;`

### 2. Opacity Utilities

Tailwind CSS v4 has changed how opacity utilities work. We've updated:

- `bg-opacity-X` → `bg-{color}/{opacity}`
- `text-opacity-X` → `text-{color}/{opacity}`
- `border-opacity-X` → `border-{color}/{opacity}`

### 3. HSL Color Values

We've updated color definitions to use HSL values for better compatibility:

- `#FFFFFF` → `hsl(0 0% 100%)`
- `#2D2D2D` → `hsl(0 0% 18%)`
- `#B12025` → `hsl(358 70% 41%)`

### 4. CSS Custom Properties

We've added CSS custom properties to make it easier to use HSL colors:

```css
:root {
  --background-color: hsl(var(--background));
  --foreground-color: hsl(var(--foreground));
  --card-color: hsl(var(--card));
  /* and more... */
}
```

### 5. Tailwind Config Updates

We've updated the `tailwind.config.js` file with the following changes:

- Added `disableColorOpacityUtilitiesByDefault: true` to future flags
- Added `removeDeprecatedGapUtilities: true` to future flags
- Added `purgeLayersByDefault: true` to future flags
- Added `standardFontWeights: true` to future flags
- Updated color definitions to use HSL values
- Explicitly defined opacity values

### 6. Component-Specific Fixes

#### Typography Components

Updated all Typography components to use inline styles instead of utility classes:

- `TypographyH1`, `TypographyH2`, etc.

#### Logo Component

Updated to use explicit font sizes instead of utility classes:

```jsx
const getFontSize = () => {
  switch(size) {
    case "small": return "1.125rem"; // text-lg
    case "large": return "1.5rem"; // text-2xl
    default: return "1.25rem"; // text-xl
  }
};
```

#### Navigation Menu

Updated to use inline styles for font sizes and transitions.

#### Sheet Component

Updated title and description to use inline styles instead of utility classes.

#### Global CSS

Replaced `@apply` directives with standard CSS properties.

## CSS Fix File

We've created a `fix.css` file that includes:

1. Fixes for navigation menu display
2. Fixes for dropdown menus
3. Fixes for theme toggle
4. Fixes for mobile menu
5. Fixes for logo styling
6. Fixes for header spacing
7. Fixes for main content padding
8. CSS custom properties for HSL colors
9. Animations for improved user experience

## Future Considerations

1. **CSS Modules**: Consider migrating to CSS Modules for better encapsulation and to avoid utility class issues.
2. **Styled Components**: Another alternative is to use styled-components or emotion for component styling.
3. **Design System**: Develop a more robust design system that doesn't rely heavily on utility classes.
4. **Tailwind v4 Migration Guide**: Keep an eye on the official Tailwind CSS v4 migration guide for additional recommendations.

## Testing

After implementing these changes, thoroughly test the application to ensure:

1. All components render correctly
2. Responsive design works as expected
3. Animations and transitions function properly
4. Theme switching (light/dark mode) works correctly
5. No console errors related to CSS or styling

## References

- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [HSL Color Values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) 