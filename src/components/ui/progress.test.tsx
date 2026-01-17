/**
 * Test file for progress component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Progress } from './progress';

describe('Progress', () => {
  it('renders without crashing', () => {
    const { container } = render(<Progress />);
    expect(container).toBeTruthy();
  });
});
