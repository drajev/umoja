import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/hooks';
import { useCreateForm } from '@/lib/forms/createForm';
import {
  createTransactionSchema,
  type TransactionFormData,
} from '@/schemas/transactionSchema';
import type { Account, Transaction } from '@/types/api';

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
    defaultValues: defaultValues ?? {
      accountId: transaction?.accountId ?? '',
      amount: transaction?.amount ? Number(transaction.amount) : 0,
      description: transaction?.description ?? '',
      date: transaction?.date ?? new Date().toISOString().slice(0, 10),
      category: transaction?.category ?? undefined,
    },
  });

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
              <FormLabel>{t('transactions.account')}</FormLabel>
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
              <FormLabel>{t('transactions.amount')}</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  inputMode="decimal"
                  placeholder={t('transactions.amountPlaceholder')}
                  value={
                    field.value !== undefined && field.value !== null
                      ? String(field.value)
                      : ''
                  }
                  onChange={e => {
                    const val = e.target.value;
                    field.onChange(val === '' ? 0 : Number(val) || 0);
                  }}
                />
              </FormControl>
              <FormDescription>{t('transactions.amountHint')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('transactions.descriptionLabel')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('transactions.descriptionPlaceholder')}
                  {...field}
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
              <FormLabel>{t('transactions.date')}</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
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
              <FormLabel>{t('transactions.categoryOptional')}</FormLabel>
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
            {isSubmitting
              ? t('common.saving')
              : (submitLabel ?? t('transactions.createTransaction'))}
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
