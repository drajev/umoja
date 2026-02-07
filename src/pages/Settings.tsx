import {
  HiOutlineLanguage,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUser,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Heading, Text } from '@/components/ui/typography';
import type { Language } from '@/constants/languages';
import { useLanguage } from '@/hooks';
import { routes } from '@/routes';
import { useAuthStore, useLanguageStore, useUIStore } from '@/stores';

export const Settings = () => {
  const { t } = useLanguage();
  const theme = useUIStore.use.theme();
  const { toggleTheme } = useUIStore.use.actions();
  const language = useLanguageStore.use.language();
  const setLanguage = (lang: Language) =>
    useLanguageStore.getState().actions.setLanguage(lang);
  const isAuthenticated = useAuthStore.use.isAuthenticated();

  return (
    <div className="space-y-8">
      <div>
        <Heading level={1}>{t('settings.title')}</Heading>
        <Text variant="lead" className="text-muted-foreground">
          {t('settings.customizeExperience')}
        </Text>
      </div>

      <Tabs defaultValue="appearance" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="appearance" className="gap-2">
            <HiOutlineSun className="h-4 w-4" />
            {t('settings.appearance')}
          </TabsTrigger>
          <TabsTrigger value="language" className="gap-2">
            <HiOutlineLanguage className="h-4 w-4" />
            {t('settings.language')}
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className="gap-2"
            disabled={!isAuthenticated}
          >
            <HiOutlineUser className="h-4 w-4" />
            {t('settings.account')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('settings.theme')}</CardTitle>
              <CardDescription>
                {t('settings.themeDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {theme === 'dark' ? (
                    <HiOutlineMoon className="h-5 w-5" />
                  ) : (
                    <HiOutlineSun className="h-5 w-5" />
                  )}
                  <Text className="font-medium">
                    {theme === 'dark'
                      ? t('settings.dark')
                      : t('settings.light')}
                  </Text>
                </div>
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('settings.preferredLanguage')}</CardTitle>
              <CardDescription>{t('settings.selectLanguage')}</CardDescription>
            </CardHeader>
            <CardContent>
              <ToggleGroup
                type="single"
                value={language}
                onValueChange={value => {
                  if (value) setLanguage(value as Language);
                }}
                className="h-9"
              >
                <ToggleGroupItem
                  value="en"
                  aria-label="English"
                  size="default"
                  className="px-4"
                >
                  {t('settings.english')}
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="es"
                  aria-label={t('settings.spanish')}
                  size="default"
                  className="px-4"
                >
                  {t('settings.spanish')}
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>
        </TabsContent>

        {isAuthenticated && (
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.accountSecurity')}</CardTitle>
                <CardDescription>
                  {t('settings.manageProfilePassword')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Text className="font-medium">
                      {t('settings.profileLabel')}
                    </Text>
                    <Text variant="small" className="text-muted-foreground">
                      {t('settings.viewManageProfile')}
                    </Text>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to={routes.profile}>{t('auth.viewProfile')}</Link>
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Text className="font-medium">
                      {t('settings.password')}
                    </Text>
                    <Text variant="small" className="text-muted-foreground">
                      {t('settings.changeYourPassword')}
                    </Text>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to={routes.forgotPassword}>
                      {t('auth.changePassword')}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};
