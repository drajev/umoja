/**
 * Unit tests for API utility functions.
 */
import { describe, expect, it } from 'vitest';
import {
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
} from '@/utils/api';

describe('API Utils', () => {
  // ===========================================================================
  // isAxiosError
  // ===========================================================================

  describe('isAxiosError', () => {
    it('should return true for axios error', () => {
      const axiosError = {
        isAxiosError: true,
        response: { status: 400 },
      };
      expect(isAxiosError(axiosError)).toBe(true);
    });

    it('should return false for regular error', () => {
      const error = new Error('Regular error');
      expect(isAxiosError(error)).toBe(false);
    });

    it('should return false for null', () => {
      expect(isAxiosError(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isAxiosError(undefined)).toBe(false);
    });

    it('should return false for object without isAxiosError', () => {
      const obj = { response: { status: 400 } };
      expect(isAxiosError(obj)).toBe(false);
    });
  });

  // ===========================================================================
  // hasApiErrorResponse
  // ===========================================================================

  describe('hasApiErrorResponse', () => {
    it('should return true for axios error with API response', () => {
      const error = {
        isAxiosError: true,
        response: {
          status: 400,
          data: { message: 'Bad request', statusCode: 400 },
        },
      };
      expect(hasApiErrorResponse(error)).toBe(true);
    });

    it('should return false for axios error without message', () => {
      const error = {
        isAxiosError: true,
        response: { status: 400, data: { statusCode: 400 } },
      };
      expect(hasApiErrorResponse(error)).toBe(false);
    });

    it('should return false for non-axios error', () => {
      const error = new Error('Regular error');
      expect(hasApiErrorResponse(error)).toBe(false);
    });
  });

  // ===========================================================================
  // getErrorMessage
  // ===========================================================================

  describe('getErrorMessage', () => {
    it('should extract message from API error response', () => {
      const error = {
        isAxiosError: true,
        response: {
          status: 400,
          data: { message: 'Email already exists', statusCode: 400 },
        },
      };
      expect(getErrorMessage(error)).toBe('Email already exists');
    });

    it('should return status-based message for axios error without API message', () => {
      const error = {
        isAxiosError: true,
        response: { status: 401, data: {} },
      };
      expect(getErrorMessage(error)).toBe('Please log in to continue.');
    });

    it('should return network error for axios error without response', () => {
      const error = {
        isAxiosError: true,
        response: undefined,
      };
      expect(getErrorMessage(error)).toBe(
        'Network error. Please check your connection.',
      );
    });

    it('should return message from standard Error', () => {
      const error = new Error('Something went wrong');
      expect(getErrorMessage(error)).toBe('Something went wrong');
    });

    it('should return string error directly', () => {
      expect(getErrorMessage('Direct error message')).toBe(
        'Direct error message',
      );
    });

    it('should return fallback for unknown error type', () => {
      expect(getErrorMessage({})).toBe(
        'An unexpected error occurred. Please try again.',
      );
    });

    it('should return custom fallback when provided', () => {
      expect(getErrorMessage({}, 'Custom fallback')).toBe('Custom fallback');
    });

    it('should handle 403 status', () => {
      const error = {
        isAxiosError: true,
        response: { status: 403, data: {} },
      };
      expect(getErrorMessage(error)).toBe(
        'You do not have permission to perform this action.',
      );
    });

    it('should handle 404 status', () => {
      const error = {
        isAxiosError: true,
        response: { status: 404, data: {} },
      };
      expect(getErrorMessage(error)).toBe(
        'The requested resource was not found.',
      );
    });

    it('should handle 500 status', () => {
      const error = {
        isAxiosError: true,
        response: { status: 500, data: {} },
      };
      expect(getErrorMessage(error)).toBe(
        'Server error. Please try again later.',
      );
    });
  });

  // ===========================================================================
  // getErrorStatusCode
  // ===========================================================================

  describe('getErrorStatusCode', () => {
    it('should extract status code from axios error', () => {
      const error = {
        isAxiosError: true,
        response: { status: 404 },
      };
      expect(getErrorStatusCode(error)).toBe(404);
    });

    it('should return undefined for non-axios error', () => {
      const error = new Error('Regular error');
      expect(getErrorStatusCode(error)).toBeUndefined();
    });

    it('should return undefined for axios error without response', () => {
      const error = {
        isAxiosError: true,
        response: undefined,
      };
      expect(getErrorStatusCode(error)).toBeUndefined();
    });
  });

  // ===========================================================================
  // isStatusError helpers
  // ===========================================================================

  describe('isStatusError', () => {
    it('should return true for matching status', () => {
      const error = {
        isAxiosError: true,
        response: { status: 400 },
      };
      expect(isStatusError(error, 400)).toBe(true);
    });

    it('should return false for non-matching status', () => {
      const error = {
        isAxiosError: true,
        response: { status: 400 },
      };
      expect(isStatusError(error, 401)).toBe(false);
    });
  });

  describe('isUnauthorizedError', () => {
    it('should return true for 401', () => {
      const error = { isAxiosError: true, response: { status: 401 } };
      expect(isUnauthorizedError(error)).toBe(true);
    });

    it('should return false for other status', () => {
      const error = { isAxiosError: true, response: { status: 403 } };
      expect(isUnauthorizedError(error)).toBe(false);
    });
  });

  describe('isForbiddenError', () => {
    it('should return true for 403', () => {
      const error = { isAxiosError: true, response: { status: 403 } };
      expect(isForbiddenError(error)).toBe(true);
    });
  });

  describe('isNotFoundError', () => {
    it('should return true for 404', () => {
      const error = { isAxiosError: true, response: { status: 404 } };
      expect(isNotFoundError(error)).toBe(true);
    });
  });

  describe('isValidationError', () => {
    it('should return true for 422', () => {
      const error = { isAxiosError: true, response: { status: 422 } };
      expect(isValidationError(error)).toBe(true);
    });
  });

  describe('isConflictError', () => {
    it('should return true for 409', () => {
      const error = { isAxiosError: true, response: { status: 409 } };
      expect(isConflictError(error)).toBe(true);
    });
  });
});
