/**
 * Test file for command component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Command } from './command';

describe('Command', () => {
  it('renders without crashing', () => {
    const { container } = render(<Command />);
    expect(container).toBeTruthy();
  });
});
