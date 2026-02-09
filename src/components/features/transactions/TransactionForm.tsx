import { useState } from 'react';
import { HiOutlineCalendar, HiOutlineInformationCircle } from 'react-icons/hi2';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useLanguage } from '@/hooks';
import { useCreateForm } from '@/lib/forms/createForm';
import {
  createTransactionSchema,
  type TransactionFormData,
} from '@/schemas/transactionSchema';
import styles from '@/styles/modules/core.module.css';
import type { Account, Transaction } from '@/types/api';
import { dateToLocalISO, formatDateOnly } from '@/utils/format';

interface TransactionFormProps {
  onSubmit: (data: TransactionFormData) => void | Promise<void>;
  accounts: Account[];
  defaultValues?: Partial<TransactionFormData>;
  transaction?: Transaction | null;
  isSubmitting?: boolean;
  submitLabel?: string;
}

export const TransactionForm = ({
  onSubmit,
  accounts,
  defaultValues,
  transaction,
  isSubmitting = false,
  submitLabel,
}: TransactionFormProps) => {
  const { t } = useLanguage();
  const schema = createTransactionSchema();
  const form = useCreateForm(schema, {
    defaultValues: (defaultValues ?? {
      accountId: transaction?.accountId ?? '',
      amount: transaction?.amount != null ? String(transaction.amount) : '',
      description: transaction?.description ?? '',
      date: formatDateOnly(transaction?.date) || dateToLocalISO(new Date()),
      category: transaction?.category ?? undefined,
    }) as Partial<TransactionFormData>,
  });

  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleSubmit = form.handleSubmit(async data => {
    await onSubmit(data);
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="accountId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('transactions.account')}*</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t('transactions.selectAccount')}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {accounts.map(acc => (
                    <SelectItem key={acc.id} value={acc.id}>
                      {acc.name} ({acc.type})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-1.5">
                <FormLabel>{t('transactions.amount')}*</FormLabel>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className={styles.infoIconButton}
                      aria-label={t('common.moreInfo')}
                    >
                      <HiOutlineInformationCircle className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="start"
                    className="z-[100] max-w-[200px]"
                  >
                    {t('transactions.amountHint')}
                  </TooltipContent>
                </Tooltip>
              </div>
              <FormControl>
                <Input
                  type="text"
                  inputMode="decimal"
                  placeholder={t('transactions.amountPlaceholder')}
                  value={field.value ?? ''}
                  onChange={e => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('transactions.descriptionLabel')}*</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('transactions.descriptionPlaceholder')}
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('transactions.date')}*</FormLabel>
              <FormControl>
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-10 w-full justify-between font-normal"
                    >
                      <span className="text-muted-foreground">
                        {formatDateOnly(field.value) ||
                          t('transactions.selectDate')}
                      </span>
                      <HiOutlineCalendar className="ml-2 size-4 shrink-0 text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={
                        field.value
                          ? new Date(`${formatDateOnly(field.value)}T12:00:00`)
                          : undefined
                      }
                      onSelect={date => {
                        field.onChange(date ? dateToLocalISO(date) : '');
                        setDatePickerOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('transactions.category')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('transactions.categoryPlaceholder')}
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner className="size-4" />
            ) : (
              (submitLabel ?? t('transactions.createTransaction'))
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            disabled={isSubmitting}
          >
            {t('common.reset')}
          </Button>
        </div>
      </form>
    </Form>
  );
};
