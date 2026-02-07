import type { ReactNode } from 'react';
import { Component } from 'react';
import { t } from '@/lib/i18n';
import styles from '@/styles/modules/core.module.css';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static displayName = 'ErrorBoundary';

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, errorInfo);
    }
    // TODO: report to error service (e.g. Sentry) in production
  }

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div role="alert" className={styles.errorFallback}>
          <h2 className="font-semibold text-foreground text-lg">
            {t('error.somethingWentWrong')}
          </h2>
          <p className="text-muted-foreground text-sm">
            {this.state.error.message}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className={styles.errorReloadButton}
          >
            {t('error.reloadPage')}
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
