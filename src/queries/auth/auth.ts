/**
 * Authentication API handlers.
 * Connects to backend auth endpoints for login, register, and password reset.
 *
 * @example
 * const { handleLogin, isLoading } = useLoginHandler();
 * await handleLogin({ email, password });
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '@/lib/axiosInstance';
import { routes } from '@/routes';
import { useAuthStore, useToastStore } from '@/stores';
import type { User } from '@/stores/useAuthStore';
import { getErrorMessage } from '@/utils';

// ============================================================================
// Types
// ============================================================================

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  user: User;
}

interface MessageResponse {
  message: string;
}

// ============================================================================
// Hooks
// ============================================================================

/**
 * Login handler hook.
 * Authenticates user and stores credentials.
 */
export const useLoginHandler = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { setCredentials, setError: setAuthError } = useAuthStore.use.actions();
  const { success, error: showError } = useToastStore.use.actions();

  const handleLogin = async (data: LoginRequest) => {
    setIsLoading(true);
    setAuthError(null);

    try {
      const response = await axiosInstance.post<AuthResponse>(
        '/api/auth/login',
        data,
      );

      const { accessToken, user } = response.data;
      setCredentials(user, accessToken);
      success('Welcome back!');
      navigate(routes.home);
    } catch (err) {
      const message = getErrorMessage(err);
      setAuthError(message);
      showError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading };
};

/**
 * Register handler hook.
 * Creates new user account and stores credentials.
 */
export const useRegisterHandler = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { setCredentials, setError: setAuthError } = useAuthStore.use.actions();
  const { success, error: showError } = useToastStore.use.actions();

  const handleRegister = async (data: RegisterRequest) => {
    setIsLoading(true);
    setAuthError(null);

    try {
      const response = await axiosInstance.post<AuthResponse>(
        '/api/auth/register',
        data,
      );

      const { accessToken, user } = response.data;
      setCredentials(user, accessToken);
      success('Account created successfully!');
      navigate(routes.home);
    } catch (err) {
      const message = getErrorMessage(err);
      setAuthError(message);
      showError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleRegister, isLoading };
};

/**
 * Forgot password handler hook.
 * Requests password reset email.
 */
export const useForgotPasswordHandler = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { success } = useToastStore.use.actions();

  const handleForgotPassword = async (data: ForgotPasswordRequest) => {
    setIsLoading(true);
    setIsSuccess(false);

    try {
      await axiosInstance.post<MessageResponse>(
        '/api/auth/forgotten-password',
        {
          email: data.email,
        },
      );

      setIsSuccess(true);
      success('Password reset email sent');
    } catch {
      // For security, show success even if email doesn't exist
      // Backend should also return success for non-existent emails
      setIsSuccess(true);
      success('If an account exists, a reset email has been sent');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleForgotPassword, isLoading, isSuccess };
};

/**
 * Reset password handler hook.
 * Resets password using token from email.
 */
export const useResetPasswordHandler = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { success, error: showError } = useToastStore.use.actions();

  const handleResetPassword = async (data: ResetPasswordRequest) => {
    setIsLoading(true);

    try {
      await axiosInstance.post<MessageResponse>('/api/auth/password-reset', {
        resetToken: data.token,
        newPassword: data.password,
      });

      success('Password reset successful');
      // Navigate to login after short delay
      setTimeout(() => navigate(routes.login), 1500);
      return true;
    } catch (err) {
      const message = getErrorMessage(err);
      showError(message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleResetPassword, isLoading };
};

/**
 * Logout handler hook.
 * Calls backend logout endpoint and clears auth state.
 */
export const useLogoutHandler = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuthStore.use.actions();
  const { info } = useToastStore.use.actions();

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      // Call backend to log the logout (validates token)
      await axiosInstance.post('/api/auth/logout');
    } catch {
      // Continue with client logout even if server call fails
      // (token might already be expired)
    }

    // Always clear local state regardless of API response
    logout();
    info('You have been logged out');
    navigate(routes.home);
    setIsLoading(false);
  };

  return { handleLogout, isLoading };
};
