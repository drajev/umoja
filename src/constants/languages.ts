/**
 * Language constants and types.
 * Defines supported languages for i18n.
 */
export const languages = ['en', 'es'] as const;

export type Language = (typeof languages)[number];

export const DEFAULT_LANGUAGE: Language = 'en';
