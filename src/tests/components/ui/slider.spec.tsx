/**
 * Test file for slider component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Slider } from '@/components/ui/slider';

describe('Slider', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Slider defaultValue={[50]} max={100} step={1} />,
    );
    expect(container).toBeTruthy();
  });
});
