/**
 * Routes configuration.
 * Centralized route definitions following the example project structure.
 *
 * Usage:
 *   import { routes } from '@/routes';
 *
 * To customize:
 * - Add new routes
 * - Add route guards
 * - Add route metadata
 */
export const routes = {
  home: '/',
  styleguide: '/styleguide',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
} as const;

export type Route = (typeof routes)[keyof typeof routes];
