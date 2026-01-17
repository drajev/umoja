/**
 * Form utility hook for react-hook-form with Zod validation.
 * Provides a typed wrapper around useForm that automatically infers types from Zod schemas.
 *
 * Usage:
 *   const schema = z.object({ name: z.string().min(1) });
 *   const form = useCreateForm(schema);
 *   // form is fully typed with inferred types from schema
 *
 * To customize:
 * - Add default form options
 * - Extend with custom validation modes
 * - Add form state helpers
 */

import { zodResolver } from '@hookform/resolvers/zod';
import {
  type UseFormProps,
  type UseFormReturn,
  useForm,
} from 'react-hook-form';
import type { TypeOf, ZodSchema } from 'zod';

/**
 * Creates a typed form hook from a Zod schema.
 * Automatically infers TypeScript types and sets up validation.
 *
 * @param schema - Zod schema for validation
 * @param options - Optional react-hook-form configuration
 * @returns Typed useForm hook with Zod resolver
 */
export function useCreateForm<T extends ZodSchema>(
  schema: T,
  options?: Omit<UseFormProps<TypeOf<T>>, 'resolver'>,
): UseFormReturn<TypeOf<T>> {
  // Ensure defaultValues are provided to prevent controlled/uncontrolled warnings
  // If no defaultValues provided, use empty strings for string fields
  const defaultValues = options?.defaultValues || ({} as Partial<TypeOf<T>>);

  return useForm<TypeOf<T>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: defaultValues as TypeOf<T>,
    ...options,
  });
}
