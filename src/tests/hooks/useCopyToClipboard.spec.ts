import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

/**
 * Tests for useCopyToClipboard hook.
 */
describe('useCopyToClipboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('should copy text to clipboard', async () => {
    const onSuccess = vi.fn();
    const { result } = renderHook(() =>
      useCopyToClipboard({
        onSuccess,
      }),
    );

    await act(async () => {
      await result.current('test text');
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test text');
    // onSuccess is called with the text that was copied
    expect(onSuccess).toHaveBeenCalledWith('test text');
  });

  it('should handle errors', async () => {
    const onError = vi.fn();
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(
      new Error('Failed'),
    );

    const { result } = renderHook(() =>
      useCopyToClipboard({
        onError,
      }),
    );

    await act(async () => {
      await result.current('test text');
    });

    expect(onError).toHaveBeenCalled();
  });
});
