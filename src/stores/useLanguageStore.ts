import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Language, DEFAULT_LANGUAGE } from "@/constants/languages";

/**
 * Language store using Zustand (converted from Context pattern).
 * Manages application language and i18n state.
 *
 * Usage:
 *   const { language, setLanguage } = useLanguageStore();
 *
 * To customize:
 * - Add more languages in constants/languages.ts
 * - Add language persistence if needed
 */
interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: DEFAULT_LANGUAGE,
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "language-storage",
    },
  ),
);
