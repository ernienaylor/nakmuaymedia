#!/usr/bin/env node

/**
 * Tailwind CSS v4 Remaining Issues Checker
 * 
 * This script scans the codebase for any remaining Tailwind CSS v4 compatibility issues
 * after the initial fixes have been applied.
 * 
 * Usage:
 * node scripts/check-remaining-issues.js
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

// Patterns to check for remaining Tailwind CSS v4 compatibility issues
const patterns = [
  {
    name: 'Text Size Utilities',
    description: 'Text size utility classes that need to be replaced with inline styles',
    patterns: [
      { regex: /className="[^"]*\b(text-xs|text-sm|text-base|text-lg|text-xl|text-2xl|text-3xl|text-4xl|text-5xl|text-6xl)\b[^"]*"/g, replacement: 'Use inline styles for font size' },
      { regex: /className=\{[^}]*\b(text-xs|text-sm|text-base|text-lg|text-xl|text-2xl|text-3xl|text-4xl|text-5xl|text-6xl)\b[^}]*\}/g, replacement: 'Use inline styles for font size' }
    ]
  },
  {
    name: 'Opacity Utilities',
    description: 'Deprecated opacity utilities that should use slash syntax in v4',
    patterns: [
      { regex: /className="[^"]*\b(bg-opacity-\d+|border-opacity-\d+|text-opacity-\d+)\b[^"]*"/g, replacement: 'Use slash syntax for opacity' },
      { regex: /className=\{[^}]*\b(bg-opacity-\d+|border-opacity-\d+|text-opacity-\d+)\b[^}]*\}/g, replacement: 'Use slash syntax for opacity' }
    ]
  },
  {
    name: 'Theme Variables',
    description: 'Theme variables that may not be recognized in Tailwind CSS v4',
    patterns: [
      { regex: /className="[^"]*\b(bg-background|text-foreground|bg-card|text-card-foreground|bg-muted|text-muted-foreground)\b[^"]*"/g, replacement: 'Use inline styles with HSL values' },
      { regex: /className=\{[^}]*\b(bg-background|text-foreground|bg-card|text-card-foreground|bg-muted|text-muted-foreground)\b[^}]*\}/g, replacement: 'Use inline styles with HSL values' }
    ]
  },
  {
    name: 'HSL Opacity in CSS',
    description: 'CSS files using @apply with opacity utilities',
    patterns: [
      { regex: /@apply\s+\b(bg-opacity-\d+|border-opacity-\d+|text-opacity-\d+)\b/g, replacement: 'Use HSL color with opacity value' },
      { regex: /@apply\s+\b(bg-background|text-foreground|bg-card|text-card-foreground|bg-muted|text-muted-foreground)\b/g, replacement: 'Use HSL color values' }
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
  log(`${colors.bright}${colors.magenta}Tailwind CSS v4 Remaining Issues Checker${colors.reset}`);
  log(`Scanning codebase for any remaining compatibility issues...`, colors.dim);

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
    log('✅ No remaining Tailwind CSS v4 compatibility issues found!', colors.green);
  } else {
    log(`⚠️ Found ${allResults.length} files with remaining compatibility issues:`, colors.yellow);
    
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
    
    // Provide next steps
    logSection('Next Steps');
    log('1. Review the detailed compatibility guide:', colors.bright);
    log('   docs/TAILWIND_V4_FIXES.md', colors.reset);
    log('2. For text size utilities, replace with inline styles:', colors.bright);
    log('   Change: className="text-lg"', colors.reset);
    log('   To:     style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}', colors.reset);
    log('3. For opacity utilities, use slash syntax:', colors.bright);
    log('   Change: className="bg-red-500 bg-opacity-50"', colors.reset);
    log('   To:     className="bg-red-500/50"', colors.reset);
    log('4. For theme variables, use inline styles with HSL values:', colors.bright);
    log('   Change: className="bg-background text-foreground"', colors.reset);
    log('   To:     style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}', colors.reset);
  }
}

// Run the script
main(); 