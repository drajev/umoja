import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createSelectors } from './createSelectors';

/**
 * Loading state interface - data only
 */
interface LoadingState {
  loadingStates: Record<string, boolean>;
}

/**
 * Loading actions interface - all methods grouped together
 */
interface LoadingActions {
  isLoading: (key: string) => boolean;
  setLoading: (key: string, isLoading: boolean) => void;
  clearLoading: (key?: string) => void;
  hasAnyLoading: () => boolean;
  resetStore: () => void;
}

/**
 * Complete store interface
 */
interface LoadingStore extends LoadingState {
  actions: LoadingActions;
}

/**
 * Initial state - easily resettable
 */
const initialState: LoadingState = {
  loadingStates: {},
};

/**
 * Base store with all functionality
 */
const baseStore = create<LoadingStore>()(
  devtools(
    (set, get) => ({
      ...initialState,

      actions: {
        isLoading: key => get().loadingStates[key] ?? false,

        setLoading: (key, isLoading) =>
          set(
            state => ({
              loadingStates: {
                ...state.loadingStates,
                [key]: isLoading,
              },
            }),
            undefined,
            `setLoading:${key}`,
          ),

        clearLoading: key => {
          if (key) {
            set(
              state => {
                const newStates = { ...state.loadingStates };
                delete newStates[key];
                return { loadingStates: newStates };
              },
              undefined,
              `clearLoading:${key}`,
            );
          } else {
            set({ loadingStates: {} }, undefined, 'clearAllLoading');
          }
        },

        hasAnyLoading: () => Object.values(get().loadingStates).some(Boolean),

        resetStore: () => set(initialState, undefined, 'resetStore'),
      },
    }),
    { name: 'LoadingStore' },
  ),
);

/**
 * Loading store with auto-generated selectors.
 *
 * @example
 * // Access loading states
 * const loadingStates = useLoadingStore.use.loadingStates();
 *
 * // Access actions
 * const { isLoading, setLoading, hasAnyLoading } = useLoadingStore.use.actions();
 *
 * // Track async operation
 * actions.setLoading('fetch-users', true);
 * try {
 *   await fetchUsers();
 * } finally {
 *   actions.setLoading('fetch-users', false);
 * }
 *
 * // Check specific loading state
 * if (actions.isLoading('fetch-users')) { ... }
 */
export const useLoadingStore = createSelectors(baseStore);
