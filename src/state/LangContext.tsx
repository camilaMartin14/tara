import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { COPY, type Copy, type Lang } from '../i18n/copy';
import { localizeCards } from '../data/localizedCards';
import type { TarotCard } from '../data/cards';

interface LangValue {
  lang: Lang;
  toggleLang: () => void;
  t: Copy;
  cards: TarotCard[];
}

const STORAGE_KEY = 'tara-lang';
const LangContext = createContext<LangValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = () => setLang(current => (current === 'es' ? 'en' : 'es'));
  const cards = useMemo(() => localizeCards(lang), [lang]);
  const t = COPY[lang];

  const value = useMemo(() => ({ lang, toggleLang, t, cards }), [lang, cards, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LangProvider');
  return ctx;
}
