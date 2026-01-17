import type { StoreApi, UseBoundStore } from 'zustand';

/**
 * Type helper that extracts the state type from a Zustand store and creates
 * a `use` object with individual selector hooks for each state property.
 *
 * @example
 * // Instead of:
 * const theme = useUIStore((s) => s.theme);
 *
 * // You can use:
 * const theme = useUIStore.use.theme();
 */
type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

/**
 * Wraps a Zustand store with auto-generated selector hooks.
 *
 * This utility creates a `.use` object on the store with individual hooks
 * for each state property, enabling cleaner and more performant state access.
 *
 * @param store - The Zustand store to wrap
 * @returns The store with added `.use` property containing selector hooks
 *
 * @example
 * // Store definition
 * const baseStore = create<UIState>()((set) => ({
 *   theme: 'light',
 *   actions: {
 *     toggleTheme: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
 *   },
 * }));
 *
 * export const useUIStore = createSelectors(baseStore);
 *
 * // Usage in components
 * const theme = useUIStore.use.theme();
 * const { toggleTheme } = useUIStore.use.actions();
 */
export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  store: S,
): WithSelectors<S> => {
  const storeWithSelectors = store as WithSelectors<typeof store>;

  storeWithSelectors.use = {} as WithSelectors<typeof store>['use'];

  for (const key of Object.keys(store.getState())) {
    (storeWithSelectors.use as Record<string, () => unknown>)[key] = () =>
      store(state => state[key as keyof typeof state]);
  }

  return storeWithSelectors;
};
