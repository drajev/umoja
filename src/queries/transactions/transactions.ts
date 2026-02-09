/**
 * Transactions API - React Query hooks for transaction CRUD.
 */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/constants/api';
import axiosInstance from '@/lib/axiosInstance';
import { useToastStore } from '@/stores';
import type {
  CreateTransactionDto,
  Transaction,
  TransactionsQueryParams,
  UpdateTransactionDto,
} from '@/types/api';
import { getErrorMessage } from '@/utils';

// ============================================================================
// API functions
// ============================================================================

const fetchTransactions = async (
  params?: TransactionsQueryParams,
): Promise<Transaction[]> => {
  const searchParams = new URLSearchParams();
  if (params?.accountId) searchParams.set('accountId', params.accountId);
  if (params?.limit != null) searchParams.set('limit', String(params.limit));
  if (params?.offset != null) searchParams.set('offset', String(params.offset));
  const query = searchParams.toString();
  const url = query ? `${api.transactions}?${query}` : api.transactions;
  const { data } = await axiosInstance.get<Transaction[]>(url);
  return data;
};

const fetchTransaction = async (id: string): Promise<Transaction> => {
  const { data } = await axiosInstance.get<Transaction>(api.transaction(id));
  return data;
};

const createTransaction = async (
  dto: CreateTransactionDto,
): Promise<Transaction> => {
  const { data } = await axiosInstance.post<Transaction>(api.transactions, dto);
  return data;
};

const updateTransaction = async ({
  id,
  dto,
}: {
  id: string;
  dto: UpdateTransactionDto;
}): Promise<Transaction> => {
  const { data } = await axiosInstance.put<Transaction>(
    api.transaction(id),
    dto,
  );
  return data;
};

const deleteTransaction = async (id: string): Promise<void> => {
  await axiosInstance.delete(api.transaction(id));
};

// ============================================================================
// Query keys
// ============================================================================

export const transactionKeys = {
  all: ['transactions'] as const,
  list: (params?: TransactionsQueryParams) =>
    params === undefined
      ? (['transactions', 'list'] as const)
      : ([...transactionKeys.all, 'list', params] as const),
  detail: (id: string) => [...transactionKeys.all, 'detail', id] as const,
};

// ============================================================================
// Hooks
// ============================================================================

export const useTransactions = (params?: TransactionsQueryParams) => {
  return useQuery({
    queryKey: transactionKeys.list(params),
    queryFn: () => fetchTransactions(params),
  });
};

export const useTransaction = (id: string | null) => {
  return useQuery({
    queryKey: transactionKeys.detail(id ?? ''),
    queryFn: () => fetchTransaction(id as string),
    enabled: !!id,
  });
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: createTransaction,
    onSuccess: data => {
      queryClient.setQueryData<Transaction[]>(transactionKeys.list(), prev =>
        prev ? [...prev, data] : [data],
      );
      void queryClient.invalidateQueries({ queryKey: ['accounts'] });
      void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Transaction created');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};

export const useUpdateTransaction = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: updateTransaction,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: transactionKeys.all });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Transaction updated');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: deleteTransaction,
    onSuccess: (_, id) => {
      queryClient.setQueryData<Transaction[]>(transactionKeys.list(), prev =>
        prev ? prev.filter(t => t.id !== id) : [],
      );
      void queryClient.invalidateQueries({ queryKey: ['accounts'] });
      void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      success('Transaction deleted');
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};
