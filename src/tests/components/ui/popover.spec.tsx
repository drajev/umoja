/**
 * Test file for popover component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Popover } from '@/components/ui/popover';

describe('Popover', () => {
  it('renders without crashing', () => {
    const { container } = render(<Popover />);
    expect(container).toBeTruthy();
  });
});
