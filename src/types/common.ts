/**
 * Common TypeScript types used throughout the application.
 *
 * To customize:
 * - Add more shared types
 * - Add utility types
 * - Add type guards
 */

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  pageCount: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export type ApiResponse<T> = {
  data: T;
  message?: string;
  success: boolean;
};

export type ApiError = {
  message: string;
  code?: string;
  details?: unknown;
};
