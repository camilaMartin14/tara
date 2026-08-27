import { useMemo } from 'react';
import type { TarotCard } from '../data/cards';
import type { DrawnCard } from './deck';

const STORAGE_KEY = 'tara-card-of-day';

interface StoredDraw {
  date: string;
  cardId: string;
  reversed: boolean;
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function getTodayDraw(cards: TarotCard[]): DrawnCard {
  const key = todayKey();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw) as StoredDraw;
      if (stored.date === key) {
        const card = cards.find(c => c.id === stored.cardId);
        if (card) return { card, reversed: stored.reversed };
      }
    }
  } catch {
    // ignore malformed/unavailable storage
  }

  const card = cards[Math.floor(Math.random() * cards.length)];
  const reversed = Math.random() < 0.5;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: key, cardId: card.id, reversed }));
  } catch {
    // ignore unavailable storage
  }
  return { card, reversed };
}

export function useCardOfDay(cards: TarotCard[]): DrawnCard {
  return useMemo(() => getTodayDraw(cards), [cards]);
}
