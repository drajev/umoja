/**
 * Test file for sheet component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Sheet } from './sheet';

describe('Sheet', () => {
  it('renders without crashing', () => {
    const { container } = render(<Sheet />);
    expect(container).toBeTruthy();
  });
});
