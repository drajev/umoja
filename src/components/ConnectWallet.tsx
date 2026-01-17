/**
 * ConnectWallet component for wallet connection and display.
 * Shows connect button when disconnected, and wallet address + balance when connected.
 *
 * Features:
 * - Connect/disconnect wallet functionality via RainbowKit
 * - Display connected wallet address
 * - Display wallet balance with proper formatting
 * - Handle chain changes automatically
 *
 * Usage:
 *   <ConnectWallet />
 *
 * To customize:
 * - Modify the layout or styling
 * - Add additional wallet information (chain, network, etc.)
 * - Add copy address functionality
 */

import { HiOutlineClipboardDocument, HiOutlineWallet } from 'react-icons/hi2';
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Text } from '@/components/ui/typography';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { useToastStore } from '@/stores';
import { formatAddress } from '@/utils/format';

interface ConnectWalletProps {
  className?: string;
}

/**
 * Formats balance to show 4 decimal places.
 */
const formatBalance = (
  balance: string | undefined,
  symbol: string | undefined,
): string => {
  if (!balance) return '0.0000';
  const num = parseFloat(balance);
  return `${num.toFixed(4)} ${symbol || 'ETH'}`;
};

export const ConnectWallet = ({ className }: ConnectWalletProps) => {
  const { address, isConnected, chain } = useAccount();
  const { t } = useLanguage();
  const { data: balance } = useBalance({
    address,
    query: {
      enabled: !!address,
    },
  });
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { success, error } = useToastStore.use.actions();
  const copyToClipboard = useCopyToClipboard({
    onSuccess: () => {
      success('Address copied to clipboard!');
    },
    onError: () => {
      error('Failed to copy address');
    },
  });

  const handleConnect = (connector: (typeof connectors)[0]) => {
    connect({ connector });
  };

  // Filter out duplicate connectors by ID to prevent React key warnings
  const uniqueConnectors = connectors.filter(
    (connector, index, self) =>
      index === self.findIndex(c => c.id === connector.id),
  );

  if (!isConnected || !address) {
    return (
      <div className={cn('flex items-center justify-start', className)}>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full"
              disabled={uniqueConnectors.length === 0}
            >
              <HiOutlineWallet className="h-4 w-4" />
              {t('wallet.connect')}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Connect Wallet</DialogTitle>
              <DialogDescription>
                Choose a wallet to connect to your account
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2 py-4">
              {uniqueConnectors.map(connector => (
                <Button
                  key={connector.id}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleConnect(connector)}
                  disabled={isPending}
                >
                  {connector.name}
                  {isPending && <span className="ml-2">Connecting...</span>}
                </Button>
              ))}
              {uniqueConnectors.length === 0 && (
                <Text
                  variant="small"
                  className="py-4 text-center text-muted-foreground"
                >
                  No wallets available. Please install a wallet extension.
                </Text>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex items-center justify-start gap-2">
          <Text className="font-medium text-sm">Chain:</Text>
          <Text variant="small" className="font-medium text-muted-foreground">
            {chain?.name || 'Unknown Network'}
          </Text>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Text className="font-medium text-sm">Address:</Text>
          <Text
            variant="small"
            className="font-medium text-muted-foreground"
            onClick={() => copyToClipboard(address)}
          >
            {formatAddress(address)}
          </Text>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copyToClipboard(address)}
          >
            <HiOutlineClipboardDocument className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Text className="font-medium text-sm">Balance:</Text>
          <Text variant="small" className="font-medium text-muted-foreground">
            {formatBalance(balance?.formatted, balance?.symbol)}
          </Text>
        </div>
      </div>
      <Button variant="outline" className="w-full" onClick={() => disconnect()}>
        <HiOutlineWallet className="h-4 w-4" />
        Disconnect Wallet
      </Button>
    </>
    // <Card className={cn('w-full', className)}>
    //   <CardHeader>
    //     <CardTitle>Wallet Connected</CardTitle>
    //     <CardDescription>
    //       {chain?.name || 'Unknown Network'}
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent className="space-y-4">
    //     <div className="space-y-2">
    //       <Text variant="small" className="font-medium text-muted-foreground">
    //         Address
    //       </Text>
    //       <div className="flex items-center justify-between gap-2 rounded-md border bg-muted p-2">
    //         <Text
    //           className="font-mono text-sm break-all cursor-pointer"
    //           onClick={() => setShowFullAddress(!showFullAddress)}
    //           title="Click to toggle full address"
    //         >
    //           {showFullAddress ? address : formatAddress(address)}
    //         </Text>
    //         <Button
    //           variant="ghost"
    //           size="icon"
    //           onClick={() => {
    //             if (address) {
    //               copyToClipboard(address);
    //             }
    //           }}
    //           title="Copy address"
    //         >
    //           <HiOutlineClipboardDocument className="h-4 w-4" />
    //         </Button>
    //       </div>
    //     </div>

    //     <div className="space-y-2">
    //       <Text variant="small" className="font-medium text-muted-foreground">
    //         Balance
    //       </Text>
    //       <div className="rounded-md border bg-muted p-2">
    //         <Text className="font-mono text-sm">
    //           {formatBalance(balance?.formatted, balance?.symbol)}
    //         </Text>
    //       </div>
    //     </div>

    //     <div className="flex gap-2">
    //       <Button variant="outline" onClick={() => disconnect()}>
    //         Disconnect
    //       </Button>
    //     </div>
    //   </CardContent>
    // </Card>
  );
};
