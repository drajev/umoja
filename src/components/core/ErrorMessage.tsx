/**
 * ErrorMessage component for displaying form validation errors.
 * Used with react-hook-form.
 *
 * Usage:
 *   <ErrorMessage errors={form.formState.errors} name="fieldName" />
 *
 * To customize:
 * - Modify styling or layout
 * - Add icon support
 * - Add animation/transition effects
 */
import { type FieldErrors, type FieldPath, type FieldValues } from 'react-hook-form';
import { Text } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface ErrorMessageProps<T extends FieldValues> {
  errors: FieldErrors<T>;
  name: FieldPath<T>;
  className?: string;
}

/**
 * Displays validation error message for a form field.
 * Only renders if an error exists for the specified field.
 */
export function ErrorMessage<T extends FieldValues>({
  errors,
  name,
  className,
}: ErrorMessageProps<T>) {
  const error = errors[name];

  if (!error) {
    return null;
  }

  return (
    <Text
      variant="small"
      className={cn('text-destructive mt-1', className)}
      role="alert"
    >
      {error.message as string}
    </Text>
  );
}
