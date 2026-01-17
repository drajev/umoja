/**
 * Header component with responsive desktop and mobile views.
 * Includes navigation, user menu, and authentication controls.
 */
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineLanguage,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";

import LogoIcon from "@/assets/logo.svg?react";
import { ConnectWallet } from "@/components/ConnectWallet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Text } from "@/components/ui/typography";
import { type Language } from "@/constants/languages";
import { useIsMobile, useLanguage } from "@/hooks";
import { routes } from "@/routes";
import { useAuthStore, useLanguageStore, useUIStore } from "@/stores";
import styles from "@/styles/modules/header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Auth store
  const user = useAuthStore.use.user();
  const isAuthenticated = useAuthStore.use.isAuthenticated();
  const { logout } = useAuthStore.use.actions();

  // UI store
  const theme = useUIStore.use.theme();
  const sidebarOpen = useUIStore.use.sidebarOpen();
  const { toggleTheme, toggleSidebar } = useUIStore.use.actions();

  // Language store
  const language = useLanguageStore.use.language();
  const { setLanguage } = useLanguageStore.use.actions();

  const { t } = useLanguage();

  const handleLogout = () => {
    logout();
    navigate(routes.home);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={styles.mobileMenuButton}
          >
            {sidebarOpen ? "←" : "☰"}
          </Button>
          <Link to={routes.home} className={styles.logo}>
            <LogoIcon width="32" height="32" className="text-foreground" />
            <Text className={styles.logoText}>umoja</Text>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className={styles.desktopNav}>
            <Link to={routes.home} className={styles.navLink}>
              {t("navigation.home")}
            </Link>
            <Link to={routes.styleguide} className={styles.navLink}>
              {t("navigation.styleguide")}
            </Link>
          </nav>
        )}

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Authentication Section */}
          {isAuthenticated && user ? (
            <>
              {isMobile ? (
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
              )}
            </>
          ) : (
            <GuestMenu
              theme={theme}
              toggleTheme={toggleTheme}
              language={language}
              setLanguage={setLanguage}
              t={t}
            />
          )}

          {/* Mobile Menu - Only show when not authenticated */}
          {isMobile && !isAuthenticated && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  ☰
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>{t("navigation.menu")}</SheetTitle>
                  <SheetDescription>
                    {t("navigation.navigationMenu")}
                  </SheetDescription>
                </SheetHeader>
                <nav className={styles.sheetNav}>
                  <Link to={routes.home} className={styles.navLink}>
                    {t("navigation.home")}
                  </Link>
                  <Link to={routes.styleguide} className={styles.navLink}>
                    {t("navigation.styleguide")}
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
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
      <Button variant="ghost" size="icon" className="relative">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
      </Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>{t("auth.account")}</SheetTitle>
        <SheetDescription>{t("auth.manageAccountSettings")}</SheetDescription>
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
          <Button variant="outline" className="w-full justify-start">
            {t("auth.profile")}
          </Button>
          <Button variant="outline" className="w-full justify-start">
            {t("auth.settings")}
          </Button>
          <Button
            variant="destructive"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            {t("auth.logout")}
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
      <Button variant="ghost" size="icon" className="relative">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className={styles.userDetails}>
          <Text className="text-sm font-medium">{user.name}</Text>
          <Text variant="small" className="text-muted-foreground">
            {user.email}
          </Text>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link to={routes.home}>{t("auth.profile")}</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to={routes.styleguide}>{t("auth.settings")}</Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLogout} className="text-destructive">
        {t("auth.logout")}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

interface GuestMenuProps {
  theme: "light" | "dark";
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
      <Button variant="ghost" size="icon">
        <HiOutlineUser className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className={styles.userDetails}>
          <Text className="text-sm font-medium">{t("auth.guest")}</Text>
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
            <Link to={routes.login}>{t("auth.login")}</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant="default" asChild>
            <Link to={routes.register}>{t("auth.signUp")}</Link>
          </Button>
        </DropdownMenuItem>
      </div>
      <DropdownMenuSeparator />
      {/* Theme Toggle */}
      <div className={styles.settingsRow}>
        <div className={styles.settingsLabel}>
          {theme === "dark" ? (
            <HiOutlineMoon className={styles.settingsIcon} />
          ) : (
            <HiOutlineSun className={styles.settingsIcon} />
          )}
          <Text variant="small">{t("header.theme")}</Text>
        </div>
        <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      </div>
      {/* Language Toggle */}
      <div className={styles.settingsRow}>
        <div className={styles.settingsLabel}>
          <HiOutlineLanguage className={styles.settingsIcon} />
          <Text variant="small">{t("header.language")}</Text>
        </div>
        <ToggleGroup
          type="single"
          value={language}
          onValueChange={(value) => {
            if (value) setLanguage(value as Language);
          }}
          className="h-7"
        >
          <ToggleGroupItem
            value="en"
            aria-label="English"
            size="sm"
            className="h-7 px-2"
          >
            EN
          </ToggleGroupItem>
          <ToggleGroupItem
            value="es"
            aria-label="Spanish"
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
