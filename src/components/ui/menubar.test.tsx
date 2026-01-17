/**
 * Test file for menubar component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Menubar } from './menubar';

describe('Menubar', () => {
  it('renders without crashing', () => {
    const { container } = render(<Menubar />);
    expect(container).toBeTruthy();
  });
});
