import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import type {
  ComponentProps,
  ComponentPropsWithRef,
  HTMLAttributes,
} from 'react';

import { cn } from '@/lib/utils';

function MenubarMenu({
  ...props
}: ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({
  ...props
}: ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({
  ...props
}: ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({
  ...props
}: ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }: ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

type MenubarProps = ComponentPropsWithRef<typeof MenubarPrimitive.Root>;

const Menubar = ({ className, ref, ...props }: MenubarProps) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
      className,
    )}
    {...props}
  />
);
Menubar.displayName = MenubarPrimitive.Root.displayName;

type MenubarTriggerProps = ComponentPropsWithRef<
  typeof MenubarPrimitive.Trigger
>;

const MenubarTrigger = ({ className, ref, ...props }: MenubarTriggerProps) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 font-medium text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      className,
    )}
    {...props}
  />
);
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

type MenubarSubTriggerProps = ComponentPropsWithRef<
  typeof MenubarPrimitive.SubTrigger
> & {
  inset?: boolean;
};

const MenubarSubTrigger = ({
  className,
  inset,
  children,
  ref,
  ...props
}: MenubarSubTriggerProps) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
);
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

type MenubarSubContentProps = ComponentPropsWithRef<
  typeof MenubarPrimitive.SubContent
>;

const MenubarSubContent = ({
  className,
  ref,
  ...props
}: MenubarSubContentProps) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-[--radix-menubar-content-transform-origin] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in',
      className,
    )}
    {...props}
  />
);
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

type MenubarContentProps = ComponentPropsWithRef<
  typeof MenubarPrimitive.Content
>;

const MenubarContent = ({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ref,
  ...props
}: MenubarContentProps) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-[--radix-menubar-content-transform-origin] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in',
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

type MenubarItemProps = ComponentPropsWithRef<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
};

const MenubarItem = ({ className, inset, ref, ...props }: MenubarItemProps) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

type MenubarCheckboxItemProps = ComponentPropsWithRef<
  typeof MenubarPrimitive.CheckboxItem
>;

const MenubarCheckboxItem = ({
  className,
  children,
  checked,
  ref,
  ...props
}: MenubarCheckboxItemProps) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
);
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

type MenubarRadioItemProps = ComponentPropsWithRef<
  typeof MenubarPrimitive.RadioItem
>;

const MenubarRadioItem = ({
  className,
  children,
  ref,
  ...props
}: MenubarRadioItemProps) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
);
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

type MenubarLabelProps = ComponentPropsWithRef<
  typeof MenubarPrimitive.Label
> & {
  inset?: boolean;
};

const MenubarLabel = ({
  className,
  inset,
  ref,
  ...props
}: MenubarLabelProps) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 font-semibold text-sm',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

type MenubarSeparatorProps = ComponentPropsWithRef<
  typeof MenubarPrimitive.Separator
>;

const MenubarSeparator = ({
  className,
  ref,
  ...props
}: MenubarSeparatorProps) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
);
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-muted-foreground text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = 'MenubarShortcut';

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
