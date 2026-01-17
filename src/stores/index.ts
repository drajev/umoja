/**
 * Barrel export for all Zustand stores.
 * Import stores from '@/stores' for cleaner imports.
 *
 * @example
 * import { useUIStore, useAuthStore, useToastStore } from '@/stores';
 *
 * // With auto-generated selectors
 * const theme = useUIStore.use.theme();
 * const { toggleTheme } = useUIStore.use.actions();
 */

export { createSelectors } from './createSelectors';
export { type User, useAuthStore } from './useAuthStore';
export { useLanguageStore } from './useLanguageStore';
export { useLoadingStore } from './useLoadingStore';
export { useToastStore } from './useToastStore';
export { useUIStore } from './useUIStore';
export { useWindowStore } from './useWindowStore';
