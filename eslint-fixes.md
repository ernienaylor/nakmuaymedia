# ESLint and TypeScript Issues to Fix

This document outlines the ESLint and TypeScript issues that were identified during the build process. These issues have been temporarily bypassed by setting `ignoreDuringBuilds: true` in the Next.js configuration, but they should be addressed for code quality and maintainability.

## ESLint Issues

### Unescaped Entities
Replace unescaped quotes and apostrophes with their HTML entity equivalents:
- `'` → `&apos;`, `&lsquo;`, `&#39;`, or `&rsquo;`
- `"` → `&quot;`, `&ldquo;`, `&#34;`, or `&rdquo;`

Files to fix:
- `src/app/about/page.tsx` (lines 25, 51)
- `src/app/contact/page.tsx` (lines 14, 23)
- `src/app/theme-demo/page.tsx` (line 82)
- `src/components/home/enhanced-featured-fighter.tsx` (line 250)

### Unused Variables
Remove or use the following unused variables:

- `src/app/blog/page.tsx`: 'CardContent'
- `src/app/page.tsx`: 'VideoItem', 'RelatedVideo', 'PodcastItem', 'PodcastEpisode'
- `src/app/theme-demo/page.tsx`: 'TypographyLarge'
- `src/components/home/enhanced-featured-fighter.tsx`: 'Clock'
- `src/components/home/event-calendar.tsx`: 'currentDate', 'index'
- `src/components/home/featured-hero-section.tsx`: 'TypographyH2', 'TypographyH3', 'TypographyP', 'TypographyLead', 'isMain'
- `src/components/home/media-section.tsx`: 'index', 'setDuration'
- `src/components/home/top-stories.tsx`: 'CardFooter', 'CardHeader', 'index'
- `src/components/layout/Header.tsx`: 'isDark'

### TypeScript Issues

#### Empty Interfaces
Fix empty interfaces in:
- `src/components/ui/input.tsx`
- `src/components/ui/search.tsx`
- `src/components/ui/textarea.tsx`

#### Replace @ts-ignore with @ts-expect-error
In `src/components/home/featured-hero-section.tsx` (lines 123, 186)

#### Replace any Types
In `src/utils/performance.ts` (lines 11, 37, 161, 162)

## Next Steps

1. Run `npm run lint` locally to identify and fix these issues
2. Consider adding ESLint plugins to automatically fix common issues
3. Update the codebase to address all the issues listed above
4. Re-enable ESLint and TypeScript checking in the Next.js configuration 