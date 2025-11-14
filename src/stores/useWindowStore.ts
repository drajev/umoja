/**
 * Window size store for responsive breakpoints.
 * Tracks window dimensions and provides mobile breakpoint flags.
 *
 * Usage:
 *   const { windowSize } = useWindowStore();
 *   if (windowSize.isMdMobile) { ... }
 *
 * To customize:
 * - Adjust breakpoint values
 * - Add more breakpoints
 * - Add orientation tracking
 */
import { create } from 'zustand';

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

interface WindowStore {
  windowSize: WindowSize;
  setWindowSize: (size: WindowSize) => void;
}

const getInitialSize = (): WindowSize => {
  if (typeof window === 'undefined') {
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
  return {
    width,
    height: window.innerHeight,
    isXxlMobile: width <= 1440,
    isXlMobile: width <= 1230,
    isLgMobile: width <= 992,
    isMdMobile: width <= 768,
    isSmMobile: width <= 576,
    isXsMobile: width <= 375,
  };
};

export const useWindowStore = create<WindowStore>((set) => ({
  windowSize: getInitialSize(),
  setWindowSize: (size) => set({ windowSize: size }),
}));

// Initialize window size and add resize listener
if (typeof window !== 'undefined') {
  const handleResize = () => {
    const width = window.innerWidth;
    useWindowStore.getState().setWindowSize({
      width,
      height: window.innerHeight,
      isXxlMobile: width <= 1440,
      isXlMobile: width <= 1230,
      isLgMobile: width <= 992,
      isMdMobile: width <= 768,
      isSmMobile: width <= 576,
      isXsMobile: width <= 375,
    });
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // Initial call

  // Cleanup on unload
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', handleResize);
  });
}
