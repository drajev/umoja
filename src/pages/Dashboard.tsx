/**
 * Dashboard page - overview of finance and strategies.
 */
import { LazyLoad } from '@/components/core/LazyLoad';
import {
  DashboardSummary,
  RecentStrategies,
  RecentTransactions,
} from '@/components/features/dashboard';
import { Skeleton } from '@/components/ui/skeleton';
import { Heading, Text } from '@/components/ui/typography';
import { useLanguage } from '@/hooks';
import { useAccounts } from '@/queries/accounts/accounts';
import { useDashboardSummary } from '@/queries/dashboard/dashboard';

export const Dashboard = () => {
  const { t } = useLanguage();
  const { data: summary, isLoading } = useDashboardSummary();
  const { data: accounts } = useAccounts();

  return (
    <div className="space-y-8">
      <div>
        <Heading level={1}>{t('dashboard.title')}</Heading>
        <Text variant="lead" className="text-muted-foreground">
          {t('dashboard.description')}
        </Text>
      </div>

      <DashboardSummary data={summary} isLoading={isLoading} />

      <div className="grid gap-6 lg:grid-cols-2">
        <LazyLoad fallback={<Skeleton className="h-48 w-full" />}>
          <RecentTransactions
            transactions={summary?.recentTransactions ?? []}
            accounts={accounts ?? []}
            isLoading={isLoading}
          />
        </LazyLoad>
        <LazyLoad fallback={<Skeleton className="h-48 w-full" />}>
          <RecentStrategies
            strategies={summary?.recentStrategies ?? []}
            isLoading={isLoading}
          />
        </LazyLoad>
      </div>
    </div>
  );
};
