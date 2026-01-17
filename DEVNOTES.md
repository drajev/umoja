# Developer Notes

This document contains development guidelines, patterns, and best practices for the Umoja project.

## Table of Contents

- [Running Locally](#running-locally)
- [Project Architecture](#project-architecture)
- [Adding New Components](#adding-new-components)
- [Adding New Hooks](#adding-new-hooks)
- [State Management](#state-management)
- [Styling with CSS Modules](#styling-with-css-modules)
- [Testing Guidance](#testing-guidance)
- [Environment Variables](#environment-variables)
- [Code Style](#code-style)

## Running Locally

### Prerequisites

- **Bun** (recommended) - Fast JavaScript runtime & package manager
- Node.js 18+ (fallback)

### Setup

1. **Install Bun** (if not already installed):

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your:
   - `VITE_WALLETCONNECT_PROJECT_ID` (get from https://cloud.walletconnect.com/)
   - `VITE_API_URL` (backend API URL)
   - Optional: Custom RPC URLs for each chain

4. **Start development server:**

   ```bash
   bun dev
   ```

5. **Run tests:**

   ```bash
   bun run test           # Run once
   bun run test:watch     # Watch mode
   bun run test:ui        # UI mode
   bun run test:coverage  # With coverage
   ```

6. **Lint & Format:**

   ```bash
   bun run lint    # Lint and auto-fix with Biome
   bun run format  # Format with Biome
   bun run check   # Check without fixing
   ```

## Project Architecture

```
src/
├── assets/           # Static assets (SVGs, images)
├── components/
│   ├── animated/     # Framer Motion animated components
│   ├── core/         # Core reusable components (Activity, LoadingWrapper)
│   ├── forms/        # Form-specific components
│   └── ui/           # shadcn/ui primitives (Button, Card, etc.)
├── constants/        # Application constants
├── hooks/            # Custom React hooks (barrel export: @/hooks)
├── lib/              # Utilities and configurations
│   ├── forms/        # Form utilities (useCreateForm)
│   ├── axiosInstance.ts
│   ├── reactQuery.ts
│   ├── wagmi.ts
│   └── wallet.tsx
├── locales/          # i18n translation files (en.json, es.json)
├── pages/            # Page components
│   └── auth/         # Authentication pages
├── queries/          # API query hooks
├── routes/           # Route definitions
├── schemas/          # Zod validation schemas
├── stores/           # Zustand stores (barrel export: @/stores)
├── styles/
│   └── modules/      # CSS modules with @apply
├── test/             # Test setup files
├── tests/            # Test files
├── theme/            # Design tokens
├── types/            # Shared TypeScript types
└── utils/            # Utility functions (barrel export: @/utils)
```

## Adding New Components

### Component Structure

```typescript
// src/components/core/MyComponent.tsx
import type { ReactNode, Ref } from 'react';
import { cn } from '@/lib/utils';

interface MyComponentProps {
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

/**
 * MyComponent description.
 * @example
 * <MyComponent className="custom">Content</MyComponent>
 */
export const MyComponent = ({ children, className, ref }: MyComponentProps) => {
  return (
    <div ref={ref} className={cn('base-styles', className)}>
      {children}
    </div>
  );
};

MyComponent.displayName = 'MyComponent';
```

### Key Patterns

- **Use `ref-as-prop`** - React 19 pattern, no `forwardRef` needed
- **Use named exports** - Not default exports
- **Use `import type`** - For type-only imports (verbatimModuleSyntax)
- **Add `displayName`** - For DevTools debugging
- **Add JSDoc comments** - For documentation

### Adding shadcn/ui Components

```bash
bunx shadcn@latest add [component-name]
```

## Adding New Hooks

### Hook Structure

```typescript
// src/hooks/useMyHook.ts
import { useState, useEffect, useEffectEvent } from 'react';

/**
 * Custom hook description.
 * @param param - Parameter description
 * @returns Return value description
 */
export const useMyHook = (param: string) => {
  const [state, setState] = useState<string>('');

  // Use useEffectEvent for event handlers used in effects
  const handleChange = useEffectEvent((value: string) => {
    setState(value);
  });

  useEffect(() => {
    handleChange(param);
  }, [param, handleChange]);

  return { state };
};
```

### Export from Barrel

Add to `src/hooks/index.ts`:

```typescript
export { useMyHook } from './useMyHook';
```

## State Management

### Zustand with createSelectors

All stores use the `createSelectors` pattern for optimized re-renders:

```typescript
// src/stores/useMyStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createSelectors } from './createSelectors';

interface MyState {
  count: number;
}

interface MyActions {
  increment: () => void;
  resetStore: () => void;
}

interface MyStore extends MyState {
  actions: MyActions;
}

const initialState: MyState = {
  count: 0,
};

const baseStore = create<MyStore>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        actions: {
          increment: () => set(state => ({ count: state.count + 1 })),
          resetStore: () => set(initialState),
        },
      }),
      { name: 'my-storage' },
    ),
    { name: 'MyStore' },
  ),
);

export const useMyStore = createSelectors(baseStore);
```

### Usage in Components

```typescript
// ✅ Optimized - only re-renders when count changes
const count = useMyStore.use.count();

// ✅ Access actions
const { increment } = useMyStore.use.actions();

// ❌ Avoid - causes re-render on any state change
const { count } = useMyStore();
```

### Available Stores

| Store | Purpose |
|-------|---------|
| `useUIStore` | UI state (sidebar, theme, popup) |
| `useAuthStore` | Authentication state (user, token) |
| `useLanguageStore` | Language/i18n state |
| `useLoadingStore` | Global loading states |
| `useToastStore` | Toast notifications |
| `useWindowStore` | Window size and breakpoints |

## Styling with CSS Modules

### Using @apply with Tailwind

```css
/* src/styles/modules/myComponent.module.css */
.container {
  @apply flex flex-col gap-4;
  @apply rounded-lg border bg-card p-6;
}

.title {
  @apply text-lg font-semibold text-foreground;
}

.description {
  @apply text-sm text-muted-foreground;
}
```

### Usage in Components

```typescript
import styles from '@/styles/modules/myComponent.module.css';

export const MyComponent = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Title</h2>
    <p className={styles.description}>Description</p>
  </div>
);
```

### Guidelines

- Use CSS modules for component-specific styles
- Use `@apply` for Tailwind utilities
- Keep inline Tailwind for one-off utility classes
- Class names use camelCase in modules

## Testing Guidance

### Writing Tests

```typescript
// src/tests/example/MyComponent.spec.tsx
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

### Testing Stores

```typescript
// src/tests/stores/useMyStore.spec.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { useMyStore } from '@/stores';

describe('useMyStore', () => {
  beforeEach(() => {
    useMyStore.getState().actions.resetStore();
  });

  it('increments count', () => {
    const { increment } = useMyStore.getState().actions;
    increment();
    expect(useMyStore.getState().count).toBe(1);
  });
});
```

### Commands

```bash
bun run test              # Run all tests once
bun run test:watch        # Watch mode
bun run test:ui           # Interactive UI
bun run test:coverage     # Coverage report
```

### Vitest/Bun compatibility

`vitest.config.ts` uses `pool: 'forks'`, `maxConcurrency: 5`, and `fileParallelism: false` as workarounds for tinypool/Bun issues (worker crashes, stack overflow). Re-test with future Vitest and Bun versions and remove or relax these if they are no longer needed.

## Environment Variables

### Required

| Variable | Description |
|----------|-------------|
| `VITE_WALLETCONNECT_PROJECT_ID` | WalletConnect Project ID |

### Optional

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |
| `VITE_RPC_URL_1` | Ethereum Mainnet RPC |
| `VITE_RPC_URL_11155111` | Sepolia Testnet RPC |
| `VITE_RPC_URL_137` | Polygon RPC |
| `VITE_RPC_URL_42161` | Arbitrum RPC |
| `VITE_RPC_URL_10` | Optimism RPC |

### Adding New Variables

1. Add to `.env.example` with description
2. Use `VITE_` prefix for client-side access
3. Access via `import.meta.env.VITE_YOUR_VAR`
4. Document in this file

## Code Style

### Biome Configuration

The project uses **Biome** for linting and formatting (replaces ESLint + Prettier):

```bash
bun run lint    # Lint and auto-fix
bun run format  # Format code
bun run check   # Check without fixing
```

### TypeScript

- Strict TypeScript enabled
- No `any` types (enforced by Biome)
- Use `import type` for type-only imports
- Prefer type inference where possible

### React 19.2 Patterns

```typescript
// ✅ ref-as-prop (no forwardRef)
const Input = ({ ref, ...props }: InputProps) => (
  <input ref={ref} {...props} />
);

// ✅ useEffectEvent for event handlers in effects
const handleClick = useEffectEvent((e: MouseEvent) => {
  // event handler logic
});

useEffect(() => {
  element.addEventListener('click', handleClick);
  return () => element.removeEventListener('click', handleClick);
}, [handleClick]);
```

### File Organization

| Directory | Purpose |
|-----------|---------|
| `components/core/` | Core reusable components |
| `components/ui/` | shadcn/ui primitives |
| `hooks/` | Custom React hooks |
| `stores/` | Zustand stores |
| `utils/` | Utility functions |
| `lib/` | Configuration and setup |
| `styles/modules/` | CSS modules |

## Utility Functions

### Barrel Exports

```typescript
// Import from barrel exports
import { cn, isString, preventDefault } from '@/utils';
import { useDebounce, useIsMobile } from '@/hooks';
import { useUIStore, useAuthStore } from '@/stores';
```

### Available Utilities

| Category | Functions |
|----------|-----------|
| **Assertions** | `isString`, `isNumber`, `isArray`, `isObject`, `isDefined`, `isNullish` |
| **Callbacks** | `preventDefault`, `stopPropagation`, `noop`, `conditionalHandler` |
| **Helpers** | `cn`, `uid`, `sleep`, `deepCopy`, `groupBy`, `formatBytes`, `capitalize` |
| **Format** | `formatAddress`, `formatPrice`, `formatNumber`, `truncateDescription` |

## Troubleshooting

### Biome Errors

```bash
# Check all files
bun run check

# Auto-fix issues
bun run lint
```

### TypeScript Errors

```bash
# Type check without emit
bunx tsc --noEmit
```

### Build Errors

```bash
# Clean rebuild
rm -rf node_modules .vite dist
bun install
bun run build
```

### Test Errors

```bash
# Clear test cache
rm -rf node_modules/.vitest
bun run test
```

## Resources

- [React 19.2 Documentation](https://react.dev/)
- [Bun Documentation](https://bun.sh/docs)
- [Biome Documentation](https://biomejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [wagmi](https://wagmi.sh/)
- [Vitest](https://vitest.dev/)
