/**
 * Test file for context-menu component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ContextMenu } from './context-menu';

describe('ContextMenu', () => {
  it('renders without crashing', () => {
    const { container } = render(<ContextMenu />);
    expect(container).toBeTruthy();
  });
});
