import esTranslations from './es.json';
import enTranslations from './en.json';

export const LANGUAGES = {
  es: 'Español',
  en: 'English'
} as const;

export type Language = keyof typeof LANGUAGES;
export const DEFAULT_LANGUAGE: Language = 'es';

const translations = {
  es: esTranslations,
  en: enTranslations
};

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to default language if key not found
        value = translations[DEFAULT_LANGUAGE];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            console.warn(`Translation key "${key}" not found for language "${lang}"`);
            return key;
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in LANGUAGES) return lang as Language;
  return DEFAULT_LANGUAGE;
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === DEFAULT_LANGUAGE) {
    return path === '/es' ? '/' : path.replace('/es', '');
  }
  return path.startsWith(`/${lang}`) ? path : `/${lang}${path}`;
}

export function getAlternateLanguageLink(url: URL, targetLang: Language): string {
  const currentLang = getLangFromUrl(url);
  const path = url.pathname.replace(`/${currentLang}`, '') || '/';
  return getLocalizedPath(path, targetLang);
} 