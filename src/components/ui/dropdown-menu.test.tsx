/**
 * Test file for dropdown-menu component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DropdownMenu } from './dropdown-menu';

describe('DropdownMenu', () => {
  it('renders without crashing', () => {
    const { container } = render(<DropdownMenu />);
    expect(container).toBeTruthy();
  });
});
