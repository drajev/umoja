import { memo } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { SKELETON_ROW_COUNT } from '@/constants/layout';
import { useLanguage } from '@/hooks';
import styles from '@/styles/modules/transactions.module.css';
import type { Account, Transaction } from '@/types/api';
import { formatPrice } from '@/utils';

interface TransactionTableProps {
  transactions: Transaction[];
  accounts?: Account[];
  onEdit?: (transaction: Transaction) => void;
  onDelete?: (transaction: Transaction) => void;
  isLoading?: boolean;
}

export const TransactionTable = memo(
  ({
    transactions,
    accounts = [],
    onEdit,
    onDelete,
    isLoading = false,
  }: TransactionTableProps) => {
    const { t } = useLanguage();
    const accountMap = new Map(accounts.map(a => [a.id, a.name]));

    const getAccountName = (accountId: string) =>
      accountMap.get(accountId) ?? accountId;

    if (isLoading) {
      return (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('transactions.date')}</TableHead>
                <TableHead>{t('transactions.descriptionLabel')}</TableHead>
                <TableHead>{t('transactions.account')}</TableHead>
                <TableHead className="text-right">
                  {t('transactions.amount')}
                </TableHead>
                <TableHead>{t('transactions.category')}</TableHead>
                <TableHead className="w-[100px]">
                  {t('accounts.actions')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => (
                <TableRow key={`skeleton-${i}`}>
                  <TableCell colSpan={6}>
                    <Skeleton className="h-12 w-full" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    }

    if (transactions.length === 0) {
      return (
        <div className="rounded-md border p-8 text-center text-muted-foreground">
          {t('transactions.noTransactionsYet')}
        </div>
      );
    }

    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Account</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map(tx => {
              const amount = Number(tx.amount);
              const isIncome = amount >= 0;
              return (
                <TableRow key={tx.id}>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell className="font-medium">
                    {tx.description}
                  </TableCell>
                  <TableCell>{getAccountName(tx.accountId)}</TableCell>
                  <TableCell
                    className={
                      isIncome ? styles.amountIncome : styles.amountExpense
                    }
                  >
                    {isIncome ? '+' : ''}
                    {formatPrice(amount)}
                  </TableCell>
                  <TableCell>{tx.category ?? '-'}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {onEdit && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => onEdit(tx)}
                              aria-label={t('transactions.editTransactionAria')}
                            >
                              <HiOutlinePencil className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>{t('common.edit')}</TooltipContent>
                        </Tooltip>
                      )}
                      {onDelete && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => onDelete(tx)}
                              aria-label={t(
                                'transactions.deleteTransactionAria',
                              )}
                              className="text-destructive hover:text-destructive"
                            >
                              <HiOutlineTrash className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>{t('common.delete')}</TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  },
);
