/**
 * Tests for useAuthStore.
 * Tests state management only - API calls are tested in queries/auth/auth.test.ts
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAuthStore } from '@/stores/useAuthStore';
import type { User } from '@/stores/useAuthStore';

describe('useAuthStore', () => {
  beforeEach(() => {
    // Reset store to initial state before each test
    useAuthStore.getState().logout();
  });

  it('initializes with empty state', () => {
    const { result } = renderHook(() => useAuthStore());
    expect(result.current.user).toBeNull();
    expect(result.current.token).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('sets user correctly', () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser: User = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    };

    act(() => {
      result.current.setUser(mockUser);
    });

    expect(result.current.user).toEqual(mockUser);
  });

  it('sets token correctly', () => {
    const { result } = renderHook(() => useAuthStore());
    const mockToken = 'test-token-123';

    act(() => {
      result.current.setToken(mockToken);
    });

    expect(result.current.token).toBe(mockToken);
  });

  it('sets isAuthenticated correctly', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.setIsAuthenticated(true);
    });

    expect(result.current.isAuthenticated).toBe(true);
  });

  it('sets error correctly', () => {
    const { result } = renderHook(() => useAuthStore());
    const errorMessage = 'Test error';

    act(() => {
      result.current.setError(errorMessage);
    });

    expect(result.current.error).toBe(errorMessage);
  });

  it('clears error correctly', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.setError('Test error');
      result.current.clearError();
    });

    expect(result.current.error).toBeNull();
  });

  it('logout clears all state', () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser: User = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    };

    act(() => {
      result.current.setUser(mockUser);
      result.current.setToken('test-token');
      result.current.setIsAuthenticated(true);
      result.current.setError('Some error');
    });

    expect(result.current.user).not.toBeNull();
    expect(result.current.token).not.toBeNull();
    expect(result.current.isAuthenticated).toBe(true);

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.token).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
