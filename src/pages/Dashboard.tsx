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
import { useAccounts } from '@/queries/accounts/accounts';
import { useDashboardSummary } from '@/queries/dashboard/dashboard';

export const Dashboard = () => {
  const { data: summary, isLoading } = useDashboardSummary();
  const { data: accounts } = useAccounts();

  return (
    <div className="space-y-8">
      <div>
        <Heading level={1}>Dashboard</Heading>
        <Text variant="lead" className="text-muted-foreground">
          Overview of your finances and investment strategies
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
