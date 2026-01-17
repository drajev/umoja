import { toast as sonnerToast } from 'sonner';
import { create } from 'zustand';

import { createSelectors } from './createSelectors';

/**
 * Toast options interface
 */
interface ToastOptions {
  title?: string;
  duration?: number;
  description?: string;
}

/**
 * Toast actions interface - all notification methods grouped
 */
interface ToastActions {
  success: (message: string, options?: ToastOptions) => void;
  error: (message: string, options?: ToastOptions) => void;
  warning: (message: string, options?: ToastOptions) => void;
  info: (message: string, options?: ToastOptions) => void;
  loading: (message: string, options?: ToastOptions) => string | number;
  dismiss: (toastId?: string | number) => void;
  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: unknown) => string);
    },
  ) => void;
}

/**
 * Toast store interface
 */
interface ToastStore {
  actions: ToastActions;
}

/**
 * Base store with all functionality
 */
const baseStore = create<ToastStore>()(() => ({
  actions: {
    success: (message, options) => {
      sonnerToast.success(options?.title ?? message, {
        description: options?.title ? message : options?.description,
        duration: options?.duration,
      });
    },

    error: (message, options) => {
      sonnerToast.error(options?.title ?? message, {
        description: options?.title ? message : options?.description,
        duration: options?.duration ?? 5000, // Errors stay longer
      });
    },

    warning: (message, options) => {
      sonnerToast.warning(options?.title ?? message, {
        description: options?.title ? message : options?.description,
        duration: options?.duration,
      });
    },

    info: (message, options) => {
      sonnerToast.info(options?.title ?? message, {
        description: options?.title ? message : options?.description,
        duration: options?.duration,
      });
    },

    loading: (message, options) => {
      return sonnerToast.loading(options?.title ?? message, {
        description: options?.title ? message : options?.description,
        duration: options?.duration ?? Infinity,
      });
    },

    dismiss: toastId => {
      sonnerToast.dismiss(toastId);
    },

    promise: (promise, messages) => {
      sonnerToast.promise(promise, {
        loading: messages.loading,
        success: messages.success,
        error: messages.error,
      });
    },
  },
}));

/**
 * Toast store with auto-generated selectors.
 *
 * @example
 * // Access actions
 * const { success, error, loading, promise } = useToastStore.use.actions();
 *
 * // Simple notifications
 * actions.success('Operation completed!');
 * actions.error('Something went wrong');
 *
 * // With options
 * actions.success('User created', { title: 'Success', duration: 3000 });
 *
 * // Loading with manual dismiss
 * const toastId = actions.loading('Saving...');
 * await saveData();
 * actions.dismiss(toastId);
 *
 * // Promise-based (auto handles loading/success/error)
 * await actions.promise(fetchData(), {
 *   loading: 'Fetching data...',
 *   success: 'Data loaded!',
 *   error: 'Failed to load data',
 * });
 */
export const useToastStore = createSelectors(baseStore);
