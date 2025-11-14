/**
 * Test file for useLoadingStore.
 * Tests loading state management functionality.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLoadingStore } from '@/stores/useLoadingStore';

describe('useLoadingStore', () => {
  beforeEach(() => {
    // Clear all loading states before each test
    useLoadingStore.getState().clearLoading();
  });

  it('initializes with empty loading states', () => {
    const { result } = renderHook(() => useLoadingStore());
    expect(result.current.hasAnyLoading()).toBe(false);
  });

  it('sets and gets loading state', () => {
    const { result } = renderHook(() => useLoadingStore());

    act(() => {
      result.current.setLoading('test-key', true);
    });

    expect(result.current.isLoading('test-key')).toBe(true);
    expect(result.current.hasAnyLoading()).toBe(true);
  });

  it('clears specific loading state', () => {
    const { result } = renderHook(() => useLoadingStore());

    act(() => {
      result.current.setLoading('key1', true);
      result.current.setLoading('key2', true);
    });

    expect(result.current.hasAnyLoading()).toBe(true);

    act(() => {
      result.current.clearLoading('key1');
    });

    expect(result.current.isLoading('key1')).toBe(false);
    expect(result.current.isLoading('key2')).toBe(true);
    expect(result.current.hasAnyLoading()).toBe(true);
  });

  it('clears all loading states', () => {
    const { result } = renderHook(() => useLoadingStore());

    act(() => {
      result.current.setLoading('key1', true);
      result.current.setLoading('key2', true);
    });

    expect(result.current.hasAnyLoading()).toBe(true);

    act(() => {
      result.current.clearLoading();
    });

    expect(result.current.hasAnyLoading()).toBe(false);
  });
});
