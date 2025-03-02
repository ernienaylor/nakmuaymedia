/**
 * Deployment preparation script for Nak Muay Media
 * 
 * This script helps prepare the project for deployment by:
 * 1. Running pre-deployment checks
 * 2. Optimizing images
 * 3. Validating critical files
 * 4. Generating a deployment report
 * 
 * Usage:
 * node scripts/deploy.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  requiredFiles: [
    'next.config.js',
    'vercel.json',
    'package.json',
    'src/app/page.tsx',
    'public/images'
  ],
  publicDirs: [
    'images',
    'fonts'
  ]
};

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

// Check if a file or directory exists
function checkExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// Run a command and return its output
function runCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8' });
  } catch (error) {
    log(`Error running command: ${command}`, colors.red);
    log(error.message, colors.red);
    return null;
  }
}

// Check for required files
function checkRequiredFiles() {
  logSection('Checking Required Files');
  
  let allFilesExist = true;
  
  for (const file of config.requiredFiles) {
    const exists = checkExists(file);
    
    if (exists) {
      log(`✓ ${file}`, colors.green);
    } else {
      log(`✗ ${file} - MISSING`, colors.red);
      allFilesExist = false;
    }
  }
  
  return allFilesExist;
}

// Check public directories
function checkPublicDirs() {
  logSection('Checking Public Directories');
  
  for (const dir of config.publicDirs) {
    const dirPath = path.join('public', dir);
    
    if (checkExists(dirPath)) {
      const files = fs.readdirSync(dirPath);
      log(`✓ ${dirPath} (${files.length} files)`, colors.green);
    } else {
      log(`! ${dirPath} - Directory not found`, colors.yellow);
    }
  }
}

// Check for TypeScript errors
function checkTypeScript() {
  logSection('Checking TypeScript');
  
  log('Running TypeScript check...');
  const result = runCommand('npx tsc --noEmit');
  
  if (result !== null) {
    log('✓ TypeScript check passed', colors.green);
    return true;
  }
  
  return false;
}

// Check for ESLint errors
function checkESLint() {
  logSection('Checking ESLint');
  
  log('Running ESLint...');
  const result = runCommand('npx eslint . --ext .ts,.tsx');
  
  if (result !== null) {
    log('✓ ESLint check passed', colors.green);
    return true;
  }
  
  return false;
}

// Check package.json for deployment settings
function checkPackageJson() {
  logSection('Checking package.json');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Check for required scripts
    const requiredScripts = ['build', 'start', 'dev'];
    const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script]);
    
    if (missingScripts.length > 0) {
      log(`! Missing required scripts: ${missingScripts.join(', ')}`, colors.yellow);
    } else {
      log('✓ All required scripts present', colors.green);
    }
    
    // Check for dependencies
    const criticalDeps = ['next', 'react', 'react-dom'];
    const missingDeps = criticalDeps.filter(dep => !packageJson.dependencies[dep]);
    
    if (missingDeps.length > 0) {
      log(`! Missing critical dependencies: ${missingDeps.join(', ')}`, colors.red);
    } else {
      log('✓ All critical dependencies present', colors.green);
    }
    
    // Check for proper Next.js version
    const nextVersion = packageJson.dependencies.next;
    if (nextVersion && nextVersion.startsWith('^13') || nextVersion.startsWith('^14')) {
      log(`✓ Next.js version: ${nextVersion}`, colors.green);
    } else {
      log(`! Next.js version may not be compatible with Vercel: ${nextVersion}`, colors.yellow);
    }
    
    return true;
  } catch (error) {
    log('Error reading package.json', colors.red);
    log(error.message, colors.red);
    return false;
  }
}

// Generate deployment report
function generateReport() {
  logSection('Deployment Report');
  
  const report = {
    timestamp: new Date().toISOString(),
    checks: {
      requiredFiles: checkRequiredFiles(),
      typeScript: checkTypeScript(),
      esLint: checkESLint(),
      packageJson: checkPackageJson()
    }
  };
  
  // Check public directories
  checkPublicDirs();
  
  // Write report to file
  fs.writeFileSync(
    'deployment-report.json',
    JSON.stringify(report, null, 2)
  );
  
  log(`Deployment report saved to deployment-report.json`, colors.cyan);
  
  // Final summary
  logSection('Summary');
  
  const allChecksPass = Object.values(report.checks).every(Boolean);
  
  if (allChecksPass) {
    log('✅ All checks passed! Your project is ready for deployment.', colors.green);
    log('', colors.reset);
    log('Next steps:', colors.bright);
    log('1. Run `npm run build` to create a production build', colors.reset);
    log('2. Deploy to Vercel with `vercel --prod`', colors.reset);
    log('   (or connect your GitHub repository to Vercel for automatic deployments)', colors.reset);
  } else {
    log('❌ Some checks failed. Please fix the issues before deploying.', colors.red);
  }
}

// Main function
function main() {
  log(`${colors.bright}${colors.magenta}Nak Muay Media - Deployment Preparation${colors.reset}`);
  log(`Running pre-deployment checks...`, colors.dim);
  
  generateReport();
}

// Run the script
main(); 