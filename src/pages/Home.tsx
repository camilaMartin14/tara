import { useRef, useState } from 'react';
import { useLang } from '../state/LangContext';
import { toRoman } from '../utils/roman';
import { useCardModal } from '../utils/cardModal';
import { useJourneyStory } from '../utils/journeyStory';
import CardOfDay from '../components/CardOfDay';
import LibrarySection, { type Filter } from '../components/LibrarySection';
import JourneySection from '../components/JourneySection';
import JourneyStory from '../components/JourneyStory';
import ReadingSection from '../components/ReadingSection';
import FAQSection from '../components/FAQSection';

const HERO_CARD_IDS = ['major-18', 'major-17', 'major-9'];

const STEP_ACTIONS: { anchor: string; filter?: Filter }[] = [
  { anchor: '#biblioteca', filter: 'major' },
  { anchor: '#biblioteca', filter: 'all' },
  { anchor: '#tirada' },
];

export default function Home() {
  const { t, cards } = useLang();
  const { openCard } = useCardModal();
  const { openStory } = useJourneyStory();
  const [filter, setFilter] = useState<Filter>('all');
  const heroCards = HERO_CARD_IDS.map(id => cards.find(c => c.id === id)).filter(Boolean) as typeof cards;
  const majorArcana = cards.filter(c => c.arcana === 'major').sort((a, b) => a.number - b.number);
  const arcanaCarouselRef = useRef<HTMLDivElement>(null);

  function scrollArcanaCarousel(direction: 1 | -1) {
    const el = arcanaCarouselRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' });
  }

  return (
    <main>
      {/* Hero */}
      <section
        id="top"
        className="tara-hero-grid"
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '96px 32px 40px',
          display: 'grid',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '920px', height: '920px', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid var(--line-2)', animation: 'tara-spin 90s linear infinite' }} />
          <div style={{ position: 'absolute', inset: '90px', borderRadius: '50%', border: '1px dashed var(--line)', animation: 'tara-spin-rev 70s linear infinite' }} />
          <div style={{ position: 'absolute', inset: '190px', borderRadius: '50%', border: '1px solid var(--veil)', boxShadow: '0 0 90px var(--veil) inset', animation: 'tara-glow 6s ease-in-out infinite' }} />
        </div>

        <div style={{ position: 'relative', animation: 'tara-rise .9s ease both' }}>
          <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '26px' }}>
            {t.home.eyebrow}
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(52px,7vw,96px)', lineHeight: .94, margin: '0 0 8px', color: 'var(--ink)', textShadow: '0 0 60px var(--veil)' }}>
            {t.home.heroA}
            <br />
            <em
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                background: 'linear-gradient(100deg, var(--gold-2), var(--ink) 40%, var(--gold))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {t.home.heroEm}
            </em>{' '}
            {t.home.heroB}
          </h1>
          <p style={{ fontSize: '22px', lineHeight: 1.6, fontWeight: 300, color: 'var(--ink-2)', maxWidth: '46ch', margin: '26px 0 38px' }}>
            {t.home.heroSub}
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="#tirada"
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '13px',
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: 'var(--on-gold)',
                background: 'linear-gradient(100deg, var(--gold-2), var(--gold) 50%, var(--gold-3))',
                border: 0,
                borderRadius: '999px',
                padding: '16px 32px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: '0 10px 40px var(--veil)',
                display: 'inline-block',
              }}
            >
              {t.home.ctaSpread}
            </a>
            <a
              href="#biblioteca"
              onClick={() => setFilter('all')}
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '13px',
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                background: 'var(--veil)',
                border: '1px solid var(--line)',
                borderRadius: '999px',
                padding: '16px 32px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'inline-block',
              }}
            >
              {t.home.ctaLibrary}
            </a>
          </div>
          <div style={{ display: 'flex', gap: '34px', marginTop: '52px', fontFamily: 'Jost, sans-serif' }}>
            {t.home.stats.map(([n, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '26px', color: 'var(--gold)' }}>{n}</div>
                <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: '6px' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tara-hero-visual" style={{ position: 'relative' }}>
          {heroCards[0] && (
            <div
              style={{
                position: 'absolute', left: '6%', top: '110px', width: 'clamp(120px,30vw,196px)', aspectRatio: '196/326',
                transform: 'rotate(-10deg)', animation: 'tara-float-slow 9s ease-in-out infinite',
                borderRadius: '14px', padding: '8px',
                background: 'linear-gradient(160deg, var(--gold-2), var(--veil))', boxShadow: '0 30px 70px var(--shadow)',
              }}
            >
              <img src={heroCards[0].imageUrl} alt={heroCards[0].name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '9px' }} />
            </div>
          )}
          {heroCards[1] && (
            <div
              style={{
                position: 'absolute', left: '32%', top: '40px', width: 'clamp(145px,36vw,236px)', aspectRatio: '236/392', zIndex: 3,
                animation: 'tara-float 7s ease-in-out infinite',
                borderRadius: '16px', padding: '9px',
                background: 'linear-gradient(160deg, var(--gold-2), var(--violet))', boxShadow: '0 40px 90px var(--shadow), 0 0 90px var(--veil)',
              }}
            >
              <img src={heroCards[1].imageUrl} alt={heroCards[1].name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
          )}
          {heroCards[2] && (
            <div
              style={{
                position: 'absolute', right: '2%', top: '130px', width: 'clamp(120px,30vw,196px)', aspectRatio: '196/326',
                transform: 'rotate(11deg)', animation: 'tara-float-slow 11s ease-in-out infinite',
                borderRadius: '14px', padding: '8px',
                background: 'linear-gradient(160deg, var(--silver), var(--veil))', boxShadow: '0 30px 70px var(--shadow)',
              }}
            >
              <img src={heroCards[2].imageUrl} alt={heroCards[2].name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '9px' }} />
            </div>
          )}
        </div>
      </section>

      <CardOfDay />

      {/* Start here */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '44px' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '34px', margin: 0, color: 'var(--ink)' }}>{t.home.startHere}</h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--line-2), transparent)' }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            {t.home.threeSteps}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: '26px' }}>
          {t.home.steps.map(([n, title, body], i) => (
            <a
              key={n}
              href={STEP_ACTIONS[i].anchor}
              onClick={() => STEP_ACTIONS[i].filter && setFilter(STEP_ACTIONS[i].filter!)}
              className="tara-step-card"
              style={{ position: 'relative', padding: '34px 30px 38px', border: '1px solid var(--line)', borderRadius: '4px', background: 'var(--panel)', display: 'block' }}
            >
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', letterSpacing: '.3em', color: 'var(--gold)', marginBottom: '20px' }}>{n}</div>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '23px', margin: '0 0 14px', color: 'var(--ink)' }}>{title}</h3>
              <p style={{ fontSize: '18px', lineHeight: 1.62, fontWeight: 300, color: 'var(--ink-2)', margin: 0 }}>{body}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Major Arcana teaser */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '40px 32px 90px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '34px', margin: 0, color: 'var(--ink)' }}>{t.home.majorArcana}</h2>
          <div style={{ flex: 1, height: '1px', minWidth: '40px', background: 'linear-gradient(90deg, var(--line-2), transparent)' }} />
          <a href="#biblioteca" onClick={() => setFilter('all')} className="tara-see-all" style={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase' }}>
            {t.home.seeAll}
            <span className="tara-see-all-arrow">→</span>
          </a>
        </div>
        <div style={{ marginBottom: '36px' }}>
          <a
            href="#viaje"
            onClick={e => { e.preventDefault(); openStory(0); }}
            className="tara-see-all"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '17px', color: 'var(--ink-3)' }}
          >
            {t.home.journeyCta}
          </a>
        </div>
        <div className="tara-arcana-carousel-wrap">
          <button
            type="button"
            onClick={() => scrollArcanaCarousel(-1)}
            aria-label={t.home.carouselPrev}
            className="tara-carousel-arrow tara-carousel-arrow-prev"
          >
            ‹
          </button>
          <div className="tara-arcana-carousel" ref={arcanaCarouselRef}>
            {majorArcana.map(card => (
              <button
                key={card.id}
                onClick={() => openCard(card.id)}
                className="tara-arcana-card"
                style={{ display: 'block', textAlign: 'left', background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'inherit' }}
              >
                <div className="tara-arcana-frame" style={{ position: 'relative', borderRadius: '10px', padding: '7px', background: 'linear-gradient(160deg, var(--gold), var(--veil))', boxShadow: '0 18px 44px var(--shadow)' }}>
                  <div style={{ aspectRatio: '2/3', position: 'relative', borderRadius: '6px', overflow: 'hidden' }}>
                    <img src={card.imageUrl} alt={card.name} className="tara-arcana-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '14px' }}>
                  <span className="tara-arcana-name" style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: 'var(--ink)' }}>{card.name}</span>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.2em', color: 'var(--ink-4)' }}>{toRoman(card.number)}</span>
                </div>
                <div className="tara-arcana-key" style={{ fontSize: '16px', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink-3)', marginTop: '3px' }}>
                  {card.uprightMeaning.keywords[0]}
                </div>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollArcanaCarousel(1)}
            aria-label={t.home.carouselNext}
            className="tara-carousel-arrow tara-carousel-arrow-next"
          >
            ›
          </button>
        </div>
      </section>

      {/* Practice banner */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px 110px' }}>
        <div className="tara-banner-panel" style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--line-2)', borderRadius: '6px', padding: 'clamp(32px,6vw,66px) clamp(24px,6vw,60px)', background: 'var(--premium)' }}>
          <div className="tara-banner-ring" style={{ position: 'absolute', right: '-90px', top: '-90px', width: '360px', height: '360px', borderRadius: '50%', border: '1px dashed var(--line-2)', animation: 'tara-spin 60s linear infinite' }} />
          <div className="tara-banner-orb" style={{ position: 'absolute', right: '10px', top: '10px', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, var(--veil), transparent 70%)', animation: 'tara-glow 5s ease-in-out infinite' }} />
          <div style={{ position: 'relative', maxWidth: '56ch' }}>
            <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
              {t.home.banner.eyebrow}
            </div>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(32px,3.4vw,44px)', lineHeight: 1.1, margin: '0 0 18px', color: 'var(--ink)' }}>
              {t.home.banner.title}
            </h2>
            <p style={{ fontSize: '20px', lineHeight: 1.6, fontWeight: 300, color: 'var(--ink-2)', margin: '0 0 32px' }}>
              {t.home.banner.body}
            </p>
            <a
              href="#tirada"
              style={{
                fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '.16em', textTransform: 'uppercase',
                color: 'var(--on-gold)', background: 'linear-gradient(100deg, var(--gold-2), var(--gold) 50%, var(--gold-3))',
                border: 0, borderRadius: '999px', padding: '16px 34px', cursor: 'pointer', whiteSpace: 'nowrap', display: 'inline-block',
              }}
            >
              {t.home.banner.cta}
            </a>
          </div>
        </div>
      </section>

      <LibrarySection filter={filter} onFilterChange={setFilter} />
      <JourneySection />
      <JourneyStory onExploreLibrary={() => setFilter('major')} />
      <ReadingSection />
      <FAQSection />

      <footer
        style={{
          position: 'relative',
          borderTop: '1px solid var(--line)', padding: '32px 32px 44px', maxWidth: '1240px', margin: '0 auto',
          display: 'flex', flexDirection: 'column', gap: '24px',
          fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '.14em', color: 'var(--ink-4)',
        }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '460px', height: '460px', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid var(--line-2)', animation: 'tara-spin 90s linear infinite' }} />
          <div style={{ position: 'absolute', inset: '45px', borderRadius: '50%', border: '1px dashed var(--line)', animation: 'tara-spin-rev 70s linear infinite' }} />
          <div style={{ position: 'absolute', inset: '95px', borderRadius: '50%', border: '1px solid var(--veil)', boxShadow: '0 0 90px var(--veil) inset', animation: 'tara-glow 6s ease-in-out infinite' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontFamily: 'Cinzel, serif', letterSpacing: '.3em', color: 'var(--silver)' }}>TARA</span>
          <div style={{ display: 'flex', gap: '28px' }}>
            {t.home.footerLinks.map(([label, anchor]) => (
              <a key={label} href={anchor}>{label}</a>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '.1em', color: 'var(--ink-4)' }}>
          {t.home.credit}{' '}
          <a
            href="https://www.linkedin.com/in/camilamartindev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)' }}
          >
            Camila Martín
          </a>
        </div>
      </footer>
    </main>
  );
}
