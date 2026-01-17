/**
 * Shared breadcrumb for auth pages (Login, Register, ForgotPassword, ResetPassword).
 * Renders: Home → [Login]? → currentPage
 */
import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { routes } from '@/routes';
import styles from '@/styles/modules/auth.module.css';

interface AuthBreadcrumbProps {
  currentPage: string;
  /** When true, adds Home → Login → currentPage; otherwise Home → currentPage */
  showLoginLink?: boolean;
}

export function AuthBreadcrumb({
  currentPage,
  showLoginLink = false,
}: AuthBreadcrumbProps) {
  return (
    <div className={styles.breadcrumbContainer}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={routes.home}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {showLoginLink && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={routes.login}>Login</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
