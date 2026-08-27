import { useEffect, useMemo } from 'react';
import { useLang } from '../state/LangContext';
import { getJourney } from '../data/journey';
import { buildJourneySlides } from '../utils/journeySlides';
import { useJourneyStory } from '../utils/journeyStory';
import { useCardModal } from '../utils/cardModal';
import { toRoman } from '../utils/roman';

interface Props {
  onExploreLibrary?: () => void;
}

export default function JourneyStory({ onExploreLibrary }: Props) {
  const { t, lang, cards } = useLang();
  const { slideIndex, closeStory, goTo } = useJourneyStory();
  const { openCard } = useCardModal();
  const journey = useMemo(() => getJourney(lang), [lang]);
  const slides = useMemo(() => buildJourneySlides(journey), [journey]);

  const isOpen = slideIndex !== null;
  const index = isOpen ? Math.min(Math.max(slideIndex ?? 0, 0), slides.length - 1) : 0;
  const slide = slides[index];
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeStory();
      else if (e.key === 'ArrowRight' && !isLast) goTo(index + 1);
      else if (e.key === 'ArrowLeft' && !isFirst) goTo(index - 1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index, isFirst, isLast]);

  if (!isOpen || !slide) return null;

  const cardId = slide.type === 'card' ? slide.entry.cardId : slide.type === 'fool' ? slide.cardId : null;
  const card = cardId ? cards.find(c => c.id === cardId) : undefined;

  return (
    <div
      onClick={closeStory}
      style={{
        position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(6,2,14,.86)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto',
        padding: 'clamp(20px,6vw,40px)',
      }}
    >
      <button
        onClick={e => { e.stopPropagation(); if (!isFirst) goTo(index - 1); }}
        aria-label={t.home.carouselPrev}
        className="tara-story-arrow tara-story-arrow-prev"
        style={{ opacity: isFirst ? 0 : 1, pointerEvents: isFirst ? 'none' : 'auto' }}
      >
        ‹
      </button>
      <button
        onClick={e => { e.stopPropagation(); if (!isLast) goTo(index + 1); }}
        aria-label={t.home.carouselNext}
        className="tara-story-arrow tara-story-arrow-next"
        style={{ opacity: isLast ? 0 : 1, pointerEvents: isLast ? 'none' : 'auto' }}
      >
        ›
      </button>

      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative', width: '100%', maxWidth: '760px', maxHeight: '88vh', overflowY: 'auto',
          background: 'var(--premium)', border: '1px solid var(--line-2)', borderRadius: '14px',
          padding: 'clamp(28px,5vw,52px)', boxShadow: '0 60px 140px var(--shadow), 0 0 100px var(--veil)',
        }}
      >
        <button
          onClick={closeStory}
          aria-label={t.cardDetail.close}
          style={{
            position: 'absolute', top: '18px', right: '18px', width: '38px', height: '38px', borderRadius: '50%',
            border: '1px solid var(--line-2)', background: 'var(--veil)', color: 'var(--ink)', fontSize: '15px',
            cursor: 'pointer', display: 'grid', placeItems: 'center', zIndex: 1,
          }}
        >
          ✕
        </button>

        <div style={{ display: 'flex', gap: '5px', marginBottom: '26px', paddingRight: '46px' }}>
          {slides.map((_, i) => (
            <div
              key={i}
              style={{ flex: 1, height: '3px', borderRadius: '2px', background: i <= index ? 'var(--gold)' : 'var(--line)' }}
            />
          ))}
        </div>

        <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
          {slide.type === 'fool' && `${t.journey.foolLabel} · 0`}
          {slide.type === 'stageIntro' && `${t.journey.stageLabel(slide.stageIndex + 1)} · ${t.journey.rangeLabel(slide.stage.fromRoman, slide.stage.toRoman)}`}
          {slide.type === 'card' && card && `${t.journey.stageLabel(slide.stageIndex + 1)} · ${toRoman(card.number)}`}
          <span style={{ color: 'var(--ink-4)', marginLeft: '12px', letterSpacing: '.14em' }}>{t.journey.step(index + 1, slides.length)}</span>
        </div>

        {slide.type === 'stageIntro' ? (
          <div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(26px,4vw,36px)', margin: '0 0 18px', color: 'var(--ink)' }}>
              {slide.stage.title}
            </h3>
            <p style={{ fontSize: '19px', lineHeight: 1.72, fontWeight: 300, color: 'var(--ink-2)', margin: '0 0 30px', maxWidth: '58ch' }}>
              {slide.stage.intro}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {slide.stage.cards.map((entry, i) => {
                const c = cards.find(cc => cc.id === entry.cardId);
                if (!c) return null;
                return (
                  <button
                    key={entry.cardId}
                    onClick={() => goTo(index + 1 + i)}
                    title={c.name}
                    style={{ width: '46px', flex: 'none', borderRadius: '5px', padding: '3px', background: 'linear-gradient(160deg, var(--gold), var(--veil))', border: 0, cursor: 'pointer' }}
                  >
                    <div style={{ aspectRatio: '2/3', borderRadius: '3px', overflow: 'hidden' }}>
                      <img src={c.imageUrl} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : card ? (
          <div className="tara-story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,180px) minmax(0,1fr)', gap: '32px', alignItems: 'center' }}>
            <button onClick={() => openCard(card.id)} style={{ display: 'block', width: '100%', background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
              <div style={{ position: 'relative', borderRadius: '12px', padding: '7px', background: 'linear-gradient(160deg, var(--gold-2), var(--violet))', boxShadow: '0 20px 50px var(--shadow)' }}>
                <div style={{ aspectRatio: '2/3', borderRadius: '7px', overflow: 'hidden' }}>
                  <img src={card.imageUrl} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </button>
            <div>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(26px,4vw,34px)', margin: '0 0 14px', color: 'var(--ink)' }}>
                {card.name}
              </h3>
              <p style={{ fontSize: '19px', lineHeight: 1.72, fontWeight: 300, color: 'var(--ink-2)', margin: '0 0 18px' }}>
                {slide.type === 'card' ? slide.entry.blurb : ''}
              </p>
              <button
                onClick={() => openCard(card.id)}
                style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'inherit', fontSize: '14px', letterSpacing: '.04em', color: 'var(--gold)' }}
              >
                {t.journey.viewCard}
              </button>
            </div>
          </div>
        ) : null}

        {isLast && (
          <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '28px', borderTop: '1px solid var(--line)' }}>
            <a
              href="#biblioteca"
              onClick={() => { closeStory(); onExploreLibrary?.(); }}
              className="tara-see-all"
              style={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)' }}
            >
              {t.journey.libraryCta}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
