/**
 * Test file for label component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Label } from '@/components/ui/label';

describe('Label', () => {
  it('renders without crashing', () => {
    const { container } = render(<Label />);
    expect(container).toBeTruthy();
  });
});
