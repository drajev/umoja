/**
 * Typography components for consistent text styling.
 * Provides heading and text variants following design system patterns.
 *
 * Usage:
 *   <Heading level={1}>Main Title</Heading>
 *   <Text variant="body">Body text</Text>
 *   <Text variant="muted">Muted text</Text>
 *
 * To customize:
 * - Add new text variants in Text component
 * - Modify heading sizes in Heading component
 * - Add utility classes for specific typography needs
 */
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  ref?: React.Ref<HTMLHeadingElement>
}

const Heading = ({ level = 1, as, className, ref, ...props }: HeadingProps) => {
  const Component = as || (`h${level}` as const);
  const sizeClasses = {
    1: 'text-4xl font-bold tracking-tight',
    2: 'text-3xl font-semibold tracking-tight',
    3: 'text-2xl font-semibold tracking-tight',
    4: 'text-xl font-semibold',
    5: 'text-lg font-semibold',
    6: 'text-base font-semibold',
  };

  return (
    <Component
      ref={ref}
      className={cn(sizeClasses[level], className)}
      {...props}
    />
  );
};
Heading.displayName = 'Heading';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'small' | 'muted' | 'lead';
  as?: 'p' | 'span' | 'div';
  ref?: React.Ref<HTMLParagraphElement>
}

const Text = ({ variant = 'body', as: Component = 'p', className, ref, ...props }: TextProps) => {
  const variantClasses = {
    body: 'text-base',
    small: 'text-sm',
    muted: 'text-sm text-muted-foreground',
    lead: 'text-lg text-muted-foreground',
  };

  return (
    <Component
      ref={ref}
      className={cn(variantClasses[variant], className)}
      {...props}
    />
  );
};
Text.displayName = 'Text';

export { Heading, Text };
