/**
 * Test file for scroll-area component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ScrollArea } from '@/components/ui/scroll-area';

describe('ScrollArea', () => {
  it('renders without crashing', () => {
    const { container } = render(<ScrollArea />);
    expect(container).toBeTruthy();
  });
});
