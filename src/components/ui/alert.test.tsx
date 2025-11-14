/**
 * Test file for alert component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Alert } from './alert';

describe('Alert', () => {
  it('renders without crashing', () => {
    const { container } = render(<Alert />);
    expect(container).toBeTruthy();
  });
});
