import type { ReactNode, RefObject } from 'react';
import { Activity } from '@/components/core/Activity';
import { Skeleton } from '@/components/ui/skeleton';
import { useIntersectionObserver } from '@/hooks';

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  preserveState?: boolean;
}

export const LazyLoad = ({
  children,
  fallback = <Skeleton className="h-32 w-full" />,
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  className,
  preserveState = false,
}: LazyLoadProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={className}>
      {preserveState ? (
        <>
          <Activity mode={isIntersecting ? 'visible' : 'hidden'}>
            {children}
          </Activity>
          {!isIntersecting && fallback}
        </>
      ) : isIntersecting ? (
        children
      ) : (
        fallback
      )}
    </div>
  );
};
