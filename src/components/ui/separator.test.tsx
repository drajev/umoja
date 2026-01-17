/**
 * Test file for separator component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Separator } from './separator';

describe('Separator', () => {
  it('renders without crashing', () => {
    const { container } = render(<Separator />);
    expect(container).toBeTruthy();
  });
});
