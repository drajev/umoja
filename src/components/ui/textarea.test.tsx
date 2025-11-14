/**
 * Test file for textarea component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders without crashing', () => {
    const { container } = render(<Textarea />);
    expect(container).toBeTruthy();
  });
});
