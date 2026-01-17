import {
  type RefObject,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from 'react';

/**
 * Hook for observing element intersection with viewport.
 * Useful for lazy loading images, components, or triggering animations.
 *
 * Usage:
 *   const { ref, isIntersecting } = useIntersectionObserver({
 *     threshold: 0.1,
 *     rootMargin: '50px',
 *   });
 *   <div ref={ref}>{isIntersecting && <LazyComponent />}</div>
 *
 * @param options - IntersectionObserver options
 * @returns Object with ref and isIntersecting state
 */
interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {},
) => {
  const {
    threshold = 0,
    rootMargin = '0px',
    root = null,
    triggerOnce = false,
  } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const handleIntersection = useEffectEvent(
    (entry: IntersectionObserverEntry) => {
      const isCurrentlyIntersecting = entry.isIntersecting;
      setIsIntersecting(isCurrentlyIntersecting);

      if (isCurrentlyIntersecting && triggerOnce) {
        setHasIntersected(true);
      }
    },
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If triggerOnce and already intersected, don't observe again
    if (triggerOnce && hasIntersected) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        handleIntersection(entry);
        if (entry.isIntersecting && triggerOnce) {
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
        root,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, triggerOnce, hasIntersected]);

  return { ref: elementRef as RefObject<HTMLElement>, isIntersecting };
};
