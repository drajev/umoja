import { useState } from 'react';
import { HiOutlineCalendar, HiOutlineInformationCircle } from 'react-icons/hi2';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useLanguage } from '@/hooks';
import { useCreateForm } from '@/lib/forms/createForm';
import {
  createStrategySchema,
  type StrategyFormData,
} from '@/schemas/createStrategySchema';
import styles from '@/styles/modules/core.module.css';
import { dateToLocalISO, formatDateOnly } from '@/utils/format';

interface StrategyFormProps {
  onSubmit: (data: StrategyFormData) => void | Promise<void>;
  defaultValues?: Partial<StrategyFormData>;
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
  const [datePickerOpen, setDatePickerOpen] = useState(false);

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
              <FormLabel>{t('strategies.strategyName')}*</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('strategies.strategyNamePlaceholder')}
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-1.5">
                <FormLabel>{t('strategies.descriptionLabel')}</FormLabel>
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
                    {t('strategies.descriptionHint')}
                  </TooltipContent>
                </Tooltip>
              </div>
              <FormControl>
                <Textarea
                  placeholder={t('strategies.descriptionPlaceholder')}
                  rows={4}
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
          name="amount"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-1.5">
                <FormLabel>{t('strategies.amount')}*</FormLabel>
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
                    {t('strategies.enterAmount')}
                  </TooltipContent>
                </Tooltip>
              </div>
              <FormControl>
                <Input
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
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
          name="riskLevel"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-1.5">
                <FormLabel>{t('strategies.riskLevel')}*</FormLabel>
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
                    {t('strategies.chooseRiskLevel')}
                  </TooltipContent>
                </Tooltip>
              </div>
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
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-1.5">
                <FormLabel>{t('strategies.startDate')}*</FormLabel>
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
                    {t('strategies.selectStartDate')}
                  </TooltipContent>
                </Tooltip>
              </div>
              <FormControl>
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-10 w-full justify-between font-normal"
                    >
                      <span className="text-muted-foreground">
                        {formatDateOnly(field.value) ||
                          t('strategies.startDatePlaceholder')}
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
            {form.formState.isSubmitting || isSubmitting ? (
              <Spinner className="size-4" />
            ) : (
              (submitLabel ?? t('strategies.createStrategy'))
            )}
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
