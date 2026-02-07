/**
 * Home page - landing page for the Personal Finance & Investment Dashboard.
 */
import { memo } from 'react';
import {
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineTableCells,
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
import { Heading, Text } from '@/components/ui/typography';
import { useLanguage } from '@/hooks';
import { routes } from '@/routes';
import { useAuthStore } from '@/stores';
import styles from '@/styles/modules/home.module.css';

const FEATURE_KEYS = [
  {
    icon: HiOutlineCurrencyDollar,
    titleKey: 'home.features.accounts',
    descKey: 'home.features.accountsDesc',
  },
  {
    icon: HiOutlineTableCells,
    titleKey: 'home.features.transactions',
    descKey: 'home.features.transactionsDesc',
  },
  {
    icon: HiOutlineChartBar,
    titleKey: 'home.features.strategies',
    descKey: 'home.features.strategiesDesc',
  },
  {
    icon: HiOutlineShieldCheck,
    titleKey: 'home.features.secure',
    descKey: 'home.features.secureDesc',
  },
] as const;

export const Home = memo(() => {
  const { t } = useLanguage();
  const isAuthenticated = useAuthStore.use.isAuthenticated();

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <Heading level={1} className="font-bold tracking-tight">
          {t('home.title')}
        </Heading>
        <Text
          variant="lead"
          className="mx-auto mt-6 max-w-2xl text-muted-foreground"
        >
          {t('home.subtitle')}
        </Text>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {isAuthenticated ? (
            <Button asChild size="lg">
              <Link to={routes.dashboard}>{t('home.goToDashboard')}</Link>
            </Button>
          ) : (
            <>
              <Button asChild size="lg">
                <Link to={routes.register}>{t('home.getStarted')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to={routes.login}>{t('home.signIn')}</Link>
              </Button>
            </>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-12 text-center">
          <Heading level={2}>{t('home.everythingYouNeed')}</Heading>
          <Text variant="lead" className="mt-2 text-muted-foreground">
            {t('home.toolkitSubtitle')}
          </Text>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_KEYS.map(({ icon: Icon, titleKey, descKey }) => (
            <Card key={titleKey} className="border-border/50">
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{t(titleKey)}</CardTitle>
                <CardDescription>{t(descKey)}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl">{t('home.readyToStart')}</CardTitle>
            <CardDescription>{t('home.readyDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            {!isAuthenticated && (
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to={routes.register}>{t('home.createAccount')}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to={routes.styleguide}>{t('home.viewComponents')}</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
});
