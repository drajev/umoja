/**
 * Layout component with Header and Sidebar.
 * Provides consistent layout structure across the application.
 *
 * @example
 * <Layout>
 *   <YourContent />
 * </Layout>
 */
import type { ReactNode } from "react";

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { Text } from "@/components/ui/typography";
import { useUIStore } from "@/stores";
import styles from "@/styles/modules/layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const sidebarOpen = useUIStore.use.sidebarOpen();
  const popupContent = useUIStore.use.popupContent();
  const { clearPopup } = useUIStore.use.actions();

  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.layoutContent}>
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className={styles.sidebar}>
            <Card>
              <CardContent className="pt-6">
                <Text variant="small" className="text-muted-foreground">
                  Sidebar is {sidebarOpen ? "open" : "closed"}
                </Text>
                <nav className={styles.sidebarNav}>
                  <Button
                    variant="ghost"
                    className={styles.sidebarButton}
                    size="sm"
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    className={styles.sidebarButton}
                    size="sm"
                  >
                    Strategies
                  </Button>
                  <Button
                    variant="ghost"
                    className={styles.sidebarButton}
                    size="sm"
                  >
                    Settings
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </aside>
        )}

        {/* Main Content */}
        <main className={styles.main}>{children}</main>
      </div>

      {/* Popup */}
      {popupContent && (
        <div className={styles.popupOverlay}>
          <Card className={styles.popupCard}>
            <CardContent className={styles.popupContent}>
              {popupContent}
              <Button onClick={clearPopup} className={styles.popupCloseButton}>
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};
