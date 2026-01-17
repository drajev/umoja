/**
 * Test file for breadcrumb component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Breadcrumb } from './breadcrumb';

describe('Breadcrumb', () => {
  it('renders without crashing', () => {
    const { container } = render(<Breadcrumb />);
    expect(container).toBeTruthy();
  });
});
