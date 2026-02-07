import { routes } from '@/routes';

export const NAV_ITEMS = [
  { to: routes.home, labelKey: 'navigation.home' },
  { to: routes.dashboard, labelKey: 'navigation.dashboard' },
  { to: routes.accounts, labelKey: 'navigation.accounts' },
  { to: routes.transactions, labelKey: 'navigation.transactions' },
  { to: routes.strategies, labelKey: 'navigation.strategies' },
  { to: routes.styleguide, labelKey: 'navigation.styleguide' },
] as const;
