/**
 * Breakpoints matching Tailwind default screens.
 * Single source of truth for JS media queries (e.g. useIsMobile).
 * Keep in sync with tailwind.config.ts if you customize theme.extend.screens.
 */
export const BREAKPOINTS_PX = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/** Mobile breakpoint: matches Tailwind `md` */
export const MOBILE_BREAKPOINT_PX = BREAKPOINTS_PX.md;
