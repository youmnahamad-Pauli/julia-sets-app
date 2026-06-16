// Julia Sets — Language Context
// Provides { lang, toggleLang } to any screen via useLang() hook.
// Persists the chosen language in AsyncStorage.

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import type { Language } from './strings';

const LANG_KEY = '@julia_sets:language';

interface LangContextType {
  lang: Language;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  // Load persisted language on mount
  useEffect(() => {
    AsyncStorage.getItem(LANG_KEY).then(saved => {
      if (saved === 'ar' || saved === 'en') {
        setLang(saved);
      }
    });
  }, []);

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next: Language = prev === 'en' ? 'ar' : 'en';
      AsyncStorage.setItem(LANG_KEY, next);
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextType {
  return useContext(LangContext);
}
