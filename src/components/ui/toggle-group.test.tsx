/**
 * Test file for toggle-group component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

describe('ToggleGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    );
    expect(container).toBeTruthy();
  });
});
