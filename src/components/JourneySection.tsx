import { useLang } from '../state/LangContext';
import { getJourney } from '../data/journey';
import { useCardModal } from '../utils/cardModal';

interface Props {
  onExploreLibrary: () => void;
}

export default function JourneySection({ onExploreLibrary }: Props) {
  const { t, lang, cards } = useLang();
  const { openCard } = useCardModal();
  const journey = getJourney(lang);
  const fool = cards.find(c => c.id === journey.fool.cardId);

  return (
    <section id="viaje" className="tara-section" style={{ maxWidth: '1240px', margin: '0 auto', padding: '90px 32px 110px' }}>
      <div style={{ marginBottom: '64px', maxWidth: '70ch' }}>
        <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
          {t.journey.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(38px,4.6vw,56px)', margin: '0 0 16px', color: 'var(--ink)', textShadow: '0 0 50px var(--veil)' }}>
          {t.journey.title}
        </h2>
        <p style={{ fontSize: '20px', lineHeight: 1.6, fontWeight: 300, color: 'var(--ink-2)', margin: 0 }}>
          {t.journey.subtitle}
        </p>
      </div>

      {fool && (
        <div
          className="tara-fool-grid"
          style={{
            display: 'grid', gap: '40px', alignItems: 'center',
            border: '1px solid var(--line-2)', borderRadius: '8px', padding: '36px', marginBottom: '72px', background: 'var(--premium)',
          }}
        >
          <button
            onClick={() => openCard(fool.id)}
            style={{ display: 'block', width: '100%', background: 'none', border: 0, padding: 0, cursor: 'pointer' }}
          >
            <div style={{ position: 'relative', borderRadius: '12px', padding: '8px', background: 'linear-gradient(160deg, var(--gold-2), var(--violet))', boxShadow: '0 20px 50px var(--shadow)' }}>
              <div style={{ aspectRatio: '2/3', borderRadius: '7px', overflow: 'hidden' }}>
                <img src={fool.imageUrl} alt={fool.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </button>
          <div>
            <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>
              {t.journey.foolLabel} · 0
            </div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '30px', margin: '0 0 14px', color: 'var(--ink)' }}>
              {fool.name}
            </h3>
            <p style={{ fontSize: '18px', lineHeight: 1.7, fontWeight: 300, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
              {journey.fool.blurb}
            </p>
          </div>
        </div>
      )}

      {journey.stages.map((stage, i) => (
        <div key={stage.title} style={{ marginBottom: i === journey.stages.length - 1 ? 0 : '80px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', letterSpacing: '.3em', color: 'var(--gold)' }}>
              {t.journey.stageLabel(i + 1).toUpperCase()}
            </span>
            <div style={{ flex: 1, height: '1px', minWidth: '40px', background: 'linear-gradient(90deg, var(--line-2), transparent)' }} />
            <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-4)' }}>
              {t.journey.rangeLabel(stage.fromRoman, stage.toRoman)}
            </span>
          </div>
          <h3 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '28px', margin: '0 0 14px', color: 'var(--ink)' }}>
            {stage.title}
          </h3>
          <p style={{ fontSize: '18px', lineHeight: 1.7, fontWeight: 300, color: 'var(--ink-2)', margin: '0 0 36px', maxWidth: '68ch' }}>
            {stage.intro}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: '22px' }}>
            {stage.cards.map(entry => {
              const card = cards.find(c => c.id === entry.cardId);
              if (!card) return null;
              return (
                <button
                  key={entry.cardId}
                  onClick={() => openCard(entry.cardId)}
                  className="tara-journey-card"
                  style={{ display: 'flex', gap: '16px', padding: '18px', border: '1px solid var(--line)', borderRadius: '6px', background: 'var(--panel)', textAlign: 'left', width: '100%', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
                >
                  <div style={{ width: '64px', flex: 'none', borderRadius: '6px', padding: '4px', background: 'linear-gradient(160deg, var(--gold), var(--veil))' }}>
                    <div style={{ aspectRatio: '2/3', borderRadius: '4px', overflow: 'hidden' }}>
                      <img src={card.imageUrl} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', letterSpacing: '.2em', color: 'var(--gold)', marginBottom: '4px' }}>
                      {card.number}
                    </div>
                    <div style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: 'var(--ink)', marginBottom: '8px' }}>
                      {card.name}
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.55, fontWeight: 300, fontStyle: 'italic', color: 'var(--ink-3)', margin: 0 }}>
                      {entry.blurb}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <a
          href="#biblioteca"
          onClick={onExploreLibrary}
          className="tara-see-all"
          style={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)' }}
        >
          {t.journey.libraryCta}
        </a>
      </div>
    </section>
  );
}
