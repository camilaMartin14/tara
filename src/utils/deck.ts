import type { TarotCard } from '../data/cards';
import type { Lang } from '../i18n/copy';
import { COPY } from '../i18n/copy';

export interface DrawnCard {
  card: TarotCard;
  reversed: boolean;
}

function shuffleDeck(source: TarotCard[]): TarotCard[] {
  const deck = [...source];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function drawCards(n: number, deck: TarotCard[]): DrawnCard[] {
  const shuffled = shuffleDeck(deck);
  return shuffled.slice(0, n).map(card => ({
    card,
    reversed: Math.random() < 0.5,
  }));
}

export const SPREAD_KEYS = ['single', 'three', 'celtic'] as const;
export type SpreadKey = (typeof SPREAD_KEYS)[number];

export const SPREAD_COUNTS: Record<SpreadKey, number> = {
  single: 1,
  three: 3,
  celtic: 10,
};

export interface SpreadInfo {
  label: string;
  description: string;
  count: number;
  positions: string[];
}

export function getSpreads(lang: Lang): Record<SpreadKey, SpreadInfo> {
  const copy = COPY[lang].spreads;
  return {
    single: { ...copy.single, count: SPREAD_COUNTS.single },
    three: { ...copy.three, count: SPREAD_COUNTS.three },
    celtic: { ...copy.celtic, count: SPREAD_COUNTS.celtic },
  };
}
