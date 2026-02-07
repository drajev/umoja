/**
 * RecentTransactions - table snippet of recent transactions.
 */
import { memo } from 'react';
import { Link } from 'react-router-dom';
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
import styles from '@/styles/modules/transactions.module.css';
import type { Account, Transaction } from '@/types/api';
import { formatPrice } from '@/utils';

interface RecentTransactionsProps {
  transactions: Transaction[];
  accounts?: Account[];
  isLoading?: boolean;
}

export const RecentTransactions = memo(
  ({
    transactions,
    accounts = [],
    isLoading = false,
  }: RecentTransactionsProps) => {
    const { t } = useLanguage();
    const accountMap = new Map(accounts.map(a => [a.id, a.name]));

    if (isLoading) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.recentTransactions')}</CardTitle>
            <CardDescription>
              {t('dashboard.recentTransactionsDesc')}
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
            <CardTitle>{t('dashboard.recentTransactions')}</CardTitle>
            <CardDescription>
              {t('dashboard.recentTransactionsDesc')}
            </CardDescription>
          </div>
          <Link
            to={routes.transactions}
            className="font-medium text-primary text-sm hover:underline"
          >
            {t('common.viewAll')}
          </Link>
        </CardHeader>
        <CardContent>
          {transactions.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              {t('dashboard.noTransactions')}
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.slice(0, RECENT_ITEMS_LIMIT).map(tx => {
                  const amount = Number(tx.amount);
                  const isIncome = amount >= 0;
                  return (
                    <TableRow key={tx.id}>
                      <TableCell className="text-sm">{tx.date}</TableCell>
                      <TableCell className="text-sm">
                        {tx.description}
                        {accounts.length > 0 && (
                          <span className="ml-1 text-muted-foreground">
                            ({accountMap.get(tx.accountId) ?? tx.accountId})
                          </span>
                        )}
                      </TableCell>
                      <TableCell
                        className={
                          isIncome
                            ? styles.amountIncomeSmall
                            : styles.amountExpenseSmall
                        }
                      >
                        {isIncome ? '+' : ''}
                        {formatPrice(amount)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    );
  },
);
