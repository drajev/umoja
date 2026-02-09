import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useLanguage } from '@/hooks';
import { routes } from '@/routes';
import styles from '@/styles/modules/auth.module.css';

interface AuthBreadcrumbProps {
  currentPage: string;
  showLoginLink?: boolean;
}

export const AuthBreadcrumb = ({
  currentPage,
  showLoginLink = false,
}: AuthBreadcrumbProps) => {
  const { t } = useLanguage();

  return (
    <div className={styles.breadcrumbContainer}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={routes.home}>{t('navigation.home')}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {showLoginLink && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={routes.login}>{t('auth.login')}</Link>
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
};
