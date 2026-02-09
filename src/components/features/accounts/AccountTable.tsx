import { memo } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { Badge } from '@/components/ui/badge';
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
import type { Account } from '@/types/api';
import { formatPrice } from '@/utils';

interface AccountTableProps {
  accounts: Account[];
  onEdit?: (account: Account) => void;
  onDelete?: (account: Account) => void;
  isLoading?: boolean;
}

export const AccountTable = memo(
  ({ accounts, onEdit, onDelete, isLoading = false }: AccountTableProps) => {
    const { t } = useLanguage();
    const accountTypeLabels: Record<string, string> = {
      checking: t('accounts.checking'),
      savings: t('accounts.savings'),
      investment: t('accounts.investment'),
    };
    if (isLoading) {
      return (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('accounts.name')}</TableHead>
                <TableHead>{t('accounts.type')}</TableHead>
                <TableHead className="text-right">
                  {t('accounts.balance')}
                </TableHead>
                <TableHead>{t('accounts.currency')}</TableHead>
                <TableHead className="w-[100px]">
                  {t('accounts.actions')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => (
                <TableRow key={`skeleton-${i}`}>
                  <TableCell colSpan={5}>
                    <Skeleton className="h-12 w-full" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    }

    if (accounts.length === 0) {
      return (
        <div className="rounded-md border p-8 text-center text-muted-foreground">
          {t('accounts.noAccountsYet')}
        </div>
      );
    }

    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead>Currency</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.map(account => (
              <TableRow key={account.id}>
                <TableCell className="font-medium">{account.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    {accountTypeLabels[account.type] ?? account.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {formatPrice(Number(account.balance))}
                </TableCell>
                <TableCell>{account.currency}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {onEdit && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onEdit(account)}
                            aria-label={t('accounts.editAccountAria')}
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
                            onClick={() => onDelete(account)}
                            aria-label={t('accounts.deleteAccountAria')}
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
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
);
