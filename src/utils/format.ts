/**
 * Formatting utility functions.
 * Common formatting helpers for addresses, prices, and text.
 *
 * Usage:
 *   formatAddress('0x1234567890abcdef', 6, 4);
 *   formatPrice(1234.56);
 *   truncateDescription('Long text...', 100);
 */
export const formatAddress = (
  addr: string,
  start: number = 6,
  end: number = 4,
): string => {
  if (!addr || addr.length < start + end) {
    return addr;
  }
  return `${addr.slice(0, start)}...${addr.slice(-end)}`;
};

export const formatPrice = (price: number | string): string => {
  const num = typeof price === 'string' ? parseFloat(price) : price;
  if (Number.isNaN(num)) return '0.00';
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const truncateDescription = (
  description: string,
  maxLength: number,
): string => {
  if (!description) return 'No description available.';
  if (description.length <= maxLength) return description;
  return `${description.slice(0, maxLength)}...`;
};

export const formatNumber = (num: number | string): string => {
  const n = typeof num === 'string' ? parseFloat(num) : num;
  if (Number.isNaN(n)) return '0';
  return n.toLocaleString('en-US');
};
