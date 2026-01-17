import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { useAuthStore, type User } from "@/stores";

/**
 * Tests for useAuthStore.
 * Tests state management with the new actions pattern.
 */
describe("useAuthStore", () => {
  beforeEach(() => {
    // Reset store to initial state before each test
    useAuthStore.getState().actions.resetStore();
  });

  it("initializes with empty state", () => {
    const { result } = renderHook(() => useAuthStore());
    expect(result.current.user).toBeNull();
    expect(result.current.token).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("sets user correctly", () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser: User = {
      id: "1",
      email: "test@example.com",
      name: "Test User",
    };

    act(() => {
      result.current.actions.setUser(mockUser);
    });

    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
  });

  it("sets token correctly", () => {
    const { result } = renderHook(() => useAuthStore());
    const mockToken = "test-token-123";

    act(() => {
      result.current.actions.setToken(mockToken);
    });

    expect(result.current.token).toBe(mockToken);
  });

  it("sets credentials correctly", () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser: User = {
      id: "1",
      email: "test@example.com",
      name: "Test User",
    };
    const mockToken = "test-token-123";

    act(() => {
      result.current.actions.setCredentials(mockUser, mockToken);
    });

    expect(result.current.user).toEqual(mockUser);
    expect(result.current.token).toBe(mockToken);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it("sets error correctly", () => {
    const { result } = renderHook(() => useAuthStore());
    const errorMessage = "Test error";

    act(() => {
      result.current.actions.setError(errorMessage);
    });

    expect(result.current.error).toBe(errorMessage);
  });

  it("clears error correctly", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.actions.setError("Test error");
      result.current.actions.clearError();
    });

    expect(result.current.error).toBeNull();
  });

  it("logout clears all state", () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser: User = {
      id: "1",
      email: "test@example.com",
      name: "Test User",
    };

    act(() => {
      result.current.actions.setCredentials(mockUser, "test-token");
      result.current.actions.setError("Some error");
    });

    expect(result.current.user).not.toBeNull();
    expect(result.current.token).not.toBeNull();
    expect(result.current.isAuthenticated).toBe(true);

    act(() => {
      result.current.actions.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.token).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("uses auto-generated selectors correctly", () => {
    const mockUser: User = {
      id: "1",
      email: "test@example.com",
      name: "Test User",
    };

    act(() => {
      useAuthStore.getState().actions.setCredentials(mockUser, "test-token");
    });

    // Test individual selectors
    const { result: userResult } = renderHook(() => useAuthStore.use.user());
    const { result: tokenResult } = renderHook(() => useAuthStore.use.token());
    const { result: authResult } = renderHook(() =>
      useAuthStore.use.isAuthenticated(),
    );

    expect(userResult.current).toEqual(mockUser);
    expect(tokenResult.current).toBe("test-token");
    expect(authResult.current).toBe(true);
  });
});
