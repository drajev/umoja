import { Button } from '@/components/ui/button';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/hooks';
import { useCreateForm } from '@/lib/forms/createForm';
import {
  type AccountFormData,
  createAccountSchema,
} from '@/schemas/accountSchema';
import type { Account } from '@/types/api';

interface AccountFormProps {
  onSubmit: (data: AccountFormData) => void | Promise<void>;
  defaultValues?: Partial<AccountFormData>;
  account?: Account | null;
  isSubmitting?: boolean;
  submitLabel?: string;
}

export const AccountForm = ({
  onSubmit,
  defaultValues,
  account,
  isSubmitting = false,
  submitLabel,
}: AccountFormProps) => {
  const { t } = useLanguage();
  const schema = createAccountSchema();
  const form = useCreateForm(schema, {
    defaultValues: defaultValues ?? {
      name: account?.name ?? '',
      type: account?.type ?? 'checking',
      balance: account?.balance ? Number(account.balance) : 0,
      currency: account?.currency ?? 'USD',
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('accounts.accountName')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('accounts.accountNamePlaceholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('accounts.type')}</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t('accounts.selectType')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="checking">
                    {t('accounts.checking')}
                  </SelectItem>
                  <SelectItem value="savings">
                    {t('accounts.savings')}
                  </SelectItem>
                  <SelectItem value="investment">
                    {t('accounts.investment')}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="balance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('accounts.initialBalanceOptional')}</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  {...field}
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
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('accounts.currency')}</FormLabel>
              <FormControl>
                <Input placeholder="USD" {...field} maxLength={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? t('common.saving')
              : (submitLabel ?? t('accounts.createAccount'))}
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
