import type { HTMLAttributes, Ref } from 'react';

import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

/**
 * Composable card with header, title, description, content, and footer sections.
 *
 * Usage:
 *   <Card>
 *     <CardHeader>
 *       <CardTitle>Title</CardTitle>
 *       <CardDescription>Description</CardDescription>
 *     </CardHeader>
 *     <CardContent>Content here</CardContent>
 *     <CardFooter>Footer content</CardFooter>
 *   </Card>
 *
 * To customize:
 * - Modify padding/spacing in individual sub-components
 * - Add new variants if needed (e.g., elevated, outlined)
 */
const Card = ({ className, ref, ...props }: CardProps) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className,
    )}
    {...props}
  />
);
Card.displayName = 'Card';

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

const CardHeader = ({ className, ref, ...props }: CardHeaderProps) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  ref?: Ref<HTMLHeadingElement>;
}

const CardTitle = ({ className, ref, ...props }: CardTitleProps) => (
  <h3
    ref={ref}
    className={cn(
      'font-semibold text-2xl leading-none tracking-tight',
      className,
    )}
    {...props}
  />
);
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  ref?: Ref<HTMLParagraphElement>;
}

const CardDescription = ({
  className,
  ref,
  ...props
}: CardDescriptionProps) => (
  <p
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
);
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

const CardContent = ({ className, ref, ...props }: CardContentProps) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
);
CardContent.displayName = 'CardContent';

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

const CardFooter = ({ className, ref, ...props }: CardFooterProps) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
