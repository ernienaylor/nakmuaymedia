/**
 * Performance Check Script for Nak Muay Media
 * 
 * This script uses Lighthouse to run performance checks on the website
 * and generates a report with key metrics and suggestions for improvement.
 * 
 * Usage:
 * node scripts/performance-check.js [url] [device]
 * 
 * Examples:
 * node scripts/performance-check.js https://nakmuaymedia.com mobile
 * node scripts/performance-check.js https://nakmuaymedia.com desktop
 * 
 * Requirements:
 * npm install lighthouse chrome-launcher open
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const open = require('open');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Helper to log with colors
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Get score emoji
function getScoreEmoji(score) {
  if (score >= 90) return '🟢';
  if (score >= 50) return '🟠';
  return '🔴';
}

// Format score for display
function formatScore(score) {
  const numScore = Math.round(score * 100);
  let color = colors.red;
  if (numScore >= 90) color = colors.green;
  else if (numScore >= 50) color = colors.yellow;
  return `${color}${numScore}${colors.reset}`;
}

// Main function
async function runLighthouse() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  const url = args[0] || 'http://localhost:3000';
  const device = (args[1] || 'mobile').toLowerCase();
  
  if (!url.startsWith('http')) {
    log(`Invalid URL: ${url}. Please provide a valid URL starting with http:// or https://`, colors.red);
    process.exit(1);
  }
  
  if (!['mobile', 'desktop'].includes(device)) {
    log(`Invalid device: ${device}. Please use 'mobile' or 'desktop'`, colors.red);
    process.exit(1);
  }
  
  log(`${colors.bright}${colors.magenta}Nak Muay Media - Performance Check${colors.reset}`);
  log(`Running Lighthouse on ${colors.cyan}${url}${colors.reset} for ${colors.cyan}${device}${colors.reset} device...`);
  
  try {
    // Launch Chrome
    const chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
    });
    
    // Configure Lighthouse
    const options = {
      logLevel: 'info',
      output: 'html',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
      formFactor: device,
      screenEmulation: {
        mobile: device === 'mobile',
        width: device === 'mobile' ? 375 : 1350,
        height: device === 'mobile' ? 667 : 940,
        deviceScaleFactor: device === 'mobile' ? 2 : 1,
      }
    };
    
    // Run Lighthouse
    log('Running audit, this may take a minute...', colors.dim);
    const runnerResult = await lighthouse(url, options);
    
    // Process results
    const reportHtml = runnerResult.report;
    const lhr = runnerResult.lhr;
    
    // Create reports directory if it doesn't exist
    const reportsDir = path.join(process.cwd(), 'reports');
    await mkdirAsync(reportsDir, { recursive: true });
    
    // Generate filename with timestamp
    const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
    const filename = `lighthouse-${new URL(url).hostname}-${device}-${timestamp}.html`;
    const filePath = path.join(reportsDir, filename);
    
    // Save report
    await writeFileAsync(filePath, reportHtml);
    
    // Close Chrome
    await chrome.kill();
    
    // Display results
    log('\n📊 Performance Results:', colors.bright);
    
    // Display scores
    const categories = lhr.categories;
    log(`\n${getScoreEmoji(categories.performance.score)} Performance: ${formatScore(categories.performance.score)}`);
    log(`${getScoreEmoji(categories.accessibility.score)} Accessibility: ${formatScore(categories.accessibility.score)}`);
    log(`${getScoreEmoji(categories['best-practices'].score)} Best Practices: ${formatScore(categories['best-practices'].score)}`);
    log(`${getScoreEmoji(categories.seo.score)} SEO: ${formatScore(categories.seo.score)}`);
    
    // Display key metrics
    log('\n⏱️ Key Metrics:', colors.bright);
    const metrics = lhr.audits.metrics.details.items[0];
    
    log(`First Contentful Paint: ${metrics.firstContentfulPaint / 1000}s`);
    log(`Largest Contentful Paint: ${metrics.largestContentfulPaint / 1000}s`);
    log(`Total Blocking Time: ${metrics.totalBlockingTime}ms`);
    log(`Cumulative Layout Shift: ${metrics.cumulativeLayoutShift}`);
    log(`Speed Index: ${metrics.speedIndex / 1000}s`);
    
    // Display opportunities
    const opportunities = Object.values(lhr.audits)
      .filter(audit => audit.details && audit.details.type === 'opportunity' && audit.score < 1);
    
    if (opportunities.length > 0) {
      log('\n🔍 Improvement Opportunities:', colors.bright);
      opportunities.forEach(opportunity => {
        log(`- ${opportunity.title}: ${opportunity.description}`);
      });
    }
    
    // Open report
    log(`\n📄 Report saved to: ${colors.cyan}${filePath}${colors.reset}`);
    log('Opening report in browser...');
    await open(filePath);
    
  } catch (error) {
    log(`Error running Lighthouse: ${error.message}`, colors.red);
    process.exit(1);
  }
}

// Run the script
runLighthouse().catch(error => {
  log(`Error: ${error.message}`, colors.red);
  process.exit(1);
}); 