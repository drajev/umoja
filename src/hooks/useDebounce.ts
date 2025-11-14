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
import { useCallback, useRef, useEffect } from 'react';
import { debounce } from '@/utils/debounce';

interface UseDebounceProps<T extends (...args: never[]) => unknown> {
  callback: T;
  delay?: number;
}

export const useDebounce = <T extends (...args: never[]) => unknown>({
  callback,
  delay = 300,
}: UseDebounceProps<T>) => {
  const debouncedFnRef = useRef<ReturnType<typeof debounce<T>> | undefined>(undefined);

  useEffect(() => {
    debouncedFnRef.current = debounce((...args: Parameters<T>) => {
      callback(...args);
    }, delay);

    return () => {
      if (debouncedFnRef.current) {
        debouncedFnRef.current.cancel?.();
      }
    };
  }, [callback, delay]);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      debouncedFnRef.current?.(...args);
    },
    [],
  );

  return { debouncedCallback };
};
