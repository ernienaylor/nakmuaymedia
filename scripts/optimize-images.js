/**
 * Image optimization script for Nak Muay Media
 * 
 * This script optimizes images in the public/images directory for web use.
 * It uses sharp to resize and compress images to reduce file size while maintaining quality.
 * 
 * Usage:
 * node scripts/optimize-images.js
 * 
 * Requirements:
 * npm install sharp glob
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');
const { promisify } = require('util');

// Promisify glob
const globPromise = promisify(glob);

// Configuration
const config = {
  inputDir: 'public/images',
  outputDir: 'public/images/optimized',
  sizes: [
    { width: 640, suffix: 'sm' },
    { width: 1080, suffix: 'md' },
    { width: 1920, suffix: 'lg' }
  ],
  quality: 80,
  formats: ['webp', 'avif', 'jpg']
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

// Helper to format bytes
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Ensure output directory exists
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    log(`Created directory: ${directory}`, colors.green);
  }
}

// Process a single image
async function processImage(imagePath) {
  const filename = path.basename(imagePath, path.extname(imagePath));
  const originalSize = fs.statSync(imagePath).size;
  
  log(`Processing: ${filename}${path.extname(imagePath)}`, colors.cyan);
  
  let totalSavings = 0;
  let outputFiles = 0;
  
  // Process each size
  for (const size of config.sizes) {
    const resizedImage = sharp(imagePath).resize({
      width: size.width,
      height: null, // Maintain aspect ratio
      fit: 'inside',
      withoutEnlargement: true
    });
    
    // Process each format
    for (const format of config.formats) {
      const outputFilename = `${filename}-${size.suffix}.${format}`;
      const outputPath = path.join(config.outputDir, outputFilename);
      
      try {
        // Configure format-specific options
        let formatOptions = {};
        
        if (format === 'webp') {
          formatOptions = { quality: config.quality };
        } else if (format === 'avif') {
          formatOptions = { quality: config.quality };
        } else if (format === 'jpg' || format === 'jpeg') {
          formatOptions = { 
            quality: config.quality,
            mozjpeg: true
          };
        }
        
        // Process and save the image
        await resizedImage.toFormat(format, formatOptions).toFile(outputPath);
        
        // Calculate savings
        const newSize = fs.statSync(outputPath).size;
        const savings = originalSize - newSize;
        totalSavings += savings;
        outputFiles++;
        
        log(`  ✓ ${outputFilename} (${formatBytes(newSize)}, saved ${formatBytes(savings)})`, colors.green);
      } catch (error) {
        log(`  ✗ Error processing ${outputFilename}: ${error.message}`, colors.red);
      }
    }
  }
  
  return { originalSize, totalSavings, outputFiles };
}

// Main function
async function main() {
  log(`${colors.bright}${colors.magenta}Nak Muay Media - Image Optimization${colors.reset}`);
  log(`Optimizing images in ${config.inputDir}...`, colors.dim);
  
  // Ensure output directory exists
  ensureDirectoryExists(config.outputDir);
  
  // Find all images
  const imagePatterns = ['**/*.jpg', '**/*.jpeg', '**/*.png'];
  let imagePaths = [];
  
  for (const pattern of imagePatterns) {
    const matches = await globPromise(path.join(config.inputDir, pattern));
    imagePaths = [...imagePaths, ...matches];
  }
  
  log(`Found ${imagePaths.length} images to process.`, colors.blue);
  
  // Process all images
  let totalOriginalSize = 0;
  let totalSavings = 0;
  let totalOutputFiles = 0;
  
  for (const imagePath of imagePaths) {
    const result = await processImage(imagePath);
    totalOriginalSize += result.originalSize;
    totalSavings += result.totalSavings;
    totalOutputFiles += result.outputFiles;
  }
  
  // Summary
  log('\nOptimization Summary:', colors.bright);
  log(`Total images processed: ${imagePaths.length}`, colors.cyan);
  log(`Total output files generated: ${totalOutputFiles}`, colors.cyan);
  log(`Original size: ${formatBytes(totalOriginalSize)}`, colors.cyan);
  log(`Total size savings: ${formatBytes(totalSavings)} (${Math.round(totalSavings / totalOriginalSize * 100)}%)`, colors.green);
  
  log('\nNext steps:', colors.bright);
  log('1. Review the optimized images in the output directory', colors.reset);
  log('2. Update your code to use the optimized images', colors.reset);
  log('3. Consider adding a build step to automate this process', colors.reset);
}

// Run the script
main().catch(error => {
  log(`Error: ${error.message}`, colors.red);
  process.exit(1);
}); 