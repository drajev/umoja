import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { NAV_ITEMS } from '@/constants/navigation';
import { useIsMobile, useLanguage } from '@/hooks';
import styles from '@/styles/modules/layout.module.css';

interface SidebarProps {
  pathname: string;
  isOpen: boolean;
  onClose?: () => void;
}

const NavList = memo(({ pathname }: { pathname: string }) => {
  const { t } = useLanguage();

  return (
    <nav className={styles.sidebarNav}>
      {NAV_ITEMS.map(({ to, labelKey }) => (
        <Button
          key={to}
          variant={pathname === to ? 'secondary' : 'ghost'}
          className={styles.sidebarButton}
          size="sm"
          asChild
        >
          <Link to={to}>{t(labelKey)}</Link>
        </Button>
      ))}
    </nav>
  );
});

export const Sidebar = memo(({ pathname, isOpen, onClose }: SidebarProps) => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  // Sidebar only for tablet/mobile; desktop uses header nav
  if (!isOpen || !isMobile) return null;

  const navContent = <NavList pathname={pathname} />;

  return (
    <Sheet open={isOpen} onOpenChange={open => !open && onClose?.()}>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>{t('navigation.sidebarTitle')}</SheetTitle>
          <SheetDescription>
            {t('navigation.sidebarDescription')}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col p-4 pt-6">{navContent}</div>
      </SheetContent>
    </Sheet>
  );
});
