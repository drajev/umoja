import type { ReactNode } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { createSelectors } from "./createSelectors";

/**
 * UI state interface - data only, no methods
 */
interface UIState {
  sidebarOpen: boolean;
  theme: "light" | "dark";
  popupContent: ReactNode | null;
}

/**
 * UI actions interface - all methods grouped together
 */
interface UIActions {
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
  setPopup: (content: ReactNode) => void;
  clearPopup: () => void;
  resetStore: () => void;
}

/**
 * Complete store interface
 */
interface UIStore extends UIState {
  actions: UIActions;
}

/**
 * Initial state - easily resettable
 */
const initialState: UIState = {
  sidebarOpen: false,
  theme: "light",
  popupContent: null,
};

/**
 * Base store with all functionality
 */
const baseStore = create<UIStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        actions: {
          toggleSidebar: () =>
            set((state) => ({ sidebarOpen: !state.sidebarOpen })),

          setSidebarOpen: (open) => set({ sidebarOpen: open }),

          setTheme: (theme) => {
            document.documentElement.classList.toggle("dark", theme === "dark");
            set({ theme });
          },

          toggleTheme: () =>
            set((state) => {
              const newTheme = state.theme === "light" ? "dark" : "light";
              document.documentElement.classList.toggle(
                "dark",
                newTheme === "dark",
              );
              return { theme: newTheme };
            }),

          setPopup: (content) => set({ popupContent: content }),

          clearPopup: () => set({ popupContent: null }),

          resetStore: () => set(initialState),
        },
      }),
      {
        name: "ui-storage",
        partialize: (state) => ({
          sidebarOpen: state.sidebarOpen,
          theme: state.theme,
        }),
        onRehydrateStorage: () => (state) => {
          // Apply theme on rehydration
          if (state?.theme) {
            document.documentElement.classList.toggle(
              "dark",
              state.theme === "dark",
            );
          }
        },
      },
    ),
    { name: "UIStore" },
  ),
);

/**
 * UI store with auto-generated selectors.
 *
 * @example
 * // Access state with individual selectors (optimized re-renders)
 * const theme = useUIStore.use.theme();
 * const sidebarOpen = useUIStore.use.sidebarOpen();
 *
 * // Access actions
 * const { toggleTheme, setSidebarOpen } = useUIStore.use.actions();
 *
 * // Or use traditional selector
 * const { theme, actions } = useUIStore((s) => ({ theme: s.theme, actions: s.actions }));
 */
export const useUIStore = createSelectors(baseStore);
