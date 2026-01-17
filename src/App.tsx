/**
 * Main App component with routing setup.
 * Uses React Router for navigation between pages.
 *
 * To customize:
 * - Add new routes in the Routes component
 * - Add navigation components (header, sidebar, etc.)
 * - Add global providers (theme, query client, etc.)
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ForgotPassword } from '@/pages/auth/ForgotPassword';
import { Login } from '@/pages/auth/Login';
import { Register } from '@/pages/auth/Register';
import { ResetPassword } from '@/pages/auth/ResetPassword';
import { Home } from '@/pages/Home';
import { Styleguide } from '@/pages/Styleguide';
import { routes } from '@/routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without layout */}
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.resetPassword} element={<ResetPassword />} />

        {/* Protected routes with layout */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.styleguide} element={<Styleguide />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
