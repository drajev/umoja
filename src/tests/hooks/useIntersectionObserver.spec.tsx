import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * Test file for useIntersectionObserver hook.
 * Tests intersection observer functionality.
 */

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

global.IntersectionObserver = vi.fn().mockImplementation(() => {
  return {
    observe: mockObserve,
    disconnect: mockDisconnect,
    unobserve: vi.fn(),
  };
}) as unknown as typeof IntersectionObserver;

describe('useIntersectionObserver', () => {
  it('creates intersection observer and returns ref', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    expect(result.current.ref).toBeDefined();
    expect(result.current.isIntersecting).toBe(false);
  });

  it('initializes with isIntersecting as false', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    expect(result.current.isIntersecting).toBe(false);
  });
});
