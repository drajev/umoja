/**
 * Zustand store for managing global loading states.
 * Provides a centralized way to manage loading states across the application.
 *
 * Usage:
 *   const { isLoading, setLoading } = useLoadingStore();
 *   setLoading('fetching-data', true);
 *   // ... async operation
 *   setLoading('fetching-data', false);
 */
import { create } from 'zustand';

interface LoadingState {
  [key: string]: boolean;
}

interface LoadingStore {
  loadingStates: LoadingState;
  isLoading: (key: string) => boolean;
  setLoading: (key: string, isLoading: boolean) => void;
  clearLoading: (key?: string) => void;
  hasAnyLoading: () => boolean;
}

export const useLoadingStore = create<LoadingStore>((set, get) => ({
  loadingStates: {},

  isLoading: (key: string) => {
    return get().loadingStates[key] ?? false;
  },

  setLoading: (key: string, isLoading: boolean) => {
    set((state) => ({
      loadingStates: {
        ...state.loadingStates,
        [key]: isLoading,
      },
    }));
  },

  clearLoading: (key?: string) => {
    if (key) {
      set((state) => {
        const newStates = { ...state.loadingStates };
        delete newStates[key];
        return { loadingStates: newStates };
      });
    } else {
      set({ loadingStates: {} });
    }
  },

  hasAnyLoading: () => {
    const states = get().loadingStates;
    return Object.values(states).some((isLoading) => isLoading);
  },
}));
