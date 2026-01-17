/**
 * Test file for card component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './card';

describe('Card', () => {
  it('renders without crashing', () => {
    const { container } = render(<Card />);
    expect(container).toBeTruthy();
  });
});
