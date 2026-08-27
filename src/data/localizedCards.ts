import { cards as cardsEs } from './cards';
import type { TarotCard } from './cards';
import enMeanings from './cards.en.json';
import type { Lang } from '../i18n/copy';

interface EnMeaning {
  id: string;
  uprightMeaning: TarotCard['uprightMeaning'];
  reversedMeaning: TarotCard['reversedMeaning'];
}

const enById = new Map((enMeanings as EnMeaning[]).map(m => [m.id, m]));

const cardsEn: TarotCard[] = cardsEs.map(card => {
  const en = enById.get(card.id);
  if (!en) return card;
  return { ...card, uprightMeaning: en.uprightMeaning, reversedMeaning: en.reversedMeaning };
});

export function localizeCards(lang: Lang): TarotCard[] {
  return lang === 'en' ? cardsEn : cardsEs;
}
