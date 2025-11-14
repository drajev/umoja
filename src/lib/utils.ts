/**
 * Utility functions for shadcn/ui components.
 * Provides cn() helper for merging Tailwind classes with clsx and tailwind-merge.
 *
 * Usage:
 *   import { cn } from '@/lib/utils';
 *   <div className={cn('base-class', condition && 'conditional-class')} />
 */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
