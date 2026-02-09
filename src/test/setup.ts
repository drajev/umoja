/**
 * Vitest setup file.
 * Configures test environment and global mocks.
 *
 * To customize:
 * - Add global test utilities
 * - Configure mocks for external libraries
 * - Set up test data factories
 */

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver (required by embla-carousel)
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
}));

// Mock matchMedia (required by embla-carousel and responsive hooks)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage and sessionStorage
const createStorageMock = () => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: vi.fn((index: number) => Object.keys(store)[index] ?? null),
  };
};

Object.defineProperty(globalThis, 'localStorage', {
  value: createStorageMock(),
  writable: true,
});

Object.defineProperty(globalThis, 'sessionStorage', {
  value: createStorageMock(),
  writable: true,
});

// Cleanup after each test
afterEach(() => {
  cleanup();
  // Clear storage mocks between tests
  localStorage.clear();
  sessionStorage.clear();
});
