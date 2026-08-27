import { useSearchParams } from 'react-router-dom';

export type Orientation = 'up' | 'rev';

interface CardModalValue {
  cardId: string | null;
  orientation: Orientation;
  openCard: (id: string, orientation?: Orientation) => void;
  closeCard: () => void;
}

export function useCardModal(): CardModalValue {
  const [searchParams, setSearchParams] = useSearchParams();
  const cardId = searchParams.get('card');
  const orientation: Orientation = searchParams.get('orientation') === 'rev' ? 'rev' : 'up';

  function openCard(id: string, o: Orientation = 'up') {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('card', id);
      if (o === 'rev') next.set('orientation', 'rev');
      else next.delete('orientation');
      return next;
    });
  }

  function closeCard() {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.delete('card');
      next.delete('orientation');
      return next;
    });
  }

  return { cardId, orientation, openCard, closeCard };
}
