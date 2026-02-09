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
import type { Strategy } from '@/types/api';
import { formatDateOnly, formatPrice } from '@/utils';

interface StrategyTableProps {
  strategies: Strategy[];
  onEdit?: (strategy: Strategy) => void;
  onDelete?: (strategy: Strategy) => void;
  isLoading?: boolean;
}

const riskLevelVariants: Record<
  string,
  'default' | 'secondary' | 'destructive'
> = {
  low: 'secondary',
  medium: 'default',
  high: 'destructive',
};

const statusVariants: Record<string, 'default' | 'secondary' | 'outline'> = {
  active: 'default',
  paused: 'secondary',
  completed: 'outline',
};

export const StrategyTable = memo(
  ({ strategies, onEdit, onDelete, isLoading = false }: StrategyTableProps) => {
    const { t } = useLanguage();
    if (isLoading) {
      return (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('dashboard.tableName')}</TableHead>
                <TableHead>{t('dashboard.tableRisk')}</TableHead>
                <TableHead className="text-right">
                  {t('dashboard.tableAmount')}
                </TableHead>
                <TableHead>{t('strategies.startDate')}</TableHead>
                <TableHead>{t('dashboard.tableStatus')}</TableHead>
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

    if (strategies.length === 0) {
      return (
        <div className="rounded-md border p-8 text-center text-muted-foreground">
          {t('strategies.noStrategiesYet')}
        </div>
      );
    }

    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('dashboard.tableName')}</TableHead>
              <TableHead>{t('dashboard.tableRisk')}</TableHead>
              <TableHead className="text-right">
                {t('dashboard.tableAmount')}
              </TableHead>
              <TableHead>{t('strategies.startDate')}</TableHead>
              <TableHead>{t('dashboard.tableStatus')}</TableHead>
              <TableHead className="w-[100px]">
                {t('accounts.actions')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {strategies.map(strategy => (
              <TableRow key={strategy.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{strategy.name}</div>
                    {strategy.description && (
                      <div className="max-w-xs truncate text-muted-foreground text-sm">
                        {strategy.description}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      riskLevelVariants[strategy.riskLevel] ?? 'secondary'
                    }
                  >
                    {t(`strategies.${strategy.riskLevel}`)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {formatPrice(Number(strategy.amount))}
                </TableCell>
                <TableCell>{formatDateOnly(strategy.startDate)}</TableCell>
                <TableCell>
                  <Badge variant={statusVariants[strategy.status] ?? 'outline'}>
                    {t(`strategies.${strategy.status}`)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {onEdit && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onEdit(strategy)}
                            aria-label={t('strategies.editStrategyAria')}
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
                            onClick={() => onDelete(strategy)}
                            aria-label={t('strategies.deleteStrategyAria')}
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
