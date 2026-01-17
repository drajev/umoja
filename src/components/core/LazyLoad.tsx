import { type ReactNode, type RefObject } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Skeleton } from "@/components/ui/skeleton";
import { Activity } from "@/components/core/Activity";

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  preserveState?: boolean;
}

/**
 * Lazy load component that uses Intersection Observer to load content when it enters viewport.
 * Useful for lazy loading images, heavy components, or content below the fold.
 *
 * Usage:
 *   <LazyLoad fallback={<Skeleton />}>
 *     <HeavyComponent />
 *   </LazyLoad>
 */
export const LazyLoad = ({
  children,
  fallback = <Skeleton className="h-32 w-full" />,
  threshold = 0.1,
  rootMargin = "50px",
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
          <Activity mode={isIntersecting ? "visible" : "hidden"}>
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
