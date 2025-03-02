/**
 * Deployment Fix Script for Nak Muay Media
 * 
 * This script helps identify and fix common deployment issues:
 * 1. Checks for missing dependencies
 * 2. Validates Next.js configuration
 * 3. Ensures proper environment setup
 * 4. Checks for Tailwind CSS compatibility issues
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

// Check for Tailwind CSS compatibility issues
function checkTailwindCompatibility() {
  logSection('Checking Tailwind CSS Compatibility');
  
  try {
    // Check if globals.css exists
    const globalsCssPath = path.join(process.cwd(), 'src', 'app', 'globals.css');
    if (!fs.existsSync(globalsCssPath)) {
      log('globals.css not found. Skipping Tailwind compatibility check.', colors.yellow);
      return true;
    }
    
    let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
    let hasChanges = false;
    
    // Check for known problematic Tailwind classes
    const problematicClasses = [
      { 
        pattern: /@apply\s+border-opacity-(\d+)/g, 
        replacement: (match, opacityValue) => {
          const opacity = parseInt(opacityValue) / 100;
          return `/* Replaced ${match} with direct HSL opacity */
          border-color: hsl(var(--border) / ${opacity})`;
        },
        message: 'border-opacity-* classes may not be compatible with Tailwind CSS v4'
      },
      { 
        pattern: /@apply\s+bg-opacity-(\d+)/g, 
        replacement: (match, opacityValue) => {
          const opacity = parseInt(opacityValue) / 100;
          return `/* Replaced ${match} with direct HSL opacity */
          background-color: hsl(var(--background) / ${opacity})`;
        },
        message: 'bg-opacity-* classes may not be compatible with Tailwind CSS v4'
      },
      { 
        pattern: /@apply\s+text-opacity-(\d+)/g, 
        replacement: (match, opacityValue) => {
          const opacity = parseInt(opacityValue) / 100;
          return `/* Replaced ${match} with direct HSL opacity */
          color: hsl(var(--foreground) / ${opacity})`;
        },
        message: 'text-opacity-* classes may not be compatible with Tailwind CSS v4'
      },
      {
        pattern: /opacity-(\d+)/g,
        replacement: (match, opacityValue) => {
          const opacity = parseInt(opacityValue) / 100;
          return `/* Replaced ${match} with standard opacity property */
          opacity: ${opacity}`;
        },
        message: 'opacity-* classes may have changed in Tailwind CSS v4'
      },
      {
        pattern: /@apply\s+bg-background/g,
        replacement: () => {
          return `/* Replaced @apply bg-background with direct HSL variable */
          background-color: hsl(var(--background))`;
        },
        message: 'bg-background utility class is not recognized in Tailwind CSS v4'
      },
      {
        pattern: /@apply\s+text-foreground/g,
        replacement: () => {
          return `/* Replaced @apply text-foreground with direct HSL variable */
          color: hsl(var(--foreground))`;
        },
        message: 'text-foreground utility class is not recognized in Tailwind CSS v4'
      },
      {
        pattern: /@apply\s+bg-card/g,
        replacement: () => {
          return `/* Replaced @apply bg-card with direct HSL variable */
          background-color: hsl(var(--card))`;
        },
        message: 'bg-card utility class is not recognized in Tailwind CSS v4'
      },
      {
        pattern: /@apply\s+text-card-foreground/g,
        replacement: () => {
          return `/* Replaced @apply text-card-foreground with direct HSL variable */
          color: hsl(var(--card-foreground))`;
        },
        message: 'text-card-foreground utility class is not recognized in Tailwind CSS v4'
      },
      {
        pattern: /@apply\s+bg-muted/g,
        replacement: () => {
          return `/* Replaced @apply bg-muted with direct HSL variable */
          background-color: hsl(var(--muted))`;
        },
        message: 'bg-muted utility class is not recognized in Tailwind CSS v4'
      },
      {
        pattern: /@apply\s+text-muted-foreground/g,
        replacement: () => {
          return `/* Replaced @apply text-muted-foreground with direct HSL variable */
          color: hsl(var(--muted-foreground))`;
        },
        message: 'text-muted-foreground utility class is not recognized in Tailwind CSS v4'
      }
    ];
    
    // Check for each problematic class
    for (const classInfo of problematicClasses) {
      const matches = globalsCss.match(classInfo.pattern);
      if (matches) {
        hasChanges = true;
        log(`Found potentially problematic Tailwind class: ${classInfo.message}`, colors.yellow);
        log(`  Instances found: ${matches.length}`, colors.dim);
        globalsCss = globalsCss.replace(classInfo.pattern, classInfo.replacement);
      }
    }
    
    // Check for body element with bg-background
    const bodyBgPattern = /body\s*{\s*@apply\s+bg-background\s+text-foreground/g;
    if (bodyBgPattern.test(globalsCss)) {
      hasChanges = true;
      log('Found @apply bg-background in body selector. Replacing with direct HSL variables.', colors.yellow);
      
      globalsCss = globalsCss.replace(
        /body\s*{\s*@apply\s+bg-background\s+text-foreground([^}]*)\}/g,
        (match, rest) => {
          return `body {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground))${rest}\n}`;
        }
      );
    }
    
    // Check for border-opacity in * selector
    const borderOpacityPattern = /\*\s*{\s*[^}]*@apply\s+border-opacity-\d+[^}]*}/g;
    if (borderOpacityPattern.test(globalsCss)) {
      hasChanges = true;
      log('Found border-opacity in global * selector. Replacing with direct HSL opacity.', colors.yellow);
      
      globalsCss = globalsCss.replace(
        /(\*\s*{\s*border-color:\s*hsl\(var\(--border\)\))[^}]*(@apply\s+border-opacity-(\d+))[^}]*}/g,
        (match, prefix, applyClass, opacityValue) => {
          const opacity = parseInt(opacityValue) / 100;
          return `* {\n  border-color: hsl(var(--border) / ${opacity});\n  /* Removed ${applyClass} and replaced with direct HSL opacity */\n}`;
        }
      );
    }
    
    // Check for Tailwind CSS v4 specific issues in component files
    log('Scanning component files for Tailwind CSS v4 compatibility issues...', colors.cyan);
    
    // Define directories to scan
    const dirsToScan = ['src/components', 'src/app'];
    let scannedFiles = 0;
    let fixedFiles = 0;
    let standaloneOpacityFiles = 0;
    let standaloneOpacityValues = new Set();
    
    // Function to scan a directory recursively
    function scanDirectory(dir) {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanDirectory(filePath);
        } else if (stat.isFile() && 
                  (filePath.endsWith('.tsx') || 
                   filePath.endsWith('.jsx') || 
                   filePath.endsWith('.css'))) {
          
          scannedFiles++;
          let content = fs.readFileSync(filePath, 'utf8');
          let fileHasChanges = false;
          
          // Check for className patterns that might cause issues in Tailwind CSS v4
          const classNamePatterns = [
            {
              pattern: /className="[^"]*\b(border-opacity-\d+)\b[^"]*"/g,
              message: `Found border-opacity-* in ${filePath}`
            },
            {
              pattern: /className="[^"]*\b(bg-opacity-\d+)\b[^"]*"/g,
              message: `Found bg-opacity-* in ${filePath}`
            },
            {
              pattern: /className="[^"]*\b(text-opacity-\d+)\b[^"]*"/g,
              message: `Found text-opacity-* in ${filePath}`
            }
          ];
          
          for (const pattern of classNamePatterns) {
            if (pattern.pattern.test(content)) {
              log(pattern.message, colors.yellow);
              fileHasChanges = true;
            }
          }
          
          // Check for standalone opacity utilities
          const opacityPattern = /className="[^"]*\b(opacity-(\d+))\b[^"]*"/g;
          let match;
          let hasStandaloneOpacity = false;
          
          while ((match = opacityPattern.exec(content)) !== null) {
            hasStandaloneOpacity = true;
            standaloneOpacityValues.add(match[2]);
          }
          
          if (hasStandaloneOpacity) {
            standaloneOpacityFiles++;
            log(`Found standalone opacity utilities in ${filePath}`, colors.blue);
          }
          
          if (fileHasChanges) {
            fixedFiles++;
            // We don't automatically fix these as they require more context
            // Just log them for manual review
            log(`  Please manually review ${filePath} for Tailwind CSS v4 compatibility`, colors.dim);
          }
        }
      }
    }
    
    // Scan directories
    for (const dir of dirsToScan) {
      scanDirectory(dir);
    }
    
    log(`Scanned ${scannedFiles} files, found ${fixedFiles} files with potential Tailwind CSS v4 issues.`, colors.cyan);
    
    if (standaloneOpacityFiles > 0) {
      log(`Found ${standaloneOpacityFiles} files using standalone opacity utilities.`, colors.blue);
      log(`Opacity values found: ${Array.from(standaloneOpacityValues).join(', ')}`, colors.dim);
      
      // Check if tailwind.config.js exists and has these opacity values
      const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.js');
      if (fs.existsSync(tailwindConfigPath)) {
        const tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf8');
        
        // Check if opacity is defined in the config
        if (tailwindConfig.includes('opacity:') && tailwindConfig.includes('extend:')) {
          log('Opacity values are defined in tailwind.config.js. Please verify all needed values are included.', colors.green);
        } else {
          log('Consider adding explicit opacity values to tailwind.config.js:', colors.yellow);
          log(`
