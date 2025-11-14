/**
 * Lazy load component that uses Intersection Observer to load content when it enters viewport.
 * Useful for lazy loading images, heavy components, or content below the fold.
 *
 * Usage:
 *   <LazyLoad fallback={<Skeleton />}>
 *     <HeavyComponent />
 *   </LazyLoad>
 */
import { type ReactNode } from 'react';
import * as React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
}

export const LazyLoad = ({
  children,
  fallback = <Skeleton className="h-32 w-full" />,
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  className,
}: LazyLoadProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {isIntersecting ? children : fallback}
    </div>
  );
};
