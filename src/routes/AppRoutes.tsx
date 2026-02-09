/**
 * Application route definitions.
 * Centralizes all route-to-component mappings for separation of concerns.
 * Uses lazy loading for code splitting - pages load on demand.
 */
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/components/features/auth';
import { Layout } from '@/components/layout';
import { Skeleton } from '@/components/ui/skeleton';
import { routes } from '@/routes';

const Accounts = lazy(() =>
  import('@/pages/Accounts').then(m => ({ default: m.Accounts })),
);
const Dashboard = lazy(() =>
  import('@/pages/Dashboard').then(m => ({ default: m.Dashboard })),
);
const Home = lazy(() =>
  import('@/pages/Home').then(m => ({ default: m.Home })),
);
const Profile = lazy(() =>
  import('@/pages/Profile').then(m => ({ default: m.Profile })),
);
const Settings = lazy(() =>
  import('@/pages/Settings').then(m => ({ default: m.Settings })),
);
const Strategies = lazy(() =>
  import('@/pages/Strategies').then(m => ({ default: m.Strategies })),
);
const Styleguide = lazy(() =>
  import('@/pages/Styleguide').then(m => ({ default: m.Styleguide })),
);
const Transactions = lazy(() =>
  import('@/pages/Transactions').then(m => ({ default: m.Transactions })),
);
const Login = lazy(() =>
  import('@/pages/auth/Login').then(m => ({ default: m.Login })),
);
const Register = lazy(() =>
  import('@/pages/auth/Register').then(m => ({ default: m.Register })),
);
const ForgotPassword = lazy(() =>
  import('@/pages/auth/ForgotPassword').then(m => ({
    default: m.ForgotPassword,
  })),
);
const ResetPassword = lazy(() =>
  import('@/pages/auth/ResetPassword').then(m => ({
    default: m.ResetPassword,
  })),
);

const PageSkeleton = () => (
  <div className="space-y-4 p-4">
    <Skeleton className="h-8 w-48" />
    <Skeleton className="h-64 w-full" />
  </div>
);

export const AppRoutes = () => (
  <Routes>
    <Route
      path={routes.login}
      element={
        <Suspense fallback={<PageSkeleton />}>
          <Login />
        </Suspense>
      }
    />
    <Route
      path={routes.register}
      element={
        <Suspense fallback={<PageSkeleton />}>
          <Register />
        </Suspense>
      }
    />
    <Route
      path={routes.forgotPassword}
      element={
        <Suspense fallback={<PageSkeleton />}>
          <ForgotPassword />
        </Suspense>
      }
    />
    <Route
      path={routes.resetPassword}
      element={
        <Suspense fallback={<PageSkeleton />}>
          <ResetPassword />
        </Suspense>
      }
    />

    <Route
      path="*"
      element={
        <Layout>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route
                path={routes.dashboard}
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path={routes.accounts}
                element={
                  <ProtectedRoute>
                    <Accounts />
                  </ProtectedRoute>
                }
              />
              <Route
                path={routes.transactions}
                element={
                  <ProtectedRoute>
                    <Transactions />
                  </ProtectedRoute>
                }
              />
              <Route
                path={routes.strategies}
                element={
                  <ProtectedRoute>
                    <Strategies />
                  </ProtectedRoute>
                }
              />
              <Route
                path={routes.profile}
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path={routes.settings} element={<Settings />} />
              <Route
                path={routes.styleguide}
                element={
                  <ProtectedRoute>
                    <Styleguide />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </Layout>
      }
    />
  </Routes>
);
