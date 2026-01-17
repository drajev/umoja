/**
 * Application entry point.
 * Renders the root App component with React StrictMode and wallet providers.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { App } from './App.tsx';
import './index.css';
import { WalletProvider } from './lib/wallet.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <WalletProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </WalletProvider>
  </StrictMode>,
);
