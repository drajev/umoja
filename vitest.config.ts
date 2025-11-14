import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Vitest configuration for testing.
 * Compatible with Vite and includes path aliases.
 *
 * To customize:
 * - Add more test environments
 * - Configure coverage thresholds
 * - Add custom test utilities
 */
export default defineConfig({
  // @ts-expect-error - Type mismatch between Vite versions in dependency tree (v7.2.2 vs v5.4.21)
  // This is a known issue with Vitest and Vite version mismatches. The code works correctly at runtime.
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
