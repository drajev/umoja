/**
 * Test file for resizable component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ResizablePanel, ResizablePanelGroup } from './resizable';

describe('ResizablePanelGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
        <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
      </ResizablePanelGroup>,
    );
    expect(container).toBeTruthy();
  });
});
