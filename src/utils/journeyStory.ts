import { useSearchParams } from 'react-router-dom';

interface JourneyStoryValue {
  slideIndex: number | null;
  openStory: (index?: number) => void;
  closeStory: () => void;
  goTo: (index: number) => void;
}

export function useJourneyStory(): JourneyStoryValue {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = searchParams.get('viaje');
  const slideIndex = raw !== null ? Math.max(0, parseInt(raw, 10) || 0) : null;

  function openStory(index = 0) {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('viaje', String(index));
      return next;
    });
  }

  function closeStory() {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.delete('viaje');
      return next;
    });
  }

  return { slideIndex, openStory, closeStory, goTo: openStory };
}
