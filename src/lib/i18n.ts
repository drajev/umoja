/**
 * Standalone i18n for use outside React (e.g. class components like ErrorBoundary).
 * Reads language from store directly. For functional components, use useLanguage() instead.
 */
import enMessages from '@/locales/en.json';
import esMessages from '@/locales/es.json';
import { useLanguageStore } from '@/stores';

const messages = {
  en: enMessages,
  es: esMessages,
} as const;

const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
  const result = path.split('.').reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
  return typeof result === 'string' ? result : path;
};

const interpolate = (
  str: string,
  params?: Record<string, string | number>,
): string => {
  if (!params) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? ''));
};

export const t = (
  key: string,
  params?: Record<string, string | number>,
): string => {
  const language = useLanguageStore.getState().language;
  const currentMessages = messages[language] || messages.en;
  const str = getNestedValue(currentMessages as Record<string, unknown>, key);
  return interpolate(str, params);
};
