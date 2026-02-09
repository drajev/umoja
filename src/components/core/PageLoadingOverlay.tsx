import { Spinner } from '@/components/ui/spinner';
import styles from '@/styles/modules/core.module.css';

interface PageLoadingOverlayProps {
  show: boolean;
}

/**
 * Full-page loading overlay with centered spinner.
 * Use when create/delete mutations are in progress to block the page and show feedback.
 */
export const PageLoadingOverlay = ({ show }: PageLoadingOverlayProps) => {
  if (!show) return null;

  return (
    <div className={styles.loadingOverlay} aria-live="polite" aria-busy="true">
      <Spinner className="size-10 text-primary" />
    </div>
  );
};
