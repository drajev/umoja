/**
 * Test file for alert-dialog component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AlertDialog } from './alert-dialog';

describe('AlertDialog', () => {
  it('renders without crashing', () => {
    const { container } = render(<AlertDialog />);
    expect(container).toBeTruthy();
  });
});
