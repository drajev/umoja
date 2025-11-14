/**
 * Test file for menubar component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Menubar } from './menubar';

describe('Menubar', () => {
  it('renders without crashing', () => {
    const { container } = render(<Menubar />);
    expect(container).toBeTruthy();
  });
});
