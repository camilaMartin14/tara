import type { TarotCard } from '../data/cards';
import { useLang } from '../state/LangContext';
import { useCardModal } from '../utils/cardModal';

interface Props {
  card: TarotCard;
}

export default function CardTile({ card }: Props) {
  const { t } = useLang();
  const { openCard } = useCardModal();

  return (
    <button
      onClick={() => openCard(card.id)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        width: '100%', background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'inherit',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '10px',
          padding: '6px',
          background: 'linear-gradient(160deg, var(--gold), var(--veil))',
          boxShadow: '0 12px 28px var(--shadow)',
        }}
      >
        <div style={{ aspectRatio: '2/3', borderRadius: '6px', overflow: 'hidden' }}>
          <img src={card.imageUrl} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
        </div>
      </div>

      <div style={{ textAlign: 'center', width: '100%' }}>
        <div style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: 'var(--ink)', letterSpacing: '.02em', lineHeight: 1.4 }}>
          {card.name}
        </div>
        {card.suit && (
          <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: 'var(--gold)', marginTop: '3px', letterSpacing: '.12em', textTransform: 'uppercase' }}>
            {t.suits[card.suit]}
          </div>
        )}
        {card.arcana === 'major' && (
          <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: 'var(--ink-4)', marginTop: '3px', letterSpacing: '.12em', textTransform: 'uppercase' }}>
            {t.cardDetail.majorArcanum}
          </div>
        )}
      </div>
    </button>
  );
}
