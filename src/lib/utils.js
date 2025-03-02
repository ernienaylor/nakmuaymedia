// Utility functions

/**
 * Format a date string to a more readable format
 * @param {string} dateString - Date string in ISO format
 * @returns {string} Formatted date string
 */
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

/**
 * Truncate text to a specified length and add ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, length = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Generate a slug from a string
 * @param {string} text - Text to convert to slug
 * @returns {string} Slug
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

/**
 * Get the YouTube video ID from a YouTube URL
 * @param {string} url - YouTube URL
 * @returns {string|null} YouTube video ID or null if not found
 */
export function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

/**
 * Format a fighter's record
 * @param {Object} record - Record object with wins, losses, and draws
 * @returns {string} Formatted record string
 */
export function formatRecord(record) {
  const { wins, losses, draws, kos } = record;
  let recordString = `${wins}-${losses}`;
  if (draws > 0) recordString += `-${draws}`;
  if (kos > 0) recordString += ` (${kos} KOs)`;
  return recordString;
}

/**
 * Format a price with currency symbol
 * @param {number} price - Price to format
 * @param {string} currency - Currency code
 * @returns {string} Formatted price
 */
export function formatPrice(price, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
}

/**
 * Combine class names with conditional logic
 * @param  {...any} classes - Class names to combine
 * @returns {string} Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
} 