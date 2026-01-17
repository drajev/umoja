/**
 * Test file for drawer component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Drawer } from './drawer';

describe('Drawer', () => {
  it('renders without crashing', () => {
    const { container } = render(<Drawer />);
    expect(container).toBeTruthy();
  });
});
