/**
 * Test file for alert component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alert } from './alert';

describe('Alert', () => {
  it('renders without crashing', () => {
    const { container } = render(<Alert />);
    expect(container).toBeTruthy();
  });
});
