/**
 * Tests for useToastStore.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useToastStore } from '@/stores/useToastStore';
import { toast as sonnerToast } from 'sonner';

// Mock sonner
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    warning: vi.fn(),
    info: vi.fn(),
  },
}));

describe('useToastStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call sonner.success when notifications.success is called', () => {
    const { notifications } = useToastStore.getState();
    notifications.success('Test success message');

    expect(sonnerToast.success).toHaveBeenCalledWith('Test success message', {
      description: undefined,
      duration: undefined,
    });
  });

  it('should call sonner.error when notifications.error is called', () => {
    const { notifications } = useToastStore.getState();
    notifications.error('Test error message');

    expect(sonnerToast.error).toHaveBeenCalledWith('Test error message', {
      description: undefined,
      duration: undefined,
    });
  });

  it('should call sonner.warning when notifications.warning is called', () => {
    const { notifications } = useToastStore.getState();
    notifications.warning('Test warning message');

    expect(sonnerToast.warning).toHaveBeenCalledWith('Test warning message', {
      description: undefined,
      duration: undefined,
    });
  });

  it('should call sonner.info when notifications.info is called', () => {
    const { notifications } = useToastStore.getState();
    notifications.info('Test info message');

    expect(sonnerToast.info).toHaveBeenCalledWith('Test info message', {
      description: undefined,
      duration: undefined,
    });
  });

  it('should pass options to sonner', () => {
    const { notifications } = useToastStore.getState();
    notifications.success('Test message', { title: 'Test Title', duration: 3000 });

    expect(sonnerToast.success).toHaveBeenCalledWith('Test message', {
      description: 'Test Title',
      duration: 3000,
    });
  });
});
