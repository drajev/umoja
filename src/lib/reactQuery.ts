/**
 * React Query configuration.
 * Centralized QueryClient setup with default options.
 *
 * Usage:
 *   import { queryClient } from '@/lib/reactQuery';
 *   <QueryClientProvider client={queryClient}>
 *
 * To customize:
 * - Adjust default query options
 * - Add global error handling
 * - Configure cache settings
 */
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
});
