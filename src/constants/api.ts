const API_PREFIX = '/api';

export const api = {
  users: {
    me: `${API_PREFIX}/users/me`,
    wallet: `${API_PREFIX}/users/me/wallet`,
  },
  auth: {
    login: `${API_PREFIX}/auth/login`,
    register: `${API_PREFIX}/auth/register`,
    forgottenPassword: `${API_PREFIX}/auth/forgotten-password`,
    passwordReset: `${API_PREFIX}/auth/password-reset`,
    logout: `${API_PREFIX}/auth/logout`,
  },
  accounts: `${API_PREFIX}/accounts`,
  account: (id: string) => `${API_PREFIX}/accounts/${id}`,
  transactions: `${API_PREFIX}/transactions`,
  transaction: (id: string) => `${API_PREFIX}/transactions/${id}`,
  strategies: `${API_PREFIX}/strategies`,
  strategy: (id: string) => `${API_PREFIX}/strategies/${id}`,
  dashboard: `${API_PREFIX}/dashboard`,
} as const;
