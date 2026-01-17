import * as TogglePrimitive from '@radix-ui/react-toggle';
import type { ComponentPropsWithRef } from 'react';
import {
  type ToggleVariantProps,
  toggleVariants,
} from '@/components/ui/toggle-variants';
import { cn } from '@/lib/utils';

type ToggleProps = ComponentPropsWithRef<typeof TogglePrimitive.Root> &
  ToggleVariantProps;

const Toggle = ({ className, variant, size, ref, ...props }: ToggleProps) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
