/**
 * Cross-browser testing script using Playwright
 * 
 * This script captures screenshots of the website across different browsers and viewports
 * to help with visual regression testing and cross-browser compatibility checks.
 * 
 * Usage:
 * 1. Install dependencies: npm install -D playwright
 * 2. Run: node scripts/browser-testing.js
 */

const { chromium, firefox, webkit } = require('playwright');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  baseUrl: 'http://localhost:3000',
  outputDir: path.join(__dirname, '../test-results'),
  viewports: [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 },
    { name: 'large', width: 1920, height: 1080 }
  ],
  pages: [
    { name: 'home', path: '/' },
    // Add more pages as needed
    // { name: 'news', path: '/news' },
    // { name: 'fighters', path: '/fighters' },
  ],
  browsers: ['chromium', 'firefox', 'webkit']
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Helper to capture screenshots
async function captureScreenshots(browser, browserName) {
  console.log(`\nStarting tests with ${browserName}...`);
  
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });
  
  const page = await context.newPage();
  
  // Enable JS and CSS coverage if it's Chromium
  if (browserName === 'chromium') {
    await page.coverage.startJSCoverage();
    await page.coverage.startCSSCoverage();
  }
  
  for (const pageConfig of config.pages) {
    console.log(`Testing page: ${pageConfig.name}`);
    
    // Navigate to the page
    await page.goto(`${config.baseUrl}${pageConfig.path}`, { 
      waitUntil: 'networkidle',
      timeout: 60000
    });
    
    // Wait a bit for any animations to complete
    await page.waitForTimeout(1000);
    
    // Test each viewport
    for (const viewport of config.viewports) {
      console.log(`  Viewport: ${viewport.name} (${viewport.width}x${viewport.height})`);
      
      // Set viewport size
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height
      });
      
      // Wait for layout to stabilize
      await page.waitForTimeout(500);
      
      // Take a screenshot
      const screenshotPath = path.join(
        config.outputDir, 
        `${pageConfig.name}-${browserName}-${viewport.name}.png`
      );
      
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: true
      });
      
      // Scroll test (check for layout shifts)
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await page.waitForTimeout(500);
      
      const scrollScreenshotPath = path.join(
        config.outputDir, 
        `${pageConfig.name}-${browserName}-${viewport.name}-scrolled.png`
      );
      
      await page.screenshot({ 
        path: scrollScreenshotPath,
        fullPage: false
      });
    }
  }
  
  // Collect coverage data if it's Chromium
  if (browserName === 'chromium') {
    const jsCoverage = await page.coverage.stopJSCoverage();
    const cssCoverage = await page.coverage.stopCSSCoverage();
    
    // Calculate and log coverage
    let jsUsed = 0;
    let jsTotal = 0;
    let cssUsed = 0;
    let cssTotal = 0;
    
    for (const entry of jsCoverage) {
      jsTotal += entry.text.length;
      for (const range of entry.ranges) {
        jsUsed += range.end - range.start;
      }
    }
    
    for (const entry of cssCoverage) {
      cssTotal += entry.text.length;
      for (const range of entry.ranges) {
        cssUsed += range.end - range.start;
      }
    }
    
    console.log(`\nCoverage Report:`);
    console.log(`  JavaScript: ${Math.round(jsUsed / jsTotal * 100)}% (${formatBytes(jsUsed)}/${formatBytes(jsTotal)})`);
    console.log(`  CSS: ${Math.round(cssUsed / cssTotal * 100)}% (${formatBytes(cssUsed)}/${formatBytes(cssTotal)})`);
    
    // Save coverage data
    fs.writeFileSync(
      path.join(config.outputDir, 'coverage-report.json'),
      JSON.stringify({
        js: { used: jsUsed, total: jsTotal, percentage: jsUsed / jsTotal },
        css: { used: cssUsed, total: cssTotal, percentage: cssUsed / cssTotal }
      }, null, 2)
    );
  }
  
  await context.close();
}

// Helper to format bytes
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Main function
async function runTests() {
  console.log('Starting cross-browser testing...');
  console.log(`Output directory: ${config.outputDir}`);
  
  const startTime = Date.now();
  
  for (const browserType of config.browsers) {
    let browser;
    
    try {
      // Launch browser based on type
      switch (browserType) {
        case 'chromium':
          browser = await chromium.launch();
          await captureScreenshots(browser, 'chromium');
          break;
        case 'firefox':
          browser = await firefox.launch();
          await captureScreenshots(browser, 'firefox');
          break;
        case 'webkit':
          browser = await webkit.launch();
          await captureScreenshots(browser, 'webkit');
          break;
      }
    } catch (error) {
      console.error(`Error with ${browserType}:`, error);
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
  
  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000;
  
  console.log(`\nTesting completed in ${duration.toFixed(2)} seconds`);
  console.log(`Results saved to: ${config.outputDir}`);
}

// Run the tests
runTests().catch(error => {
  console.error('Test run failed:', error);
  process.exit(1);
}); 