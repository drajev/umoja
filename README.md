# umoja - Web3 Starter Template

A production-ready Web3 starter template built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- ⚡ **Vite** - Fast dev server with HMR
- ⚛️ **React 19** - Latest React with TypeScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible component primitives
- 🧪 **Vitest** - Fast unit testing framework
- 📝 **TypeScript** - Full type safety
- 🎯 **ESLint + Prettier** - Code quality and formatting
- 🛣️ **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm test` - Run tests with Vitest
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage report

## Project Structure

```
umoja/
├── src/
│   ├── assets/          # Static assets
│   ├── components/
│   │   ├── core/        # Core reusable components (Toast, ErrorMessage)
│   │   ├── ui/          # shadcn/ui primitives (Button, Card, etc.)
│   │   ├── shared/      # Shared business components
│   │   └── forms/       # Form components
│   ├── constants/       # Application constants (languages, etc.)
│   ├── hooks/           # Custom React hooks
│   │   ├── useComponentVisible.ts
│   │   ├── useDebounce.ts
│   │   ├── useCopyToClipboard.ts
│   │   └── useLanguage.ts
│   ├── lib/
│   │   ├── forms/       # Form utilities
│   │   ├── utils.ts     # Utility functions
│   │   ├── wallet.tsx   # Wallet provider
│   │   ├── wagmi.ts     # Wagmi configuration
│   │   ├── axiosInstance.ts  # Axios setup
│   │   └── reactQuery.ts     # React Query setup
│   ├── locales/         # i18n translation files
│   │   ├── en.json
│   │   └── es.json
│   ├── pages/           # Page components
│   ├── queries/          # TanStack Query hooks
│   ├── routes/           # Route definitions
│   ├── schemas/          # Zod validation schemas
│   ├── stores/           # Zustand stores
│   │   ├── useUIStore.ts
│   │   ├── useLanguageStore.ts
│   │   ├── useToastStore.ts
│   │   └── useWindowStore.ts
│   ├── test/             # Test setup files
│   ├── tests/            # Test files
│   ├── types/            # Shared TypeScript types
│   ├── utils/             # Utility functions
│   │   ├── debounce.ts
│   │   ├── format.ts
│   │   └── constants.ts
│   ├── theme/
│   │   └── tokens.ts      # Design tokens
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .github/workflows/    # CI/CD workflows
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
├── vitest.config.ts      # Vitest configuration
└── tsconfig.json         # TypeScript configuration
```

## Design System

Visit `/styleguide` to see all available components, design tokens, and patterns.

### Components

- **Button** - Multiple variants (default, secondary, destructive, outline, ghost, link) and sizes
- **Card** - Composable card component with header, content, and footer
- **Typography** - Heading and Text components with variants
- **ErrorMessage** - Form error display component
- **StrategyForm** - Example form with react-hook-form + Zod validation
- **Layout** - Layout component with sidebar and theme toggle
- **ConnectWallet** - Wallet connection component

### Design Tokens

All design tokens are defined in `src/index.css` using CSS custom properties and mapped in `src/theme/tokens.ts` for programmatic access.

## Path Aliases

The project uses `@/` as an alias for the `src/` directory:

```typescript
import { Button } from "@/components/ui/button";
import { tokens } from "@/theme/tokens";
```

## Styling

This project uses Tailwind CSS for styling. All components follow shadcn/ui patterns and use Tailwind utility classes.

### Customization

- **Theme colors**: Modify CSS custom properties in `src/index.css`
- **Tailwind config**: Extend theme in `tailwind.config.ts`
- **Components**: Customize shadcn/ui components in `src/components/ui/`

## Testing

Tests are written with Vitest and React Testing Library. Test files should be placed next to the code they test with a `.test.ts` or `.test.tsx` extension.

Example:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Code Quality

- **ESLint**: Configured with recommended React and TypeScript rules
- **Prettier**: Configured with Tailwind CSS plugin for class sorting
- **TypeScript**: Strict mode enabled with comprehensive type checking

## Wallet Integration

This project includes wallet integration using **wagmi** and **RainbowKit**.

### Why wagmi + RainbowKit?

- **wagmi**: React hooks for Ethereum, providing type-safe access to wallet state and actions
- **RainbowKit**: Beautiful, accessible wallet connection UI that works with multiple wallets
- **Together**: Best-in-class developer experience with minimal configuration and excellent TypeScript support

### Setup

1. **Get a WalletConnect Project ID** (required for WalletConnect support):
   - Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Sign up and create a new project
   - Copy your Project ID

2. **Create a `.env` file** in the root directory:

```bash
# Required: WalletConnect Project ID
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Optional: Custom RPC URLs (if not provided, public RPCs will be used)
# Format: VITE_RPC_URL_<CHAIN_ID>=https://your-rpc-url.com

# Examples:
# VITE_RPC_URL_1=https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
# VITE_RPC_URL_11155111=https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY
# VITE_RPC_URL_137=https://polygon-mainnet.g.alchemy.com/v2/YOUR_API_KEY
```

3. **Use the ConnectWallet component**:

```tsx
import { ConnectWallet } from "@/components/ConnectWallet";

function MyComponent() {
  return <ConnectWallet />;
}
```

### Supported Chains

- Ethereum Mainnet
- Sepolia Testnet
- Polygon
- Arbitrum
- Optimism

### Features

- ✅ Connect/disconnect wallet
- ✅ Display wallet address
- ✅ Display wallet balance
- ✅ Automatic chain switching
- ✅ Support for MetaMask, WalletConnect, and other popular wallets
- ✅ SSR-safe (no window usage on server)

## Features Included

### ✅ Form Handling

This project includes form utilities with react-hook-form and Zod:

```typescript
import { useCreateForm } from "@/lib/forms/createForm";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
});

const form = useCreateForm(schema);
```

See `src/components/forms/StrategyForm.tsx` for a complete example.

### ✅ State Management

Zustand store with persistence and devtools:

```typescript
import { useUIStore } from "@/stores/useUIStore";

const { theme, setTheme, sidebarOpen, toggleSidebar } = useUIStore();
```

### ✅ Testing

Vitest setup with React Testing Library:

```bash
pnpm test          # Run tests
pnpm test:watch    # Watch mode
pnpm test:coverage # Coverage report
```

### ✅ CI/CD

- GitHub Actions workflow for CI
- Husky pre-commit hooks
- lint-staged for automatic formatting

### ✅ Custom Hooks

Useful React hooks for common patterns:

- **useComponentVisible** - Detect clicks outside a component
- **useDebounce** - Debounce function calls
- **useCopyToClipboard** - Copy text to clipboard with notifications
- **useLanguage** - Access i18n translations

### ✅ Utilities

- **debounce** - Debounce utility function
- **format** - Formatting helpers (address, price, numbers)
- **constants** - Application constants and env variables

### ✅ Enhanced Stores

- **useUIStore** - UI state (sidebar, theme, popup)
- **useLanguageStore** - Language/i18n state
- **useToastStore** - Toast notifications
- **useWindowStore** - Window size and responsive breakpoints

## Development

See [DEVNOTES.md](./DEVNOTES.md) for detailed development guidelines including:

- How to add new components
- How to add new hooks
- Testing patterns
- Code style guidelines

## License

MIT
