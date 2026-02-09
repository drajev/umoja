import { useCallback } from 'react';
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

export const useLanguage = () => {
  const language = useLanguageStore.use.language();
  const { setLanguage } = useLanguageStore.use.actions();

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const currentMessages = messages[language] || messages.en;
      const str = getNestedValue(currentMessages, key);
      return interpolate(str, params);
    },
    [language],
  );

  return { language, setLanguage, t };
};
