/**
 * Wagmi configuration for wallet connectivity.
 * Uses RainbowKit's getDefaultConfig for simplified setup with MetaMask and WalletConnect.
 *
 * Why wagmi + RainbowKit:
 * - wagmi: React hooks for Ethereum, providing type-safe access to wallet state and actions
 * - RainbowKit: Beautiful, accessible wallet connection UI that works with multiple wallets
 * - Together: Best-in-class DX with minimal configuration and excellent TypeScript support
 *
 * To customize:
 * - Add more chains in the chains array
 * - Configure custom RPC endpoints via environment variables
 * - Add additional wallet connectors if needed
 */
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  baseAccount,
  rainbowWallet,
  metaMaskWallet,
  walletConnectWallet,
  safeWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { mainnet, sepolia, polygon, arbitrum, optimism } from "wagmi/chains";
import { http } from "wagmi";

// Disable Coinbase analytics/telemetry which is often blocked by ad-blockers
baseAccount.preference = { telemetry: false };

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
  [mainnet.id]: http(getRpcUrl(mainnet.id, "https://eth.llamarpc.com")),
  [sepolia.id]: http(getRpcUrl(sepolia.id, "https://rpc.sepolia.org")),
  [polygon.id]: http(getRpcUrl(polygon.id, "https://polygon.llamarpc.com")),
  [arbitrum.id]: http(getRpcUrl(arbitrum.id, "https://arb1.arbitrum.io/rpc")),
  [optimism.id]: http(getRpcUrl(optimism.id, "https://mainnet.optimism.io")),
} as const;

// Get WalletConnect Project ID from environment
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

if (!projectId) {
  console.warn(
    "VITE_WALLETCONNECT_PROJECT_ID is not set. WalletConnect may not work properly. " +
      "Get a project ID at https://cloud.walletconnect.com/",
  );
}

export const wagmiConfig = getDefaultConfig({
  appName: "umoja",
  projectId: projectId || "YOUR_PROJECT_ID",
  chains,
  transports,
  ssr: true, // Enable SSR support for Next.js compatibility
  wallets: [
    {
      groupName: "Popular",
      wallets: [
        safeWallet,
        rainbowWallet,
        baseAccount,
        metaMaskWallet,
        walletConnectWallet,
      ],
    },
  ],
});
