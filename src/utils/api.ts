/**
 * API utility functions for error handling and response parsing.
 *
 * @example
 * import { getErrorMessage, isAxiosError } from '@/utils/api';
 *
 * try {
 *   await apiCall();
 * } catch (err) {
 *   const message = getErrorMessage(err);
 * }
 */
import type { AxiosError } from 'axios';

// ============================================================================
// Types
// ============================================================================

/**
 * Standard API error response structure
 */
export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}

/**
 * API success response with data
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

// ============================================================================
// Type Guards
// ============================================================================

/**
 * Check if error is an Axios error
 */
export const isAxiosError = (error: unknown): error is AxiosError<ApiError> => {
  return (
    error !== null &&
    typeof error === 'object' &&
    'isAxiosError' in error &&
    (error as AxiosError).isAxiosError === true
  );
};

/**
 * Check if error response has API error structure
 */
export const hasApiErrorResponse = (
  error: unknown,
): error is AxiosError<ApiError> => {
  if (!isAxiosError(error)) return false;
  const data = error.response?.data;
  return (
    data !== undefined &&
    data !== null &&
    typeof data === 'object' &&
    'message' in data
  );
};

// ============================================================================
// Error Handling
// ============================================================================

/**
 * Default error messages by HTTP status code
 */
const STATUS_MESSAGES: Record<number, string> = {
  400: 'Invalid request. Please check your input.',
  401: 'Please log in to continue.',
  403: 'You do not have permission to perform this action.',
  404: 'The requested resource was not found.',
  409: 'This resource already exists.',
  422: 'Validation failed. Please check your input.',
  429: 'Too many requests. Please try again later.',
  500: 'Server error. Please try again later.',
  502: 'Service temporarily unavailable.',
  503: 'Service temporarily unavailable.',
};

/**
 * Extract user-friendly error message from any error type.
 * Prioritizes API error messages, falls back to status-based messages.
 *
 * @param error - The error to extract message from
 * @param fallback - Optional fallback message (default: generic error message)
 * @returns User-friendly error message
 *
 * @example
 * try {
 *   await login(credentials);
 * } catch (err) {
 *   const message = getErrorMessage(err);
 *   showToast(message);
 * }
 */
export const getErrorMessage = (
  error: unknown,
  fallback = 'An unexpected error occurred. Please try again.',
): string => {
  // Check for Axios error with API response
  if (hasApiErrorResponse(error)) {
    return error.response?.data?.message || fallback;
  }

  // Check for Axios error with status code
  if (isAxiosError(error) && error.response?.status) {
    return STATUS_MESSAGES[error.response.status] || fallback;
  }

  // Check for network/connection errors
  if (isAxiosError(error) && !error.response) {
    return 'Network error. Please check your connection.';
  }

  // Check for standard Error
  if (error instanceof Error) {
    return error.message || fallback;
  }

  // Check for string error
  if (typeof error === 'string') {
    return error;
  }

  return fallback;
};

/**
 * Extract HTTP status code from error
 */
export const getErrorStatusCode = (error: unknown): number | undefined => {
  if (isAxiosError(error)) {
    return error.response?.status;
  }
  return undefined;
};

/**
 * Check if error is a specific HTTP status
 */
export const isStatusError = (error: unknown, status: number): boolean => {
  return getErrorStatusCode(error) === status;
};

/**
 * Common status checks
 */
export const isUnauthorizedError = (error: unknown): boolean =>
  isStatusError(error, 401);
export const isForbiddenError = (error: unknown): boolean =>
  isStatusError(error, 403);
export const isNotFoundError = (error: unknown): boolean =>
  isStatusError(error, 404);
export const isValidationError = (error: unknown): boolean =>
  isStatusError(error, 422);
export const isConflictError = (error: unknown): boolean =>
  isStatusError(error, 409);
