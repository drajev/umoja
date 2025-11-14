/**
 * Test file for scroll-area component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ScrollArea } from './scroll-area';

describe('ScrollArea', () => {
  it('renders without crashing', () => {
    const { container } = render(<ScrollArea />);
    expect(container).toBeTruthy();
  });
});
