/**
 * Test file for dropdown-menu component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DropdownMenu } from '@/components/ui/dropdown-menu';

describe('DropdownMenu', () => {
  it('renders without crashing', () => {
    const { container } = render(<DropdownMenu />);
    expect(container).toBeTruthy();
  });
});
