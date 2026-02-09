import {
  HiOutlineArrowLeft,
  HiOutlineBars3,
  HiOutlineLanguage,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUser,
} from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

import LogoIcon from '@/assets/logo.svg?react';
import { ConnectWallet } from '@/components/features/wallet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Text } from '@/components/ui/typography';
import type { Language } from '@/constants/languages';
import { NAV_ITEMS } from '@/constants/navigation';
import { useIsMobile, useLanguage } from '@/hooks';
import { useLogoutHandler } from '@/queries/auth/auth';
import { routes } from '@/routes';
import { useAuthStore, useLanguageStore, useUIStore } from '@/stores';
import styles from '@/styles/modules/header.module.css';

export const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const user = useAuthStore.use.user();
  const isAuthenticated = useAuthStore.use.isAuthenticated();
  const { handleLogout } = useLogoutHandler();
  const theme = useUIStore.use.theme();
  const sidebarOpen = useUIStore.use.sidebarOpen();
  const { toggleTheme, toggleSidebar } = useUIStore.use.actions();
  const language = useLanguageStore.use.language();
  const setLanguage = (lang: Language) =>
    useLanguageStore.getState().actions.setLanguage(lang); // getState() avoids rehydration timing
  const { t } = useLanguage();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSection}>
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              aria-label={t('header.toggleSidebar')}
            >
              {sidebarOpen ? (
                <HiOutlineArrowLeft className="h-5 w-5" />
              ) : (
                <HiOutlineBars3 className="h-5 w-5" />
              )}
            </Button>
          )}
          <Link to={routes.home} className={styles.logo}>
            <LogoIcon width="32" height="32" className="text-foreground" />
            <Text className={styles.logoText}>umoja</Text>
          </Link>
        </div>

        {!isMobile && (
          <nav className={styles.desktopNav}>
            {NAV_ITEMS.map(({ to, labelKey }) => (
              <Link
                key={to}
                to={to}
                className={`${styles.navLink} ${location.pathname === to ? 'font-medium text-primary' : ''}`}
              >
                {t(labelKey)}
              </Link>
            ))}
          </nav>
        )}

        <div className={styles.rightSection}>
          {isAuthenticated && user ? (
            isMobile ? (
              <MobileUserMenu
                user={user}
                getInitials={getInitials}
                handleLogout={handleLogout}
                t={t}
              />
            ) : (
              <DesktopUserMenu
                user={user}
                getInitials={getInitials}
                handleLogout={handleLogout}
                t={t}
              />
            )
          ) : (
            <GuestMenu
              theme={theme}
              toggleTheme={toggleTheme}
              language={language}
              setLanguage={setLanguage}
              t={t}
            />
          )}
        </div>
      </div>
    </header>
  );
};

// ============================================================================
// Sub-components (extracted for cleaner code)
// ============================================================================

interface UserMenuProps {
  user: { name: string; email: string; avatar?: string };
  getInitials: (name: string) => string;
  handleLogout: () => void;
  t: (key: string) => string;
}

const MobileUserMenu = ({
  user,
  getInitials,
  handleLogout,
  t,
}: UserMenuProps) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        aria-label={t('auth.account')}
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
      </Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>{t('auth.account')}</SheetTitle>
        <SheetDescription>{t('auth.manageAccountSettings')}</SheetDescription>
      </SheetHeader>
      <div className={styles.sheetActions}>
        <div className={styles.userInfo}>
          <Avatar className={styles.userAvatar}>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div>
            <Text className={styles.userName}>{user.name}</Text>
            <Text variant="small" className={styles.userEmail}>
              {user.email}
            </Text>
          </div>
        </div>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to={routes.profile}>{t('auth.profile')}</Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to={routes.settings}>{t('auth.settings')}</Link>
          </Button>
          <Button
            variant="destructive"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            {t('auth.logout')}
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

const DesktopUserMenu = ({
  user,
  getInitials,
  handleLogout,
  t,
}: UserMenuProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        aria-label={t('auth.account')}
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className={styles.userDetails}>
          <Text className="font-medium text-sm">{user.name}</Text>
          <Text variant="small" className="text-muted-foreground">
            {user.email}
          </Text>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link to={routes.profile}>{t('auth.profile')}</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to={routes.settings}>{t('auth.settings')}</Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLogout} className="text-destructive">
        {t('auth.logout')}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

interface GuestMenuProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const GuestMenu = ({
  theme,
  toggleTheme,
  language,
  setLanguage,
  t,
}: GuestMenuProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" aria-label={t('auth.guest')}>
        <HiOutlineUser className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className={styles.userDetails}>
          <Text className="font-medium text-sm">{t('auth.guest')}</Text>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <div className="flex flex-col space-y-5 px-2 py-1.5">
        <ConnectWallet />
      </div>
      <DropdownMenuSeparator />
      <div className="flex flex-col gap-2 px-2 py-1.5">
        <DropdownMenuItem asChild>
          <Button variant="ghost" asChild>
            <Link to={routes.login}>{t('auth.login')}</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant="default" asChild>
            <Link to={routes.register}>{t('auth.signUp')}</Link>
          </Button>
        </DropdownMenuItem>
      </div>
      <DropdownMenuSeparator />
      <div className={styles.settingsRow}>
        <div className={styles.settingsLabel}>
          {theme === 'dark' ? (
            <HiOutlineMoon className={styles.settingsIcon} />
          ) : (
            <HiOutlineSun className={styles.settingsIcon} />
          )}
          <Text variant="small">{t('header.theme')}</Text>
        </div>
        <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
      </div>
      <div className={styles.settingsRow}>
        <div className={styles.settingsLabel}>
          <HiOutlineLanguage className={styles.settingsIcon} />
          <Text variant="small">{t('header.language')}</Text>
        </div>
        <ToggleGroup
          type="single"
          value={language}
          onValueChange={value => {
            if (value) setLanguage(value as Language);
          }}
          className="h-7"
        >
          <ToggleGroupItem
            value="en"
            aria-label={t('settings.english')}
            size="sm"
            className="h-7 px-2"
          >
            EN
          </ToggleGroupItem>
          <ToggleGroupItem
            value="es"
            aria-label={t('settings.spanish')}
            size="sm"
            className="h-7 px-2"
          >
            ES
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);
