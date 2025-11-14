/**
 * Application constants and environment variables.
 * Centralized configuration values.
 *
 * Usage:
 *   import { API_URL } from '@/utils/constants';
 *
 * To customize:
 * - Add more environment variables
 * - Add application constants
 * - Add configuration values
 */

// Environment Variables
export const API_URL = import.meta.env.VITE_API_URL || '';
export const ENV = import.meta.env.VITE_ENV || 'development';
export const WC_API_KEY = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '';

// Application Constants
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// Time filters (example from project)
export const timeFilters = ['1h', '24h', '7d', '1m', 'All'] as const;
