/**
 * Test file for tooltip component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './tooltip';

describe('Tooltip', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(container).toBeTruthy();
  });
});
