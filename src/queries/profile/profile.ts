/**
 * Profile API - wallet linking and profile updates.
 */
import { useMutation } from '@tanstack/react-query';
import { api } from '@/constants/api';
import axiosInstance from '@/lib/axiosInstance';
import { t } from '@/lib/i18n';
import { useAuthStore, useToastStore } from '@/stores';
import type { User } from '@/stores/useAuthStore';
import { getErrorMessage } from '@/utils';

// ============================================================================
// API
// ============================================================================

const addWalletToProfile = async (address: string): Promise<User> => {
  const { data } = await axiosInstance.post<User>(api.users.wallet, {
    address,
  });
  return data;
};

// ============================================================================
// Hooks
// ============================================================================

export const useAddWalletToProfile = () => {
  const { setUser } = useAuthStore.use.actions();
  const { success, error: showError } = useToastStore.use.actions();

  return useMutation({
    mutationFn: addWalletToProfile,
    onSuccess: user => {
      setUser(user);
      success(t('profile.walletAdded'));
    },
    onError: err => {
      showError(getErrorMessage(err));
    },
  });
};
