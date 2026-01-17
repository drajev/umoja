import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * General utility functions for common operations.
 * These helpers provide type-safe, reusable functionality across the app.
 */

/**
 * Merges Tailwind CSS classes with proper precedence.
 * Combines clsx for conditional classes with tailwind-merge for conflict resolution.
 *
 * @example
 * cn('px-2 py-1', isActive && 'bg-blue-500', className)
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

/**
 * Generates a unique identifier string.
 *
 * @param length - Length of the ID (default: 8)
 * @returns Random alphanumeric string
 */
export const uid = (length = 8): string => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);
  for (let i = 0; i < length; i++) {
    result += chars[randomValues[i] % chars.length];
  }
  return result;
};

/**
 * Pauses execution for specified milliseconds.
 *
 * @example
 * await sleep(1000); // Wait 1 second
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Creates a deep copy of an object.
 * Handles Date, Set, Array, and nested objects.
 *
 * @example
 * const copy = deepCopy({ nested: { value: 1 } });
 */
export const deepCopy = <T>(obj: T): T => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof Set) {
    return new Set([...obj].map(item => deepCopy(item))) as T;
  }

  if (obj instanceof Map) {
    return new Map([...obj].map(([k, v]) => [deepCopy(k), deepCopy(v)])) as T;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item)) as T;
  }

  const copy = {} as Record<string, unknown>;
  for (const key in obj) {
    if (Object.hasOwn(obj as object, key)) {
      copy[key] = deepCopy((obj as Record<string, unknown>)[key]);
    }
  }
  return copy as T;
};

/**
 * Capitalizes the first letter of a string.
 *
 * @example
 * capitalize('hello') // 'Hello'
 */
export const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncates a string to specified length with ellipsis.
 *
 * @example
 * truncate('Hello World', 5) // 'Hello...'
 */
export const truncate = (str: string, length: number): string => {
  if (str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

/**
 * Clamps a number between min and max values.
 *
 * @example
 * clamp(15, 0, 10) // 10
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Formats bytes to human-readable string.
 *
 * @example
 * formatBytes(1024) // { value: 1, unit: 'KB' }
 */
export const formatBytes = (
  bytes: number,
  decimals = 2,
): { value: number; unit: string } => {
  if (bytes === 0) {
    return { value: 0, unit: 'Bytes' };
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  const index = Math.floor(Math.log(bytes) / Math.log(k));

  return {
    value: parseFloat((bytes / k ** index).toFixed(dm)),
    unit: sizes[index],
  };
};

/**
 * Groups an array by a key function.
 *
 * @example
 * groupBy([{ type: 'a' }, { type: 'b' }], (item) => item.type)
 */
export const groupBy = <T, K extends string | number | symbol>(
  array: T[],
  keyFn: (item: T) => K,
): Record<K, T[]> => {
  return array.reduce(
    (acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    },
    {} as Record<K, T[]>,
  );
};

/**
 * Removes duplicate values from an array.
 *
 * @example
 * unique([1, 2, 2, 3]) // [1, 2, 3]
 */
export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

/**
 * Safely parses JSON with a fallback value.
 *
 * @example
 * safeJsonParse('{"a":1}', {}) // { a: 1 }
 * safeJsonParse('invalid', {}) // {}
 */
export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
};

/**
 * Creates a range of numbers.
 *
 * @example
 * range(1, 5) // [1, 2, 3, 4, 5]
 */
export const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
