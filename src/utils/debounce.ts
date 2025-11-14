/**
 * Debounce utility function.
 * Delays function execution until after a specified wait time has passed.
 *
 * Usage:
 *   const debouncedFn = debounce((value: string) => {
 *     console.log(value);
 *   }, 300);
 *   debouncedFn('test');
 *   debouncedFn.cancel(); // Cancel pending execution
 *
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function with cancel method
 */
interface DebouncedFunction<T extends (...args: never[]) => unknown> {
  (...args: Parameters<T>): void;
  cancel: () => void;
}

export const debounce = <T extends (...args: never[]) => unknown>(
  func: T,
  wait: number,
): DebouncedFunction<T> => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const debouncedFn = (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };

  debouncedFn.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  };

  return debouncedFn;
};
