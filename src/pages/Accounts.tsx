import { useCallback, useState } from 'react';
import { ConfirmDeleteDialog } from '@/components/core/ConfirmDeleteDialog';
import { PageLoadingOverlay } from '@/components/core/PageLoadingOverlay';
import { AccountForm, AccountTable } from '@/components/features';
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
  useCreateAccount,
  useDeleteAccount,
  useUpdateAccount,
} from '@/queries/accounts/accounts';
import type { AccountFormData } from '@/schemas/accountSchema';
import styles from '@/styles/modules/pages.module.css';
import type { Account } from '@/types/api';

export const Accounts = () => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);
  const [deletingAccount, setDeletingAccount] = useState<Account | null>(null);

  const { data: accounts = [], isLoading } = useAccounts();
  const createMutation = useCreateAccount();
  const updateMutation = useUpdateAccount();
  const deleteMutation = useDeleteAccount();

  const handleCreate = useCallback(
    async (data: AccountFormData) => {
      await createMutation.mutateAsync({
        name: data.name,
        type: data.type,
        balance: data.balance,
        currency: data.currency,
      });
      setDialogOpen(false);
    },
    [createMutation],
  );

  const handleUpdate = useCallback(
    async (data: AccountFormData) => {
      if (!editingAccount) return;
      await updateMutation.mutateAsync({
        id: editingAccount.id,
        dto: {
          name: data.name,
          type: data.type,
          balance: data.balance,
          currency: data.currency,
        },
      });
      setEditingAccount(null);
    },
    [editingAccount, updateMutation],
  );

  const handleDelete = useCallback(async () => {
    if (!deletingAccount) return;
    await deleteMutation.mutateAsync(deletingAccount.id);
    setDeletingAccount(null);
  }, [deletingAccount, deleteMutation]);

  const isMutating = createMutation.isPending || deleteMutation.isPending;

  return (
    <div className="relative space-y-8">
      <PageLoadingOverlay show={isMutating} />
      <div className={styles.pageHeader}>
        <div>
          <Heading level={1}>{t('accounts.title')}</Heading>
          <Text variant="lead" className="text-muted-foreground">
            {t('accounts.description')}
          </Text>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>{t('accounts.addAccount')}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t('accounts.createAccount')}</DialogTitle>
              <DialogDescription>
                {t('accounts.createAccountDescription')}
              </DialogDescription>
            </DialogHeader>
            <AccountForm
              onSubmit={handleCreate}
              isSubmitting={createMutation.isPending}
              submitLabel={t('common.create')}
            />
          </DialogContent>
        </Dialog>
      </div>

      <AccountTable
        accounts={accounts}
        isLoading={isLoading}
        onEdit={setEditingAccount}
        onDelete={setDeletingAccount}
      />

      <Dialog
        open={!!editingAccount}
        onOpenChange={open => !open && setEditingAccount(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('accounts.editAccount')}</DialogTitle>
            <DialogDescription>
              {t('accounts.updateAccountDescription')}
            </DialogDescription>
          </DialogHeader>
          {editingAccount && (
            <AccountForm
              key={editingAccount.id}
              account={editingAccount}
              onSubmit={handleUpdate}
              isSubmitting={updateMutation.isPending}
              submitLabel={t('common.save')}
            />
          )}
        </DialogContent>
      </Dialog>

      <ConfirmDeleteDialog
        open={!!deletingAccount}
        onOpenChange={open => !open && setDeletingAccount(null)}
        title={t('accounts.deleteAccount')}
        description={
          deletingAccount
            ? t('accounts.deleteAccountDescription', {
                name: deletingAccount.name,
              })
            : ''
        }
        onConfirm={handleDelete}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
};
