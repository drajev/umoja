/**
 * Unit tests for authentication hooks.
 *
 * Note: These tests use vi.mock() which must be called before imports.
 * The mocks are hoisted by Vitest automatically.
 */
import { renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Create mock functions
const mockNavigate = vi.fn();
const mockPost = vi.fn();
const mockSetCredentials = vi.fn();
const mockSetError = vi.fn();
const mockLogout = vi.fn();
const mockSuccess = vi.fn();
const mockError = vi.fn();
const mockInfo = vi.fn();

// Hoist mocks - these are automatically hoisted by Vitest
vi.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

vi.mock('@/lib/axiosInstance', () => {
  return {
    default: {
      post: (...args: unknown[]) => mockPost(...args),
    },
  };
});

vi.mock('@/stores', () => {
  return {
    useAuthStore: {
      use: {
        actions: () => ({
          setCredentials: mockSetCredentials,
          setError: mockSetError,
          logout: mockLogout,
        }),
      },
    },
    useToastStore: {
      use: {
        actions: () => ({
          success: mockSuccess,
          error: mockError,
          info: mockInfo,
        }),
      },
    },
  };
});

// Import hooks after mock setup
import {
  useForgotPasswordHandler,
  useLoginHandler,
  useLogoutHandler,
  useRegisterHandler,
  useResetPasswordHandler,
} from '@/queries/auth/auth';

describe('Auth Hooks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ===========================================================================
  // useLoginHandler
  // ===========================================================================

  describe('useLoginHandler', () => {
    const mockLoginData = {
      email: 'test@example.com',
      password: 'password123',
    };

    const mockAuthResponse = {
      data: {
        accessToken: 'mock-token',
        user: { id: '1', email: 'test@example.com', name: 'Test User' },
      },
    };

    it('should successfully login and navigate to home', async () => {
      mockPost.mockResolvedValueOnce(mockAuthResponse);

      const { result } = renderHook(() => useLoginHandler());

      expect(result.current.isLoading).toBe(false);

      await result.current.handleLogin(mockLoginData);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(mockPost).toHaveBeenCalledWith('/api/auth/login', mockLoginData);
      expect(mockSetCredentials).toHaveBeenCalledWith(
        mockAuthResponse.data.user,
        mockAuthResponse.data.accessToken,
      );
      expect(mockSuccess).toHaveBeenCalledWith('Welcome back!');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('should handle login error and show error toast', async () => {
      const errorMessage = 'Invalid credentials';
      mockPost.mockRejectedValueOnce({
        isAxiosError: true,
        response: { data: { message: errorMessage }, status: 401 },
      });

      const { result } = renderHook(() => useLoginHandler());

      await result.current.handleLogin(mockLoginData);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(mockSetError).toHaveBeenCalledWith(errorMessage);
      expect(mockError).toHaveBeenCalledWith(errorMessage);
      expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('should handle network error', async () => {
      mockPost.mockRejectedValueOnce(new Error('Network Error'));

      const { result } = renderHook(() => useLoginHandler());

      await result.current.handleLogin(mockLoginData);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(mockError).toHaveBeenCalled();
    });
  });

  // ===========================================================================
  // useRegisterHandler
  // ===========================================================================

  describe('useRegisterHandler', () => {
    const mockRegisterData = {
      email: 'new@example.com',
      password: 'password123',
      name: 'New User',
    };

    const mockAuthResponse = {
      data: {
        accessToken: 'mock-token',
        user: { id: '2', email: 'new@example.com', name: 'New User' },
      },
    };

    it('should successfully register and navigate to home', async () => {
      mockPost.mockResolvedValueOnce(mockAuthResponse);

      const { result } = renderHook(() => useRegisterHandler());

      await result.current.handleRegister(mockRegisterData);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(mockPost).toHaveBeenCalledWith(
        '/api/auth/register',
        mockRegisterData,
      );
      expect(mockSetCredentials).toHaveBeenCalledWith(
        mockAuthResponse.data.user,
        mockAuthResponse.data.accessToken,
      );
      expect(mockSuccess).toHaveBeenCalledWith('Account created successfully!');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('should handle registration error', async () => {
      const errorMessage = 'Email already exists';
      mockPost.mockRejectedValueOnce({
        isAxiosError: true,
        response: { data: { message: errorMessage }, status: 409 },
      });

      const { result } = renderHook(() => useRegisterHandler());

      await result.current.handleRegister(mockRegisterData);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(mockSetError).toHaveBeenCalledWith(errorMessage);
      expect(mockError).toHaveBeenCalledWith(errorMessage);
    });
  });

  // ===========================================================================
  // useForgotPasswordHandler
  // ===========================================================================

  describe('useForgotPasswordHandler', () => {
    const mockEmail = { email: 'test@example.com' };

    it('should handle forgot password request successfully', async () => {
      mockPost.mockResolvedValueOnce({ data: { message: 'Email sent' } });

      const { result } = renderHook(() => useForgotPasswordHandler());

      expect(result.current.isSuccess).toBe(false);

      await result.current.handleForgotPassword(mockEmail);

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
      });

      expect(mockPost).toHaveBeenCalledWith('/api/auth/forgotten-password', {
        email: mockEmail.email,
      });
      expect(mockSuccess).toHaveBeenCalledWith('Password reset email sent');
    });

    it('should show success even on error (security)', async () => {
      mockPost.mockRejectedValueOnce(new Error('Not found'));

      const { result } = renderHook(() => useForgotPasswordHandler());

      await result.current.handleForgotPassword(mockEmail);

      // Should still show success for security reasons
      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
      });

      expect(mockSuccess).toHaveBeenCalledWith(
        'If an account exists, a reset email has been sent',
      );
    });
  });

  // ===========================================================================
  // useResetPasswordHandler
  // ===========================================================================

  describe('useResetPasswordHandler', () => {
    const mockResetData = {
      token: 'reset-token',
      password: 'newPassword123',
    };

    it('should reset password successfully', async () => {
      vi.useFakeTimers();
      mockPost.mockResolvedValueOnce({ data: { message: 'Success' } });

      const { result } = renderHook(() => useResetPasswordHandler());

      const response = await result.current.handleResetPassword(mockResetData);

      expect(mockPost).toHaveBeenCalledWith('/api/auth/password-reset', {
        resetToken: mockResetData.token,
        newPassword: mockResetData.password,
      });
      expect(mockSuccess).toHaveBeenCalledWith('Password reset successful');
      expect(response).toBe(true);

      // Fast-forward timer for navigation
      vi.advanceTimersByTime(1500);
      expect(mockNavigate).toHaveBeenCalledWith('/login');

      vi.useRealTimers();
    });

    it('should handle reset password error', async () => {
      const errorMessage = 'Invalid or expired token';
      mockPost.mockRejectedValueOnce({
        isAxiosError: true,
        response: { data: { message: errorMessage }, status: 400 },
      });

      const { result } = renderHook(() => useResetPasswordHandler());

      const response = await result.current.handleResetPassword(mockResetData);

      expect(mockError).toHaveBeenCalledWith(errorMessage);
      expect(response).toBe(false);
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  // ===========================================================================
  // useLogoutHandler
  // ===========================================================================

  describe('useLogoutHandler', () => {
    it('should call logout endpoint and navigate to home', async () => {
      mockPost.mockResolvedValueOnce({
        data: { message: 'Logout successful' },
      });

      const { result } = renderHook(() => useLogoutHandler());

      await result.current.handleLogout();

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(mockPost).toHaveBeenCalledWith('/api/auth/logout');
      expect(mockLogout).toHaveBeenCalled();
      expect(mockInfo).toHaveBeenCalledWith('You have been logged out');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('should still logout locally even if API call fails', async () => {
      mockPost.mockRejectedValueOnce(new Error('Token expired'));

      const { result } = renderHook(() => useLogoutHandler());

      await result.current.handleLogout();

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Should still clear local state
      expect(mockLogout).toHaveBeenCalled();
      expect(mockInfo).toHaveBeenCalledWith('You have been logged out');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
