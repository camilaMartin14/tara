import { cards as cardsBase } from './cards';
import type { TarotCard } from './cards';
import enMeanings from './cards.en.json';
import type { Lang } from '../i18n/copy';

interface EnMeaning {
  id: string;
  uprightMeaning: TarotCard['uprightMeaning'];
  reversedMeaning: TarotCard['reversedMeaning'];
}

const MAJOR_NAMES_ES: Record<string, string> = {
  'major-0': 'El Loco',
  'major-1': 'El Mago',
  'major-2': 'La Suma Sacerdotisa',
  'major-3': 'La Emperatriz',
  'major-4': 'El Emperador',
  'major-5': 'El Hierofante',
  'major-6': 'Los Amantes',
  'major-7': 'El Carro',
  'major-8': 'La Fuerza',
  'major-9': 'El Ermitaño',
  'major-10': 'La Rueda de la Fortuna',
  'major-11': 'La Justicia',
  'major-12': 'El Colgado',
  'major-13': 'La Muerte',
  'major-14': 'La Templanza',
  'major-15': 'El Diablo',
  'major-16': 'La Torre',
  'major-17': 'La Estrella',
  'major-18': 'La Luna',
  'major-19': 'El Sol',
  'major-20': 'El Juicio',
  'major-21': 'El Mundo',
};

const MINOR_NUMBER_NAMES_ES = ['As', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez', 'Sota', 'Caballo', 'Reina', 'Rey'];
const SUIT_NAMES_ES: Record<string, string> = { wands: 'Bastos', cups: 'Copas', swords: 'Espadas', pentacles: 'Oros' };

function spanishCardName(card: TarotCard): string {
  if (card.arcana === 'major') return MAJOR_NAMES_ES[card.id] ?? card.name;
  return `${MINOR_NUMBER_NAMES_ES[card.number - 1]} de ${SUIT_NAMES_ES[card.suit!]}`;
}

const enById = new Map((enMeanings as EnMeaning[]).map(m => [m.id, m]));

const cardsEs: TarotCard[] = cardsBase.map(card => ({ ...card, name: spanishCardName(card) }));

const cardsEn: TarotCard[] = cardsBase.map(card => {
  const en = enById.get(card.id);
  if (!en) return card;
  return { ...card, uprightMeaning: en.uprightMeaning, reversedMeaning: en.reversedMeaning };
});

export function localizeCards(lang: Lang): TarotCard[] {
  return lang === 'en' ? cardsEn : cardsEs;
}
