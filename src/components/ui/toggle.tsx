import type { ComponentPropsWithRef } from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

import { cn } from "@/lib/utils";
import {
  toggleVariants,
  type ToggleVariantProps,
} from "@/components/ui/toggle-variants";

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
