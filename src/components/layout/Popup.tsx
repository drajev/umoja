import type { ReactNode } from 'react';

import { Dialog, DialogContent } from '@/components/ui/dialog';

interface PopupProps {
  content: ReactNode | null;
  onClose: () => void;
}

export const Popup = ({ content, onClose }: PopupProps) => {
  const open = Boolean(content);

  return (
    <Dialog open={open} onOpenChange={open => !open && onClose()}>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};
