import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { en } from './en';
import { zhCN } from './zh-CN';
import { zhTW } from './zh-TW';
import { ja } from './ja';
import { de } from './de';
import { es } from './es';
import { fi } from './fi';
import { fr } from './fr';
import { it } from './it';
import { ko } from './ko';
import { nl } from './nl';
import { pt } from './pt';
import { ru } from './ru';
import { sv } from './sv';

export type Locale = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'de' | 'es' | 'fi' | 'fr' | 'it' | 'ko' | 'nl' | 'pt' | 'ru' | 'sv';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  ja: '日本語',
  de: 'Deutsch',
  es: 'Español',
  fi: 'Suomi',
  fr: 'Français',
  it: 'Italiano',
  ko: '한국어',
  nl: 'Nederlands',
  pt: 'Português',
  ru: 'Русский',
  sv: 'Svenska',
};

export type Translations = typeof en;

const translations: Record<Locale, Translations> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja,
  de,
  es,
  fi,
  fr,
  it,
  ko,
  nl,
  pt,
  ru,
  sv,
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: en,
});

export const useI18n = () => useContext(I18nContext);

const STORAGE_KEY = 'claweasy_locale';

function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && stored in translations) return stored as Locale;

  const lang = navigator.language;
  if (lang.startsWith('zh')) {
    return lang.includes('TW') || lang.includes('HK') || lang.includes('Hant') ? 'zh-TW' : 'zh-CN';
  }
  if (lang.startsWith('ja')) return 'ja';
  if (lang.startsWith('de')) return 'de';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('fi')) return 'fi';
  if (lang.startsWith('fr')) return 'fr';
  if (lang.startsWith('it')) return 'it';
  if (lang.startsWith('ko')) return 'ko';
  if (lang.startsWith('nl')) return 'nl';
  if (lang.startsWith('pt')) return 'pt';
  if (lang.startsWith('ru')) return 'ru';
  if (lang.startsWith('sv')) return 'sv';
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}
