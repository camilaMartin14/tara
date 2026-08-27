import { useState } from 'react';
import { useLang } from '../state/LangContext';
import { useCardOfDay } from '../utils/cardOfDay';
import { useCardModal } from '../utils/cardModal';
import CardFlip from './CardFlip';

export default function CardOfDay() {
  const { t, cards } = useLang();
  const drawnCard = useCardOfDay(cards);
  const { openCard } = useCardModal();
  const [revealed, setRevealed] = useState(false);

  return (
    <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px 90px' }}>
      <div
        className="tara-cardofday-grid"
        style={{
          display: 'grid', gap: '48px', alignItems: 'center',
          border: '1px solid var(--line-2)', borderRadius: '8px', padding: 'clamp(28px,6vw,48px) clamp(20px,6vw,52px)', background: 'var(--panel)',
        }}
      >
        <div>
          <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
            {t.home.cardOfDay.eyebrow}
          </div>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(28px,3vw,38px)', margin: '0 0 16px', color: 'var(--ink)' }}>
            {t.home.cardOfDay.title}
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.65, fontWeight: 300, color: 'var(--ink-2)', margin: 0, maxWidth: '52ch' }}>
            {t.home.cardOfDay.subtitle}
          </p>
          {revealed && (
            <div style={{ marginTop: '26px' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '19px', color: 'var(--ink-2)', margin: '0 0 18px' }}>
                {t.home.cardOfDay.afterReveal}
              </p>
              <button
                onClick={() => openCard(drawnCard.card.id, drawnCard.reversed ? 'rev' : 'up')}
                className="tara-see-all"
                style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)' }}
              >
                {t.home.cardOfDay.cta}
                <span className="tara-see-all-arrow">→</span>
              </button>
            </div>
          )}
        </div>

        <div style={{ justifySelf: 'center' }}>
          <CardFlip drawnCard={drawnCard} position="" onReveal={() => setRevealed(true)} />
        </div>
      </div>
    </section>
  );
}
