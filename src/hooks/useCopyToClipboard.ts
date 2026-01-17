/**
 * Hook for copying text to clipboard with optional success/error callbacks.
 *
 * Usage:
 *   const copyToClipboard = useCopyToClipboard({
 *     onSuccess: () => console.log('Copied!'),
 *     onError: (err) => console.error(err),
 *   });
 *   copyToClipboard('text to copy');
 *
 * @returns Function to copy text to clipboard
 */
import { useCallback } from 'react';

interface UseCopyToClipboardOptions {
  onSuccess?: (text: string) => void;
  onError?: (error: Error) => void;
}

export const useCopyToClipboard = (options?: UseCopyToClipboardOptions) => {
  const copyToClipboard = useCallback(
    async (text: string) => {
      try {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
          await navigator.clipboard.writeText(text);
          if (options?.onSuccess) {
            options.onSuccess(text);
          }
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          if (options?.onSuccess) {
            options.onSuccess(text);
          }
        }
      } catch (error) {
        const err =
          error instanceof Error ? error : new Error('Failed to copy');
        if (options?.onError) {
          options.onError(err);
        }
      }
    },
    [options],
  );

  return copyToClipboard;
};
