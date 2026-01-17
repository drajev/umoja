/**
 * Test file for radio-group component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RadioGroup } from './radio-group';

describe('RadioGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(<RadioGroup />);
    expect(container).toBeTruthy();
  });
});
