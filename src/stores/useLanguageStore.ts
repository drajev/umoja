import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { DEFAULT_LANGUAGE, type Language } from '@/constants/languages';

import { createSelectors } from './createSelectors';

/**
 * Language state interface - data only
 */
interface LanguageState {
  language: Language;
}

/**
 * Language actions interface - all methods grouped together
 */
interface LanguageActions {
  setLanguage: (lang: Language) => void;
  resetStore: () => void;
}

/**
 * Complete store interface
 */
interface LanguageStore extends LanguageState {
  actions: LanguageActions;
}

/**
 * Initial state - easily resettable
 */
const initialState: LanguageState = {
  language: DEFAULT_LANGUAGE,
};

/**
 * Base store with all functionality
 */
const baseStore = create<LanguageStore>()(
  devtools(
    persist(
      set => ({
        ...initialState,

        actions: {
          setLanguage: language => set({ language }),

          resetStore: () => set(initialState),
        },
      }),
      {
        name: 'language-storage',
        partialize: state => ({ language: state.language }),
        merge: (persisted, current) => ({
          ...current,
          ...(persisted as Partial<LanguageState>),
          actions: current.actions,
        }),
      },
    ),
    { name: 'LanguageStore' },
  ),
);

/**
 * Language store with auto-generated selectors.
 *
 * @example
 * // Access state with individual selectors
 * const language = useLanguageStore.use.language();
 *
 * // Access actions
 * const { setLanguage } = useLanguageStore.use.actions();
 *
 * // Change language
 * actions.setLanguage('es');
 */
export const useLanguageStore = createSelectors(baseStore);
