/**
 * Wallet provider wrapper component.
 * Sets up WagmiProvider, QueryClientProvider, and RainbowKitProvider.
 *
 * This component wraps the app with all necessary providers for wallet functionality:
 * - WagmiProvider: Provides wagmi hooks and wallet state
 * - QueryClientProvider: Required by wagmi for caching and state management
 * - RainbowKitProvider: Provides the wallet connection UI
 *
 * Usage:
 *   Wrap your app root with <WalletProvider> in main.tsx
 *
 * To customize:
 * - Adjust QueryClient configuration (cache time, retry logic, etc.)
 * - Configure RainbowKit theme or locale
 */

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { queryClient } from './reactQuery';
import { wagmiConfig } from './wagmi';
import '@rainbow-me/rainbowkit/styles.css';

interface WalletProviderProps {
  children: ReactNode;
}

/**
 * Wallet provider component that sets up all wallet-related providers.
 * Must be used at the root of the application.
 */
export const WalletProvider = ({ children }: WalletProviderProps) => {
  // Check if we're in a browser environment (SSR safety)
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
