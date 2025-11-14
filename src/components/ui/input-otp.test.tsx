/**
 * Test file for input-otp component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './input-otp';

describe('InputOTP', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
      </InputOTP>
    );
    expect(container).toBeTruthy();
  });
});
