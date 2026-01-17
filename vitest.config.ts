import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    root: './src',
    include: ['**/*.{test,spec}.{ts,tsx}'],
    // Compatibility workarounds for tinypool/Bun (worker crashes, stack overflow).
    // Re-test with future Vitest/Bun versions and remove if no longer needed.
    pool: 'forks',
    maxConcurrency: 5,
    fileParallelism: false,
  },
});
