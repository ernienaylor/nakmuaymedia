# Deploying Nak Muay Media to Vercel

This guide provides step-by-step instructions for deploying the Nak Muay Media website to Vercel.

## Prerequisites

Before deploying, ensure you have:

1. A [Vercel account](https://vercel.com/signup)
2. [Vercel CLI](https://vercel.com/cli) installed (optional for CLI deployment)
3. Git repository set up (recommended for continuous deployment)

## Pre-Deployment Checks

Run our pre-deployment script to ensure everything is ready:

```bash
node scripts/deploy.js
```

This script will check for:
- Required files and directories
- TypeScript and ESLint errors
- Package.json configuration
- And generate a deployment report

Fix any issues reported before proceeding with deployment.

## Troubleshooting Deployment Issues

If you encounter deployment errors, use our deployment fix script:

```bash
npm run fix-deployment
```

This script automatically:
1. Checks for missing dependencies and installs them
2. Validates Next.js configuration and removes deprecated options
3. Ensures proper environment setup for Vercel deployment
4. Fixes Tailwind CSS compatibility issues

Common deployment issues this script can fix:
- Missing UI component dependencies
- Deprecated Next.js configuration options
- Missing or incorrect Vercel configuration
- Tailwind CSS v4 compatibility issues (like opacity utilities)

After running the fix script, try deploying again:

```bash
npm run deploy
```

## Deployment Options

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect your repository**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Select the "nakmuaymedia" repository

2. **Configure project settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - Add any required environment variables in the Vercel dashboard

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your project

### Option 2: Deploy via Vercel CLI

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy the project**:
   ```bash
   vercel
   ```

3. **For production deployment**:
   ```bash
   vercel --prod
   ```

## Post-Deployment

After deployment, verify:

1. **Website functionality**:
   - Test all pages and features
   - Check responsive layouts on different devices
   - Verify animations and interactions

2. **Performance**:
   - Run Lighthouse tests
   - Check Core Web Vitals in Google Search Console
   - Verify image optimization is working

3. **Analytics and Monitoring**:
   - Set up analytics (Google Analytics, Vercel Analytics, etc.)
   - Configure error monitoring (Sentry, etc.)

## Continuous Deployment

For automatic deployments when you push to your repository:

1. **Connect GitHub to Vercel**:
   - In your Vercel project settings, go to "Git Integration"
   - Configure automatic deployments for your main branch

2. **Configure preview deployments**:
   - Enable preview deployments for pull requests
   - This allows testing changes before merging to main

## Custom Domain Setup

To use a custom domain:

1. **Add domain in Vercel**:
   - Go to your project in Vercel dashboard
   - Navigate to "Settings" > "Domains"
   - Add your domain (e.g., nakmuaymedia.com)

2. **Configure DNS**:
   - Update your domain's DNS settings as instructed by Vercel
   - Typically involves adding A, CNAME, or nameserver records

3. **SSL/TLS**:
   - Vercel automatically provisions SSL certificates
   - Ensure HTTPS is working correctly

## Troubleshooting

If you encounter issues during deployment:

1. **Build errors**:
   - Run `npm run fix-deployment` to automatically fix common issues
   - Check the build logs in Vercel
   - Verify all dependencies are correctly installed
   - Ensure Next.js configuration is correct

2. **Tailwind CSS errors**:
   - If you see errors about unknown utility classes (like `border-opacity-80`), run the fix-deployment script
   - For Tailwind CSS v4, use direct HSL opacity notation instead of opacity utilities:
     - Instead of `@apply border-opacity-80`, use `border-color: hsl(var(--border) / 0.8)`
     - Instead of `@apply bg-opacity-90`, use `background-color: hsl(var(--background) / 0.9)`
   - Check your tailwind.config.js to ensure all plugins and extensions are properly configured
   - **For detailed guidance, refer to our [Tailwind CSS v4 Compatibility Guide](./TAILWIND_COMPATIBILITY.md)**

3. **Runtime errors**:
   - Check browser console for JavaScript errors
   - Verify environment variables are set correctly
   - Check server logs in Vercel dashboard

4. **Performance issues**:
   - Optimize images and assets
   - Enable caching headers
   - Consider using a CDN for static assets

## Support

If you need help with deployment:

- Consult [Vercel documentation](https://vercel.com/docs)
- Check [Next.js deployment docs](https://nextjs.org/docs/deployment)
- Contact the development team for project-specific issues

## Additional Resources

- [Vercel documentation](https://vercel.com/docs)
- [Next.js deployment docs](https://nextjs.org/docs/deployment)
- [Tailwind CSS v4 Compatibility Guide](./TAILWIND_COMPATIBILITY.md)
- [Bundle Analysis Guide](./BUNDLE_ANALYSIS.md)

---

By following this guide, you should be able to successfully deploy the Nak Muay Media website to Vercel with optimal performance and reliability.