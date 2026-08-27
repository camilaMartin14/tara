import { useEffect } from 'react';
import { useLang } from '../state/LangContext';
import { toRoman } from '../utils/roman';
import { getRelatedCards } from '../utils/related';
import { useCardModal } from '../utils/cardModal';

function tabStyle(active: boolean): React.CSSProperties {
  return {
    fontFamily: 'Jost, sans-serif',
    fontSize: '12px',
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    background: 'transparent',
    border: 0,
    borderBottom: `2px solid ${active ? 'var(--gold)' : 'transparent'}`,
    color: active ? 'var(--ink)' : 'var(--ink-4)',
    padding: '14px 24px',
    marginBottom: '-1px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  };
}

export default function CardModal() {
  const { t, cards } = useLang();
  const { cardId, orientation, openCard, closeCard } = useCardModal();
  const card = cardId ? cards.find(c => c.id === cardId) : undefined;

  useEffect(() => {
    if (!card) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [card]);

  useEffect(() => {
    if (!card) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeCard();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card]);

  if (!card) return null;

  const meaning = orientation === 'up' ? card.uprightMeaning : card.reversedMeaning;
  const related = getRelatedCards(card, cards);
  const crumb = card.arcana === 'major' ? toRoman(card.number) : t.suits[card.suit!];

  function handlePractice() {
    closeCard();
    requestAnimationFrame(() => {
      document.getElementById('tirada')?.scrollIntoView();
    });
  }

  return (
    <div
      onClick={closeCard}
      style={{
        position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(6,2,14,.8)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflowY: 'auto',
        padding: 'clamp(24px,8vw,56px) clamp(12px,4vw,20px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative', width: '100%', maxWidth: '980px', background: 'var(--premium)',
          border: '1px solid var(--line-2)', borderRadius: '12px', padding: 'clamp(24px,6vw,48px)',
          boxShadow: '0 60px 140px var(--shadow), 0 0 100px var(--veil)',
        }}
      >
        <button
          onClick={closeCard}
          aria-label={t.cardDetail.close}
          style={{
            position: 'absolute', top: 'clamp(12px,3vw,20px)', right: 'clamp(12px,3vw,20px)', width: '38px', height: '38px', borderRadius: '50%',
            border: '1px solid var(--line-2)', background: 'var(--veil)', color: 'var(--ink)', fontSize: '15px',
            cursor: 'pointer', display: 'grid', placeItems: 'center', zIndex: 1,
          }}
        >
          ✕
        </button>

        <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: '32px', paddingRight: '40px' }}>
          {t.cardDetail.crumb} · <span style={{ color: 'var(--gold)' }}>{crumb}</span>
        </div>

        <div className="tara-modal-grid" style={{ display: 'grid', gap: '48px', alignItems: 'start' }}>
          <div>
            <div
              style={{
                position: 'relative', borderRadius: '16px', padding: '10px',
                background: 'linear-gradient(160deg, var(--gold-2), var(--violet))',
                boxShadow: '0 30px 80px var(--shadow), 0 0 80px var(--veil)',
              }}
            >
              <div style={{ aspectRatio: '2/3', position: 'relative', borderRadius: '9px', overflow: 'hidden' }}>
                <img src={card.imageUrl} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <button
              onClick={handlePractice}
              style={{
                display: 'block', width: '100%', textAlign: 'center', marginTop: '18px',
                fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase',
                color: 'var(--on-gold)', background: 'linear-gradient(100deg, var(--gold-2), var(--gold))',
                border: 0, borderRadius: '999px', padding: '14px', cursor: 'pointer',
              }}
            >
              {t.cardDetail.practice}
            </button>
          </div>

          <div>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(32px,4.4vw,48px)', lineHeight: 1, margin: 0, color: 'var(--ink)', textShadow: '0 0 50px var(--veil)' }}>
              {card.name}
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '22px', fontWeight: 300, color: 'var(--gold)', margin: '14px 0 0' }}>
              {card.arcana === 'major' ? t.cardDetail.majorArcanum : `${t.cardDetail.minorArcanum} · ${t.suits[card.suit!]}`}
            </p>

            <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--line)', margin: '30px 0 28px' }}>
              <button onClick={() => openCard(card.id, 'up')} style={tabStyle(orientation === 'up')}>{t.cardDetail.tabUp}</button>
              <button onClick={() => openCard(card.id, 'rev')} style={tabStyle(orientation === 'rev')}>{t.cardDetail.tabRev}</button>
            </div>

            <div style={{ minHeight: '140px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {meaning.keywords.map(kw => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase',
                      color: 'var(--ink-2)', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 16px', background: 'var(--veil)',
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '19px', lineHeight: 1.72, fontWeight: 300, color: 'var(--ink-2)', margin: 0 }}>
                {meaning.description}
              </p>
            </div>

            <div style={{ marginTop: '44px', padding: '26px 28px 30px', borderLeft: '2px solid var(--gold)', background: 'linear-gradient(90deg, var(--veil), transparent)' }}>
              <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
                {t.cardDetail.howToRead}
              </div>
              <p style={{ fontSize: '17px', lineHeight: 1.7, fontWeight: 300, color: 'var(--ink-2)', margin: 0 }}>
                {t.cardDetail.howToReadBody}
              </p>
            </div>

            {related.length > 0 && (
              <div style={{ marginTop: '44px' }}>
                <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: '18px' }}>
                  {t.cardDetail.appearsWith}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: '14px' }}>
                  {related.map(r => (
                    <button
                      key={r.id}
                      onClick={() => openCard(r.id)}
                      className="tara-journey-card"
                      style={{
                        display: 'flex', gap: '14px', alignItems: 'center', padding: '12px',
                        border: '1px solid var(--line)', borderRadius: '4px', background: 'var(--veil)',
                        textAlign: 'left', cursor: 'pointer', font: 'inherit', color: 'inherit',
                      }}
                    >
                      <div style={{ width: '48px', height: '76px', flex: 'none', borderRadius: '5px', padding: '3px', background: 'linear-gradient(160deg, var(--gold), var(--violet))' }}>
                        <img src={r.imageUrl} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '3px' }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Cinzel, serif', fontSize: '15px', color: 'var(--ink)' }}>{r.name}</div>
                        <div style={{ fontSize: '14px', fontStyle: 'italic', fontWeight: 300, color: 'var(--ink-3)', marginTop: '2px' }}>
                          {r.uprightMeaning.keywords[0]}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
