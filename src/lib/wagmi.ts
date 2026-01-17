/**
 * Wagmi configuration for wallet connectivity.
 * Uses RainbowKit for wallet connection UI with custom wallet configuration.
 *
 * Why wagmi + RainbowKit:
 * - wagmi: React hooks for Ethereum, providing type-safe access to wallet state and actions
 * - RainbowKit: Beautiful, accessible wallet connection UI that works with multiple wallets
 * - Together: Best-in-class DX with minimal configuration and excellent TypeScript support
 *
 * Note: Coinbase Wallet is excluded to avoid analytics SDK errors from ad blockers.
 * If you need Coinbase Wallet, use getDefaultConfig() instead which includes it by default.
 *
 * To customize:
 * - Add more chains in the chains array
 * - Configure custom RPC endpoints via environment variables
 * - Add/remove wallet connectors as needed
 */
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon, sepolia } from 'wagmi/chains';

// Supported chains configuration
const chains = [mainnet, sepolia, polygon, arbitrum, optimism] as const;

// Get RPC URLs from environment variables with fallbacks to public RPCs
const getRpcUrl = (chainId: number, defaultRpc: string): string => {
  const envKey = `VITE_RPC_URL_${chainId}`;
  const rpcUrl = import.meta.env[envKey];
  return rpcUrl || defaultRpc;
};

// Create transports with custom RPC URLs or public fallbacks
const transports = {
  [mainnet.id]: http(getRpcUrl(mainnet.id, 'https://eth.llamarpc.com')),
  [sepolia.id]: http(getRpcUrl(sepolia.id, 'https://rpc.sepolia.org')),
  [polygon.id]: http(getRpcUrl(polygon.id, 'https://polygon.llamarpc.com')),
  [arbitrum.id]: http(getRpcUrl(arbitrum.id, 'https://arb1.arbitrum.io/rpc')),
  [optimism.id]: http(getRpcUrl(optimism.id, 'https://mainnet.optimism.io')),
};

// Get WalletConnect Project ID from environment
const projectId =
  import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID';

if (!import.meta.env.VITE_WALLETCONNECT_PROJECT_ID) {
  console.warn(
    'VITE_WALLETCONNECT_PROJECT_ID is not set. WalletConnect may not work properly. ' +
      'Get a project ID at https://cloud.walletconnect.com/',
  );
}

// Custom wallet list WITHOUT Coinbase (to avoid analytics SDK errors)
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        walletConnectWallet,
        rainbowWallet,
        trustWallet,
        injectedWallet,
      ],
    },
  ],
  {
    appName: 'umoja',
    projectId,
  },
);

export const wagmiConfig = createConfig({
  connectors,
  chains,
  transports,
});

// Export chains for RainbowKitProvider
export { chains };
