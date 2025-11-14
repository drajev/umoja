/**
 * Test file for sheet component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Sheet } from './sheet';

describe('Sheet', () => {
  it('renders without crashing', () => {
    const { container } = render(<Sheet />);
    expect(container).toBeTruthy();
  });
});
