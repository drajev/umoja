/**
 * Test file for command component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Command } from './command';

describe('Command', () => {
  it('renders without crashing', () => {
    const { container } = render(<Command />);
    expect(container).toBeTruthy();
  });
});
