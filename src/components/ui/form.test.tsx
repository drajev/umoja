/**
 * Test file for form component.
 * Basic rendering and interaction tests.
 */

import { render } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, expect, it } from 'vitest';
import { Form, FormControl, FormField, FormItem, FormLabel } from './form';

describe('Form', () => {
  it('renders without crashing', () => {
    const TestComponent = () => {
      const form = useForm();
      return (
        <Form {...form}>
          <FormField
            control={form.control}
            name="test"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Test</FormLabel>
                <FormControl>
                  <input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
      );
    };
    const { container } = render(<TestComponent />);
    expect(container).toBeTruthy();
  });
});
