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
    // Use forks pool to avoid tinypool stack overflow with Bun
    pool: 'forks',
    // Limit concurrency to avoid worker crashes
    maxConcurrency: 5,
    fileParallelism: false,
  },
});
