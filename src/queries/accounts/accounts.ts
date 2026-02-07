/**
 * Accounts API - React Query hooks for account CRUD.
 */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/constants/api';
import axiosInstance from '@/lib/axiosInstance';
import { useToastStore } from '@/stores';
import type { Account, CreateAccountDto, UpdateAccountDto } from '@/types/api';
import { getErrorMessage } from '@/utils';

// ============================================================================
// API functions
// ============================================================================

const fetchAccounts = async (): Promise<Account[]> => {
  const { data } = await axiosInstance.get<Account[]>(api.accounts);
  return data;
};

const fetchAccount = async (id: string): Promise<Account> => {
  const { data } = await axiosInstance.get<Account>(api.account(id));
  return data;
};

const createAccount = async (dto: CreateAccountDto): Promise<Account> => {
  const { data } = await axiosInstance.post<Account>(api.accounts, dto);
  return data;
};

const updateAccount = async ({
  id,
  dto,
}: {
  id: string;
  dto: UpdateAccountDto;
}): Promise<Account> => {
  const { data } = await axiosInstance.put<Account>(api.account(id), dto);
  return data;
};

const deleteAccount = async (id: string): Promise<void> => {
  await axiosInstance.delete(api.account(id));
};

// ============================================================================
// Query keys
// ============================================================================

export const accountKeys = {
  all: ['accounts'] as const,
  list: () => [...accountKeys.all, 'list'] as const,
  detail: (id: string) => [...accountKeys.all, 'detail', id] as const,
};

// ============================================================================
// Hooks
// ============================================================================

export const useAccounts = () => {
  return useQuery({
    queryKey: accountKeys.list(),
    queryFn: fetchAccounts,
  });
};

export const useAccount = (id: string | null) => {
  return useQuery({
    queryKey: accountKeys.detail(id ?? ''),
    queryFn: () => fetchAccount(id as string),
    enabled: !!id,
  });
};

export const useCreateAccount = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: createAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: accountKeys.all });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Account created');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};

export const useUpdateAccount = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: updateAccount,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: accountKeys.all });
      queryClient.invalidateQueries({
        queryKey: accountKeys.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Account updated');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: accountKeys.all });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Account deleted');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};
