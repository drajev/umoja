/**
 * Zod schema for transaction form validation.
 */
import { z } from 'zod';

export const createTransactionSchema = () =>
  z.object({
    accountId: z.string().uuid('Select an account'),
    amount: z
      .string()
      .min(1, 'Amount is required')
      .refine(val => !Number.isNaN(Number(val)), {
        message: 'Amount must be a number',
      })
      .transform(val => Number(val)),
    description: z
      .string()
      .min(1, 'Description is required')
      .max(500, 'Description must be less than 500 characters'),
    date: z
      .string()
      .min(1, 'Date is required')
      .regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'Date must be YYYY-MM-DD',
      }),
    category: z.string().max(100).optional(),
  });

export type TransactionFormData = z.infer<
  ReturnType<typeof createTransactionSchema>
>;
