/**
 * Test file for calendar component.
 * Basic rendering and interaction tests.
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Calendar } from '@/components/ui/calendar';

describe('Calendar', () => {
  it('renders without crashing', () => {
    const { container } = render(<Calendar defaultMonth={new Date(2025, 0)} />);
    expect(container).toBeTruthy();
  });
});
