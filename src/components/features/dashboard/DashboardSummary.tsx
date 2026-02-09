/**
 * DashboardSummary - overview cards for total balance and counts.
 */
import { memo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { SKELETON_CARD_COUNT } from '@/constants/layout';
import { useLanguage } from '@/hooks';
import type { DashboardSummary as DashboardSummaryType } from '@/types/api';
import { formatPrice } from '@/utils';

interface DashboardSummaryProps {
  data: DashboardSummaryType | undefined;
  isLoading?: boolean;
}

export const DashboardSummary = memo(
  ({ data, isLoading = false }: DashboardSummaryProps) => {
    const { t } = useLanguage();

    if (isLoading) {
      return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: SKELETON_CARD_COUNT }, (_, i) => (
            <Card key={`skeleton-${i}`}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-32" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }

    if (!data) {
      return null;
    }

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>{t('dashboard.totalBalance')}</CardDescription>
            <CardTitle className="text-2xl">
              {formatPrice(data.totalBalance)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>{t('dashboard.accounts')}</CardDescription>
            <CardTitle className="text-2xl">{data.accountsCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>{t('dashboard.transactions')}</CardDescription>
            <CardTitle className="text-2xl">{data.transactionsCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>{t('dashboard.strategies')}</CardDescription>
            <CardTitle className="text-2xl">{data.strategiesCount}</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  },
);
