/**
 * Test file for toast component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Toast, ToastDescription, ToastProvider, ToastTitle } from './toast';

describe('Toast', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ToastProvider>
        <Toast>
          <ToastTitle>Title</ToastTitle>
          <ToastDescription>Description</ToastDescription>
        </Toast>
      </ToastProvider>,
    );
    expect(container).toBeTruthy();
  });
});
