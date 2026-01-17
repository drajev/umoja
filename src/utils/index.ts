/**
 * Barrel export for all utility functions.
 * Import utils from '@/utils' for cleaner imports.
 *
 * @example
 * import { cn, isString, preventDefault, debounce } from '@/utils';
 */

// Type guards and assertions
export {
  isArray,
  isBoolean,
  isDate,
  isDefined,
  isError,
  isFunction,
  isNonEmptyString,
  isNullish,
  isNumber,
  isObject,
  isPositiveNumber,
  isPromise,
  isString,
} from './assertion';

// Event callback helpers
export {
  blurOnWheel,
  conditionalHandler,
  noop,
  preventDefault,
  preventDefaultAndStopPropagation,
  preventDefaultOnEnter,
  returnFalse,
  returnTrue,
  stopPropagation,
  stopPropagationOnEscape,
} from './callbacks';
// Legacy exports (for backwards compatibility)
export { debounce } from './debounce';
export {
  formatAddress,
  formatNumber,
  formatPrice,
  truncateDescription,
} from './format';
// General helpers
export {
  capitalize,
  clamp,
  cn,
  deepCopy,
  formatBytes,
  groupBy,
  range,
  safeJsonParse,
  sleep,
  truncate,
  uid,
  unique,
} from './helpers';
