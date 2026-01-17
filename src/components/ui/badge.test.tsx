/**
 * Test file for badge component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders without crashing', () => {
    const { container } = render(<Badge />);
    expect(container).toBeTruthy();
  });
});
