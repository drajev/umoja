import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { createSelectors } from './createSelectors';

/**
 * User interface for authenticated users
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

/**
 * Auth state interface - data only
 */
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

/**
 * Auth actions interface - all methods grouped together
 */
interface AuthActions {
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setCredentials: (user: User, token: string) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  logout: () => void;
  resetStore: () => void;
}

/**
 * Complete store interface
 */
interface AuthStore extends AuthState {
  actions: AuthActions;
}

/**
 * Initial state - easily resettable
 */
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

/**
 * Base store with all functionality
 */
const baseStore = create<AuthStore>()(
  devtools(
    persist(
      set => ({
        ...initialState,

        actions: {
          setUser: user => set({ user, isAuthenticated: !!user }),

          setToken: token => set({ token }),

          setCredentials: (user, token) =>
            set({
              user,
              token,
              isAuthenticated: true,
              error: null,
            }),

          setError: error => set({ error }),

          clearError: () => set({ error: null }),

          logout: () => set(initialState),

          resetStore: () => set(initialState),
        },
      }),
      {
        name: 'auth-storage',
        partialize: state => ({
          user: state.user,
          token: state.token,
          isAuthenticated: state.isAuthenticated,
        }),
      },
    ),
    { name: 'AuthStore' },
  ),
);

/**
 * Auth store with auto-generated selectors.
 *
 * @example
 * // Access state with individual selectors (optimized re-renders)
 * const user = useAuthStore.use.user();
 * const isAuthenticated = useAuthStore.use.isAuthenticated();
 *
 * // Access actions
 * const { setCredentials, logout } = useAuthStore.use.actions();
 *
 * // Login flow
 * actions.setCredentials(userData, tokenString);
 *
 * // Logout
 * actions.logout();
 */
export const useAuthStore = createSelectors(baseStore);
