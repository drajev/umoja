/**
 * Header component with responsive desktop and mobile views.
 * Includes navigation, user menu, and authentication controls.
 */
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";
import { useUIStore } from "@/stores/useUIStore";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useLanguage } from "@/hooks/useLanguage";
import { type Language } from "@/constants/languages";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Text } from "@/components/ui/typography";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineUser,
  HiOutlineLanguage,
} from "react-icons/hi2";
import { useIsMobile } from "@/hooks/useIsMobile";
import { routes } from "@/routes";
import { ConnectWallet } from "./ConnectWallet";

export const Header = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { theme, toggleTheme, sidebarOpen, toggleSidebar } = useUIStore();
  const { language, setLanguage } = useLanguageStore();
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
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden"
          >
            {sidebarOpen ? "←" : "☰"}
          </Button>
          <Link to={routes.home} className="flex items-center gap-2">
            <img src="/logo.svg" alt="umoja Logo" width={32} height={32} />
            <Text className="text-lg font-semibold">umoja</Text>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to={routes.home}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("navigation.home")}
            </Link>
            <Link
              to={routes.styleguide}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("navigation.styleguide")}
            </Link>
          </nav>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Authentication Section */}
          {isAuthenticated && user ? (
            <>
              {isMobile ? (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle>{t("auth.account")}</SheetTitle>
                      <SheetDescription>
                        {t("auth.manageAccountSettings")}
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>
                            {getInitials(user.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <Text className="font-medium">{user.name}</Text>
                          <Text
                            variant="small"
                            className="text-muted-foreground"
                          >
                            {user.email}
                          </Text>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          {t("auth.profile")}
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
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
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
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
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-destructive"
                    >
                      {t("auth.logout")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HiOutlineUser className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <Text className="text-sm font-medium">
                      {t("auth.guest")}
                    </Text>
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
                <div className="px-2 py-1.5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {theme === "dark" ? (
                        <HiOutlineMoon className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <HiOutlineSun className="h-4 w-4 text-muted-foreground" />
                      )}
                      <Text variant="small">{t("header.theme")}</Text>
                    </div>
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={() => toggleTheme()}
                    />
                  </div>
                </div>
                <div className="px-2 py-1.5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <HiOutlineLanguage className="h-4 w-4 text-muted-foreground" />
                      <Text variant="small">{t("header.language")}</Text>
                    </div>
                    <ToggleGroup
                      type="single"
                      value={language}
                      onValueChange={(value) => {
                        if (value) {
                          setLanguage(value as Language);
                        }
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
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Mobile Menu - Only show when not authenticated (auth menu is in profile sheet) */}
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
                <nav className="mt-6 flex flex-col space-y-4">
                  <Link
                    to={routes.home}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t("navigation.home")}
                  </Link>
                  <Link
                    to={routes.styleguide}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
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
