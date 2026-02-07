/**
 * Strategies API - React Query hooks for strategy CRUD.
 */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/constants/api';
import axiosInstance from '@/lib/axiosInstance';
import { useToastStore } from '@/stores';
import type {
  CreateStrategyDto,
  Strategy,
  UpdateStrategyDto,
} from '@/types/api';
import { getErrorMessage } from '@/utils';

// ============================================================================
// API functions
// ============================================================================

const fetchStrategies = async (): Promise<Strategy[]> => {
  const { data } = await axiosInstance.get<Strategy[]>(api.strategies);
  return data;
};

const fetchStrategy = async (id: string): Promise<Strategy> => {
  const { data } = await axiosInstance.get<Strategy>(api.strategy(id));
  return data;
};

const createStrategy = async (dto: CreateStrategyDto): Promise<Strategy> => {
  const { data } = await axiosInstance.post<Strategy>(api.strategies, dto);
  return data;
};

const updateStrategy = async ({
  id,
  dto,
}: {
  id: string;
  dto: UpdateStrategyDto;
}): Promise<Strategy> => {
  const { data } = await axiosInstance.put<Strategy>(api.strategy(id), dto);
  return data;
};

const deleteStrategy = async (id: string): Promise<void> => {
  await axiosInstance.delete(api.strategy(id));
};

// ============================================================================
// Query keys
// ============================================================================

export const strategyKeys = {
  all: ['strategies'] as const,
  list: () => [...strategyKeys.all, 'list'] as const,
  detail: (id: string) => [...strategyKeys.all, 'detail', id] as const,
};

// ============================================================================
// Hooks
// ============================================================================

export const useStrategies = () => {
  return useQuery({
    queryKey: strategyKeys.list(),
    queryFn: fetchStrategies,
  });
};

export const useStrategy = (id: string | null) => {
  return useQuery({
    queryKey: strategyKeys.detail(id ?? ''),
    queryFn: () => fetchStrategy(id as string),
    enabled: !!id,
  });
};

export const useCreateStrategy = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: createStrategy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: strategyKeys.all });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Strategy created');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};

export const useUpdateStrategy = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: updateStrategy,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: strategyKeys.all });
      queryClient.invalidateQueries({
        queryKey: strategyKeys.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Strategy updated');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};

export const useDeleteStrategy = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: deleteStrategy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: strategyKeys.all });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Strategy deleted');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};
