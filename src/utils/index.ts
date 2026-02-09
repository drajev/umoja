// API helpers
export {
  type ApiError,
  type ApiResponse,
  getErrorMessage,
  getErrorStatusCode,
  hasApiErrorResponse,
  isAxiosError,
  isConflictError,
  isForbiddenError,
  isNotFoundError,
  isStatusError,
  isUnauthorizedError,
  isValidationError,
} from './api';

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
export { debounce } from './debounce';
export {
  dateToLocalISO,
  formatAddress,
  formatDateOnly,
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
