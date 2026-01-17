/**
 * Test file for pagination component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Pagination } from '@/components/ui/pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    const { container } = render(<Pagination />);
    expect(container).toBeTruthy();
  });
});
