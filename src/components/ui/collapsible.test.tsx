/**
 * Test file for collapsible component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Collapsible } from './collapsible';

describe('Collapsible', () => {
  it('renders without crashing', () => {
    const { container } = render(<Collapsible />);
    expect(container).toBeTruthy();
  });
});
