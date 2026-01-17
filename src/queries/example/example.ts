import { useQuery } from '@tanstack/react-query';

/**
 * Example query file demonstrating TanStack Query patterns.
 * Shows how to structure API queries following the example project patterns.
 *
 * Usage:
 *   const { data, isLoading } = useExampleQuery();
 *
 * To customize:
 * - Replace with your actual API endpoints
 * - Add more query hooks
 * - Add mutation hooks
 */
export const EXAMPLE_QUERY_KEY = 'example';

interface ExampleData {
  id: string;
  name: string;
}

// Example API function (replace with actual API call)
const fetchExampleData = async (): Promise<ExampleData> => {
  // Replace with actual API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: '1', name: 'Example' });
    }, 1000);
  });
};

export const useExampleQuery = () => {
  return useQuery({
    queryKey: [EXAMPLE_QUERY_KEY],
    queryFn: async () => {
      try {
        return await fetchExampleData();
      } catch (error) {
        console.error('Failed to fetch example data:', error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
