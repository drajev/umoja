/**
 * Test file for resizable component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ResizablePanelGroup, ResizablePanel } from './resizable';

describe('ResizablePanelGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
        <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );
    expect(container).toBeTruthy();
  });
});
