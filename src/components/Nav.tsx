import { useEffect, useState } from 'react';
import { useLang } from '../state/LangContext';

const SECTION_IDS = ['top', 'biblioteca', 'viaje', 'tirada', 'faq'] as const;
type SectionId = (typeof SECTION_IDS)[number];

function navLinkStyle(isActive: boolean): React.CSSProperties {
  return {
    fontFamily: 'Jost, sans-serif',
    fontSize: '12px',
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '11px 16px',
    borderRadius: '999px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    border: `1px solid ${isActive ? 'var(--line-2)' : 'transparent'}`,
    background: isActive ? 'var(--veil)' : 'transparent',
    color: isActive ? 'var(--ink)' : 'var(--ink-3)',
  };
}

export default function Nav() {
  const { lang, toggleLang, t } = useLang();
  const [active, setActive] = useState<SectionId>('top');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(14px)',
        background: 'var(--header)',
        borderBottom: '1px solid var(--line-2)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '18px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px 22px',
          position: 'relative',
        }}
      >
        <a href="#top" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: '1px solid var(--gold)',
              position: 'relative',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, var(--gold-2), var(--gold-3))',
                boxShadow: '0 0 14px var(--line-2)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-5px',
                borderRadius: '50%',
                border: '1px dashed var(--line)',
                animation: 'tara-spin 22s linear infinite',
              }}
            />
          </div>
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: '20px', letterSpacing: '.34em', color: 'var(--ink)' }}>
            TARA
          </span>
        </a>

        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          className="tara-nav-toggle"
          style={{
            marginLeft: 'auto',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            border: '1px solid var(--line-2)',
            background: 'var(--veil)',
            color: 'var(--ink)',
            fontSize: '15px',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`tara-nav-panel${menuOpen ? ' tara-nav-panel-open' : ''}`}>
          <nav className="tara-nav-links">
            <a href="#top" onClick={closeMenu} style={navLinkStyle(active === 'top')}>
              {t.nav.home}
            </a>
            <a href="#biblioteca" onClick={closeMenu} style={navLinkStyle(active === 'biblioteca')}>
              {t.nav.library}
            </a>
            <a href="#viaje" onClick={closeMenu} style={navLinkStyle(active === 'viaje')}>
              {t.nav.journey}
            </a>
            <a href="#tirada" onClick={closeMenu} style={navLinkStyle(active === 'tirada')}>
              {t.nav.reading}
            </a>
            <a href="#faq" onClick={closeMenu} style={navLinkStyle(active === 'faq')}>
              {t.nav.faq}
            </a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '10px', borderLeft: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', border: '1px solid var(--line-2)', borderRadius: '999px', overflow: 'hidden', background: 'var(--veil)' }}>
              <button
                onClick={() => lang !== 'es' && toggleLang()}
                title={t.nav.langHint}
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '.14em',
                  padding: '10px 13px',
                  border: 0,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  background: lang === 'es' ? 'var(--gold)' : 'transparent',
                  color: lang === 'es' ? 'var(--on-gold)' : 'var(--ink-3)',
                }}
              >
                ES
              </button>
              <button
                onClick={() => lang !== 'en' && toggleLang()}
                title={t.nav.langHint}
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '.14em',
                  padding: '10px 13px',
                  border: 0,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  background: lang === 'en' ? 'var(--gold)' : 'transparent',
                  color: lang === 'en' ? 'var(--on-gold)' : 'var(--ink-3)',
                }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
