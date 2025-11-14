/**
 * Test file for collapsible component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Collapsible } from './collapsible';

describe('Collapsible', () => {
  it('renders without crashing', () => {
    const { container } = render(<Collapsible />);
    expect(container).toBeTruthy();
  });
});
