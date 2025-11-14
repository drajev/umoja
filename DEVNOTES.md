# Developer Notes

This document contains development guidelines, patterns, and best practices for the umoja project.

## Table of Contents

- [Running Locally](#running-locally)
- [Adding New Components](#adding-new-components)
- [Adding New Hooks](#adding-new-hooks)
- [Testing Guidance](#testing-guidance)
- [Environment Variables](#environment-variables)
- [Code Style](#code-style)

## Running Locally

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Setup

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your:
   - `VITE_WALLETCONNECT_PROJECT_ID` (get from https://cloud.walletconnect.com/)
   - Optional: Custom RPC URLs for each chain

3. **Start development server:**

   ```bash
   pnpm dev
   ```

4. **Run tests:**
   ```bash
   pnpm test          # Run once
   pnpm test:watch    # Watch mode
   pnpm test:ui       # UI mode
   ```

## Adding New Components

### Component Structure

Components should follow this structure:

```
src/components/
  /core          # Reusable core components (ErrorMessage, etc.)
  /ui            # shadcn/ui primitives (Button, Card, etc.)
  /shared        # Shared business components
  /forms         # Form-specific components
```

### Creating a New Component

1. **Create the component file:**

   ```typescript
   // src/components/core/MyComponent.tsx
   import { type ReactNode } from 'react';
   import { cn } from '@/lib/utils';

   interface MyComponentProps {
     children: ReactNode;
     className?: string;
   }

   export const MyComponent = ({ children, className }: MyComponentProps) => {
     return (
       <div className={cn('base-styles', className)}>
         {children}
       </div>
     );
   };
   ```

2. **Follow naming conventions:**
   - Use PascalCase for component names
   - Use named exports (not default exports)
   - Add TypeScript types for all props
   - Include JSDoc comments explaining usage

3. **Add to styleguide:**
   Update `src/pages/Styleguide.tsx` to showcase your component.

### Using shadcn/ui Components

To add new shadcn/ui components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

This will add the component to `src/components/ui/`.

## Adding New Hooks

### Hook Structure

Hooks should be placed in `src/hooks/` and follow this pattern:

```typescript
// src/hooks/useMyHook.ts
import { useState, useEffect } from "react";

/**
 * Custom hook description.
 *
 * @param param - Parameter description
 * @returns Return value description
 */
export function useMyHook(param: string) {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    // Hook logic
  }, [param]);

  return { state, setState };
}
```

### Best Practices

- Use TypeScript for all hooks
- Include JSDoc comments
- Follow React 19.2 best practices (use `useEffectEvent` for event handlers in effects)
- Keep hooks focused and single-purpose
- Test hooks with Vitest

## Testing Guidance

### Writing Tests

Tests should be placed next to the code they test or in `src/tests/`:

```typescript
// Component.test.tsx or tests/example/Component.spec.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from '@/components/core/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent>Test</MyComponent>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Testing Patterns

- **Components**: Test rendering, user interactions, accessibility
- **Hooks**: Test state changes, side effects, edge cases
- **Stores**: Test state updates, actions, persistence
- **Forms**: Test validation, submission, error handling

### Running Tests

```bash
pnpm test              # Run all tests once
pnpm test:watch        # Watch mode for development
pnpm test:ui           # Interactive UI mode
pnpm test:coverage     # Generate coverage report
```

## Environment Variables

### Wallet Configuration

Required:

- `VITE_WALLETCONNECT_PROJECT_ID` - Get from [WalletConnect Cloud](https://cloud.walletconnect.com/)

Optional (for custom RPC endpoints):

- `VITE_RPC_URL_1` - Ethereum Mainnet
- `VITE_RPC_URL_11155111` - Sepolia Testnet
- `VITE_RPC_URL_137` - Polygon
- `VITE_RPC_URL_42161` - Arbitrum
- `VITE_RPC_URL_10` - Optimism

### Adding New Environment Variables

1. Add to `.env.example` with a comment explaining the variable
2. Use `VITE_` prefix for client-side variables
3. Access via `import.meta.env.VITE_YOUR_VAR`
4. Document in this file

## Code Style

### TypeScript

- Use strict TypeScript (no `any` types)
- Prefer type inference where possible
- Use interfaces for object shapes
- Use type aliases for unions/intersections

### React

- Use functional components only
- Use React 19.2 features where appropriate:
  - `useEffectEvent` for event handlers in effects
  - Proper dependency arrays
- Prefer named exports
- Keep components small (< 250 LOC)

### Styling

- Use Tailwind CSS utility classes
- Use `cn()` helper for conditional classes
- Follow shadcn/ui patterns
- Keep custom CSS minimal

### File Organization

```
src/
  /assets          # Static assets
  /components      # React components
    /core          # Core reusable components
    /ui            # shadcn/ui primitives
    /shared        # Shared business components
    /forms         # Form components
  /hooks           # Custom React hooks
  /lib             # Utility functions and helpers
  /pages           # Page components
  /schemas         # Zod validation schemas
  /stores          # Zustand stores
  /styles          # Global styles
  /test            # Test setup files
  /tests           # Test files
  /theme          # Theme tokens
```

## Form Patterns

### Using react-hook-form + Zod

```typescript
import { useCreateForm } from '@/lib/forms/createForm';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
});

const form = useCreateForm(schema);

// Use form.register() for inputs
<input {...form.register('name')} />
```

See `src/components/forms/StrategyForm.tsx` for a complete example.

## Custom Hooks

### useComponentVisible

Detect clicks outside a component:

```typescript
import { useComponentVisible } from '@/hooks/useComponentVisible';

const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

<div ref={ref}>
  {isComponentVisible && <Dropdown />}
</div>
```

### useDebounce

Debounce function calls:

```typescript
import { useDebounce } from "@/hooks/useDebounce";

const { debouncedCallback } = useDebounce({
  callback: (value: string) => console.log(value),
  delay: 300,
});

debouncedCallback("test");
```

### useCopyToClipboard

Copy text to clipboard:

```typescript
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useToastStore } from "@/stores/useToastStore";

const { notifications } = useToastStore();
const copyToClipboard = useCopyToClipboard({
  onSuccess: () => notifications.success("Copied!"),
});

copyToClipboard("text to copy");
```

### useLanguage

Access i18n translations:

```typescript
import { useLanguage } from '@/hooks/useLanguage';

const { language, setLanguage, t } = useLanguage();

<div>{t('common.welcome')}</div>
<button onClick={() => setLanguage('es')}>Spanish</button>
```

## State Management

### Using Zustand

```typescript
import { useUIStore } from "@/stores/useUIStore";
import { useToastStore } from "@/stores/useToastStore";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useWindowStore } from "@/stores/useWindowStore";

function MyComponent() {
  const { theme, setTheme } = useUIStore();
  const { notifications } = useToastStore();
  const { language } = useLanguageStore();
  const { windowSize } = useWindowStore();

  // Use store state and actions
  if (windowSize.isMdMobile) {
    // Mobile layout
  }
}
```

### Available Stores

- **useUIStore** - UI state (sidebar, theme, popup)
- **useLanguageStore** - Language/i18n state
- **useToastStore** - Toast notifications
- **useWindowStore** - Window size and responsive breakpoints

### Creating New Stores

1. Create store in `src/stores/`
2. Use `create` from Zustand
3. Add `persist` middleware for localStorage (if needed)
4. Add `devtools` middleware for Redux DevTools
5. Export typed hook

Example:

```typescript
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useMyStore = create<MyState>()(
  devtools(
    persist(
      (set) => ({
        // state and actions
      }),
      { name: "my-storage" }
    ),
    { name: "MyStore" }
  )
);
```

## Common Patterns

### Error Handling

Use the `ErrorMessage` component for form errors:

```typescript
<ErrorMessage errors={form.formState.errors} name="fieldName" />
```

### Conditional Rendering

Use React 19.2 patterns:

```typescript
// Simple conditional
{isVisible && <Component />}

// With Activity (React 19.2)
<Activity mode={isVisible ? 'visible' : 'hidden'}>
  <Component />
</Activity>
```

### Date Formatting

Use `date-fns`:

```typescript
import { format } from "date-fns";

const formatted = format(new Date(), "PPP");
```

## Troubleshooting

### PostCSS Errors

If you see PostCSS errors, ensure `tailwindcss` and `autoprefixer` are installed:

```bash
pnpm add -D tailwindcss autoprefixer
```

### Type Errors

Run TypeScript check:

```bash
pnpm tsc --noEmit
```

### Build Errors

Clear cache and rebuild:

```bash
rm -rf node_modules .vite dist
pnpm install
pnpm build
```

## Resources

- [React 19.2 Documentation](https://react.dev/blog/2025/10/01/react-19-2)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [wagmi Documentation](https://wagmi.sh/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [react-hook-form](https://react-hook-form.com/)
