/**
 * Layout component with Header and Sidebar.
 * Provides consistent layout structure across the application.
 *
 * Usage:
 *   <Layout>
 *     <YourContent />
 *   </Layout>
 */
import { type ReactNode, useEffect } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Text } from '@/components/ui/typography';
import { Toaster } from '@/components/ui/sonner';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { sidebarOpen, theme, popupContent, clearPopup } = useUIStore();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-full border-b md:w-64 md:border-b-0 md:border-r bg-card p-4 md:flex-shrink-0">
            <Card>
              <CardContent className="pt-6">
                <Text variant="small" className="text-muted-foreground">
                  Sidebar is {sidebarOpen ? 'open' : 'closed'}
                </Text>
                <div className="mt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    Strategies
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>

      {/* Popup */}
      {popupContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              {popupContent}
              <div className="mt-4">
                <Button onClick={clearPopup} className="w-full">
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};
