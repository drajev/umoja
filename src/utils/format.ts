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

/** Converts a Date to YYYY-MM-DD using local time (avoids timezone off-by-one errors). */
export const dateToLocalISO = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

/** Normalizes a date string (YYYY-MM-DD or ISO) to YYYY-MM-DD for display and form use. */
export const formatDateOnly = (value: string | null | undefined): string => {
  if (!value) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return value.slice(0, 10);
};
