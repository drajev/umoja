import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/hooks';
import { useCreateForm } from '@/lib/forms/createForm';
import {
  createStrategySchema,
  type StrategyFormData,
} from '@/schemas/createStrategySchema';

interface StrategyFormProps {
  onSubmit: (data: StrategyFormData) => void | Promise<void>;
  defaultValues?: Partial<StrategyFormData>;
  /** When false, renders form without Card wrapper (e.g. for Dialog) */
  showCard?: boolean;
  title?: string;
  submitLabel?: string;
  isSubmitting?: boolean;
}

export const StrategyForm = ({
  onSubmit,
  defaultValues,
  showCard = true,
  title,
  submitLabel,
  isSubmitting = false,
}: StrategyFormProps) => {
  const { t } = useLanguage();
  const schema = createStrategySchema();
  const form = useCreateForm(schema, { defaultValues });

  const handleSubmit = form.handleSubmit(async data => {
    await onSubmit(data);
  });

  const formContent = (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('strategies.strategyName')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('strategies.strategyNamePlaceholder')}
                  {...field}
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
              <FormLabel>{t('strategies.descriptionOptional')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('strategies.descriptionPlaceholder')}
                  rows={4}
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormDescription>
                {t('strategies.optionalDescription')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('strategies.amount')}</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  {...field}
                />
              </FormControl>
              <FormDescription>{t('strategies.enterAmount')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="riskLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('strategies.riskLevel')}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t('strategies.selectRiskLevel')}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">{t('strategies.low')}</SelectItem>
                  <SelectItem value="medium">
                    {t('strategies.medium')}
                  </SelectItem>
                  <SelectItem value="high">{t('strategies.high')}</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                {t('strategies.chooseRiskLevel')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('strategies.startDate')}</FormLabel>
              <FormControl>
                <Input type="date" {...field} value={field.value || ''} />
              </FormControl>
              <FormDescription>
                {t('strategies.selectStartDate')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.isSubmitSuccessful && showCard && (
          <Alert>
            <AlertDescription>{t('strategies.formSubmitted')}</AlertDescription>
          </Alert>
        )}

        <div className="flex gap-2">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting || isSubmitting}
          >
            {form.formState.isSubmitting || isSubmitting
              ? t('common.submitting')
              : (submitLabel ?? t('strategies.createStrategy'))}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            disabled={form.formState.isSubmitting || isSubmitting}
          >
            {t('common.reset')}
          </Button>
        </div>
      </form>
    </Form>
  );

  if (showCard) {
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>{title ?? t('strategies.createStrategy')}</CardTitle>
          <CardDescription>{t('strategies.fillInDetails')}</CardDescription>
        </CardHeader>
        <CardContent>{formContent}</CardContent>
      </Card>
    );
  }

  return formContent;
};
