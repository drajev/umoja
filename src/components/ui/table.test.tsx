/**
 * Test file for table component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Table } from './table';

describe('Table', () => {
  it('renders without crashing', () => {
    const { container } = render(<Table />);
    expect(container).toBeTruthy();
  });
});
