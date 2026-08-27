import { useEffect, useState } from 'react';
import CardTile from './CardTile';
import { useLang } from '../state/LangContext';

export type Filter = 'all' | 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';
type Suit = 'wands' | 'cups' | 'swords' | 'pentacles';

export const FILTER_KEYS: Filter[] = ['all', 'major', 'wands', 'cups', 'swords', 'pentacles'];
const SUIT_KEYS: Suit[] = ['wands', 'cups', 'swords', 'pentacles'];
const GRID_COLUMNS = 7;
const GRID_ROWS = 3;
const PAGE_SIZE = GRID_COLUMNS * GRID_ROWS;

const SUIT_COLORS: Record<Suit, { accent: string; glow: string }> = {
  wands: { accent: '#E0663D', glow: 'rgba(224,102,61,.18)' },
  cups: { accent: '#4FA3C4', glow: 'rgba(79,163,196,.18)' },
  swords: { accent: '#D6C860', glow: 'rgba(214,200,96,.18)' },
  pentacles: { accent: '#6FA05C', glow: 'rgba(111,160,92,.18)' },
};

interface Props {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export default function LibrarySection({ filter, onFilterChange }: Props) {
  const { t, cards } = useLang();
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = cards.filter(card => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'major' && card.arcana === 'major') ||
      card.suit === filter;

    const matchesSearch =
      !search ||
      card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.uprightMeaning.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filter, search]);

  const visibleCards = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section id="biblioteca" className="tara-section" style={{ maxWidth: '1240px', margin: '0 auto', padding: '90px 32px 110px' }}>
      <div style={{ marginBottom: '44px' }}>
        <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
          {t.library.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(38px,4.6vw,56px)', margin: '0 0 16px', color: 'var(--ink)', textShadow: '0 0 50px var(--veil)' }}>
          {t.library.title}
        </h2>
        <p style={{ fontSize: '20px', lineHeight: 1.6, fontWeight: 300, color: 'var(--ink-2)', margin: 0, maxWidth: '60ch' }}>
          {t.library.subtitle}
        </p>
      </div>

      <div style={{ marginBottom: '52px' }}>
        <h3 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '22px', margin: '0 0 8px', color: 'var(--ink)' }}>
          {t.library.fundamentals.title}
        </h3>
        <p style={{ fontSize: '16px', lineHeight: 1.6, fontWeight: 300, color: 'var(--ink-3)', margin: '0 0 24px', maxWidth: '68ch' }}>
          {t.library.fundamentals.subtitle}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '18px' }}>
          {SUIT_KEYS.map(suit => {
            const item = t.library.fundamentals.items[suit];
            return (
              <button
                key={suit}
                onClick={() => onFilterChange(suit)}
                className="tara-suit-card"
                style={{
                  textAlign: 'left', cursor: 'pointer', borderRadius: '6px', padding: '19px 22px 22px',
                  '--suit-accent': SUIT_COLORS[suit].accent,
                  '--suit-glow': SUIT_COLORS[suit].glow,
                  border: `1px solid ${filter === suit ? 'var(--suit-accent)' : 'var(--line)'}`,
                  borderTop: '3px solid var(--suit-accent)',
                  background: filter === suit ? 'linear-gradient(160deg, var(--suit-glow), var(--panel))' : 'var(--panel)',
                } as React.CSSProperties}
              >
                <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--suit-accent)', marginBottom: '8px' }}>
                  {item.element}
                </div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', color: 'var(--ink)', marginBottom: '12px' }}>
                  {t.library.filters[suit]}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink-3)', lineHeight: 1.6 }}>
                  {item.keywords.join(' · ')}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '30px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder={t.library.searchPlaceholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            background: 'var(--veil)',
            border: '1px solid var(--line)',
            borderRadius: '999px',
            color: 'var(--ink)',
            padding: '12px 20px',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '17px',
            outline: 'none',
            flex: 1,
            minWidth: '220px',
          }}
        />
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {FILTER_KEYS.map(key => (
            <button
              key={key}
              onClick={() => onFilterChange(key)}
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '11px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                border: `1px solid ${filter === key ? 'var(--line-2)' : 'var(--line)'}`,
                borderRadius: '999px',
                color: filter === key ? 'var(--ink)' : 'var(--ink-3)',
                background: filter === key ? 'var(--veil)' : 'transparent',
                padding: '9px 16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {t.library.filters[key]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.14em', color: 'var(--ink-3)', marginBottom: '26px' }}>
        {t.library.count(filtered.length)}
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0', fontSize: '19px', fontWeight: 300, fontStyle: 'italic', color: 'var(--ink-3)' }}>
          {t.library.empty}
        </div>
      ) : (
        <>
          <div className="tara-library-grid" style={{ display: 'grid', gap: '24px' }}>
            {visibleCards.map(card => (
              <CardTile key={card.id} card={card} />
            ))}
          </div>
          {hasMore && (
            <div style={{ textAlign: 'center', marginTop: '44px' }}>
              <button
                onClick={() => setVisibleCount(c => Math.min(c + PAGE_SIZE, filtered.length))}
                style={{
                  fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase',
                  color: 'var(--ink)', background: 'var(--veil)', border: '1px solid var(--line-2)', borderRadius: '999px',
                  padding: '15px 34px', cursor: 'pointer', whiteSpace: 'nowrap',
                }}
              >
                {t.library.showMore(filtered.length - visibleCount)}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
