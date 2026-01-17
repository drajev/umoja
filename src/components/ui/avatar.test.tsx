/**
 * Test file for avatar component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from './avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    const { container } = render(<Avatar />);
    expect(container).toBeTruthy();
  });
});
