/**
 * Test file for progress component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Progress } from './progress';

describe('Progress', () => {
  it('renders without crashing', () => {
    const { container } = render(<Progress />);
    expect(container).toBeTruthy();
  });
});
