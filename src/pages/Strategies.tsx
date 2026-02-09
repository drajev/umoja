import { useCallback, useState } from 'react';
import { ConfirmDeleteDialog } from '@/components/core/ConfirmDeleteDialog';
import { PageLoadingOverlay } from '@/components/core/PageLoadingOverlay';
import { StrategyForm, StrategyTable } from '@/components/features/strategies';
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
  useCreateStrategy,
  useDeleteStrategy,
  useStrategies,
  useUpdateStrategy,
} from '@/queries';
import type { StrategyFormData } from '@/schemas/createStrategySchema';
import styles from '@/styles/modules/pages.module.css';
import type { Strategy } from '@/types/api';
import { formatDateOnly } from '@/utils/format';

export const Strategies = () => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingStrategy, setEditingStrategy] = useState<Strategy | null>(null);
  const [deletingStrategy, setDeletingStrategy] = useState<Strategy | null>(
    null,
  );

  const { data: strategies = [], isLoading } = useStrategies();
  const createMutation = useCreateStrategy();
  const updateMutation = useUpdateStrategy();
  const deleteMutation = useDeleteStrategy();

  const handleCreate = useCallback(
    async (data: StrategyFormData) => {
      await createMutation.mutateAsync({
        name: data.name,
        description: data.description,
        amount: Number(data.amount),
        riskLevel: data.riskLevel,
        startDate: data.startDate,
      });
      setDialogOpen(false);
    },
    [createMutation],
  );

  const handleUpdate = useCallback(
    async (data: StrategyFormData) => {
      if (!editingStrategy) return;
      await updateMutation.mutateAsync({
        id: editingStrategy.id,
        dto: {
          name: data.name,
          description: data.description,
          amount: Number(data.amount),
          riskLevel: data.riskLevel,
          startDate: data.startDate,
        },
      });
      setEditingStrategy(null);
    },
    [editingStrategy, updateMutation],
  );

  const handleDelete = useCallback(async () => {
    if (!deletingStrategy) return;
    await deleteMutation.mutateAsync(deletingStrategy.id);
    setDeletingStrategy(null);
  }, [deletingStrategy, deleteMutation]);

  const isMutating = createMutation.isPending || deleteMutation.isPending;

  return (
    <div className="relative space-y-8">
      <PageLoadingOverlay show={isMutating} />
      <div className={styles.pageHeader}>
        <div>
          <Heading level={1}>{t('strategies.title')}</Heading>
          <Text variant="lead" className="text-muted-foreground">
            {t('strategies.description')}
          </Text>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>{t('strategies.addStrategy')}</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{t('strategies.createStrategy')}</DialogTitle>
              <DialogDescription>
                {t('strategies.createStrategyDescription')}
              </DialogDescription>
            </DialogHeader>
            <StrategyForm
              showCard={false}
              onSubmit={handleCreate}
              isSubmitting={createMutation.isPending}
              submitLabel={t('common.create')}
            />
          </DialogContent>
        </Dialog>
      </div>

      <StrategyTable
        strategies={strategies}
        isLoading={isLoading}
        onEdit={setEditingStrategy}
        onDelete={setDeletingStrategy}
      />

      <Dialog
        open={!!editingStrategy}
        onOpenChange={open => !open && setEditingStrategy(null)}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t('strategies.editStrategy')}</DialogTitle>
            <DialogDescription>
              {t('strategies.updateStrategyDescription')}
            </DialogDescription>
          </DialogHeader>
          {editingStrategy && (
            <StrategyForm
              key={editingStrategy.id}
              showCard={false}
              defaultValues={{
                name: editingStrategy.name,
                description: editingStrategy.description ?? '',
                amount: editingStrategy.amount,
                riskLevel: editingStrategy.riskLevel,
                startDate: formatDateOnly(editingStrategy.startDate),
              }}
              onSubmit={handleUpdate}
              isSubmitting={updateMutation.isPending}
              submitLabel={t('common.save')}
            />
          )}
        </DialogContent>
      </Dialog>

      <ConfirmDeleteDialog
        open={!!deletingStrategy}
        onOpenChange={open => !open && setDeletingStrategy(null)}
        title={t('strategies.deleteStrategy')}
        description={
          deletingStrategy
            ? t('strategies.deleteStrategyDescription', {
                name: deletingStrategy.name,
              })
            : ''
        }
        onConfirm={handleDelete}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
};
