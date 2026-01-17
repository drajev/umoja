import type { ComponentProps } from 'react';
import { Toaster as Sonner } from 'sonner';
import { useUIStore } from '@/stores/useUIStore';

type ToasterProps = ComponentProps<typeof Sonner>;

/**
 * Sonner toast component from shadcn/ui.
 * Wrapper around sonner library for toast notifications.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useUIStore.use.theme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
