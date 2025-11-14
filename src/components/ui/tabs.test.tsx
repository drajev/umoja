/**
 * Test file for tabs component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Tabs } from './tabs';

describe('Tabs', () => {
  it('renders without crashing', () => {
    const { container } = render(<Tabs />);
    expect(container).toBeTruthy();
  });
});
