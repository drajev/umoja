import { useCallback, useState } from 'react';
import { ConfirmDeleteDialog } from '@/components/core/ConfirmDeleteDialog';
import { PageLoadingOverlay } from '@/components/core/PageLoadingOverlay';
import {
  TransactionForm,
  TransactionTable,
} from '@/components/features/transactions';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Heading, Text } from '@/components/ui/typography';
import { useLanguage } from '@/hooks';
import {
  useAccounts,
  useCreateTransaction,
  useDeleteTransaction,
  useTransactions,
  useUpdateTransaction,
} from '@/queries';
import type { TransactionFormData } from '@/schemas/transactionSchema';
import styles from '@/styles/modules/pages.module.css';
import type { Transaction } from '@/types/api';

export const Transactions = () => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);
  const [deletingTransaction, setDeletingTransaction] =
    useState<Transaction | null>(null);

  const { data: accounts = [] } = useAccounts();
  const { data: transactions = [], isLoading } = useTransactions();
  const createMutation = useCreateTransaction();
  const updateMutation = useUpdateTransaction();
  const deleteMutation = useDeleteTransaction();

  const handleCreate = useCallback(
    async (data: TransactionFormData) => {
      await createMutation.mutateAsync({
        ...data,
        amount: Number(data.amount),
      });
      setDialogOpen(false);
    },
    [createMutation],
  );

  const handleUpdate = useCallback(
    async (data: TransactionFormData) => {
      if (!editingTransaction) return;
      await updateMutation.mutateAsync({
        id: editingTransaction.id,
        dto: {
          ...data,
          amount: Number(data.amount),
        },
      });
      setEditingTransaction(null);
    },
    [editingTransaction, updateMutation],
  );

  const handleDelete = useCallback(async () => {
    if (!deletingTransaction) return;
    await deleteMutation.mutateAsync(deletingTransaction.id);
    setDeletingTransaction(null);
  }, [deletingTransaction, deleteMutation]);

  const isMutating = createMutation.isPending || deleteMutation.isPending;

  return (
    <div className="relative space-y-8">
      <PageLoadingOverlay show={isMutating} />
      <div className={styles.pageHeader}>
        <div>
          <Heading level={1}>{t('transactions.title')}</Heading>
          <Text variant="lead" className="text-muted-foreground">
            {t('transactions.description')}
          </Text>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button disabled={accounts.length === 0}>
              {t('transactions.addTransaction')}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t('transactions.createTransaction')}</DialogTitle>
              <DialogDescription>
                {t('transactions.createTransactionDescription')}
              </DialogDescription>
            </DialogHeader>
            <TransactionForm
              accounts={accounts}
              onSubmit={handleCreate}
              isSubmitting={createMutation.isPending}
              submitLabel={t('common.create')}
            />
          </DialogContent>
        </Dialog>
      </div>

      {accounts.length === 0 && (
        <div className={styles.warningBanner}>
          <Text variant="small">{t('transactions.createAccountFirst')}</Text>
        </div>
      )}

      <TransactionTable
        transactions={transactions}
        accounts={accounts}
        isLoading={isLoading}
        onEdit={setEditingTransaction}
        onDelete={setDeletingTransaction}
      />

      <Dialog
        open={!!editingTransaction}
        onOpenChange={open => !open && setEditingTransaction(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('transactions.editTransaction')}</DialogTitle>
            <DialogDescription>
              {t('transactions.updateTransactionDescription')}
            </DialogDescription>
          </DialogHeader>
          {editingTransaction && (
            <TransactionForm
              key={editingTransaction.id}
              accounts={accounts}
              transaction={editingTransaction}
              onSubmit={handleUpdate}
              isSubmitting={updateMutation.isPending}
              submitLabel={t('common.save')}
            />
          )}
        </DialogContent>
      </Dialog>

      <ConfirmDeleteDialog
        open={!!deletingTransaction}
        onOpenChange={open => !open && setDeletingTransaction(null)}
        title={t('transactions.deleteTransaction')}
        description={
          deletingTransaction
            ? t('transactions.deleteTransactionDescription', {
                description: deletingTransaction.description,
              })
            : ''
        }
        onConfirm={handleDelete}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
};
