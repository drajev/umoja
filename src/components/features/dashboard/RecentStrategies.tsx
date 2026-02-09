/**
 * RecentStrategies - table snippet of recent strategies.
 */
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { RECENT_ITEMS_LIMIT } from '@/constants/layout';
import { useLanguage } from '@/hooks';
import { routes } from '@/routes';
import type { Strategy } from '@/types/api';
import { formatPrice } from '@/utils';

interface RecentStrategiesProps {
  strategies: Strategy[];
  isLoading?: boolean;
}

export const RecentStrategies = memo(
  ({ strategies, isLoading = false }: RecentStrategiesProps) => {
    const { t } = useLanguage();

    if (isLoading) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.recentStrategies')}</CardTitle>
            <CardDescription>
              {t('dashboard.recentStrategiesDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-24 w-full" />
          </CardContent>
        </Card>
      );
    }

    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{t('dashboard.recentStrategies')}</CardTitle>
            <CardDescription>
              {t('dashboard.recentStrategiesDesc')}
            </CardDescription>
          </div>
          <Link
            to={routes.strategies}
            className="font-medium text-primary text-sm hover:underline"
          >
            {t('common.viewAll')}
          </Link>
        </CardHeader>
        <CardContent>
          {strategies.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              {t('dashboard.noStrategies')}
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('dashboard.tableName')}</TableHead>
                  <TableHead>{t('dashboard.tableRisk')}</TableHead>
                  <TableHead className="text-right">
                    {t('dashboard.tableAmount')}
                  </TableHead>
                  <TableHead>{t('dashboard.tableStatus')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {strategies.slice(0, RECENT_ITEMS_LIMIT).map(strategy => (
                  <TableRow key={strategy.id}>
                    <TableCell className="font-medium">
                      {strategy.name}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {t(`strategies.${strategy.riskLevel}`)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {formatPrice(Number(strategy.amount))}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {t(`strategies.${strategy.status}`)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    );
  },
);
