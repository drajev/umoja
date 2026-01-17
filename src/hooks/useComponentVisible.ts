import { useEffect, useEffectEvent, useRef, useState } from 'react';

/**
 * Hook for detecting clicks outside a component.
 * Useful for dropdowns, modals, and popover components.
 *
 * Usage:
 *   const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
 *   <div ref={ref}>{isComponentVisible && <Dropdown />}</div>
 *
 * @param initialIsVisible - Initial visibility state
 * @param isDoubleClick - Use double-click instead of single click
 * @returns Object with ref, isComponentVisible state, and setIsComponentVisible setter
 */
export const useComponentVisible = (
  initialIsVisible: boolean,
  isDoubleClick?: boolean,
) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useEffectEvent((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  });

  useEffect(() => {
    const eventType = isDoubleClick ? 'dblclick' : 'click';
    document.addEventListener(eventType, handleClickOutside, true);
    return () => {
      document.removeEventListener(eventType, handleClickOutside, true);
    };
  }, [isDoubleClick]);

  return { ref, isComponentVisible, setIsComponentVisible };
};
