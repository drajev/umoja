import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '@/routes';
import { useAuthStore } from '@/stores';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const isAuthenticated = useAuthStore.use.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={routes.login} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