theme: {
  extend: {
    opacity: {
      ${Array.from(standaloneOpacityValues).map(val => `'${val}': '0.${val}'`).join(',\n      ')}
    }
  }
}`, colors.dim);
        }
      }
    }
    
    if (hasChanges) {
      log('Updating globals.css to fix Tailwind compatibility issues...', colors.blue);
      fs.writeFileSync(globalsCssPath, globalsCss);
      log('globals.css updated successfully!', colors.green);
    } else {
      log('No Tailwind CSS compatibility issues found in globals.css.', colors.green);
    }
    
    if (fixedFiles > 0 || standaloneOpacityFiles > 0) {
      log(`\nTailwind CSS v4 Compatibility Tips:`, colors.bright);
      log(`1. Replace opacity utilities (border-opacity-*, bg-opacity-*) with slash syntax:`, colors.reset);
      log(`   - Old: className="bg-red-500 bg-opacity-50"`, colors.dim);
      log(`   - New: className="bg-red-500/50"`, colors.green);
      log(`2. For custom colors using HSL variables, use the slash syntax:`, colors.reset);
      log(`   - Old: border-color: hsl(var(--border)); @apply border-opacity-80`, colors.dim);
      log(`   - New: border-color: hsl(var(--border) / 0.8)`, colors.green);
      log(`3. For standalone opacity utilities, ensure they're defined in tailwind.config.js:`, colors.reset);
      log(`   - Check: className="opacity-80"`, colors.dim);
      log(`   - Verify: opacity: { "80": "0.8" } exists in the config`, colors.green);
    }
    
    return true;
  } catch (error) {
    log(`Error checking Tailwind compatibility: ${error.message}`, colors.red);
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
  const tailwindOk = checkTailwindCompatibility();
  const envOk = checkEnvironment();
  
  logSection('Summary');
  
  if (depsOk && configOk && tailwindOk && envOk) {
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