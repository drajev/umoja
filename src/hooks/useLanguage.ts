/**
 * Hook for accessing language/i18n functionality.
 * Provides access to current language and translation function.
 *
 * Usage:
 *   const { language, setLanguage, t } = useLanguage();
 *   <div>{t('common.welcome')}</div>
 *
 * To customize:
 * - Add more languages
 * - Add translation function
 * - Add language detection
 */
import { useLanguageStore } from '@/stores/useLanguageStore';
import enMessages from '@/locales/en.json';
import esMessages from '@/locales/es.json';

const messages = {
  en: enMessages,
  es: esMessages,
} as const;

/**
 * Get nested value from object by dot-notation path
 */
const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
  const result = path.split('.').reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
  return typeof result === 'string' ? result : path;
};

export const useLanguage = () => {
  const { language, setLanguage } = useLanguageStore();

  const t = (key: string): string => {
    const currentMessages = messages[language] || messages.en;
    return getNestedValue(currentMessages, key);
  };

  return {
    language,
    setLanguage,
    t,
  };
};
