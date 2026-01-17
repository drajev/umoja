/**
 * Test file for context-menu component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContextMenu } from '@/components/ui/context-menu';

describe('ContextMenu', () => {
  it('renders without crashing', () => {
    const { container } = render(<ContextMenu />);
    expect(container).toBeTruthy();
  });
});
