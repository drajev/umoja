/**
 * Test file for alert-dialog component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AlertDialog } from '@/components/ui/alert-dialog';

describe('AlertDialog', () => {
  it('renders without crashing', () => {
    const { container } = render(<AlertDialog />);
    expect(container).toBeTruthy();
  });
});
