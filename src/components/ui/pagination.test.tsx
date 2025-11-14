/**
 * Test file for pagination component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Pagination } from './pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    const { container } = render(<Pagination />);
    expect(container).toBeTruthy();
  });
});
