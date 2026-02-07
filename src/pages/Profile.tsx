/**
 * Profile page - displays user account information.
 */
import { Link } from 'react-router-dom';
import { ProfileAvatarUpload } from '@/components/features/auth';
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
import { routes } from '@/routes';
import { useAuthStore } from '@/stores';

export const Profile = () => {
  const { t } = useLanguage();
  const user = useAuthStore.use.user();

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
          </div>

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
