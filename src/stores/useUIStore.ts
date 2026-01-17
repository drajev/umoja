import type { ReactNode } from "react";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

/**
 * UI state store using Zustand with persistence and devtools.
 * Manages global UI state like sidebar, theme, and popups.
 *
 * Usage:
 *   const { sidebarOpen, toggleSidebar, theme, setTheme } = useUIStore();
 *
 * To customize:
 * - Add more UI state properties
 * - Modify persistence key
 * - Add middleware for additional functionality
 */
interface UIState {
  // Sidebar state
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;

  // Theme state
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;

  // Popup state (similar to modal but following example project pattern)
  popupContent: ReactNode | null;
  setPopup: (content: ReactNode) => void;
  clearPopup: () => void;
}

/**
 * UI store with persistence to localStorage and devtools support.
 * Persisted state: sidebarOpen, theme
 * Non-persisted state: popupContent
 */
export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set) => ({
        // Sidebar
        sidebarOpen: false,
        toggleSidebar: () =>
          set((state) => ({ sidebarOpen: !state.sidebarOpen })),
        setSidebarOpen: (open) => set({ sidebarOpen: open }),

        // Theme
        theme: "light",
        setTheme: (theme) => set({ theme }),
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          })),

        // Popup (replaces modal for consistency with example project)
        popupContent: null,
        setPopup: (content) => set({ popupContent: content }),
        clearPopup: () => set({ popupContent: null }),
      }),
      {
        name: "ui-storage",
        partialize: (state) => ({
          sidebarOpen: state.sidebarOpen,
          theme: state.theme,
        }),
      },
    ),
    { name: "UIStore" },
  ),
);
