/**
 * Loading wrapper component that displays Skeleton or Spinner based on loading state.
 * Can be used with Zustand loading store or local loading state.
 *
 * Usage:
 *   <LoadingWrapper isLoading={isLoading} useSkeleton>
 *     <YourContent />
 *   </LoadingWrapper>
 */
import type { ReactNode } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';
import { useLoadingStore } from '@/stores';

interface LoadingWrapperProps {
  children: ReactNode;
  isLoading?: boolean;
  loadingKey?: string;
  useSkeleton?: boolean;
  skeletonCount?: number;
  className?: string;
  spinnerSize?: 'sm' | 'md' | 'lg';
  showSpinner?: boolean;
}

export const LoadingWrapper = ({
  children,
  isLoading: localLoading,
  loadingKey,
  useSkeleton = false,
  skeletonCount = 1,
  className,
  spinnerSize = 'md',
  showSpinner = true,
}: LoadingWrapperProps) => {
  // Use loading key from store if provided, otherwise use local loading state
  const { isLoading: checkIsLoading } = useLoadingStore.use.actions();
  const storeIsLoading = loadingKey ? checkIsLoading(loadingKey) : false;
  const isLoading = loadingKey ? storeIsLoading : (localLoading ?? false);

  if (isLoading) {
    if (useSkeleton) {
      return (
        <div className={cn('space-y-2', className)}>
          {Array.from({ length: skeletonCount }, (_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      );
    }

    if (showSpinner) {
      const sizeClasses = {
        sm: 'size-4',
        md: 'size-6',
        lg: 'size-8',
      };
      return (
        <div className={cn('flex items-center justify-center p-8', className)}>
          <Spinner className={sizeClasses[spinnerSize]} />
        </div>
      );
    }

    return null;
  }

  return <>{children}</>;
};
