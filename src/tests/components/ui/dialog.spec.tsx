/**
 * Test file for dialog component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Dialog } from '@/components/ui/dialog';

describe('Dialog', () => {
  it('renders without crashing', () => {
    const { container } = render(<Dialog />);
    expect(container).toBeTruthy();
  });
});
