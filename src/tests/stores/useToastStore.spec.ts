import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useToastStore } from '@/stores';

// Mock sonner toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    warning: vi.fn(),
    info: vi.fn(),
    loading: vi.fn(() => 'toast-id'),
    dismiss: vi.fn(),
    promise: vi.fn(),
  },
}));

/**
 * Tests for useToastStore.
 * Tests toast notification actions with the new pattern.
 */
describe('useToastStore', () => {
  it('has success action', () => {
    const { result } = renderHook(() => useToastStore());
    expect(result.current.actions.success).toBeDefined();
    expect(typeof result.current.actions.success).toBe('function');
  });

  it('has error action', () => {
    const { result } = renderHook(() => useToastStore());
    expect(result.current.actions.error).toBeDefined();
    expect(typeof result.current.actions.error).toBe('function');
  });

  it('has warning action', () => {
    const { result } = renderHook(() => useToastStore());
    expect(result.current.actions.warning).toBeDefined();
    expect(typeof result.current.actions.warning).toBe('function');
  });

  it('has info action', () => {
    const { result } = renderHook(() => useToastStore());
    expect(result.current.actions.info).toBeDefined();
    expect(typeof result.current.actions.info).toBe('function');
  });

  it('has loading action', () => {
    const { result } = renderHook(() => useToastStore());
    expect(result.current.actions.loading).toBeDefined();
    expect(typeof result.current.actions.loading).toBe('function');
  });

  it('has dismiss action', () => {
    const { result } = renderHook(() => useToastStore());
    expect(result.current.actions.dismiss).toBeDefined();
    expect(typeof result.current.actions.dismiss).toBe('function');
  });

  it('has promise action', () => {
    const { result } = renderHook(() => useToastStore());
    expect(result.current.actions.promise).toBeDefined();
    expect(typeof result.current.actions.promise).toBe('function');
  });

  it('uses auto-generated selectors correctly', () => {
    const { result } = renderHook(() => useToastStore.use.actions());
    expect(result.current.success).toBeDefined();
    expect(result.current.error).toBeDefined();
    expect(result.current.warning).toBeDefined();
    expect(result.current.info).toBeDefined();
  });
});
