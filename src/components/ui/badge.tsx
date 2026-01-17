import type { HTMLAttributes } from 'react';
import {
  type BadgeVariantProps,
  badgeVariants,
} from '@/components/ui/badge-variants';
import { cn } from '@/lib/utils';

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    BadgeVariantProps {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
