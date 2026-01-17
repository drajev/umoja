/**
 * Test file for tabs component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tabs } from './tabs';

describe('Tabs', () => {
  it('renders without crashing', () => {
    const { container } = render(<Tabs />);
    expect(container).toBeTruthy();
  });
});
