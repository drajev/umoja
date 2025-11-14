/**
 * Toast notification store using Zustand with Sonner integration.
 * Manages toast notifications with success, error, warning, and info types.
 *
 * Usage:
 *   const { notifications } = useToastStore();
 *   notifications.success('Operation successful!');
 *   notifications.error('Something went wrong');
 *
 * To customize:
 * - Add custom toast options
 * - Modify toast duration
 */
import { create } from 'zustand';
import { toast as sonnerToast } from 'sonner';

interface ToastStore {
  notifications: {
    success: (message: string, options?: { title?: string; duration?: number }) => void;
    error: (message: string, options?: { title?: string; duration?: number }) => void;
    warning: (message: string, options?: { title?: string; duration?: number }) => void;
    info: (message: string, options?: { title?: string; duration?: number }) => void;
  };
}

export const useToastStore = create<ToastStore>(() => ({
  notifications: {
    success: (message, options) => {
      sonnerToast.success(message, {
        description: options?.title,
        duration: options?.duration,
      });
    },
    error: (message, options) => {
      sonnerToast.error(message, {
        description: options?.title,
        duration: options?.duration,
      });
    },
    warning: (message, options) => {
      sonnerToast.warning(message, {
        description: options?.title,
        duration: options?.duration,
      });
    },
    info: (message, options) => {
      sonnerToast.info(message, {
        description: options?.title,
        duration: options?.duration,
      });
    },
  },
}));
