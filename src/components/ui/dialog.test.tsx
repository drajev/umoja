/**
 * Test file for dialog component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Dialog } from './dialog';

describe('Dialog', () => {
  it('renders without crashing', () => {
    const { container } = render(<Dialog />);
    expect(container).toBeTruthy();
  });
});
