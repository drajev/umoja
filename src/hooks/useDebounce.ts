import { useCallback, useEffect, useEffectEvent, useRef } from 'react';
import { debounce } from '@/utils/debounce';

interface UseDebounceProps<T extends (...args: never[]) => unknown> {
  callback: T;
  delay?: number;
}

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
  }, [delay]);

  const debouncedCallback = useCallback((...args: Parameters<T>) => {
    debouncedFnRef.current?.(...args);
  }, []);

  return { debouncedCallback };
};
