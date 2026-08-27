import { useLang } from '../state/LangContext';
import { getJourney } from '../data/journey';
import { useJourneyStory } from '../utils/journeyStory';
import { stageStartSlideIndex } from '../utils/journeySlides';

export default function JourneySection() {
  const { t, lang } = useLang();
  const { openStory } = useJourneyStory();
  const journey = getJourney(lang);

  return (
    <section id="viaje" className="tara-section" style={{ maxWidth: '1240px', margin: '0 auto', padding: '90px 32px 110px' }}>
      <div style={{ marginBottom: '44px', maxWidth: '70ch' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '20px', marginBottom: '40px' }}>
        {journey.stages.map((stage, i) => (
          <button
            key={stage.title}
            onClick={() => openStory(stageStartSlideIndex(journey, i))}
            className="tara-plano-card"
            style={{ border: '1px solid var(--line)', borderRadius: '6px', background: 'var(--panel)', padding: '24px' }}
          >
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', letterSpacing: '.3em', color: 'var(--gold)', marginBottom: '14px' }}>
              {t.journey.stageLabel(i + 1).toUpperCase()}
            </div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '20px', margin: '0 0 10px', color: 'var(--ink)' }}>
              {stage.title}
            </h3>
            <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-4)' }}>
              {t.journey.rangeLabel(stage.fromRoman, stage.toRoman)}
            </div>
          </button>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => openStory(0)}
          style={{
            fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '.16em', textTransform: 'uppercase',
            color: 'var(--on-gold)', background: 'linear-gradient(100deg, var(--gold-2), var(--gold) 50%, var(--gold-3))',
            border: 0, borderRadius: '999px', padding: '16px 34px', cursor: 'pointer', whiteSpace: 'nowrap',
          }}
        >
          {t.journey.startCta}
        </button>
      </div>
    </section>
  );
}
