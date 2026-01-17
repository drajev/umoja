import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createSelectors } from "./createSelectors";

/**
 * Breakpoint constants - easily adjustable
 */
const BREAKPOINTS = {
  xxl: 1440,
  xl: 1230,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 375,
} as const;

/**
 * Window size state interface
 */
interface WindowSize {
  width: number;
  height: number;
  isXxlMobile: boolean; // <= 1440px
  isXlMobile: boolean; // <= 1230px
  isLgMobile: boolean; // <= 992px
  isMdMobile: boolean; // <= 768px
  isSmMobile: boolean; // <= 576px
  isXsMobile: boolean; // <= 375px
}

/**
 * Window store state interface - data only
 */
interface WindowState {
  windowSize: WindowSize;
}

/**
 * Window actions interface - all methods grouped together
 */
interface WindowActions {
  updateSize: () => void;
  resetStore: () => void;
}

/**
 * Complete store interface
 */
interface WindowStore extends WindowState {
  actions: WindowActions;
}

/**
 * Calculate window size with breakpoint flags
 */
const calculateWindowSize = (): WindowSize => {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
      isXxlMobile: false,
      isXlMobile: false,
      isLgMobile: false,
      isMdMobile: false,
      isSmMobile: false,
      isXsMobile: false,
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    isXxlMobile: width <= BREAKPOINTS.xxl,
    isXlMobile: width <= BREAKPOINTS.xl,
    isLgMobile: width <= BREAKPOINTS.lg,
    isMdMobile: width <= BREAKPOINTS.md,
    isSmMobile: width <= BREAKPOINTS.sm,
    isXsMobile: width <= BREAKPOINTS.xs,
  };
};

/**
 * Initial state
 */
const initialState: WindowState = {
  windowSize: calculateWindowSize(),
};

/**
 * Base store with all functionality
 */
const baseStore = create<WindowStore>()(
  devtools(
    (set) => ({
      ...initialState,

      actions: {
        updateSize: () => set({ windowSize: calculateWindowSize() }),

        resetStore: () => set(initialState),
      },
    }),
    { name: "WindowStore" },
  ),
);

/**
 * Window store with auto-generated selectors.
 *
 * @example
 * // Access window size state
 * const windowSize = useWindowStore.use.windowSize();
 *
 * // Use breakpoint flags
 * if (windowSize.isMdMobile) {
 *   // Render mobile layout
 * }
 *
 * // Access actions (rarely needed - listener handles updates)
 * const { updateSize } = useWindowStore.use.actions();
 */
export const useWindowStore = createSelectors(baseStore);

// ============================================================================
// Resize Listener Setup (Module-level, guarded for HMR)
// ============================================================================

let isListenerAttached = false;
let resizeHandler: (() => void) | null = null;

const attachResizeListener = () => {
  if (isListenerAttached || typeof window === "undefined") return;

  resizeHandler = () => {
    useWindowStore.getState().actions.updateSize();
  };

  window.addEventListener("resize", resizeHandler);
  resizeHandler(); // Initial call
  isListenerAttached = true;
};

const detachResizeListener = () => {
  if (!isListenerAttached || !resizeHandler || typeof window === "undefined")
    return;

  window.removeEventListener("resize", resizeHandler);
  isListenerAttached = false;
  resizeHandler = null;
};

// Auto-attach on module load
attachResizeListener();

// HMR cleanup
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    detachResizeListener();
  });
}
