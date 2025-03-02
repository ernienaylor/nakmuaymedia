#!/usr/bin/env node

/**
 * Tailwind CSS v4 Compatibility Checker
 * 
 * This script scans the codebase for potential Tailwind CSS v4 compatibility issues,
 * focusing on deprecated opacity utilities and other breaking changes.
 * 
 * Usage:
 * node scripts/check-tailwind-compatibility.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// Helper to log section headers
function logSection(title) {
  console.log('\n');
  log(`${colors.bright}${colors.cyan}=== ${title} ===${colors.reset}`);
  console.log('');
}

// Patterns to check for Tailwind CSS v4 compatibility issues
const patterns = [
  {
    name: 'Opacity Utilities',
    description: 'Deprecated opacity utilities that should use slash syntax in v4',
    patterns: [
      { regex: /className="[^"]*\b(bg-opacity-\d+)\b[^"]*"/g, replacement: 'bg-{color}/{opacity}' },
      { regex: /className="[^"]*\b(border-opacity-\d+)\b[^"]*"/g, replacement: 'border-{color}/{opacity}' },
      { regex: /className="[^"]*\b(text-opacity-\d+)\b[^"]*"/g, replacement: 'text-{color}/{opacity}' }
    ]
  },
  {
    name: 'Standalone Opacity',
    description: 'Standalone opacity utilities that should be verified in tailwind.config.js',
    patterns: [
      { regex: /className="[^"]*\b(opacity-\d+)\b[^"]*"/g, replacement: 'Ensure this opacity value is defined in tailwind.config.js' },
      { regex: /className=\{[^}]*\b(opacity-\d+)\b[^}]*\}/g, replacement: 'Ensure this opacity value is defined in tailwind.config.js' }
    ]
  },
  {
    name: 'HSL Opacity in CSS',
    description: 'CSS files using @apply with opacity utilities',
    patterns: [
      { regex: /@apply\s+border-opacity-\d+/g, replacement: 'border-color: hsl(var(--border) / {opacity})' },
      { regex: /@apply\s+bg-opacity-\d+/g, replacement: 'background-color: hsl(var(--background) / {opacity})' },
      { regex: /@apply\s+text-opacity-\d+/g, replacement: 'color: hsl(var(--foreground) / {opacity})' }
    ]
  },
  {
    name: 'Deprecated Config Options',
    description: 'Tailwind config options that may be deprecated in v4',
    patterns: [
      { regex: /purge:/g, replacement: 'content:' },
      { regex: /defaultLineHeights:/g, replacement: 'Remove this option' },
      { regex: /standardFontWeights:/g, replacement: 'Remove this option' }
    ]
  }
];

// Directories to scan
const dirsToScan = [
  'src/components',
  'src/app',
  'components',
  'app',
  'styles',
  'src/styles'
];

// File extensions to check
const fileExtensions = ['.tsx', '.jsx', '.js', '.ts', '.css'];

// Function to scan a file for compatibility issues
function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // Check each pattern category
  for (const category of patterns) {
    for (const pattern of category.patterns) {
      const matches = content.match(pattern.regex);
      if (matches && matches.length > 0) {
        issues.push({
          category: category.name,
          description: category.description,
          matches: matches,
          replacement: pattern.replacement
        });
      }
    }
  }

  return issues;
}

// Function to scan a directory recursively
function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return [];

  const results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...scanDirectory(filePath));
    } else if (stat.isFile() && fileExtensions.includes(path.extname(filePath))) {
      const issues = scanFile(filePath);
      if (issues.length > 0) {
        results.push({
          file: filePath,
          issues: issues
        });
      }
    }
  }

  return results;
}

// Main function
function main() {
  log(`${colors.bright}${colors.magenta}Tailwind CSS v4 Compatibility Checker${colors.reset}`);
  log(`Scanning codebase for potential compatibility issues...`, colors.dim);

  let allResults = [];

  // Scan each directory
  for (const dir of dirsToScan) {
    if (fs.existsSync(dir)) {
      const results = scanDirectory(dir);
      allResults = [...allResults, ...results];
    }
  }

  // Display results
  logSection('Scan Results');

  if (allResults.length === 0) {
    log('✅ No Tailwind CSS v4 compatibility issues found!', colors.green);
  } else {
    log(`⚠️ Found ${allResults.length} files with potential compatibility issues:`, colors.yellow);
    
    // Group by category for better reporting
    const categoryCounts = {};
    
    for (const result of allResults) {
      log(`\n${colors.bright}${result.file}${colors.reset}`);
      
      for (const issue of result.issues) {
        // Update category counts
        categoryCounts[issue.category] = (categoryCounts[issue.category] || 0) + issue.matches.length;
        
        log(`  ${colors.yellow}${issue.category}${colors.reset} - ${issue.description}`);
        log(`  ${colors.dim}Suggested replacement: ${issue.replacement}${colors.reset}`);
        log(`  ${colors.dim}Found ${issue.matches.length} instances${colors.reset}`);
        
        // Show first 3 matches as examples
        const examples = issue.matches.slice(0, 3);
        for (const example of examples) {
          log(`    ${colors.dim}${example}${colors.reset}`);
        }
        if (issue.matches.length > 3) {
          log(`    ${colors.dim}... and ${issue.matches.length - 3} more${colors.reset}`);
        }
      }
    }
    
    // Summary by category
    logSection('Summary by Category');
    for (const category in categoryCounts) {
      log(`${category}: ${categoryCounts[category]} instances`, colors.yellow);
    }
  }

  // Provide next steps
  logSection('Next Steps');
  log('1. Review the detailed compatibility guide:', colors.bright);
  log('   docs/TAILWIND_COMPATIBILITY.md', colors.reset);
  log('2. Run the fix-deployment script to automatically fix some issues:', colors.bright);
  log('   node scripts/fix-deployment.js', colors.reset);
  log('3. For component files, manually update className props to use slash syntax:', colors.bright);
  log('   Change: className="bg-red-500 bg-opacity-50"', colors.reset);
  log('   To:     className="bg-red-500/50"', colors.reset);
  log('4. For standalone opacity utilities, ensure they are defined in tailwind.config.js:', colors.bright);
  log('   Check: className="opacity-80"', colors.reset);
  log('   Verify: opacity: { "80": "0.8" } exists in the config', colors.reset);
}

// Run the script
main(); 