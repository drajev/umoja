import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Vite configuration with path aliases and Vitest setup.
 *
 * To customize:
 * - Add additional path aliases in resolve.alias
 * - Configure proxy settings for API calls
 * - Add environment variable handling
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-core';
          }

          // React Router
          if (id.includes('react-router')) {
            return 'router';
          }

          // Web3 libraries - split further
          if (id.includes('wagmi')) {
            return 'wagmi';
          }
          if (id.includes('@rainbow-me')) {
            return 'rainbowkit';
          }
          if (id.includes('viem')) {
            return 'viem';
          }
          if (id.includes('@tanstack/react-query')) {
            return 'react-query';
          }

          // UI libraries
          if (id.includes('@radix-ui')) {
            return 'radix-ui';
          }
          if (
            id.includes('class-variance-authority') ||
            id.includes('clsx') ||
            id.includes('tailwind-merge')
          ) {
            return 'ui-utils';
          }

          // Form libraries
          if (id.includes('react-hook-form')) {
            return 'react-hook-form';
          }
          if (id.includes('@hookform')) {
            return 'hookform-resolvers';
          }
          if (id.includes('zod')) {
            return 'zod';
          }

          // State management
          if (id.includes('zustand')) {
            return 'zustand';
          }

          // Date utilities
          if (id.includes('date-fns')) {
            return 'date-fns';
          }

          // Other vendor libraries - keep smaller
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Increased limit because Web3 libraries (wagmi, rainbowkit, viem) are inherently large
    // Route-based code splitting helps reduce initial load - main bundle is now only ~7KB
    // Large chunks (rainbowkit ~1.7MB, viem ~600KB) are acceptable for Web3 apps and are loaded on-demand
    chunkSizeWarningLimit: 2000,
  },
  // @ts-expect-error - Vitest types are not properly merged with Vite types
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
});
