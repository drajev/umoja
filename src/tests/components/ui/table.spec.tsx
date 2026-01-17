/**
 * Test file for table component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Table } from '@/components/ui/table';

describe('Table', () => {
  it('renders without crashing', () => {
    const { container } = render(<Table />);
    expect(container).toBeTruthy();
  });
});
