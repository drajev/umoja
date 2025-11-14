/**
 * Test file for label component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Label } from './label';

describe('Label', () => {
  it('renders without crashing', () => {
    const { container } = render(<Label />);
    expect(container).toBeTruthy();
  });
});
