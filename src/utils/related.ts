import type { TarotCard } from '../data/cards';

export function getRelatedCards(card: TarotCard, allCards: TarotCard[], count = 3): TarotCard[] {
  const pool = card.arcana === 'major'
    ? allCards.filter(c => c.arcana === 'major' && c.id !== card.id)
    : allCards.filter(c => c.suit === card.suit && c.id !== card.id);

  if (pool.length === 0) return [];

  const start = card.number % pool.length;
  const rotated = [...pool.slice(start), ...pool.slice(0, start)];
  return rotated.slice(0, count);
}
