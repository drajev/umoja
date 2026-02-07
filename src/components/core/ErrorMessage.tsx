import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form';
import { Text } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface ErrorMessageProps<T extends FieldValues> {
  errors: FieldErrors<T>;
  name: FieldPath<T>;
  className?: string;
}

export const ErrorMessage = <T extends FieldValues>({
  errors,
  name,
  className,
}: ErrorMessageProps<T>) => {
  const error = errors[name];

  if (!error) {
    return null;
  }

  return (
    <Text
      variant="small"
      className={cn('mt-1 text-destructive', className)}
      role="alert"
    >
      {error.message as string}
    </Text>
  );
};
