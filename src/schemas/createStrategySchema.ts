import { z } from 'zod';

/**
 * Zod schema for strategy form validation.
 * Example schema demonstrating form validation patterns.
 *
 * Usage:
 *   import { createStrategySchema } from '@/schemas/createStrategySchema';
 *   const form = useCreateForm(createStrategySchema());
 *
 * To customize:
 * - Add more fields
 * - Modify validation rules
 * - Add conditional validation
 */
export const createStrategySchema = () =>
  z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(100, 'Name must be less than 100 characters'),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description must be less than 500 characters')
      .optional(),
    amount: z
      .string()
      .min(1, 'Amount is required')
      .refine(val => !Number.isNaN(Number(val)) && Number(val) > 0, {
        message: 'Amount must be a positive number',
      }),
    riskLevel: z.enum(['low', 'medium', 'high'], {
      required_error: 'Risk level is required',
    }),
    startDate: z.string().min(1, 'Start date is required'),
  });

export type StrategyFormData = z.infer<ReturnType<typeof createStrategySchema>>;
