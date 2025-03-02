/**
 * Deployment Fix Script for Nak Muay Media
 * 
 * This script helps identify and fix common deployment issues:
 * 1. Checks for missing dependencies
 * 2. Validates Next.js configuration
 * 3. Ensures proper environment setup
 * 
 * Usage:
 * node scripts/fix-deployment.js
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

// Check for missing dependencies
function checkDependencies() {
  logSection('Checking for Missing Dependencies');
  
  // Common UI component libraries used in the project
  const uiLibraries = [
    '@radix-ui/react-dialog',
    '@radix-ui/react-label',
    '@radix-ui/react-navigation-menu',
    '@radix-ui/react-slider',
    '@radix-ui/react-slot',
    '@radix-ui/react-tabs'
  ];
  
  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = packageJson.dependencies || {};
  
  // Check for missing UI libraries
  const missingDeps = [];
  for (const lib of uiLibraries) {
    if (!dependencies[lib]) {
      missingDeps.push(lib);
    }
  }
  
  if (missingDeps.length > 0) {
    log(`Found ${missingDeps.length} missing dependencies:`, colors.yellow);
    missingDeps.forEach(dep => log(`  - ${dep}`, colors.yellow));
    
    const installCmd = `npm install ${missingDeps.join(' ')} --save`;
    log(`\nRunning: ${installCmd}`, colors.blue);
    
    const result = runCommand(installCmd);
    if (result !== null) {
      log('Dependencies installed successfully!', colors.green);
    }
  } else {
    log('All common UI dependencies are present.', colors.green);
  }
  
  return missingDeps.length === 0;
}

// Validate Next.js configuration
function validateNextConfig() {
  logSection('Validating Next.js Configuration');
  
  try {
    // Read next.config.js
    const configPath = path.join(process.cwd(), 'next.config.js');
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Check for deprecated options
    const deprecatedOptions = [
      { name: 'swcMinify', replacement: 'Next.js 15+ handles minification automatically' },
      { name: 'target', replacement: 'No longer needed in Next.js 15+' },
      { name: 'distDir', replacement: 'Use .next directory or configure in Vercel dashboard' }
    ];
    
    let hasDeprecatedOptions = false;
    let updatedConfig = configContent;
    
    for (const option of deprecatedOptions) {
      if (configContent.includes(`${option.name}:`)) {
        hasDeprecatedOptions = true;
        log(`Found deprecated option: ${option.name}`, colors.yellow);
        log(`  Replacement: ${option.replacement}`, colors.dim);
        
        // Simple regex to remove the option (this is a basic approach)
        const regex = new RegExp(`\\s*${option.name}:\\s*[^,}]*[,]?`, 'g');
        updatedConfig = updatedConfig.replace(regex, '');
      }
    }
    
    if (hasDeprecatedOptions) {
      log('Updating next.config.js to remove deprecated options...', colors.blue);
      fs.writeFileSync(configPath, updatedConfig);
      log('next.config.js updated successfully!', colors.green);
    } else {
      log('No deprecated options found in next.config.js.', colors.green);
    }
    
    return !hasDeprecatedOptions;
  } catch (error) {
    log(`Error validating Next.js configuration: ${error.message}`, colors.red);
    return false;
  }
}

// Check for proper environment setup
function checkEnvironment() {
  logSection('Checking Environment Setup');
  
  // Check Node.js version
  const nodeVersion = process.version;
  log(`Node.js version: ${nodeVersion}`, colors.cyan);
  
  const major = parseInt(nodeVersion.slice(1).split('.')[0], 10);
  if (major < 18) {
    log('Warning: Node.js version should be 18 or higher for Next.js 15+', colors.yellow);
  } else {
    log('Node.js version is compatible with Next.js 15+', colors.green);
  }
  
  // Check for Vercel configuration
  if (fs.existsSync('vercel.json')) {
    log('vercel.json found', colors.green);
  } else {
    log('vercel.json not found. This may cause deployment issues.', colors.yellow);
    
    // Create a basic vercel.json if it doesn't exist
    const basicVercelConfig = {
      "version": 2,
      "buildCommand": "npm run build",
      "devCommand": "npm run dev",
      "installCommand": "npm install",
      "framework": "nextjs"
    };
    
    log('Creating a basic vercel.json file...', colors.blue);
    fs.writeFileSync('vercel.json', JSON.stringify(basicVercelConfig, null, 2));
    log('Basic vercel.json created successfully!', colors.green);
  }
  
  return true;
}

// Main function
function main() {
  log(`${colors.bright}${colors.magenta}Nak Muay Media - Deployment Fix${colors.reset}`);
  log(`Identifying and fixing common deployment issues...`, colors.dim);
  
  const depsOk = checkDependencies();
  const configOk = validateNextConfig();
  const envOk = checkEnvironment();
  
  logSection('Summary');
  
  if (depsOk && configOk && envOk) {
    log('✅ All checks passed! Your project should be ready for deployment.', colors.green);
  } else {
    log('⚠️ Some issues were found and fixed. Try deploying again.', colors.yellow);
  }
  
  log('\nNext steps:', colors.bright);
  log('1. Run `npm run build` to verify the build works locally', colors.reset);
  log('2. Deploy to Vercel with `npm run deploy`', colors.reset);
}

// Run the script
main(); 