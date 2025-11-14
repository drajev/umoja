/**
 * Test file for popover component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Popover } from './popover';

describe('Popover', () => {
  it('renders without crashing', () => {
    const { container } = render(<Popover />);
    expect(container).toBeTruthy();
  });
});
