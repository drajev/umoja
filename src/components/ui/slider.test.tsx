/**
 * Test file for slider component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Slider } from './slider';

describe('Slider', () => {
  it('renders without crashing', () => {
    const { container } = render(<Slider defaultValue={[50]} max={100} step={1} />);
    expect(container).toBeTruthy();
  });
});
