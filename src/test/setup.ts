/**
 * Vitest setup file.
 * Configures test environment and global mocks.
 *
 * To customize:
 * - Add global test utilities
 * - Configure mocks for external libraries
 * - Set up test data factories
 */
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Cleanup after each test
afterEach(() => {
  cleanup();
});
