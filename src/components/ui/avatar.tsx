import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type Ref,
} from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

interface AvatarProps
  extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  ref?: Ref<ComponentRef<typeof AvatarPrimitive.Root>>;
}

const Avatar = ({ className, ref, ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

interface AvatarImageProps
  extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  ref?: Ref<ComponentRef<typeof AvatarPrimitive.Image>>;
}

const AvatarImage = ({ className, ref, ...props }: AvatarImageProps) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

interface AvatarFallbackProps
  extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  ref?: Ref<ComponentRef<typeof AvatarPrimitive.Fallback>>;
}

const AvatarFallback = ({ className, ref, ...props }: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
