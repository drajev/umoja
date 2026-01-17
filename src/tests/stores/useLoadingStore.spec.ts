import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { useLoadingStore } from '@/stores';

/**
 * Tests for useLoadingStore.
 * Tests loading state management with the new actions pattern.
 */
describe('useLoadingStore', () => {
  beforeEach(() => {
    // Reset store to initial state before each test
    useLoadingStore.getState().actions.resetStore();
  });

  it('initializes with empty loading states', () => {
    const { result } = renderHook(() => useLoadingStore());
    expect(result.current.loadingStates).toEqual({});
    expect(result.current.actions.hasAnyLoading()).toBe(false);
  });

  it('sets loading state correctly', () => {
    const { result } = renderHook(() => useLoadingStore());

    act(() => {
      result.current.actions.setLoading('test-key', true);
    });

    expect(result.current.actions.isLoading('test-key')).toBe(true);
    expect(result.current.actions.hasAnyLoading()).toBe(true);
  });

  it('handles multiple loading states', () => {
    const { result } = renderHook(() => useLoadingStore());

    act(() => {
      result.current.actions.setLoading('key1', true);
      result.current.actions.setLoading('key2', true);
    });

    expect(result.current.actions.hasAnyLoading()).toBe(true);

    act(() => {
      result.current.actions.clearLoading('key1');
    });

    expect(result.current.actions.isLoading('key1')).toBe(false);
    expect(result.current.actions.isLoading('key2')).toBe(true);
    expect(result.current.actions.hasAnyLoading()).toBe(true);
  });

  it('clears all loading states', () => {
    const { result } = renderHook(() => useLoadingStore());

    act(() => {
      result.current.actions.setLoading('key1', true);
      result.current.actions.setLoading('key2', true);
    });

    expect(result.current.actions.hasAnyLoading()).toBe(true);

    act(() => {
      result.current.actions.clearLoading();
    });

    expect(result.current.actions.hasAnyLoading()).toBe(false);
  });

  it('uses auto-generated selectors correctly', () => {
    act(() => {
      useLoadingStore.getState().actions.setLoading('test-key', true);
    });

    const { result } = renderHook(() => useLoadingStore.use.loadingStates());

    expect(result.current).toEqual({ 'test-key': true });
  });
});
