import { useCallback, useRef, useEffect, useEffectEvent } from "react";
import { debounce } from "@/utils/debounce";

interface UseDebounceProps<T extends (...args: never[]) => unknown> {
  callback: T;
  delay?: number;
}

/**
 * React hook for debouncing function calls.
 * Wraps the debounce utility for use in React components.
 *
 * Usage:
 *   const { debouncedCallback } = useDebounce({
 *     callback: (value: string) => console.log(value),
 *     delay: 300,
 *   });
 *   debouncedCallback('test');
 *
 * @param callback - Function to debounce
 * @param delay - Delay in milliseconds (default: 300)
 * @returns Object with debouncedCallback function
 */
export const useDebounce = <T extends (...args: never[]) => unknown>({
  callback,
  delay = 300,
}: UseDebounceProps<T>) => {
  const debouncedFnRef = useRef<ReturnType<typeof debounce<T>> | undefined>(
    undefined,
  );

  const stableCallback = useEffectEvent((...args: Parameters<T>) => {
    callback(...args);
  });

  useEffect(() => {
    debouncedFnRef.current = debounce((...args: Parameters<T>) => {
      stableCallback(...args);
    }, delay);

    return () => {
      if (debouncedFnRef.current) {
        debouncedFnRef.current.cancel?.();
      }
    };
  }, [delay, stableCallback]);

  const debouncedCallback = useCallback((...args: Parameters<T>) => {
    debouncedFnRef.current?.(...args);
  }, []);

  return { debouncedCallback };
};
