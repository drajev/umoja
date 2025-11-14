/**
 * Test file for toast component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Toast, ToastTitle, ToastDescription, ToastProvider } from './toast';

describe('Toast', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ToastProvider>
        <Toast>
          <ToastTitle>Title</ToastTitle>
          <ToastDescription>Description</ToastDescription>
        </Toast>
      </ToastProvider>
    );
    expect(container).toBeTruthy();
  });
});
