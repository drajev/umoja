import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks';
import { useUIStore } from '@/stores';
import styles from '@/styles/modules/layout.module.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Popup } from './Popup';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const sidebarOpen = useUIStore.use.sidebarOpen();
  const popupContent = useUIStore.use.popupContent();
  const { clearPopup, setSidebarOpen } = useUIStore.use.actions();

  // Close sidebar when resizing from mobile to desktop to avoid stale open state
  useEffect(() => {
    if (!isMobile) setSidebarOpen(false);
  }, [isMobile, setSidebarOpen]);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layoutContent}>
        <Sidebar
          pathname={location.pathname}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className={styles.main}>{children}</main>
      </div>
      <Popup content={popupContent} onClose={clearPopup} />
      <Footer />
    </div>
  );
};
