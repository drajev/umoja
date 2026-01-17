# Umoja - Modern Web3 Starter Template

A production-ready Web3 starter template built with **React 19.2**, **Vite**, **TypeScript**, **Tailwind CSS**, **Bun**, and **Biome**.

## ✨ Features

| Category | Technology |
|----------|------------|
| ⚡ **Runtime** | Bun - Fast JavaScript runtime & package manager |
| ⚛️ **Framework** | React 19.2 with latest features (ref-as-prop, useEffectEvent) |
| 📦 **Bundler** | Vite 7 with optimized chunking |
| 🎨 **Styling** | Tailwind CSS + CSS Modules with `@apply` |
| 🧩 **Components** | shadcn/ui - Beautiful, accessible primitives |
| 🔐 **Web3** | wagmi + RainbowKit (MetaMask, WalletConnect, etc.) |
| 📊 **State** | Zustand with `createSelectors` pattern |
| 📝 **Forms** | react-hook-form + Zod validation |
| 🧪 **Testing** | Vitest + React Testing Library |
| 🔍 **Linting** | Biome (replaces ESLint + Prettier) |
| 🚀 **CI/CD** | GitHub Actions with Bun |

## 🚀 Quick Start

### Prerequisites

- **Bun** (recommended) - [Install Bun](https://bun.sh/docs/installation)

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/umoja.git
cd umoja

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Edit .env and add your VITE_WALLETCONNECT_PROJECT_ID

# Start development server
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run lint` | Lint and auto-fix with Biome |
| `bun run format` | Format code with Biome |
| `bun run check` | Check code without fixing |
| `bun run test` | Run tests with Vitest |
| `bun run test:watch` | Run tests in watch mode |
| `bun run test:ui` | Run tests with interactive UI |
| `bun run test:coverage` | Generate coverage report |

## 📁 Project Structure

```
src/
├── components/
│   ├── core/         # Reusable components (Activity, LoadingWrapper)
│   ├── ui/           # shadcn/ui primitives
│   └── forms/        # Form components
├── hooks/            # Custom React hooks
├── stores/           # Zustand stores with createSelectors
├── utils/            # Utility functions
├── lib/              # Configuration (wagmi, axios, forms)
├── pages/            # Page components
├── styles/modules/   # CSS modules with @apply
├── schemas/          # Zod validation schemas
├── queries/          # API query hooks
└── locales/          # i18n translations (en, es)
```

## 🎨 Styling

### CSS Modules with Tailwind

```css
/* src/styles/modules/header.module.css */
.header {
  @apply sticky top-0 z-50 border-b bg-background/95;
}

.nav {
  @apply flex items-center gap-6;
}
```

```tsx
import styles from '@/styles/modules/header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>...</nav>
  </header>
);
```

## 📊 State Management

### Zustand with Auto-Generated Selectors

```typescript
import { useUIStore } from '@/stores';

// ✅ Optimized - only re-renders when theme changes
const theme = useUIStore.use.theme();
const { toggleTheme } = useUIStore.use.actions();
```

### Available Stores

- `useUIStore` - UI state (theme, sidebar)
- `useAuthStore` - Authentication (user, token)
- `useLanguageStore` - i18n language
- `useLoadingStore` - Loading states
- `useToastStore` - Toast notifications
- `useWindowStore` - Window size/breakpoints

## 🔐 Wallet Integration

Powered by **wagmi** and **RainbowKit** with support for:

- ✅ MetaMask
- ✅ WalletConnect
- ✅ Rainbow Wallet
- ✅ Trust Wallet
- ✅ Injected wallets

### Supported Chains

- Ethereum Mainnet
- Sepolia Testnet
- Polygon
- Arbitrum
- Optimism

### Setup

1. Get a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Add to `.env`:

```env
VITE_WALLETCONNECT_PROJECT_ID=your_project_id
```

3. Use the component:

```tsx
import { ConnectWallet } from '@/components/ConnectWallet';

<ConnectWallet />
```

## 🧪 Testing

Tests use **Vitest** with **React Testing Library**:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## 🔍 Code Quality

### Biome

Single tool for linting and formatting (replaces ESLint + Prettier):

```bash
bun run check   # Check for issues
bun run lint    # Fix issues
bun run format  # Format code
```

### Pre-commit Hooks

Husky + lint-staged automatically runs Biome on staged files.

## ⚛️ React 19.2 Features

This project uses modern React 19.2 patterns:

```typescript
// ✅ ref-as-prop (no forwardRef needed)
const Input = ({ ref, ...props }: InputProps) => (
  <input ref={ref} {...props} />
);

// ✅ useEffectEvent for stable event handlers
const handleScroll = useEffectEvent(() => {
  // handler logic
});
```

## 📝 Forms

### react-hook-form + Zod

```typescript
import { useCreateForm } from '@/lib/forms/createForm';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const form = useCreateForm(schema);
```

## 🌐 Internationalization

Built-in i18n support with JSON locale files:

```typescript
import { useLanguage } from '@/hooks';

const { t, language, setLanguage } = useLanguage();

<p>{t('common.welcome')}</p>
<button onClick={() => setLanguage('es')}>Español</button>
```

## 🛠️ Development

See [DEVNOTES.md](./DEVNOTES.md) for detailed development guidelines:

- Adding new components
- Creating custom hooks
- State management patterns
- CSS modules best practices
- Testing strategies

## 📄 License

MIT
