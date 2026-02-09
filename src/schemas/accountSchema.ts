/**
 * Zod schema for account form validation.
 */
import { z } from 'zod';

const accountTypeEnum = z.enum(['checking', 'savings', 'investment'], {
  required_error: 'Account type is required',
});

export const createAccountSchema = () =>
  z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(100, 'Name must be less than 100 characters'),
    type: accountTypeEnum,
    balance: z
      .union([z.string(), z.number()])
      .optional()
      .transform(val => {
        if (val === undefined || val === '') return 0;
        const n = typeof val === 'string' ? Number(val) : val;
        if (Number.isNaN(n) || n < 0) return 0;
        return n;
      }),
    currency: z.string().length(3).optional().default('USD'),
  });

export type AccountFormData = z.infer<ReturnType<typeof createAccountSchema>>;
