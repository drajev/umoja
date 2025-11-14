/**
 * Test file for aspect-ratio component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AspectRatio } from './aspect-ratio';

describe('AspectRatio', () => {
  it('renders without crashing', () => {
    const { container } = render(<AspectRatio />);
    expect(container).toBeTruthy();
  });
});
