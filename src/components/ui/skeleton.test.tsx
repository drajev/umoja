/**
 * Test file for skeleton component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  it('renders without crashing', () => {
    const { container } = render(<Skeleton />);
    expect(container).toBeTruthy();
  });
});
