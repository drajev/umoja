/**
 * Test file for hover-card component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HoverCard } from '@/components/ui/hover-card';

describe('HoverCard', () => {
  it('renders without crashing', () => {
    const { container } = render(<HoverCard />);
    expect(container).toBeTruthy();
  });
});
