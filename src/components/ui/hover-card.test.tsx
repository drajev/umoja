/**
 * Test file for hover-card component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HoverCard } from './hover-card';

describe('HoverCard', () => {
  it('renders without crashing', () => {
    const { container } = render(<HoverCard />);
    expect(container).toBeTruthy();
  });
});
