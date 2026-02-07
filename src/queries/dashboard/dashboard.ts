/**
 * Dashboard API - React Query hook for dashboard summary.
 */
import { useQuery } from '@tanstack/react-query';
import { api } from '@/constants/api';
import axiosInstance from '@/lib/axiosInstance';
import type { DashboardSummary } from '@/types/api';

// ============================================================================
// Query keys
// ============================================================================

export const dashboardKeys = {
  all: ['dashboard'] as const,
  summary: () => [...dashboardKeys.all, 'summary'] as const,
};

// ============================================================================
// Hooks
// ============================================================================

const fetchDashboardSummary = async (): Promise<DashboardSummary> => {
  const { data } = await axiosInstance.get<DashboardSummary>(api.dashboard);
  return data;
};

export const useDashboardSummary = () => {
  return useQuery({
    queryKey: dashboardKeys.summary(),
    queryFn: fetchDashboardSummary,
  });
};
