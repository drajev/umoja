import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Spinner } from '@/components/ui/spinner';
import { useLanguage } from '@/hooks';
import styles from '@/styles/modules/core.module.css';

interface ConfirmDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  onConfirm: () => void | Promise<void>;
  confirmLabel?: string;
  isDeleting?: boolean;
}

export const ConfirmDeleteDialog = ({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  confirmLabel,
  isDeleting = false,
}: ConfirmDeleteDialogProps) => {
  const { t } = useLanguage();
  const handleConfirm = (e: React.MouseEvent) => {
    e.preventDefault();
    void onConfirm();
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t('common.cancel')}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={isDeleting}
            className={styles.confirmDeleteButton}
          >
            {isDeleting ? (
              <Spinner className="size-4" />
            ) : (
              (confirmLabel ?? t('common.delete'))
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
