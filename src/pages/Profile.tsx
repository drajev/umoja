/**
 * Profile page - displays user account information.
 */
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { ProfileAvatarUpload } from '@/components/features/auth';
import { ConnectWallet } from '@/components/features/wallet';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heading, Text } from '@/components/ui/typography';
import { useLanguage } from '@/hooks';
import { useAddWalletToProfile } from '@/queries/profile/profile';
import { routes } from '@/routes';
import { useAuthStore } from '@/stores';
import { formatAddress } from '@/utils';

export const Profile = () => {
  const { t } = useLanguage();
  const user = useAuthStore.use.user();
  const { address, isConnected } = useAccount();
  const addWalletMutation = useAddWalletToProfile();

  const handleAddWalletToProfile = useCallback(() => {
    if (!address) return;
    addWalletMutation.mutate(address);
  }, [address, addWalletMutation]);

  if (!user) {
    return (
      <div className="space-y-8">
        <Heading level={1}>{t('profile.title')}</Heading>
        <Card>
          <CardContent className="pt-6">
            <Text className="text-muted-foreground">
              {t('profile.pleaseSignIn')}
            </Text>
            <Button asChild className="mt-4">
              <Link to={routes.login}>{t('auth.signIn')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <Heading level={1}>{t('profile.title')}</Heading>
        <Text variant="lead" className="text-muted-foreground">
          {t('profile.accountInfo')}
        </Text>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('profile.accountDetails')}</CardTitle>
          <CardDescription>{t('profile.profileFromAccount')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <ProfileAvatarUpload userName={user.name} />
            <div className="space-y-1">
              <Text className="font-semibold text-lg">{user.name}</Text>
              <Text variant="small" className="text-muted-foreground">
                {user.email}
              </Text>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <Text variant="small" className="text-muted-foreground">
                {t('profile.name')}
              </Text>
              <Text className="font-medium">{user.name}</Text>
            </div>
            <div>
              <Text variant="small" className="text-muted-foreground">
                {t('profile.email')}
              </Text>
              <Text className="font-medium">{user.email}</Text>
            </div>
            {user.walletAddress && (
              <div>
                <Text variant="small" className="text-muted-foreground">
                  {t('profile.linkedWallet')}
                </Text>
                <Text className="font-mono text-sm">
                  {formatAddress(user.walletAddress)}
                </Text>
              </div>
            )}
          </div>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle>{t('profile.web3Wallet')}</CardTitle>
              <CardDescription>
                {t('profile.web3WalletDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ConnectWallet
                additionalActions={
                  isConnected &&
                  address &&
                  address.toLowerCase() !==
                    user.walletAddress?.toLowerCase() && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleAddWalletToProfile}
                      disabled={addWalletMutation.isPending}
                    >
                      {addWalletMutation.isPending
                        ? t('accounts.adding')
                        : t('profile.addWalletToProfile')}
                    </Button>
                  )
                }
              />
            </CardContent>
          </Card>

          <div className="pt-4">
            <Button variant="outline" asChild>
              <Link to={routes.settings}>{t('profile.goToSettings')}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
