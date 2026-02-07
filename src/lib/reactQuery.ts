/**
 * React Query configuration.
 * Centralized QueryClient setup with default options and global error handling.
 */
import { QueryCache, QueryClient } from '@tanstack/react-query';
import { useToastStore } from '@/stores';
import { getErrorMessage, isUnauthorizedError } from '@/utils';

const queryCache = new QueryCache({
  onError: (error, query) => {
    if (query.meta?.skipGlobalErrorHandler) return;
    // 401 already handled by axios interceptor (logout + redirect + toast)
    if (isUnauthorizedError(error)) return;
    const message = getErrorMessage(error);
    useToastStore.getState().actions.error(message);
  },
});

export const queryClient = new QueryClient({
  queryCache,
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
