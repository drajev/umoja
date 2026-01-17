/**
 * Test file for aspect-ratio component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AspectRatio } from '@/components/ui/aspect-ratio';

describe('AspectRatio', () => {
  it('renders without crashing', () => {
    const { container } = render(<AspectRatio />);
    expect(container).toBeTruthy();
  });
});
