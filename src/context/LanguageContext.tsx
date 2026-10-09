import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';
import { translations, type Lang } from '../i18n/translations';

interface LanguageContextType {
  lang: Lang;
  t: typeof translations.en;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
});

export function LanguageProvider({ children }: PropsWithChildren) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('lang');
      return stored === 'hu' ? 'hu' : 'en';
    } catch {
      
      return 'en';
    }
  });

  const setLang = (newLang: Lang) => {
    try {
      localStorage.setItem('lang', newLang);
    } catch (error) {
      void error;
    }
    setLangState(newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext);
}
